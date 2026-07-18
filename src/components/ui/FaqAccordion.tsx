"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export default function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="focus-ring flex w-full items-center justify-between gap-4 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-display text-base font-semibold">{item.q}</span>
              <Plus size={18} className={`shrink-0 text-signal transition-transform ${isOpen ? "rotate-45" : ""}`} />
            </button>
            {isOpen && <p className="pb-5 text-sm leading-relaxed text-ink/70">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}
