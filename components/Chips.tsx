"use client";
import { useState } from "react";

export default function Chips({ items, center = false, more = false }: { items: string[]; center?: boolean; more?: boolean }) {
  const [active, setActive] = useState(items[0]);
  return (
    <div className={`flex flex-wrap gap-x-4 gap-y-5 ${center ? "justify-center" : ""}`}>
      {items.map((c) => (
        <button key={c} onClick={() => setActive(c)} aria-pressed={active === c}
          className={`rounded-full px-4 py-2.5 text-base transition ${active === c ? "bg-lime" : "bg-chip text-ink/80 hover:bg-neutral-200"}`}>
          {c}
        </button>
      ))}
      {more && <button className="px-2 text-base text-brand hover:underline">+ More</button>}
    </div>
  );
}

export function Toolbar() {
  const pill = "rounded-full border border-line px-4 py-2 text-sm";
  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div className="flex gap-3"><button className={pill}>Filter</button><button className={pill}>Level</button><button className={pill}>Category</button></div>
      <button className={pill}>Most relevant</button>
    </div>
  );
}
