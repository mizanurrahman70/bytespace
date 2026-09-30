/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Chips from "./Chips";
import CourseCard from "./CourseCard";
import CourseGrid from "./CourseGrid";
import { HappyStudents, ProgressCard } from "./Avatars";
import { Coil, Cone, Cylinder, Ring } from "./Shapes";
import { categories, courses, paths, testimonials } from "@/lib/data";

const H2 = "font-display text-3xl font-semibold leading-tight tracking-tight sm:text-5xl";
const P = "mx-auto mt-5 max-w-3xl text-base leading-7 text-muted";

const icon = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" } as const;
const pathIcons: Record<(typeof paths)[number], React.ReactNode> = {
  Design: <><path d="m14 4 6 6-10 10H4v-6L14 4Z" /><path d="m4 4 6 6M9 3 3 9" /></>,
  Development: <><rect x="6" y="2" width="12" height="20" rx="2" /><path d="m10 9-2 3 2 3M14 9l2 3-2 3" /></>,
  "IT & Software": <><rect x="4" y="5" width="16" height="11" rx="1.5" /><path d="M2 19h20" /></>,
  Business: <><path d="M4 21V4h10v17M14 9h6v12M2 21h20" /><path d="M8 8h2M8 12h2M8 16h2M17 13h0M17 17h0" /></>,
  Marketing: <><path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1Z" /><path d="M16 8a5 5 0 0 1 0 8M19 5a9 9 0 0 1 0 14" /></>,
  Photography: <><path d="M4 7h3l2-3h6l2 3h3a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z" /><circle cx="12" cy="12" r="2" /><path d="M8.5 17a4 4 0 0 1 7 0" /></>,
};

export function Discover() {
  return (
    <section className="container-x py-24 text-center">
      <h2 className={H2}>Discover Your Passion,<br />Build Your Skills</h2>
      <p className={P}>At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.</p>
      <div className="mx-auto mt-10 max-w-5xl"><Chips items={categories} more center /></div>
      <div className="mt-16 text-left"><CourseGrid /></div>

      <h2 className={`${H2} mt-28 sm:!text-4xl`}>Explore Diverse Learning Paths at Bytespace</h2>
      <p className={P}>At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.</p>
      <div className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6 lg:gap-10">
        {paths.map((p) => (
          <Link key={p} href="/courses" className="group flex aspect-square flex-col items-center justify-center gap-3 rounded-3xl border border-line text-lg transition hover:border-lime hover:shadow-[0_12px_30px_rgb(208_247_12/0.35)]">
            <span className="grid size-14 place-items-center rounded-full bg-lime transition group-hover:scale-110" aria-hidden>
              <svg viewBox="0 0 24 24" className="size-6" {...icon}>{pathIcons[p]}</svg>
            </span>
            {p}
          </Link>
        ))}
      </div>
    </section>
  );
}

const check = (
  <span className="grid size-5 shrink-0 place-items-center rounded-full bg-brand text-white" aria-hidden>
    <svg viewBox="0 0 12 12" className="size-3" {...icon} strokeWidth={2}><path d="m3 6 2 2 4-4" /></svg>
  </span>
);

export function Growth() {
  const list = ["Share Your Expertise", "Monetize Your Passion", "Flexibility and Autonomy", "Build a Community"];
  return (
    <section className="bg-glow overflow-hidden py-24">
      <div className="container-x space-y-28">
        {/* learners */}
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 className={H2}>Your Path to Professional Growth Starts Here!</h2>
            <p className="mt-8 max-w-lg text-base leading-7 text-muted">Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.</p>
            <dl className="mt-10 flex gap-14">
              {[["12K", "Students"], ["70+", "Courses"], ["16", "Creators"]].map(([n, l]) => (
                <div key={l} className="flex flex-col-reverse"><dt className="mt-1 text-lg text-muted">{l}</dt><dd className="font-display text-4xl font-medium text-brand">{n}</dd></div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto h-[520px] w-full max-w-[560px]">
            <div className="absolute left-0 top-0 w-[300px] sm:w-[370px]"><CourseCard course={courses[0]} /></div>
            <img src="/images/people/learner.jpg" alt="Learner smiling while studying" className="absolute bottom-0 right-6 h-[400px] w-[280px] rounded-[40px] object-cover shadow-[0_30px_60px_rgb(0_0_0/0.25)] sm:right-16 sm:h-[440px] sm:w-[320px]" />
            <ProgressCard className="absolute right-0 top-[200px] w-52 sm:w-60" />
            <Coil className="animate-float absolute right-0 top-10 w-28 rotate-12 sm:w-32" />
          </div>
        </div>

        {/* creators */}
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative mx-auto h-[560px] w-full max-w-[560px] lg:order-none">
            <img src="/images/people/creator.jpg" alt="Creator with headphones" className="absolute bottom-0 left-12 h-[500px] w-[320px] rounded-[40px] object-cover shadow-[0_30px_60px_rgb(0_0_0/0.25)] sm:left-24 sm:w-[360px]" />
            <div className="absolute left-0 top-0 w-56 rounded-2xl bg-brand p-4 text-white shadow-lg sm:w-60">
              <p className="text-sm">Total Revenue</p><p className="text-[10px] text-white/70">July 1-28</p>
              <p className="mt-2 font-display text-2xl font-semibold">$120.29</p>
              <div className="mt-2 h-1.5 rounded-full bg-white"><div className="h-full w-2/3 rounded-full bg-lime" /></div>
            </div>
            <div className="absolute left-0 top-[150px] rounded-2xl bg-brand p-4 text-white shadow-lg">
              <p className="text-sm">Year to Date</p><p className="text-[10px] text-white/70">2023</p>
              <p className="mt-2 font-display text-2xl font-semibold">$1,200.38</p>
              <span className="mt-2 inline-block rounded-full bg-lime px-2 py-0.5 text-[10px] text-ink">+12$</span>
            </div>
            <Coil className="animate-float absolute right-4 top-24 w-32 -rotate-12 [animation-delay:-2s]" />
            <HappyStudents className="absolute bottom-12 right-0" />
          </div>

          <div>
            <h2 className={H2}>Create &amp; Manage Courses Easily.</h2>
            <p className="mt-8 max-w-lg text-base leading-7 text-muted"><b className="font-semibold text-ink">ByteSpace</b> supports individuals or entities in the creation, publication, and administration of educational courses.</p>
            <ul className="mt-10 space-y-4 text-lg">
              {list.map((l) => <li key={l} className="flex items-center gap-3">{check}{l}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CreatorCTA() {
  return (
    <section className="bg-grid relative isolate overflow-hidden bg-brand py-24 text-center text-white">
      <Coil className="absolute -left-6 -top-6 -z-10 w-40 rotate-[25deg]" />
      <Coil tone="white" className="absolute left-[15%] top-8 -z-10 hidden w-24 md:block" />
      <Cone className="absolute -left-4 top-[45%] -z-10 hidden w-28 md:block" />
      <Ring tone="lime" className="absolute -bottom-20 left-[4%] -z-10 hidden size-60 -rotate-12 md:block" />
      <Cone tone="lime" className="absolute right-[15%] top-10 -z-10 hidden w-28 rotate-[25deg] md:block" />
      <Cylinder tone="white" className="absolute -right-10 top-16 -z-10 h-64 w-40 rotate-[20deg]" />
      <Coil className="absolute -bottom-6 right-[8%] -z-10 hidden w-36 md:block" />
      <div className="container-x">
        <h2 className={`${H2} mx-auto max-w-2xl sm:!text-[44px]`}>Unlock Your Potential as a Creator with ByteSpace</h2>
        <p className="mx-auto mt-8 max-w-4xl text-base leading-7 text-white/90">Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.</p>
        <Link href="/register" className="mt-12 inline-block rounded-full bg-lime px-6 py-3 text-ink transition hover:brightness-95">Join as Creator</Link>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="bg-glow-alt py-24">
      <div className="container-x">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-24">
          <h2 className={H2}>Discover What Our Community Is Saying</h2>
          <p className="text-base leading-7 text-muted">At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.</p>
        </div>
        <div className="mt-16 grid items-start gap-10 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-3xl bg-white p-6 shadow-[0_8px_30px_rgb(0_0_0/0.04)]">
              <img src={t.avatar} alt="" className="size-20 rounded-full object-cover" />
              <figcaption className="mt-5"><b className="font-display text-lg font-semibold">{t.name}</b><span className="mt-1 block text-brand">{t.role}</span></figcaption>
              <blockquote className="mt-6 leading-[1.8] text-neutral-600">&ldquo;{t.text}&rdquo;</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
