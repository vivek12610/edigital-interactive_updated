import Link from "next/link";
import { ArrowRight, Sparkles, BookOpen, CalendarDays } from "lucide-react";
import { getAllPosts, getAllCategories } from "@/lib/sanity-queries";
import { urlFor, isSanityConfigured } from "@/lib/sanity";

export const metadata = { title: "Insights & Education" };
export const revalidate = 60;

export default async function BlogsIndexPage({ searchParams }: { searchParams: { category?: string } }) {
  const [posts, categories] = await Promise.all([
    getAllPosts(searchParams.category),
    getAllCategories()
  ]);

  const featuredPost = posts.length > 0 ? posts[0] : null;
  const remainingPosts = posts.length > 1 ? posts.slice(1) : [];
  const recentPosts = posts.length > 0 ? posts.slice(0, 3) : [];

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* Header */}
      <div className="bg-ink py-20 text-white">
        <div className="container-edi">
          <p className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-white/80">
            <BookOpen className="h-4 w-4" />
            eDigital Interactive Articles
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">Insights & Education</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">
            Expert guides on marketing, design, growth, and everything you need to make the right digital choices.
          </p>
        </div>
      </div>

      <div className="container-edi py-12">
        {!isSanityConfigured() && (
          <div className="card mb-10 p-4 text-sm text-ink/60">
            Sanity isn't connected yet — add <code className="rounded bg-paper px-1.5 py-0.5 font-mono text-xs">NEXT_PUBLIC_SANITY_PROJECT_ID</code> to your <code className="rounded bg-paper px-1.5 py-0.5 font-mono text-xs">.env</code> to see live posts here.
          </div>
        )}

        <div className="grid items-start gap-10 lg:grid-cols-[1fr_350px]">
          {/* Main Content Column */}
          <div className="space-y-12">
            {/* Featured Post */}
            {featuredPost && (
              <div className="group relative overflow-hidden rounded-2xl shadow-lg">
                <Link href={`/blogs/${featuredPost.slug}`} className="absolute inset-0 z-20" />
                {featuredPost.coverImage ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={urlFor(featuredPost.coverImage).width(1200).height(600).url()} alt={featuredPost.title} className="h-[400px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[500px]" />
                ) : (
                  <div className="h-[400px] w-full bg-ink/10 md:h-[500px]"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 p-6 text-white md:p-10">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-signal px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-signal-dark shadow-md">
                      <Sparkles className="h-3 w-3" /> Featured
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h2 className="font-display text-3xl font-bold leading-tight md:text-4xl">{featuredPost.title}</h2>
                  <p className="mt-3 line-clamp-2 max-w-3xl text-white/80">{featuredPost.excerpt}</p>
                  <div className="mt-5 flex items-center gap-4 text-sm text-white/60">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays className="h-4 w-4" />
                      {new Date(featuredPost._createdAt || Date.now()).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                    <span>By eDigital Interactive</span>
                  </div>
                </div>
              </div>
            )}

            {/* Latest Articles */}
            {remainingPosts.length > 0 && (
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <div className="h-6 w-1 rounded-full bg-signal"></div>
                  <h3 className="font-display text-2xl font-bold text-ink">Latest Articles</h3>
                </div>
                
                <div className="grid gap-6 md:grid-cols-2">
                  {remainingPosts.map((post) => (
                    <Link key={post._id} href={`/blogs/${post.slug}`} className="card focus-ring group flex flex-col overflow-hidden bg-white transition hover:border-signal hover:shadow-lift">
                      {post.coverImage ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={urlFor(post.coverImage).width(600).height(340).url()} alt={post.title} className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      ) : (
                        <div className="h-48 w-full bg-ink/5"></div>
                      )}
                      <div className="flex flex-1 flex-col p-6">
                        <div>
                          <span className="inline-flex rounded-full border border-signal bg-signal/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-signal-dark">
                            {post.category}
                          </span>
                          <h2 className="mt-3 font-display text-lg font-bold leading-snug text-ink group-hover:text-signal-dark transition-colors">{post.title}</h2>
                          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink/60">{post.excerpt}</p>
                        </div>
                        <div className="mt-6 flex items-center justify-between text-xs text-ink/50">
                          <span className="flex items-center gap-1.5">
                            <CalendarDays className="h-3.5 w-3.5" />
                            {new Date(post._createdAt || Date.now()).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                          </span>
                          <span className="inline-flex items-center gap-1 font-semibold text-signal-dark transition-colors group-hover:text-ink">
                            Read more <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            
            {posts.length === 0 && (
              <div className="card p-12 text-center text-sm text-ink/50">
                No articles found. Check back later!
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8 lg:sticky lg:top-8">
            
            {/* Browse By Category */}
            <div className="card bg-white p-6 shadow-sm border border-line/50">
              <h4 className="font-display text-sm font-bold uppercase tracking-wider text-ink">Browse by Category</h4>
              <div className="mt-5 flex flex-col space-y-1">
                <Link 
                  href="/blogs" 
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${!searchParams.category ? "bg-ink/5 text-ink" : "text-ink/60 hover:bg-ink/5 hover:text-ink"}`}
                >
                  <BookOpen className="h-4 w-4 text-signal-dark" />
                  All Articles
                </Link>
                {categories.map((c) => (
                  <Link 
                    key={c} 
                    href={`/blogs?category=${encodeURIComponent(c)}`}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${searchParams.category === c ? "bg-ink/5 text-ink" : "text-ink/60 hover:bg-ink/5 hover:text-ink"}`}
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-signal"></div>
                    {c}
                  </Link>
                ))}
              </div>
            </div>

            {/* Recent Articles */}
            {recentPosts.length > 0 && (
              <div className="card bg-white p-6 shadow-sm border border-line/50">
                <h4 className="font-display text-sm font-bold uppercase tracking-wider text-ink">Recent Articles</h4>
                <div className="mt-5 space-y-4">
                  {recentPosts.map(post => (
                    <Link key={post._id} href={`/blogs/${post.slug}`} className="group flex gap-4">
                      {post.coverImage ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={urlFor(post.coverImage).width(120).height(120).url()} alt={post.title} className="h-16 w-16 shrink-0 rounded-lg object-cover shadow-sm transition-transform group-hover:scale-105" />
                      ) : (
                        <div className="h-16 w-16 shrink-0 rounded-lg bg-ink/10"></div>
                      )}
                      <div>
                        <h5 className="font-display text-sm font-semibold leading-snug text-ink transition-colors group-hover:text-signal-dark">{post.title}</h5>
                        <p className="mt-1 text-xs text-ink/50">{new Date(post._createdAt || Date.now()).toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Box */}
            <div className="card overflow-hidden bg-signal p-6 text-signal-dark shadow-lg border border-signal">
              <h4 className="font-display text-2xl font-bold leading-tight">Find the Best Strategy</h4>
              <p className="mt-2 text-sm text-signal-dark/80">Compare top tactics, digital pipelines and scaling engines tailored for you.</p>
              <Link href="/contact" className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-ink px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-ink/90">
                Explore Solutions <ArrowRight size={16} />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}