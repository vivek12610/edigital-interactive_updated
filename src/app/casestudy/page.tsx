import Link from "next/link";
import { ArrowRight, Sparkles, FolderOpen, CalendarDays } from "lucide-react";
import { getAllCaseStudies } from "@/lib/sanity-queries";
import { urlFor, isSanityConfigured } from "@/lib/sanity";

export const metadata = { title: "Case Studies" };
export const revalidate = 60;

const categories = ["SEO", "Performance Marketing", "Social Media", "Website"];

export default async function CaseStudiesIndexPage({ searchParams }: { searchParams: { category?: string } }) {
  const caseStudies = await getAllCaseStudies(searchParams.category);

  const featuredCs = caseStudies.length > 0 ? caseStudies[0] : null;
  const remainingCs = caseStudies.length > 1 ? caseStudies.slice(1) : [];
  const recentCs = caseStudies.length > 0 ? caseStudies.slice(0, 3) : [];

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* Header */}
      <div className="bg-ink py-20 text-white">
        <div className="container-edi">
          <p className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-white/80">
            <FolderOpen className="h-4 w-4" />
            eDigital Interactive Work
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">Results, with the receipts.</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">
            Real numbers, real growth, and the exact strategies we used to scale our clients' businesses.
          </p>
        </div>
      </div>

      <div className="container-edi py-12">
        {!isSanityConfigured() && (
          <div className="card mb-10 p-4 text-sm text-ink/60">
            Sanity isn't connected yet — add <code className="rounded bg-paper px-1.5 py-0.5 font-mono text-xs">NEXT_PUBLIC_SANITY_PROJECT_ID</code> to your <code className="rounded bg-paper px-1.5 py-0.5 font-mono text-xs">.env</code> to see live case studies here.
          </div>
        )}

        <div className="grid items-start gap-10 lg:grid-cols-[1fr_350px]">
          {/* Main Content Column */}
          <div className="space-y-12">
            {/* Featured Case Study */}
            {featuredCs && (
              <div className="group relative overflow-hidden rounded-2xl shadow-lg">
                <Link href={`/casestudy/${featuredCs.slug}`} className="absolute inset-0 z-20" />
                {featuredCs.coverImage ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={urlFor(featuredCs.coverImage).width(1200).height(600).url()} alt={featuredCs.title} className="h-[400px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[500px]" />
                ) : (
                  <div className="h-[400px] w-full bg-ink/10 md:h-[500px]"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 p-6 text-white md:p-10">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-signal px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-signal-dark shadow-md">
                      <Sparkles className="h-3 w-3" /> Featured Case Study
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                      {featuredCs.category}
                    </span>
                  </div>
                  <h2 className="font-display text-3xl font-bold leading-tight md:text-4xl">{featuredCs.title}</h2>
                  <p className="mt-3 line-clamp-2 max-w-3xl text-white/80">{featuredCs.summary}</p>
                  <div className="mt-5 flex items-center gap-4 text-sm text-white/60">
                    <span className="flex items-center gap-1.5">
                      Client: <strong className="text-white">{featuredCs.clientName}</strong>
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Latest Case Studies */}
            {remainingCs.length > 0 && (
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <div className="h-6 w-1 rounded-full bg-signal"></div>
                  <h3 className="font-display text-2xl font-bold text-ink">More Case Studies</h3>
                </div>
                
                <div className="grid gap-6 md:grid-cols-2">
                  {remainingCs.map((cs) => (
                    <Link key={cs._id} href={`/casestudy/${cs.slug}`} className="card focus-ring group flex flex-col overflow-hidden bg-white transition hover:border-signal hover:shadow-lift">
                      {cs.coverImage ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={urlFor(cs.coverImage).width(600).height(340).url()} alt={cs.title} className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      ) : (
                        <div className="h-48 w-full bg-ink/5"></div>
                      )}
                      <div className="flex flex-1 flex-col p-6">
                        <div>
                          <span className="inline-flex rounded-full border border-signal bg-signal/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-signal-dark">
                            {cs.category}
                          </span>
                          <h2 className="mt-3 font-display text-lg font-bold leading-snug text-ink group-hover:text-signal-dark transition-colors">{cs.title}</h2>
                          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink/60">{cs.summary}</p>
                        </div>
                        <div className="mt-6 flex items-center justify-between text-xs text-ink/50">
                          <span className="flex items-center gap-1.5 font-medium text-ink/70">
                            {cs.clientName}
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
            
            {caseStudies.length === 0 && (
              <div className="card p-12 text-center text-sm text-ink/50">
                No case studies found. Check back later!
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
                  href="/casestudy" 
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${!searchParams.category ? "bg-ink/5 text-ink" : "text-ink/60 hover:bg-ink/5 hover:text-ink"}`}
                >
                  <FolderOpen className="h-4 w-4 text-signal-dark" />
                  All Case Studies
                </Link>
                {categories.map((c) => (
                  <Link 
                    key={c} 
                    href={`/casestudy?category=${encodeURIComponent(c)}`}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${searchParams.category === c ? "bg-ink/5 text-ink" : "text-ink/60 hover:bg-ink/5 hover:text-ink"}`}
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-signal"></div>
                    {c}
                  </Link>
                ))}
              </div>
            </div>

            {/* Recent Case Studies */}
            {recentCs.length > 0 && (
              <div className="card bg-white p-6 shadow-sm border border-line/50">
                <h4 className="font-display text-sm font-bold uppercase tracking-wider text-ink">Recent Work</h4>
                <div className="mt-5 space-y-4">
                  {recentCs.map(cs => (
                    <Link key={cs._id} href={`/casestudy/${cs.slug}`} className="group flex gap-4">
                      {cs.coverImage ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={urlFor(cs.coverImage).width(120).height(120).url()} alt={cs.title} className="h-16 w-16 shrink-0 rounded-lg object-cover shadow-sm transition-transform group-hover:scale-105" />
                      ) : (
                        <div className="h-16 w-16 shrink-0 rounded-lg bg-ink/10"></div>
                      )}
                      <div>
                        <h5 className="font-display text-sm font-semibold leading-snug text-ink transition-colors group-hover:text-signal-dark">{cs.title}</h5>
                        <p className="mt-1 text-xs text-ink/50">{cs.clientName}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Box */}
            <div className="card overflow-hidden bg-signal p-6 text-signal-dark shadow-lg border border-signal">
              <h4 className="font-display text-2xl font-bold leading-tight">Want these results?</h4>
              <p className="mt-2 text-sm text-signal-dark/80">Let's map out exactly what it would take for your business to scale.</p>
              <Link href="/contact" className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-ink px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-ink/90">
                Book a Strategy Call <ArrowRight size={16} />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}