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
  domain?: string;
  localImage?: string;
  icon: LucideIcon;
  color: string;
};

const clients: ClientLogo[] = [
  { name: "Pizza Hut", domain: "pizzahut.com", icon: UtensilsCrossed, color: "#E5484D" },
  { name: "OYO Rooms", domain: "oyorooms.com", icon: BedDouble, color: "#121212" },
  { name: "Ford", domain: "ford.com", icon: Car, color: "#1C1C1C" },
  { name: "JK Cement", localImage: "/client-jk-cement.png", icon: Building2, color: "#6B6B63" },
  { name: "Berger Paints", domain: "bergerpaints.com", icon: PaintBucket, color: "#E5484D" },
  { name: "Swaraj Tractors", localImage: "/client-swaraj-tractors.png", icon: Truck, color: "#0C8A3E" },
  { name: "SRM Institute", localImage: "/client-srm-institute.png", icon: GraduationCap, color: "#121212" },
  { name: "Mega Cabs", domain: "megacabs.com", icon: Navigation, color: "#1C1C1C" },
  { name: "Kurkure", localImage: "/client-kurkure.png", icon: Cookie, color: "#E5484D" },
  { name: "Nail Rituals", localImage: "/client-nail-rituals.png", icon: Sparkles, color: "#9C7A4E" }
];

function ClientBadge({ client, visible, delay }: { client: ClientLogo; visible: boolean; delay: number }) {
  const [imgFailed, setImgFailed] = useState(false);
  const src = client.localImage ?? (client.domain ? `https://www.google.com/s2/favicons?domain=${client.domain}&sz=64` : null);
 const sizeClass = client.localImage ? "h-[25px] w-[25px]" : "h-9 w-9";

  return (
    <div
      className="tag-pill flex items-center gap-2 transition-all duration-700 ease-out"
      style={{
        transitionDelay: `${delay}ms`,
        transform: visible ? "translateX(0)" : "translateX(-60px)",
        opacity: visible ? 1 : 0
      }}
    >
      <span className={`flex ${sizeClass} items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-inset ring-ink/10`}>
        {imgFailed || !src ? (
          <span
            className="flex h-full w-full items-center justify-center text-white"
            style={{ backgroundColor: client.color }}
          >
            <client.icon size={client.localImage ? 13 : 18} />
          </span>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={`${client.name} logo`}
            className="h-full w-full object-cover"
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