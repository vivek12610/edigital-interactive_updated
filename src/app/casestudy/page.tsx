import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllCaseStudies } from "@/lib/sanity-queries";
import { urlFor, isSanityConfigured } from "@/lib/sanity";

export const metadata = { title: "Case Studies" };
export const revalidate = 60;

const categories = ["SEO", "Performance Marketing", "Social Media", "Website"];

export default async function CaseStudiesIndexPage({ searchParams }: { searchParams: { category?: string } }) {
  const caseStudies = await getAllCaseStudies(searchParams.category);

  return (
    <div className="section-pad">
      <div className="container-edi">
        <p className="eyebrow">Case Studies</p>
        <h1 className="mt-2 font-display text-4xl font-bold tracking-tight md:text-5xl">Results, with the receipts.</h1>

        {!isSanityConfigured() && (
          <div className="card mt-6 p-4 text-sm text-ink/60">
            Sanity isn't connected yet — add <code className="rounded bg-paper px-1.5 py-0.5 font-mono text-xs">NEXT_PUBLIC_SANITY_PROJECT_ID</code> to your <code className="rounded bg-paper px-1.5 py-0.5 font-mono text-xs">.env</code> to see live case studies here.
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-2">
          <Link href="/casestudy" className={`rounded-full border px-3 py-1 text-xs font-medium ${!searchParams.category ? "border-signal bg-signal/10 text-signal-dark" : "border-line text-ink/60"}`}>All</Link>
          {categories.map((c) => (
            <Link key={c} href={`/casestudy?category=${encodeURIComponent(c)}`} className={`rounded-full border px-3 py-1 text-xs font-medium ${searchParams.category === c ? "border-signal bg-signal/10 text-signal-dark" : "border-line text-ink/60"}`}>
              {c}
            </Link>
          ))}
        </div>

        {caseStudies.length === 0 ? (
          <div className="card mt-10 p-8 text-center text-sm text-ink/50">
            No case studies published yet. Add one in your Sanity Studio and it'll show up here automatically.
          </div>
        ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((cs) => (
              <Link key={cs._id} href={`/casestudy/${cs.slug}`} className="card focus-ring group overflow-hidden transition hover:border-signal hover:shadow-lift">
                {cs.coverImage && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={urlFor(cs.coverImage).width(600).height(340).url()} alt={cs.title} className="h-40 w-full object-cover" />
                )}
                <div className="p-6">
                  <span className="rounded-full bg-paper px-2 py-0.5 text-[11px] font-medium text-signal-dark">{cs.category}</span>
                  <h2 className="mt-3 font-display text-lg font-semibold leading-snug">{cs.title}</h2>
                  <p className="mt-2 text-sm text-ink/60">{cs.summary}</p>
                  <div className="mt-4 flex items-center justify-between text-xs">
                    <span className="text-ink/40">{cs.clientName}</span>
                    <span className="inline-flex items-center gap-1 font-medium text-signal-dark opacity-0 transition group-hover:opacity-100">
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