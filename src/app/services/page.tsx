import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data/services";

export const metadata = { title: "Services" };

const categories = ["AI & Search", "Marketing", "Engineering", "Growth"] as const;

export default function ServicesIndexPage() {
  return (
    <div className="section-pad">
      <div className="container-edi">
        <p className="eyebrow">Services</p>
        <h1 className="mt-2 max-w-2xl font-display text-4xl font-bold tracking-tight md:text-5xl">
          Fifteen disciplines. One accountable growth team.
        </h1>
        <p className="mt-4 max-w-xl text-ink/60">
          Every service below can run standalone or as part of a connected engagement — pick a discipline to see deliverables, process, and FAQs.
        </p>

        {categories.map((cat) => (
          <div key={cat} className="mt-14">
            <p className="eyebrow border-b border-line pb-3">{cat}</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {services.filter((s) => s.category === cat).map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="card focus-ring group p-6 transition hover:border-signal hover:shadow-lift">
                  <p className="eyebrow">{s.eyebrow}</p>
                  <h3 className="mt-2 font-display text-lg font-semibold">{s.name}</h3>
                  <p className="mt-2 text-sm text-ink/60">{s.tagline}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-signal opacity-0 transition group-hover:opacity-100">
                    Learn more <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
