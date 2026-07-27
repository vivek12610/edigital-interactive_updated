"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const heroImages = [
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000",
];

export default function PreviewHeroPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Animated Hero Section */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-ink text-paper pt-20">
        
        {/* Background Slider */}
        {heroImages.map((src, index) => (
          <img
            key={src}
            src={src}
            alt="Hero Background"
            className={`absolute inset-0 z-0 h-full w-full object-cover`}
            style={{
              opacity: index === currentImageIndex ? 0.4 : 0,
              transform: index === currentImageIndex ? "scale(1.1)" : "scale(1)",
              transition: "opacity 1s ease-in-out, transform 6s ease-out"
            }}
          />
        ))}

        {/* Gradient Overlays */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-ink/60 via-ink/40 to-ink"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-signal/10 to-transparent mix-blend-overlay"></div>

        {/* Foreground Content */}
        <div className="container-edi relative z-10 text-center">
          <p className="eyebrow inline-flex items-center gap-2 text-paper/80">
            <span className="h-1.5 w-1.5 rounded-full bg-signal shadow-[0_0_8px_rgba(229,72,77,0.8)]" /> 
            SEO · AI VISIBILITY · PERFORMANCE MARKETING · WEB DEVELOPMENT
          </p>
          
          <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-[72px]">
            We drive real growth to your <span className="text-transparent bg-clip-text bg-gradient-to-r from-signal to-signal-light">business</span> 
            <ArrowUpRight className="inline-block ml-3 text-signal shrink-0" size={48} />
          </h1>
          
          <p className="mx-auto mt-7 max-w-2xl text-base text-paper/80 md:text-[17px] leading-relaxed">
            Unlock your brand's potential with SEO, AI search optimization, and performance marketing built to compound. From strategy to execution, we drive growth.
          </p>
          
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary !bg-signal !text-white hover:!bg-signal-light border-none shadow-[0_0_20px_rgba(229,72,77,0.4)] !text-sm !px-6 !py-2.5">
              Get a Free Audit <ArrowUpRight size={15} />
            </Link>
            <Link href="/casestudy" className="btn-secondary !bg-white/10 !text-white !border-white/20 hover:!bg-white/20 backdrop-blur-sm !text-sm !px-6 !py-2.5">
              See client results
            </Link>
          </div>
        </div>
      </section>

      {/* Rest of the page content would go here */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold">The rest of your homepage starts here</h2>
        <p className="mt-4 text-ink/60">This preview is just to showcase the new animated hero layout.</p>
      </section>
    </main>
  );
}
