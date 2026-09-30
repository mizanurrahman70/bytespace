export default function Chips({ items, center = false }: { items: string[]; center?: boolean }) {
  return (
    <div className={`flex flex-wrap gap-2.5 ${center ? "justify-center" : ""}`}>
      {items.map((c, i) => (
        <button key={c} className={`rounded-full px-4 py-2 text-xs ${i === 0 ? "bg-lime font-medium" : "bg-chip text-ink/80 hover:bg-neutral-200"}`}>
          {c}
        </button>
      ))}
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
