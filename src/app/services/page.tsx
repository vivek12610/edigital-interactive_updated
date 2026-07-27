import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data/services";

export const metadata = { title: "Services" };

const categories = ["AI & Search", "Marketing", "Engineering", "Growth"] as const;

const serviceHoverImages: Record<string, string> = {
  "ai-search-optimization": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
  "seo": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  "local-seo": "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800",
  "performance-marketing": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  "social-media-marketing": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
  "content-marketing": "https://images.unsplash.com/photo-1455390582262-044cdead2708?auto=format&fit=crop&q=80&w=800",
  "digital-pr-orm": "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80&w=800",
  "ai-automation": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
  "web-design-development": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
  "website-audit": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
  "cro": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  "analytics-data-intelligence": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  "ecommerce-growth": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
  "growth-consulting": "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
  "influencer-marketing": "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=800"
};

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
                <Link key={s.slug} href={`/services/${s.slug}`} className="card focus-ring group relative overflow-hidden p-6 transition-all duration-500 hover:border-signal hover:shadow-xl hover:-translate-y-1">
                  {/* Hover Background Image & Overlay */}
                  <img 
                    src={serviceHoverImages[s.slug] || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"} 
                    alt={s.name}
                    className="absolute inset-0 z-0 h-full w-full object-cover opacity-0 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 z-0 bg-black/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                  {/* Content */}
                  <div className="relative z-10 flex h-full flex-col">
                    <p className="eyebrow transition-colors duration-300 group-hover:!text-signal-light">{s.eyebrow}</p>
                    <h3 className="mt-2 font-display text-lg font-semibold text-ink transition-colors duration-300 group-hover:text-white">{s.name}</h3>
                    <p className="mt-2 flex-1 text-sm text-ink/60 transition-colors duration-300 group-hover:text-white/80">{s.tagline}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-signal opacity-0 transition-all duration-300 group-hover:opacity-100">
                      Learn more <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
