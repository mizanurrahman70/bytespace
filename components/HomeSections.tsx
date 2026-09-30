import Link from "next/link";
import Chips from "./Chips";
import CourseGrid from "./CourseGrid";
import { Cone, Cylinder, LimeSquiggle, WhiteSquiggle } from "./Shapes";
import { categories, paths, testimonials } from "@/lib/data";

const H2 = "font-display text-3xl font-semibold leading-tight sm:text-4xl";
const P = "mx-auto mt-4 max-w-2xl text-sm text-muted";

export function Discover() {
  return (
    <section className="container-x py-20 text-center">
      <h2 className={H2}>Discover Your Passion,<br />Build Your Skills</h2>
      <p className={P}>At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.</p>
      <div className="mx-auto mt-8 max-w-3xl"><Chips items={[...categories.slice(0, 15), "Cooking", "+ More"].slice(0, 17)} center /></div>
      <div className="mt-12 text-left"><CourseGrid /></div>

      <h2 className={`${H2} mt-24 !text-3xl`}>Explore Diverse Learning Paths at Bytespace</h2>
      <p className={P}>At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone.</p>
      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {paths.map((p) => (
          <div key={p} className="flex flex-col items-center gap-3 rounded-2xl border border-line py-6 text-sm font-medium">
            <span className="grid size-10 place-items-center rounded-full bg-lime" aria-hidden>◆</span>{p}
          </div>
        ))}
      </div>
    </section>
  );
}

const glow = "bg-[radial-gradient(circle_at_85%_10%,#e9fbb0_0,transparent_40%),radial-gradient(circle_at_5%_60%,#dfe6ff_0,transparent_40%)]";

export function Growth() {
  const list = ["Share Your Expertise", "Monetize Your Passion", "Flexibility and Autonomy", "Build a Community"];
  return (
    <section className={`${glow} py-20`}>
      <div className="container-x space-y-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className={H2}>Your Path to Professional Growth Starts Here!</h2>
            <p className="mt-4 max-w-md text-sm text-muted">Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey.</p>
            <dl className="mt-8 flex gap-10 font-display">
              {[["12K", "Students"], ["70+", "Courses"], ["16", "Creators"]].map(([n, l]) => (
                <div key={l}><dt className="text-2xl font-semibold text-brand">{n}</dt><dd className="text-xs text-muted">{l}</dd></div>
              ))}
            </dl>
          </div>
          <div className="relative grid h-72 place-items-end rounded-3xl bg-white/50"><LimeSquiggle className="absolute right-6 top-4 w-28" /><span className="pb-4 text-xs text-muted">Hero image</span></div>
        </div>

        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative grid h-72 place-items-end rounded-3xl bg-white/50"><LimeSquiggle className="absolute left-6 top-4 w-28" /><span className="pb-4 text-xs text-muted">Creator image</span></div>
          <div>
            <h2 className={H2}>Create &amp; Manage Courses Easily.</h2>
            <p className="mt-4 max-w-md text-sm text-muted">ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.</p>
            <ul className="mt-6 space-y-3 text-sm">
              {list.map((l) => <li key={l} className="flex items-center gap-3"><span className="grid size-4 place-items-center rounded-full bg-brand text-[9px] text-white">✓</span>{l}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CreatorCTA() {
  return (
    <section className="bg-grid relative overflow-hidden bg-brand py-20 text-center text-white">
      <Cone className="absolute -left-4 top-4 w-20 opacity-90" />
      <WhiteSquiggle className="absolute left-16 top-4 hidden w-20 md:block" />
      <Cylinder className="absolute -right-8 top-6 h-28 w-24 rotate-[15deg] !bg-white" />
      <Cone className="absolute right-[18%] top-8 hidden w-16 md:block [&_polygon]:fill-lime [&_polygon]:stroke-lime" />
      <div className="container-x relative">
        <h2 className={`${H2} mx-auto max-w-md`}>Unlock Your Potential as a Creator with ByteSpace</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-white/85">Experience the collaboration of creators and an appealing selection of courses. Be part of a community using our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.</p>
        <Link href="/register" className="mt-8 inline-block rounded-full bg-lime px-6 py-2.5 text-sm font-medium text-ink">Join as Creator</Link>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className={`${glow} py-20`}>
      <div className="container-x">
        <div className="grid items-end gap-6 md:grid-cols-2">
          <h2 className={H2}>Discover What Our Community is Saying</h2>
          <p className="text-sm text-muted">At ByteSpace, our vibrant community and creators is at the heart of what we do. Hear directly from those who have experienced the transformative power of learning and creating on our platform.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl bg-white p-6 shadow-sm">
              <span className="block size-10 rounded-full bg-neutral-300" aria-hidden />
              <figcaption className="mt-3"><b className="font-display text-sm">{t.name}</b><span className="block text-xs text-brand">{t.role}</span></figcaption>
              <blockquote className="mt-4 text-xs leading-relaxed text-muted">&ldquo;{t.text}&rdquo;</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
