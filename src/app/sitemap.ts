import { MetadataRoute } from "next";
import { services } from "@/lib/data/services";
import { industries } from "@/lib/data/industries";
import { getAllPosts, getAllCaseStudies } from "@/lib/sanity-queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://www.edigitalinteractive.com";

  const staticRoutes = ["", "/about", "/contact", "/services", "/industries", "/blogs", "/casestudy"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date()
  }));

  const serviceRoutes = services.map((s) => ({ url: `${base}/services/${s.slug}`, lastModified: new Date() }));
  const industryRoutes = industries.map((i) => ({ url: `${base}/industries/${i.slug}`, lastModified: new Date() }));

  let blogRoutes: MetadataRoute.Sitemap = [];
  let caseStudyRoutes: MetadataRoute.Sitemap = [];

  try {
    const posts = await getAllPosts();
    blogRoutes = posts.map((p) => ({ url: `${base}/blogs/${p.slug}`, lastModified: new Date(p.publishedAt) }));

    const caseStudies = await getAllCaseStudies();
    caseStudyRoutes = caseStudies.map((c) => ({ url: `${base}/casestudy/${c.slug}`, lastModified: new Date(c.publishedAt) }));
  } catch {
    // Sanity not reachable at build time — static routes still generate fine.
  }

  return [...staticRoutes, ...serviceRoutes, ...industryRoutes, ...blogRoutes, ...caseStudyRoutes];
}