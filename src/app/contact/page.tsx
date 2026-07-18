import { Mail, MapPin, Phone } from "lucide-react";
import LeadForm from "@/components/LeadForm";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="section-pad">
      <div className="container-edi grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="mt-2 font-display text-4xl font-bold tracking-tight md:text-5xl">Let's talk growth.</h1>
          <p className="mt-4 max-w-md text-ink/60">
            Tell us about your goals and budget, and a strategist will come back with a realistic plan within one business day — on WhatsApp or email, whichever you prefer.
          </p>

          <div className="mt-8 space-y-4">
            <a href="mailto:info@edigitalinteractive.com" className="focus-ring flex items-center gap-3 text-sm text-ink/70 hover:text-signal-dark">
              <Mail size={18} className="text-signal-dark" /> info@edigitalinteractive.com
            </a>
            <a href="tel:+919540312155" className="focus-ring flex items-center gap-3 text-sm text-ink/70 hover:text-signal-dark">
              <Phone size={18} className="text-signal-dark" /> +91 95403 12155 · +91 70116 29336 (WhatsApp)
            </a>
            <div className="flex items-start gap-3 text-sm text-ink/70">
              <MapPin size={18} className="mt-0.5 shrink-0 text-signal-dark" />
              <div>
                <p>Corporate Office: Nukleus Coworking Space, Plot No 29, Ground Floor, Sector 142, Noida, Uttar Pradesh 201305</p>
                <p className="mt-2 text-ink/50">Registered Office: Aashtha Kunj, RZF 906/21, Block P, Raj Nagar II Extension, Palam, New Delhi, Delhi 110077</p>
              </div>
            </div>
          </div>
        </div>

        <LeadForm source="/contact" />
      </div>
    </div>
  );
}
