import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { format } from "date-fns";
import LeadForm from "@/components/LeadForm";

export const revalidate = 60;

async function getPost(slug: string) {
  try {
    return await prisma.blogPost.findUnique({ where: { slug }, include: { categories: true, tags: true } });
  } catch (err) {
    console.error("Failed to load blog post:", err);
    return null;
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) return notFound();

  return (
    <div className="section-pad">
      <div className="container-edi max-w-3xl">
        <div className="flex flex-wrap gap-1.5">
          {post.categories.map((c) => (
            <Link key={c.id} href={`/blogs?category=${c.slug}`} className="rounded-full bg-paper px-2 py-0.5 text-[11px] font-medium text-signal">{c.name}</Link>
          ))}
        </div>
        <h1 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">{post.title}</h1>
        <div className="mt-3 flex items-center gap-3 text-xs text-ink/40">
          <span>{post.author}</span>
          <span>·</span>
          <span>{format(new Date(post.publishedAt), "MMMM d, yyyy")}</span>
          <span>·</span>
          <span>{post.readingTime} min read</span>
        </div>

        <div
          className="prose prose-neutral mt-8 max-w-none prose-headings:font-display prose-a:text-signal"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {post.tags.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-2 border-t border-line pt-6">
            {post.tags.map((t) => (
              <span key={t.id} className="rounded-full border border-line px-3 py-1 text-xs text-ink/60">#{t.name}</span>
            ))}
          </div>
        )}

        <div className="mt-14">
          <LeadForm source={`/blogs/${post.slug}`} compact />
        </div>
      </div>
    </div>
  );
}
