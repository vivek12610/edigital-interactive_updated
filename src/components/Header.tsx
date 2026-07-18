"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data/services";
import { industries } from "@/lib/data/industries";

const categories = ["AI & Search", "Marketing", "Engineering", "Growth"] as const;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState<null | "services" | "industries">(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ink text-paper shadow-lift">
      <div className="container-edi">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center focus-ring rounded-2xl">
            <span className="flex items-center rounded-2xl bg-white px-3 py-2 shadow-sm">
              <img src="/logo-cropped.png" alt="eDigital Interactive" className="h-6 w-auto md:h-7" />
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <div
              className="relative"
              onMouseEnter={() => setMenuOpen("services")}
              onMouseLeave={() => setMenuOpen(null)}
            >
              <button className="focus-ring flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-paper/80 hover:bg-white/10 hover:text-paper">
                Services <ChevronDown size={14} />
              </button>
              {menuOpen === "services" && (
                <div className="absolute left-1/2 top-full w-[720px] -translate-x-1/2 pt-3">
                  <div className="card grid grid-cols-2 gap-x-8 gap-y-5 p-6">
                    {categories.map((cat) => (
                      <div key={cat}>
                        <p className="eyebrow mb-2">{cat}</p>
                        <ul className="space-y-1.5">
                          {services.filter((s) => s.category === cat).map((s) => (
                            <li key={s.slug}>
                              <Link
                                href={`/services/${s.slug}`}
                                className="focus-ring block rounded px-1 text-sm text-ink/80 hover:text-signal-dark"
                              >
                                {s.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setMenuOpen("industries")}
              onMouseLeave={() => setMenuOpen(null)}
            >
              <button className="focus-ring flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-paper/80 hover:bg-white/10 hover:text-paper">
                Industries <ChevronDown size={14} />
              </button>
              {menuOpen === "industries" && (
                <div className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3">
                  <div className="card p-3">
                    {industries.map((ind) => (
                      <Link
                        key={ind.slug}
                        href={`/industries/${ind.slug}`}
                        className="focus-ring block rounded-xl px-3 py-2 text-sm text-ink/80 hover:bg-paper hover:text-signal-dark"
                      >
                        {ind.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/casestudy" className="focus-ring rounded-full px-4 py-2 text-sm font-medium text-paper/80 hover:bg-white/10 hover:text-paper">
              Case Studies
            </Link>
            <Link href="/blogs" className="focus-ring rounded-full px-4 py-2 text-sm font-medium text-paper/80 hover:bg-white/10 hover:text-paper">
              Blog
            </Link>
            <Link href="/about" className="focus-ring rounded-full px-4 py-2 text-sm font-medium text-paper/80 hover:bg-white/10 hover:text-paper">
              About
            </Link>
          </nav>

          <div className="hidden lg:flex items-center">
            <Link href="/contact" className="btn-accent">
              Get a Free Audit <ArrowUpRight size={15} />
            </Link>
          </div>

          <button
            className="focus-ring lg:hidden rounded-full p-2 text-paper"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden card mt-2 p-4">
            <div className="flex flex-col gap-1">
              <p className="eyebrow mt-2">Services</p>
              {services.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="focus-ring rounded-lg px-2 py-2 text-sm text-ink/80" onClick={() => setMobileOpen(false)}>
                  {s.name}
                </Link>
              ))}
              <p className="eyebrow mt-3">Industries</p>
              {industries.map((ind) => (
                <Link key={ind.slug} href={`/industries/${ind.slug}`} className="focus-ring rounded-lg px-2 py-2 text-sm text-ink/80" onClick={() => setMobileOpen(false)}>
                  {ind.name}
                </Link>
              ))}
              <Link href="/casestudy" className="focus-ring mt-3 rounded-lg px-2 py-2 text-sm font-medium">Case Studies</Link>
              <Link href="/blogs" className="focus-ring rounded-lg px-2 py-2 text-sm font-medium">Blog</Link>
              <Link href="/about" className="focus-ring rounded-lg px-2 py-2 text-sm font-medium">About</Link>
              <Link href="/contact" className="btn-accent mt-3 w-full">Get a Free Audit</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
