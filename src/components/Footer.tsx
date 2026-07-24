import Link from "next/link";
import { services } from "@/lib/data/services";
import { industries } from "@/lib/data/industries";
import { Linkedin, Instagram, Facebook, Youtube, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const featured = services.slice(0, 8);

  return (
    <footer className="bg-ink text-paper">
      <div className="container-edi py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2">
            <div className="flex items-center bg-white px-3 py-2 w-fit">
              <img src="/logo-cropped.png" alt="eDigital Interactive" className="h-7 w-auto" />
            </div>
            <p className="mt-4 max-w-xs text-sm text-paper/60">
              A performance-driven digital marketing agency focused on real business growth — SEO, AI Search Optimization, paid ads, and CRO. No fluff, no vanity metrics, just measurable outcomes.
            </p>
            <div className="mt-5 space-y-2 text-sm text-paper/70">
              <a href="mailto:info@edigitalinteractive.com" className="focus-ring flex items-center gap-2 hover:text-signal-light">
                <Mail size={15} /> info@edigitalinteractive.com
              </a>
              <a href="tel:+919540312155" className="focus-ring flex items-center gap-2 hover:text-signal-light">
                <Phone size={15} /> +91 95403 12155 · +91 70116 29336
              </a>
              <p className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 shrink-0" /> Nukleus Coworking Space, Plot 29, Sector 142, Noida, UP 201305
              </p>
            </div>
            <div className="mt-5 flex gap-3">
              <a href="https://www.facebook.com/edigitalinteractive" target="_blank" rel="noopener noreferrer" className="focus-ring rounded-full border border-paper/15 p-2 text-paper/70 hover:border-signal-light hover:text-signal-light" aria-label="Facebook"><Facebook size={16} /></a>
              <a href="https://www.linkedin.com/company/edigitalinteractive/" target="_blank" rel="noopener noreferrer" className="focus-ring rounded-full border border-paper/15 p-2 text-paper/70 hover:border-signal-light hover:text-signal-light" aria-label="LinkedIn"><Linkedin size={16} /></a>
              <a href="https://www.instagram.com/edigitalinteractive/" target="_blank" rel="noopener noreferrer" className="focus-ring rounded-full border border-paper/15 p-2 text-paper/70 hover:border-signal-light hover:text-signal-light" aria-label="Instagram"><Instagram size={16} /></a>
              <a href="https://twitter.com/edi4digital" target="_blank" rel="noopener noreferrer" className="focus-ring rounded-full border border-paper/15 p-2 text-paper/70 hover:border-signal-light hover:text-signal-light" aria-label="X (Twitter)"><Twitter size={16} /></a>
              <a href="https://www.youtube.com/channel/UClFssiSdQWfrdULUExGP9yg" target="_blank" rel="noopener noreferrer" className="focus-ring rounded-full border border-paper/15 p-2 text-paper/70 hover:border-signal-light hover:text-signal-light" aria-label="YouTube"><Youtube size={16} /></a>
            </div>
          </div>

          <div>
            <p className="eyebrow !text-signal-light">Services</p>
            <ul className="mt-3 space-y-2 text-sm text-paper/70">
              {featured.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="focus-ring hover:text-paper">{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow !text-signal-light">Industries</p>
            <ul className="mt-3 space-y-2 text-sm text-paper/70">
              {industries.map((ind) => (
                <li key={ind.slug}>
                  <Link href={`/industries/${ind.slug}`} className="focus-ring hover:text-paper">{ind.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow !text-signal-light">Company</p>
            <ul className="mt-3 space-y-2 text-sm text-paper/70">
              <li><Link href="/about" className="focus-ring hover:text-paper">About</Link></li>
              <li><Link href="/casestudy" className="focus-ring hover:text-paper">Case Studies</Link></li>
              <li><Link href="/blogs" className="focus-ring hover:text-paper">Blog</Link></li>
              <li><Link href="/contact" className="focus-ring hover:text-paper">Contact</Link></li>
              <li><Link href="/contact" className="focus-ring hover:text-paper">Free Audit</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-paper/10 pt-6 text-xs text-paper/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} EDOTIC DIGITAL INTERACTIVE SOLUTIONS Pvt Ltd. All rights reserved.</p>
          <p>Registered office: Aashtha Kunj, RZF 906/21, Block P, Raj Nagar II Extension, Palam, New Delhi 110077 · Influencer marketing powered by FreshCrowd.</p>
        </div>
      </div>
    </footer>
  );
}
