"use client";

import { useEffect, useRef, useState } from "react";
import {
  UtensilsCrossed,
  BedDouble,
  Car,
  Building2,
  PaintBucket,
  Truck,
  GraduationCap,
  Navigation,
  Cookie,
  Sparkles,
  LucideIcon
} from "lucide-react";

type ClientLogo = {
  name: string;
  icon: LucideIcon;
  color: string;
};

const clients: ClientLogo[] = [
  { name: "Pizza Hut", icon: UtensilsCrossed, color: "#E5484D" },
  { name: "OYO Rooms", icon: BedDouble, color: "#121212" },
  { name: "Ford", icon: Car, color: "#1C1C1C" },
  { name: "JK Cement", icon: Building2, color: "#6B6B63" },
  { name: "Berger Paints", icon: PaintBucket, color: "#E5484D" },
  { name: "Swaraj Tractors", icon: Truck, color: "#C63A3E" },
  { name: "SRM Institute", icon: GraduationCap, color: "#121212" },
  { name: "Mega Cabs", icon: Navigation, color: "#1C1C1C" },
  { name: "Kurkure", icon: Cookie, color: "#E5484D" },
  { name: "Nail Rituals", icon: Sparkles, color: "#C63A3E" }
];

export default function ClientLogos() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex flex-wrap items-center justify-center gap-3">
      {clients.map((client, i) => (
        <div
          key={client.name}
          className="tag-pill flex items-center gap-2 transition-all duration-700 ease-out"
          style={{
            transitionDelay: `${i * 70}ms`,
            transform: visible ? "translateX(0)" : "translateX(-60px)",
            opacity: visible ? 1 : 0
          }}
        >
          <span
            className="flex h-6 w-6 items-center justify-center rounded-full text-white"
            style={{ backgroundColor: client.color }}
          >
            <client.icon size={13} />
          </span>
          {client.name}
        </div>
      ))}
    </div>
  );
}
