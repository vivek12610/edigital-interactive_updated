import { MetadataRoute } from "next";
import { services } from "@/lib/data/services";
import { industries } from "@/lib/data/industries";
import { prisma } from "@/lib/prisma";

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
    const posts = await prisma.blogPost.findMany({ where: { isPublished: true }, select: { slug: true, updatedAt: true } });
    blogRoutes = posts.map((p) => ({ url: `${base}/blogs/${p.slug}`, lastModified: p.updatedAt }));

    const caseStudies = await prisma.caseStudy.findMany({ where: { isPublished: true }, select: { slug: true, updatedAt: true } });
    caseStudyRoutes = caseStudies.map((c) => ({ url: `${base}/casestudy/${c.slug}`, lastModified: c.updatedAt }));
  } catch {
    // DB not reachable at build time — static routes still generate fine.
  }

  return [...staticRoutes, ...serviceRoutes, ...industryRoutes, ...blogRoutes, ...caseStudyRoutes];
}
