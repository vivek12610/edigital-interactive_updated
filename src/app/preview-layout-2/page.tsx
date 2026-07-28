"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowRight, Activity, LineChart, Globe, Box } from "lucide-react";

export default function PreviewLayout2Page() {
  return (
    <div className="bg-white min-h-screen">

      <div className="py-16 text-center border-b border-line">
        <h1 className="font-display text-4xl font-bold text-ink">Design Preview Gallery</h1>
        <p className="text-ink/60 mt-2 max-w-lg mx-auto">Scroll down to see Neo-Dark Glow, Editorial Brutalism, and Sticky Scroll layouts.</p>
      </div>

      {/* -----------------------------------------------------
          STYLE 1: Neo-Dark Glow (Glassmorphism + Neon)
          ----------------------------------------------------- */}
      <section className="py-24 bg-[#0a0a0a] text-white relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-signal/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container-edi relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-medium tracking-widest uppercase text-signal mb-4">Neo-Dark Glow</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">The Future of Growth</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Activity, title: "AI Visibility", desc: "Dominate search before your competitors do." },
              { icon: LineChart, title: "Performance Ads", desc: "Turn ad spend into measurable, scalable revenue." },
              { icon: Globe, title: "Technical SEO", desc: "The foundation of a compounding organic strategy." }
            ].map((card, i) => (
              <div key={i} className="group relative">
                {/* Glow behind the card that activates on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-signal to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-500"></div>
                
                {/* The card itself */}
                <div className="relative h-full p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 transition-colors duration-500 flex flex-col">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-signal/20 to-transparent flex items-center justify-center border border-signal/30 mb-6">
                    <card.icon className="text-signal" size={24} />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-3">{card.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------
          STYLE 2: Editorial Brutalism
          ----------------------------------------------------- */}
      <section className="bg-white">
        {/* Notice the hard borders and grid-like structure */}
        <div className="container-edi border-x border-line">
          
          <div className="border-b border-line py-20 px-8 text-center bg-gray-50/50">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-ink/40 mb-4 block">Editorial Brutalism</span>
            <h2 className="font-display text-[10vw] leading-[0.85] font-black text-ink tracking-tighter uppercase">
              Scale<br/>Unapologetically.
            </h2>
          </div>

          <div className="grid md:grid-cols-2">
            <div className="border-r border-b border-line p-12">
              <p className="font-bold text-3xl mb-4">No Fluff.</p>
              <p className="text-lg text-ink/70">We don't sell vanity metrics. We sell revenue, pipeline, and market share. Our frameworks are built for aggressive growth.</p>
              <button className="mt-8 border-2 border-ink text-ink font-bold uppercase tracking-wider text-xs px-6 py-4 hover:bg-ink hover:text-white transition-colors">
                Read the Manifesto
              </button>
            </div>
            <div className="border-b border-line p-12 bg-ink text-white flex flex-col justify-center">
              <p className="font-bold text-7xl font-display mb-2">100+</p>
              <p className="text-xl opacity-70">Brands who trusted our framework to drive their entire digital pipeline.</p>
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------
          STYLE 3: Sticky Scroll
          ----------------------------------------------------- */}
      <section className="py-32 bg-[#FAFAFA]">
        <div className="container-edi">
          
          <div className="flex flex-col md:flex-row gap-16 relative">
            
            {/* The Sticky Left Column */}
            <div className="md:w-1/3">
              <div className="sticky top-32">
                <span className="text-signal text-xs font-bold uppercase tracking-widest mb-2 block">Sticky Scroll Layout</span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-ink leading-tight">Our Core Offerings</h2>
                <p className="mt-4 text-ink/60">Scroll down on the right to explore everything we do to grow your business.</p>
              </div>
            </div>

            {/* The Scrolling Right Column */}
            <div className="md:w-2/3 flex flex-col gap-8">
              
              <div className="bg-white p-10 rounded-[2rem] border border-line shadow-sm">
                <h3 className="font-display text-2xl font-bold mb-3">SEO & Organic Search</h3>
                <p className="text-ink/60 mb-6 leading-relaxed">We build compounding traffic engines that generate high-intent leads month over month without paying per click.</p>
                <div className="h-48 bg-ink/5 rounded-2xl flex items-center justify-center">
                  <span className="text-ink/30 font-semibold">Image/Visual Area</span>
                </div>
              </div>

              <div className="bg-white p-10 rounded-[2rem] border border-line shadow-sm">
                <h3 className="font-display text-2xl font-bold mb-3">AI Search Optimization (AEO)</h3>
                <p className="text-ink/60 mb-6 leading-relaxed">Ensure your brand is the answer when your customers ask ChatGPT, Perplexity, or Google's AI Overviews.</p>
                <div className="h-48 bg-ink/5 rounded-2xl flex items-center justify-center">
                  <span className="text-ink/30 font-semibold">Image/Visual Area</span>
                </div>
              </div>

              <div className="bg-white p-10 rounded-[2rem] border border-line shadow-sm">
                <h3 className="font-display text-2xl font-bold mb-3">Performance Marketing</h3>
                <p className="text-ink/60 mb-6 leading-relaxed">Highly targeted, data-backed campaigns across Google, LinkedIn, and Meta designed solely to drive pipeline.</p>
                <div className="h-48 bg-ink/5 rounded-2xl flex items-center justify-center">
                  <span className="text-ink/30 font-semibold">Image/Visual Area</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
