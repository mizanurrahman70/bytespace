import Link from "next/link";

const lessons = [["01", "Introduction to Digital Assets", "12 mins"], ["02", "Design Principles for Impacts", "21 mins"], ["03", "Advanced Techniques in Digital Creation", "16 mins"]];
const includes = ["Learning Resources", "Quality Lesson Videos", "Certificate of Completion", "Private Consultation"];
const pitch = "Ready to Dive In? Enroll Now and Start Building Your Digital Future!";

export default function CourseSidebar() {
  return (
    <aside className="rounded-3xl border border-line bg-white p-7 shadow-sm">
      <h2 className="font-display text-xl font-semibold">112 Lessons (24 hours)</h2>
      <ul className="mt-4 space-y-3 text-sm">
        {lessons.map(([n, t, m]) => (
          <li key={n} className="flex gap-3"><span>{n}</span><span className="flex-1">{t}</span><span className="text-brand">{m}</span></li>
        ))}
      </ul>
      <p className="mt-3 text-sm text-muted">99 more videos</p>
      <p className="mt-6 text-sm leading-7 text-muted">{pitch}</p>
      <p className="mt-4 font-display text-4xl font-semibold text-brand">$25<span className="text-sm font-normal text-muted">/lifetime</span></p>
      <button className="mt-4 h-12 w-full rounded-full bg-lime font-medium">Enroll Now</button>
      <h3 className="mt-6 font-display text-lg font-semibold">This course include</h3>
      <ul className="mt-4 space-y-3 text-sm text-muted">
        {includes.map((i) => <li key={i} className="flex items-center gap-3"><span className="text-brand" aria-hidden>▣</span>{i}</li>)}
      </ul>
      <div className="mt-6 border-t border-line pt-6">
        <div className="flex items-center gap-3"><span className="size-12 rounded-full bg-neutral-300" aria-hidden /><div className="leading-tight"><p>PurePearl Studio</p><p className="text-sm text-muted">Professional Creator</p></div></div>
        <p className="mt-5 text-sm leading-7 text-muted">{pitch}</p>
        <Link href="/creators" className="mt-4 inline-block rounded-full border border-line px-4 py-2 text-sm">See Full Profile</Link>
      </div>
    </aside>
  );
}
