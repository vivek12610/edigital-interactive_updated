import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { format } from "date-fns";
import { getPostBySlug } from "@/lib/sanity-queries";
import { urlFor } from "@/lib/sanity";
import LeadForm from "@/components/LeadForm";

export const revalidate = 60;

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

const portableTextComponents = {
  types: {
    image: ({ value }: any) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={urlFor(value).width(1000).url()} alt={value.alt || ""} className="my-6 rounded-2xl" />
    )
  }
};

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) return notFound();

  return (
    <div className="section-pad">
      <div className="container-edi max-w-3xl">
        <span className="rounded-full bg-paper px-2 py-0.5 text-[11px] font-medium text-signal-dark">{post.category}</span>
        <h1 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">{post.title}</h1>
        <div className="mt-3 flex items-center gap-3 text-xs text-ink/40">
          <span>{post.author}</span>
          <span>·</span>
          <span>{format(new Date(post.publishedAt), "MMMM d, yyyy")}</span>
          <span>·</span>
          <span>{post.readingTime} min read</span>
        </div>

        {post.coverImage && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={urlFor(post.coverImage).width(1000).url()} alt={post.title} className="mt-6 w-full rounded-2xl" />
        )}

        <div className="prose prose-neutral mt-8 max-w-none prose-headings:font-display prose-a:text-signal-dark">
          <PortableText value={post.body} components={portableTextComponents} />
        </div>

        {post.tags && post.tags.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-2 border-t border-line pt-6">
            {post.tags.map((t) => (
              <span key={t} className="rounded-full border border-line px-3 py-1 text-xs text-ink/60">#{t}</span>
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