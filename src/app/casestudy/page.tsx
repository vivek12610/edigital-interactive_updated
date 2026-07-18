import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { ArrowRight } from "lucide-react";

export const metadata = { title: "Case Studies" };
export const revalidate = 60;

const categories = ["SEO", "Performance Marketing", "Social Media", "Website"];

async function getCaseStudies(category?: string) {
  try {
    return await prisma.caseStudy.findMany({
      where: { isPublished: true, ...(category ? { category } : {}) },
      orderBy: { publishedAt: "desc" }
    });
  } catch (err) {
    console.error("Failed to load case studies:", err);
    return [];
  }
}

export default async function CaseStudiesIndexPage({ searchParams }: { searchParams: { category?: string } }) {
  const caseStudies = await getCaseStudies(searchParams.category);

  return (
    <div className="section-pad">
      <div className="container-edi">
        <p className="eyebrow">Case Studies</p>
        <h1 className="mt-2 font-display text-4xl font-bold tracking-tight md:text-5xl">Results, with the receipts.</h1>

        <div className="mt-6 flex flex-wrap gap-2">
          <Link href="/casestudy" className={`rounded-full border px-3 py-1 text-xs font-medium ${!searchParams.category ? "border-signal bg-signal/10 text-signal" : "border-line text-ink/60"}`}>All</Link>
          {categories.map((c) => (
            <Link key={c} href={`/casestudy?category=${encodeURIComponent(c)}`} className={`rounded-full border px-3 py-1 text-xs font-medium ${searchParams.category === c ? "border-signal bg-signal/10 text-signal" : "border-line text-ink/60"}`}>
              {c}
            </Link>
          ))}
        </div>

        {caseStudies.length === 0 ? (
          <div className="card mt-10 p-8 text-center text-sm text-ink/50">
            No case studies published yet. Run <code className="rounded bg-paper px-1.5 py-0.5 font-mono text-xs">npm run db:seed</code> to load sample content.
          </div>
        ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((cs) => (
              <Link key={cs.id} href={`/casestudy/${cs.slug}`} className="card focus-ring group p-6 transition hover:border-signal hover:shadow-lift">
                <span className="rounded-full bg-paper px-2 py-0.5 text-[11px] font-medium text-signal">{cs.category}</span>
                <h2 className="mt-3 font-display text-lg font-semibold leading-snug">{cs.title}</h2>
                <p className="mt-2 text-sm text-ink/60">{cs.summary}</p>
                <div className="mt-4 flex items-center justify-between text-xs">
                  <span className="text-ink/40">{cs.clientName}</span>
                  <span className="inline-flex items-center gap-1 font-medium text-signal opacity-0 transition group-hover:opacity-100">
                    Read <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
