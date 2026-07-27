"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/data/case-studies";

export default function CaseStudyCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Duplicate the array to create a seamless infinite scrolling loop
  const duplicatedStudies = [...caseStudies, ...caseStudies, ...caseStudies];

  useEffect(() => {
    let animationFrameId: number;
    let lastTimestamp = 0;
    const pixelsPerSecond = 30; // Speed of auto-scroll

    const autoScroll = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (scrollRef.current && !isHovered) {
        // Increment scroll position
        scrollRef.current.scrollLeft += (pixelsPerSecond * deltaTime) / 1000;

        // Reset scroll position if we've scrolled past the first set of items
        // This creates the infinite loop effect
        const maxScroll = scrollRef.current.scrollWidth / 3;
        if (scrollRef.current.scrollLeft >= maxScroll * 2) {
          scrollRef.current.scrollLeft -= maxScroll;
        } else if (scrollRef.current.scrollLeft <= 0) {
          scrollRef.current.scrollLeft += maxScroll;
        }
      }

      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  return (
    <div className="w-full">
      <div className="marquee-container" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onTouchStart={() => setIsHovered(true)} onTouchEnd={() => setIsHovered(false)}>
        <div 
          ref={scrollRef}
          className="marquee-track hide-scrollbar"
        >
          {duplicatedStudies.map((study, idx) => (
            <div 
              key={`${study.id}-${idx}`}
              className="logo-card group relative flex min-h-[400px] w-[270px] shrink-0 flex-col overflow-hidden rounded-2xl p-6 shadow-xl transition-transform hover:-translate-y-1 md:w-[315px]"
            >
              {/* Background Image & Overlay */}
              {study.image && (
                <>
                  <Image 
                    src={study.image} 
                    alt={study.title}
                    fill
                    className="absolute inset-0 z-0 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>
                  <div className="absolute inset-0 z-10 bg-[#3A0F10]/20 mix-blend-multiply"></div>
                </>
              )}
              {!study.image && (
                <div className="absolute inset-0 z-0 bg-ink"></div>
              )}

              {/* Content layered on top */}
              <div className="relative z-20 flex h-full flex-1 flex-col justify-between">
                <div>
                  <span className="inline-block rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                    {study.category}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-white drop-shadow-md">{study.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/90 drop-shadow-sm">{study.excerpt}</p>
                </div>
                
                <div className="mt-6">
                  {study.stats && study.stats.length > 0 && (
                    <div className="mb-4 flex gap-4 border-b border-white/20 pb-4">
                      {study.stats.map((stat, sIdx) => (
                        <div key={sIdx}>
                          <p className="font-display text-xl font-bold text-white drop-shadow-sm">{stat.value}</p>
                          <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-widest text-white/60">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <Link href={study.href} className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-white py-3 text-xs font-bold text-ink transition-colors hover:bg-signal">
                    View case study <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .marquee-container {
          position: relative;
          width: 100vw;
          left: 50%;
          transform: translateX(-50%);
          -webkit-mask-image: linear-gradient(to right, transparent 0, black 64px, black calc(100% - 64px), transparent 100%);
          mask-image: linear-gradient(to right, transparent 0, black 64px, black calc(100% - 64px), transparent 100%);
        }
        
        .marquee-track {
          display: flex;
          align-items: stretch;
          gap: 20px;
          width: 100%;
          padding: 8px 64px 24px 64px;
          overflow-x: auto;
        }
        
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
