import Link from "next/link";
import type { Course } from "@/lib/data";

const avatars = ["#f59e0b", "#ec4899", "#8b5cf6", "#3b82f6"];

export default function CourseCard({ course, i = 0 }: { course: Course; i?: number }) {
  const tones = ["from-slate-500 to-slate-800", "from-slate-300 to-slate-500", "from-emerald-900 to-slate-900", "from-zinc-600 to-zinc-900", "from-emerald-100 to-slate-200", "from-stone-400 to-stone-700"];
  return (
    <article className="relative rounded-2xl border border-line bg-white p-3.5">
      <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
        {course.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={course.image} alt={course.title} className="size-full object-cover" />
        ) : (
          <div className={`size-full bg-gradient-to-br ${tones[i % 6]}`} />
        )}
        <div className="absolute inset-x-2 bottom-2 flex justify-between text-[11px] text-neutral-600">
          {["17 Lessons", "2 hours 16 mins", "59 Comments"].map((t) => (
            <span key={t} className="rounded-full bg-white/70 px-2.5 py-1 backdrop-blur">{t}</span>
          ))}
        </div>
      </div>

      <div className="mt-3 flex items-start justify-between gap-2 px-1">
        <div className="min-w-0">
          <h3 className="truncate font-display text-[17px] font-semibold leading-tight"><Link href="/courses/build-digital-asset" className="after:absolute after:inset-0">{course.title}</Link></h3>
          <p className="mt-0.5 text-[11px] text-muted">by <span className="text-brand">purepearl studio</span></p>
        </div>
        <span className="shrink-0 text-sm text-muted">4.5 <span className="text-neutral-300">★</span></span>
      </div>

      <div className="mt-3 flex items-center gap-2 px-1">
        <span className="rounded-full bg-chip px-3 py-1 text-[11px]">▂▄ Beginner</span>
        <span className="flex items-center">
          {avatars.map((c) => <i key={c} style={{ background: c }} className="-ml-1.5 size-6 rounded-full border-2 border-white first:ml-0" />)}
          <b className="-ml-1.5 grid size-6 place-items-center rounded-full bg-lime text-[9px]">26+</b>
        </span>
      </div>
      <p className="mt-3 px-1 text-lg font-bold text-brand">$25<span className="text-[10px] font-normal text-muted">/lifetime</span></p>
    </article>
  );
}
