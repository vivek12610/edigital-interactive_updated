import { sanityClient, isSanityConfigured } from "@/lib/sanity";

export type SanityPost = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage?: any;
  category: string;
  tags?: string[];
  author: string;
  readingTime: number;
  body: any;
  publishedAt: string;
};

export type SanityCaseStudy = {
  _id: string;
  title: string;
  slug: string;
  clientName: string;
  category: string;
  industry?: string;
  summary: string;
  coverImage?: any;
  challenge: any;
  solution: any;
  resultsBody: any;
  metricLabel1?: string;
  metricValue1?: string;
  metricLabel2?: string;
  metricValue2?: string;
  metricLabel3?: string;
  metricValue3?: string;
  publishedAt: string;
};

const POST_FIELDS = `
  _id, title, "slug": slug.current, excerpt, coverImage, category, tags,
  author, readingTime, body, publishedAt
`;

const CASE_STUDY_FIELDS = `
  _id, title, "slug": slug.current, clientName, category, industry, summary,
  coverImage, challenge, solution, resultsBody,
  metricLabel1, metricValue1, metricLabel2, metricValue2, metricLabel3, metricValue3,
  publishedAt
`;

export async function getAllPosts(category?: string): Promise<SanityPost[]> {
  if (!isSanityConfigured()) return [];
  const filter = category
    ? `*[_type == "post" && isPublished == true && category == $category] | order(publishedAt desc)`
    : `*[_type == "post" && isPublished == true] | order(publishedAt desc)`;
  try {
    return await sanityClient.fetch(`${filter}{${POST_FIELDS}}`, category ? { category } : {});
  } catch (err) {
    console.error("Sanity: failed to fetch posts", err);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<SanityPost | null> {
  if (!isSanityConfigured()) return null;
  try {
    return await sanityClient.fetch(
      `*[_type == "post" && slug.current == $slug][0]{${POST_FIELDS}}`,
      { slug }
    );
  } catch (err) {
    console.error("Sanity: failed to fetch post", err);
    return null;
  }
}

export async function getAllCategories(): Promise<string[]> {
  if (!isSanityConfigured()) return [];
  try {
    const cats: string[] = await sanityClient.fetch(
      `array::unique(*[_type == "post" && isPublished == true].category)`
    );
    return cats.filter(Boolean);
  } catch (err) {
    console.error("Sanity: failed to fetch categories", err);
    return [];
  }
}

export async function getAllCaseStudies(category?: string): Promise<SanityCaseStudy[]> {
  if (!isSanityConfigured()) return [];
  const filter = category
    ? `*[_type == "caseStudy" && isPublished == true && category == $category] | order(publishedAt desc)`
    : `*[_type == "caseStudy" && isPublished == true] | order(publishedAt desc)`;
  try {
    return await sanityClient.fetch(`${filter}{${CASE_STUDY_FIELDS}}`, category ? { category } : {});
  } catch (err) {
    console.error("Sanity: failed to fetch case studies", err);
    return [];
  }
}

export async function getCaseStudyBySlug(slug: string): Promise<SanityCaseStudy | null> {
  if (!isSanityConfigured()) return null;
  try {
    return await sanityClient.fetch(
      `*[_type == "caseStudy" && slug.current == $slug][0]{${CASE_STUDY_FIELDS}}`,
      { slug }
    );
  } catch (err) {
    console.error("Sanity: failed to fetch case study", err);
    return null;
  }
}