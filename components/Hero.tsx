import { Cone, Cylinder, LimeSquiggle, Ring, WhiteSquiggle } from "./Shapes";

const students = ["#f59e0b", "#ec4899", "#8b5cf6", "#10b981", "#3b82f6"];

export default function Hero() {
  return (
    <section className="bg-grid relative isolate overflow-hidden pt-10 text-center text-white">
      {/* decorative shapes */}
      <LimeSquiggle className="absolute -left-10 top-24 -z-10 hidden w-44 -rotate-12 md:block" />
      <Cylinder className="absolute -right-10 top-28 -z-10 hidden h-40 w-32 rotate-[20deg] md:block" />
      <Cone className="absolute right-[12%] top-[46%] -z-10 hidden w-24 md:block" />
      <Ring className="absolute -left-4 bottom-8 -z-10 hidden size-40 md:block" />
      <WhiteSquiggle className="absolute -right-6 bottom-16 -z-10 hidden w-40 md:block" />

      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Get Access to Hundreds Courses Available
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-sm text-white/85">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        <form role="search" className="mx-auto mt-10 flex max-w-md items-center gap-2">
          <label className="flex flex-1 items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm text-ink/60">
            <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <input
              type="search"
              placeholder="Course, topic, creator"
              className="w-full bg-transparent text-ink outline-none placeholder:text-ink/50"
            />
          </label>
          <button
            type="submit"
            className="rounded-full bg-lime px-5 py-2.5 text-sm font-semibold text-ink transition hover:brightness-95"
          >
            Search
          </button>
        </form>
      </div>

      {/* stage: lime half-circle + student + floating cards */}
      <div className="relative mx-auto mt-10 h-[380px] w-full max-w-4xl sm:h-[430px]">
        <div aria-hidden className="absolute bottom-[-46%] left-1/2 aspect-square w-[min(760px,130%)] -translate-x-1/2 rounded-full bg-lime" />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-student.svg"
          alt="Smiling student with headphones holding a laptop"
          className="absolute bottom-0 left-1/2 h-[92%] -translate-x-1/2 object-contain"
        />

        <div className="absolute left-2 top-[22%] rounded-xl bg-white p-3 text-left text-ink shadow-lg sm:left-6">
          <p className="text-xs font-semibold">UI/UX Design</p>
          <p className="mt-0.5 text-[10px] text-ink/50">240 Courses • 1000+ Students</p>
        </div>

        <div className="absolute right-2 top-[26%] w-40 rounded-xl bg-white p-3 text-left text-ink shadow-lg sm:right-6">
          <p className="text-[10px] text-ink/60">Learning Progress</p>
          <p className="mt-1 text-2xl font-bold">55%</p>
          <div className="mt-1 h-1 rounded-full bg-ink/10">
            <div className="h-1 w-[55%] rounded-full bg-lime" />
          </div>
        </div>

        <div className="absolute bottom-[12%] left-2 rounded-xl bg-white p-3 text-left text-ink shadow-lg sm:left-10">
          <p className="text-xs font-semibold">Happy Students</p>
          <p className="text-[10px] text-ink/50">4.5 (2K)</p>
          <div className="mt-2 flex items-center">
            {students.map((c) => (
              <span
                key={c}
                style={{ background: c }}
                className="-ml-1.5 size-6 rounded-full border-2 border-white first:ml-0"
              />
            ))}
            <span className="-ml-1.5 grid size-6 place-items-center rounded-full bg-lime text-[9px] font-bold">
              2K+
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
