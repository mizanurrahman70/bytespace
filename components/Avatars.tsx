/* eslint-disable @next/next/no-img-element */
import { avatars } from "@/lib/data";

/** Overlapping avatar photos ending in a lime "count" bubble. */
export function AvatarStack({ count = "26+", n = 4, size = "size-6", ring = "border-white" }: { count?: string; n?: number; size?: string; ring?: string }) {
  return (
    <span className="flex items-center">
      {avatars.slice(0, n).map((src) => (
        <img key={src} src={src} alt="" className={`-ml-1.5 ${size} rounded-full border-2 ${ring} object-cover first:ml-0`} />
      ))}
      <b className={`-ml-1.5 grid ${size} place-items-center rounded-full border-2 ${ring} bg-lime text-[9px] font-semibold text-ink`}>{count}</b>
    </span>
  );
}

/** White "Happy Students" floating card used in the hero and growth sections. */
export function HappyStudents({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-2xl bg-white p-4 text-left text-ink shadow-[0_12px_40px_rgb(0_0_0/0.12)] ${className}`}>
      <p className="text-sm">Happy Students</p>
      <p className="text-[10px] text-ink/70">4.5 <span className="text-ink/40">(240)</span> <span className="text-lime">★</span></p>
      <div className="mt-2"><AvatarStack count="2K+" n={6} size="size-9" /></div>
    </div>
  );
}

/** "Learning Progress 55%" floating card. */
export function ProgressCard({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-2xl bg-white p-4 text-left text-ink shadow-[0_12px_40px_rgb(0_0_0/0.12)] ${className}`}>
      <p className="text-xs">Learning Progress</p>
      <p className="mt-1 font-display text-4xl font-semibold">55%</p>
      <div className="mt-2 h-1.5 rounded-full bg-neutral-100"><div className="h-full w-[55%] rounded-full bg-lime" /></div>
    </div>
  );
}
