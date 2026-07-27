"use client";

import { useState, useEffect } from "react";

const heroImages = [
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000",
];

export default function AnimatedHeroBackground() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {heroImages.map((src, index) => (
        <img
          key={src}
          src={src}
          alt="Hero Background"
          className="absolute inset-0 z-0 h-full w-full object-cover"
          style={{
            opacity: index === currentImageIndex ? 0.4 : 0,
            transform: index === currentImageIndex ? "scale(1.1)" : "scale(1)",
            transition: "opacity 1s ease-in-out, transform 6s ease-out"
          }}
        />
      ))}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-ink/80 via-ink/60 to-ink"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-signal/10 to-transparent mix-blend-overlay"></div>
    </>
  );
}
