import Link from "next/link";
import { Logo } from "./Navbar";
import CourseCard from "./CourseCard";
import { AvatarStack } from "./Avatars";
import { Coil, Cone, Ring } from "./Shapes";

export default function AuthShell({ title, blurb, children }: { title: string; blurb: string; children: React.ReactNode }) {
  return (
    <main className="bg-grid min-h-screen bg-brand py-8 text-white">
      <div className="container-x">
        <Logo iconOnly />
        <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1fr_580px]">
          <div className="self-start">
            <h1 className="text-xl font-semibold">{title}</h1>
            <p className="mt-4 max-w-md text-lg leading-8">{blurb}</p>
            {/* composed preview: two cards + stat tile + shapes */}
            <div className="relative mt-10 hidden h-[520px] w-[520px] max-w-full lg:block" aria-hidden>
              <div className="absolute left-0 top-32 w-[380px] text-ink"><CourseCard course={{ title: "Build Digital Asset" }} i={1} /></div>
              <div className="absolute left-[110px] top-0 z-10 w-[370px] text-ink shadow-xl"><CourseCard course={{ title: "the Power of Big Data" }} i={2} /></div>
              <Ring tone="lime" className="absolute left-8 top-4 z-20 size-40" />
              <Cone tone="lime" className="absolute -left-2 top-[400px] z-20 w-28" />
              <div className="absolute left-[226px] top-[440px] z-20 w-[260px] rounded-xl bg-lime p-4 text-ink">
                <p>Happy Students</p><p className="text-[11px]">4.5 (240) ★</p>
                <div className="mt-2"><AvatarStack count="2K+" n={5} size="size-9" ring="border-lime" /></div>
              </div>
              <Coil tone="white" className="absolute left-[400px] top-[350px] z-30 w-28" />
            </div>
          </div>
          <section className="flex min-h-[784px] flex-col rounded-[32px] bg-white p-10 text-ink">{children}</section>
        </div>
      </div>
    </main>
  );
}

export function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="mt-6 block text-sm">
      {label}
      <input {...props} className="mt-2 h-[52px] w-full rounded-xl border border-line bg-neutral-50 px-5 text-base outline-none placeholder:text-neutral-400 focus:border-brand" />
    </label>
  );
}

export function AuthHeading({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return (
    <>
      <p className="mt-2 text-brand">{eyebrow}</p>
      <h2 className="font-display text-5xl font-semibold leading-[1.1]">{children}</h2>
    </>
  );
}

export function AuthSwitch({ text, href, cta }: { text: string; href: string; cta: string }) {
  return <p className="mt-auto pb-2 text-center text-neutral-500">{text} <Link href={href} className="text-brand">{cta}</Link></p>;
}
