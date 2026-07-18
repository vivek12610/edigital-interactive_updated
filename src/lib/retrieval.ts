import { services } from "@/lib/data/services";
import { industries } from "@/lib/data/industries";

export type RetrievedChunk = {
  title: string;
  text: string;
  url: string;
};

/**
 * Very small keyword-overlap retriever so the chatbot works out of the box
 * with zero external dependencies. It is intentionally simple.
 *
 * To upgrade to real RAG:
 * 1. Chunk this same content (services, industries, blog posts, case studies).
 * 2. Embed each chunk with an embeddings model (e.g. OpenAI text-embedding-3-small
 *    or Voyage AI) and store vectors in Postgres via `pgvector`, or in a dedicated
 *    vector store (Pinecone, Qdrant, Weaviate) referenced by VECTOR_DB_URL.
 * 3. Embed the incoming user question, run a similarity search, and pass the
 *    top-k chunks as context to an LLM call (Anthropic/OpenAI) instead of the
 *    canned response built in /api/chat/route.ts.
 */
export function retrieveContext(query: string, k = 3): RetrievedChunk[] {
  const q = query.toLowerCase();
  const corpus: RetrievedChunk[] = [
    ...services.map((s) => ({
      title: s.name,
      text: `${s.summary} Includes: ${s.subServices.join(", ")}.`,
      url: `/services/${s.slug}`
    })),
    ...industries.map((i) => ({
      title: i.name,
      text: i.summary,
      url: `/industries/${i.slug}`
    }))
  ];

  const scored = corpus.map((chunk) => {
    const haystack = `${chunk.title} ${chunk.text}`.toLowerCase();
    const words = q.split(/\W+/).filter((w) => w.length > 2);
    const score = words.reduce((acc, w) => acc + (haystack.includes(w) ? 1 : 0), 0);
    return { chunk, score };
  });

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, k)
    .map((s) => s.chunk);
}
