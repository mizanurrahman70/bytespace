import { HappyStudents, ProgressCard } from "./Avatars";
import { Coil, Cone, Cylinder, Ring } from "./Shapes";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-10 text-center text-white">
      {/* decorative shapes */}
      <Coil className="animate-float absolute -left-8 top-40 -z-10 hidden w-52 rotate-[20deg] md:block" />
      <Coil tone="white" className="absolute left-[14%] top-[64%] -z-10 hidden w-28 rotate-[30deg] md:block" />
      <Cylinder className="absolute -right-12 top-52 -z-10 hidden h-72 w-44 -rotate-[25deg] md:block" />
      <Cone className="absolute right-[13%] top-[62%] -z-10 hidden w-32 rotate-12 md:block" />
      <Ring className="absolute bottom-6 left-[4%] -z-10 hidden size-60 -rotate-[30deg] scale-y-90 md:block" />
      <Coil tone="white" className="animate-float absolute bottom-10 right-[3%] -z-10 hidden w-48 [animation-delay:-3s] md:block" />

      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl">
          Get Access to Hundreds Courses Available
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-base text-white/90 sm:text-lg">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        <form role="search" className="mx-auto mt-12 flex max-w-xl items-center gap-4">
          <label className="flex h-[52px] flex-1 items-center gap-3 rounded-full bg-white px-6 text-ink/60">
            <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <span className="sr-only">Search courses</span>
            <input type="search" placeholder="Course, topic, creator" className="w-full bg-transparent text-ink outline-none placeholder:text-ink/50" />
          </label>
          <button type="submit" className="h-[46px] rounded-full bg-lime px-6 text-ink transition hover:brightness-95">Search</button>
        </form>
      </div>

      {/* stage: lime half-circle + student + floating cards */}
      <div className="relative mx-auto mt-10 h-[420px] w-full max-w-5xl sm:h-[500px]">
        <div aria-hidden className="absolute left-1/2 top-[70px] aspect-square w-[min(1120px,170%)] -translate-x-1/2 rounded-full bg-lime" />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/people/hero-student.jpg"
          alt="Smiling student ready to learn"
          className="absolute bottom-0 left-1/2 h-full w-[min(360px,70%)] -translate-x-1/2 rounded-t-full border-[6px] border-b-0 border-white/70 object-cover object-top shadow-2xl"
        />

        <div className="absolute left-3 top-[88px] rounded-2xl bg-white px-4 py-3 text-left text-ink shadow-lg sm:left-[14%]">
          <p className="text-base">UI/UX Design</p>
          <p className="mt-0.5 text-[11px] text-ink/50">200 Courses <span className="mx-1">•</span> 1000+ Students</p>
        </div>

        <ProgressCard className="absolute right-3 top-[100px] w-44 sm:right-[14%] sm:w-56" />
        <HappyStudents className="absolute bottom-16 left-3 hidden sm:left-[8%] sm:block" />
      </div>
    </section>
  );
}
