import Link from "next/link";
import type { Course } from "@/lib/data";
import { AvatarStack } from "./Avatars";

export default function CourseCard({ course, i = 0 }: { course: Course; i?: number }) {
  const tones = ["from-slate-500 to-slate-800", "from-slate-300 to-slate-500", "from-emerald-900 to-slate-900", "from-zinc-600 to-zinc-900", "from-emerald-100 to-slate-200", "from-stone-400 to-stone-700"];
  return (
    <article className="group relative rounded-3xl border border-line bg-white p-3.5 transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgb(0_0_0/0.08)]">
      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
        {course.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={course.image} alt="" className="size-full object-cover transition duration-500 group-hover:scale-105" />
        ) : (
          <div className={`size-full bg-gradient-to-br ${tones[i % 6]}`} />
        )}
        <div className="absolute inset-x-3 bottom-3 flex justify-between gap-1 text-[11px] text-neutral-700">
          {["17 Lessons", "2 hours 16 mins", "59 Comments"].map((t) => (
            <span key={t} className="whitespace-nowrap rounded-full bg-white/60 px-2.5 py-1 backdrop-blur">{t}</span>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-start justify-between gap-2 px-1">
        <div className="min-w-0">
          <h3 className="truncate font-display text-lg font-semibold leading-tight"><Link href="/courses/build-digital-asset" className="after:absolute after:inset-0">{course.title}</Link></h3>
          <p className="mt-1 text-[11px] text-muted">by <span className="text-brand">purepearl studio</span></p>
        </div>
        <span className="shrink-0 text-base text-muted">4.5 <span className="text-neutral-300">★</span></span>
      </div>

      <div className="mt-3 flex items-center gap-3 px-1">
        <span className="flex items-center gap-1.5 rounded-full bg-chip px-3 py-1.5 text-[11px]">
          <svg viewBox="0 0 12 12" className="size-3" fill="currentColor" aria-hidden><rect x="1" y="7" width="2" height="4" rx="1" /><rect x="5" y="4" width="2" height="7" rx="1" /><rect x="9" y="1" width="2" height="10" rx="1" /></svg>
          Beginner
        </span>
        <AvatarStack />
      </div>
      <p className="mt-4 px-1 font-display text-xl font-semibold text-brand">$25<span className="font-sans text-[11px] font-normal text-muted">/lifetime</span></p>
    </article>
  );
}
