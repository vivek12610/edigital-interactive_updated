import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { ArrowRight } from "lucide-react";

export const metadata = { title: "Blog" };
export const revalidate = 60;

async function getPosts(categorySlug?: string) {
  try {
    return await prisma.blogPost.findMany({
      where: {
        isPublished: true,
        ...(categorySlug ? { categories: { some: { slug: categorySlug } } } : {})
      },
      orderBy: { publishedAt: "desc" },
      include: { categories: true, tags: true }
    });
  } catch (err) {
    console.error("Failed to load blog posts (has the DB been migrated & seeded?):", err);
    return [];
  }
}

async function getCategories() {
  try {
    return await prisma.category.findMany({ orderBy: { name: "asc" } });
  } catch {
    return [];
  }
}

export default async function BlogsIndexPage({ searchParams }: { searchParams: { category?: string } }) {
  const [posts, categories] = await Promise.all([getPosts(searchParams.category), getCategories()]);

  return (
    <div className="section-pad">
      <div className="container-edi">
        <p className="eyebrow">Blog</p>
        <h1 className="mt-2 font-display text-4xl font-bold tracking-tight md:text-5xl">Notes on search, AI visibility, and growth.</h1>

        {categories.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            <Link href="/blogs" className={`rounded-full border px-3 py-1 text-xs font-medium ${!searchParams.category ? "border-signal bg-signal/10 text-signal" : "border-line text-ink/60"}`}>
              All
            </Link>
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/blogs?category=${c.slug}`}
                className={`rounded-full border px-3 py-1 text-xs font-medium ${searchParams.category === c.slug ? "border-signal bg-signal/10 text-signal" : "border-line text-ink/60"}`}
              >
                {c.name}
              </Link>
            ))}
          </div>
        )}

        {posts.length === 0 ? (
          <div className="card mt-10 p-8 text-center text-sm text-ink/50">
            No posts published yet. Run <code className="rounded bg-paper px-1.5 py-0.5 font-mono text-xs">npm run db:seed</code> to load sample content, or publish one from your database.
          </div>
        ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link key={post.id} href={`/blogs/${post.slug}`} className="card focus-ring group flex flex-col overflow-hidden transition hover:border-signal hover:shadow-lift">
                <div className="p-6">
                  <div className="flex flex-wrap gap-1.5">
                    {post.categories.map((c) => (
                      <span key={c.id} className="rounded-full bg-paper px-2 py-0.5 text-[11px] font-medium text-signal">{c.name}</span>
                    ))}
                  </div>
                  <h2 className="mt-3 font-display text-lg font-semibold leading-snug">{post.title}</h2>
                  <p className="mt-2 line-clamp-3 text-sm text-ink/60">{post.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between text-xs text-ink/40">
                    <span>{post.readingTime} min read</span>
                    <span className="inline-flex items-center gap-1 font-medium text-signal opacity-0 transition group-hover:opacity-100">
                      Read <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
