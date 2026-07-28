"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowRight, Zap, Target, TrendingUp, BarChart } from "lucide-react";
import CaseStudyCarousel from "@/components/CaseStudyCarousel";

export default function PreviewLayoutPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      
      {/* Spacer to simulate scrolling down to this section */}
      <div className="py-20 text-center">
        <h1 className="font-display text-4xl font-bold text-ink mb-4">Previewing New Layout Ideas</h1>
        <p className="text-ink/60">Scroll down to see the Bento Grid, Dark Case Studies, and Infinite Marquee.</p>
      </div>

      {/* Idea 1: Bento Grid Layout */}
      <section className="section-pad">
        <div className="container-edi">
          <p className="eyebrow">The Bento Grid</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">Everything you need to scale, structured perfectly.</h2>
          
          <div className="mt-10 grid gap-4 grid-cols-1 md:grid-cols-4 md:grid-rows-2 h-auto md:h-[500px]">
            {/* Big Feature Block */}
            <div className="md:col-span-2 md:row-span-2 card p-8 bg-gradient-to-br from-ink to-ink/90 text-white shadow-lg overflow-hidden relative rounded-3xl">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <TrendingUp size={180} />
              </div>
              <h3 className="font-display text-3xl font-bold">Data-Driven Growth</h3>
              <p className="mt-4 text-paper/70 max-w-sm">We don't guess. Every strategy is backed by hard data, AI insights, and proven conversion frameworks.</p>
              
              <div className="mt-auto pt-24">
                <p className="font-display text-5xl font-bold text-signal">3x</p>
                <p className="text-sm text-paper/60 mt-1">Average ROI across our client portfolio</p>
              </div>
            </div>

            {/* Top Right small blocks */}
            <div className="md:col-span-1 md:row-span-1 card p-6 bg-white shadow-sm border border-line/50 rounded-3xl flex flex-col justify-between">
              <Zap className="text-signal mb-4" size={24} />
              <div>
                <p className="font-display text-2xl font-bold text-ink">Lightning Fast</p>
                <p className="text-xs text-ink/60 mt-1">SEO strategies deployed in days, not months.</p>
              </div>
            </div>
            <div className="md:col-span-1 md:row-span-1 card p-6 bg-white shadow-sm border border-line/50 rounded-3xl flex flex-col justify-between">
              <Target className="text-signal mb-4" size={24} />
              <div>
                <p className="font-display text-2xl font-bold text-ink">Laser Targeted</p>
                <p className="text-xs text-ink/60 mt-1">We reach the exact audience ready to convert.</p>
              </div>
            </div>

            {/* Bottom Right wide block */}
            <div className="md:col-span-2 md:row-span-1 card p-6 bg-signal text-white shadow-sm rounded-3xl flex items-center justify-between overflow-hidden relative">
              <div className="relative z-10">
                <p className="font-display text-xl font-bold">100+ Brands Scaled</p>
                <p className="text-sm text-white/80 mt-1">Join the top-tier companies we work with.</p>
                <button className="mt-4 bg-white text-signal px-4 py-2 rounded-full text-xs font-bold shadow-sm">View Case Studies</button>
              </div>
              <BarChart className="absolute -right-4 -bottom-8 opacity-20 text-white" size={120} />
            </div>
          </div>
        </div>
      </section>

      {/* Idea 3: High-Contrast Dark Section */}
      <section className="section-pad bg-ink text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        
        <div className="container-edi relative z-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow !text-signal">High-Contrast Section</p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl text-white">Incredible results we've delivered</h2>
            </div>
            <Link href="/casestudy" className="text-white hover:text-signal transition-colors inline-flex items-center gap-1 text-sm font-medium">
              View all <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-12">
            {/* The carousel looks incredible on dark mode */}
            <CaseStudyCarousel />
          </div>
        </div>
      </section>

      {/* Idea 2: Infinite Marquee */}
      <section className="py-24 overflow-hidden bg-white border-y border-line/40">
        <div className="container-edi text-center mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-ink/40">Trusted by fast-growing brands</p>
        </div>
        
        {/* Simple CSS marquee implementation */}
        <div className="relative flex overflow-hidden group">
          <div className="animate-marquee flex whitespace-nowrap">
            <div className="flex items-center gap-16 px-8">
              <span className="font-display text-2xl font-bold text-ink/20">PIZZA HUT</span>
              <span className="font-display text-2xl font-bold text-ink/20">FORD</span>
              <span className="font-display text-2xl font-bold text-ink/20">OYO ROOMS</span>
              <span className="font-display text-2xl font-bold text-ink/20">BERGER PAINTS</span>
              <span className="font-display text-2xl font-bold text-ink/20">SWARAJ TRACTORS</span>
            </div>
            <div className="flex items-center gap-16 px-8">
              <span className="font-display text-2xl font-bold text-ink/20">PIZZA HUT</span>
              <span className="font-display text-2xl font-bold text-ink/20">FORD</span>
              <span className="font-display text-2xl font-bold text-ink/20">OYO ROOMS</span>
              <span className="font-display text-2xl font-bold text-ink/20">BERGER PAINTS</span>
              <span className="font-display text-2xl font-bold text-ink/20">SWARAJ TRACTORS</span>
            </div>
            <div className="flex items-center gap-16 px-8">
              <span className="font-display text-2xl font-bold text-ink/20">PIZZA HUT</span>
              <span className="font-display text-2xl font-bold text-ink/20">FORD</span>
              <span className="font-display text-2xl font-bold text-ink/20">OYO ROOMS</span>
              <span className="font-display text-2xl font-bold text-ink/20">BERGER PAINTS</span>
              <span className="font-display text-2xl font-bold text-ink/20">SWARAJ TRACTORS</span>
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}} />

    </div>
  );
}
