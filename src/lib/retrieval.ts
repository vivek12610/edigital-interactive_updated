import { services } from "@/lib/data/services";
import { industries } from "@/lib/data/industries";

export type RetrievedChunk = {
  title: string;
  text: string;
  url: string;
};

// Common words that carry no matching signal — stripped before scoring.
const STOPWORDS = new Set([
  "the","and","for","are","but","not","you","your","with","about","what","which","who",
  "how","can","does","do","did","have","has","this","that","these","those","from","into",
  "will","would","could","should","tell","give","need","want","like","please","hello","hi",
  "hey","services","service","offer","offering","provide","provides","help","cost","price",
  "pricing","much","many","all","some","any","get","its","it's"
]);

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .split(/\W+/)
    .filter((w) => w.length > 2 && !STOPWORDS.has(w));
}

/**
 * Lightweight, dependency-free retriever. Matches are scored on:
 *  - exact word overlap between the query and a rich keyword set per item
 *    (name, slug, eyebrow, category, sub-services, summary, tagline)
 *  - partial/stem overlap (e.g. "ranking" matches "rankings", "seo" matches "seos")
 * so everyday phrasing has a much better chance of surfacing a relevant result
 * than a strict substring match against marketing prose alone.
 *
 * To upgrade to real RAG later:
 * 1. Chunk this same content (services, industries, blog posts, case studies).
 * 2. Embed each chunk with an embeddings model and store vectors via pgvector
 *    or a dedicated vector store (Pinecone, Qdrant, Weaviate).
 * 3. Embed the incoming question, run similarity search, and pass the top-k
 *    chunks as context to an LLM call instead of the canned response in
 *    /api/chat/route.ts.
 */
export function retrieveContext(query: string, k = 3): RetrievedChunk[] {
  const queryWords = tokenize(query);

  type Indexed = { chunk: RetrievedChunk; keywords: string[] };

  const corpus: Indexed[] = [
    ...services.map((s) => {
      const keywordSource = [s.name, s.slug.replace(/-/g, " "), s.eyebrow, s.category, s.tagline, s.summary, ...s.subServices].join(" ");
      return {
        chunk: {
          title: s.name,
          text: `${s.summary} Includes: ${s.subServices.join(", ")}.`,
          url: `/services/${s.slug}`
        },
        keywords: tokenize(keywordSource)
      };
    }),
    ...industries.map((i) => {
      const keywordSource = [i.name, i.slug.replace(/-/g, " "), i.eyebrow, i.tagline, i.summary].join(" ");
      return {
        chunk: {
          title: i.name,
          text: i.summary,
          url: `/industries/${i.slug}`
        },
        keywords: tokenize(keywordSource)
      };
    })
  ];

  if (queryWords.length === 0) return [];

  const scored = corpus.map(({ chunk, keywords }) => {
    let score = 0;
    for (const qw of queryWords) {
      for (const kw of keywords) {
        if (kw === qw) {
          score += 2; // exact match
        } else if (kw.length > 3 && qw.length > 3 && (kw.includes(qw) || qw.includes(kw))) {
          score += 1; // partial/stem match (e.g. "rank" vs "ranking")
        }
      }
    }
    return { chunk, score };
  });

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, k)
    .map((s) => s.chunk);
}
