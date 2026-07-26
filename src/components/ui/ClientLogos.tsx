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
  domain: string;
  icon: LucideIcon;
  color: string;
};

const clients: ClientLogo[] = [
  { name: "Pizza Hut", domain: "pizzahut.com", icon: UtensilsCrossed, color: "#E5484D" },
  { name: "OYO Rooms", domain: "oyorooms.com", icon: BedDouble, color: "#121212" },
  { name: "Ford", domain: "ford.com", icon: Car, color: "#1C1C1C" },
  { name: "JK Cement", domain: "jkcement.com", icon: Building2, color: "#6B6B63" },
  { name: "Berger Paints", domain: "bergerpaints.com", icon: PaintBucket, color: "#E5484D" },
  { name: "Swaraj Tractors", domain: "swarajtractors.com", icon: Truck, color: "#C63A3E" },
  { name: "SRM Institute", domain: "srmist.edu.in", icon: GraduationCap, color: "#121212" },
  { name: "Mega Cabs", domain: "megacabs.com", icon: Navigation, color: "#1C1C1C" },
  { name: "Kurkure", domain: "kurkure.com", icon: Cookie, color: "#E5484D" },
  { name: "Nail Rituals", domain: "nailrituals.in", icon: Sparkles, color: "#C63A3E" }
];

function ClientBadge({ client, visible, delay }: { client: ClientLogo; visible: boolean; delay: number }) {
  const [imgFailed, setImgFailed] = useState(false);
  const logoUrl = `https://www.google.com/s2/favicons?domain=${client.domain}&sz=64`;

  return (
    <div
      className="tag-pill flex items-center gap-2 transition-all duration-700 ease-out"
      style={{
        transitionDelay: `${delay}ms`,
        transform: visible ? "translateX(0)" : "translateX(-60px)",
        opacity: visible ? 1 : 0
      }}
    >
      <span className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-inset ring-ink/10">
        {imgFailed ? (
          <span
            className="flex h-full w-full items-center justify-center text-white"
            style={{ backgroundColor: client.color }}
          >
            <client.icon size={13} />
          </span>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={logoUrl}
            alt={`${client.name} logo`}
            className="h-4 w-4 object-contain"
            onError={() => setImgFailed(true)}
          />
        )}
      </span>
      {client.name}
    </div>
  );
}

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
        <ClientBadge key={client.name} client={client} visible={visible} delay={i * 70} />
      ))}
    </div>
  );
}