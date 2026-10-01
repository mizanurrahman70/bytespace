const marks = [
  <path key="0" d="M3 8c3-3 6 3 9 0s6 3 9 0M3 12c3-3 6 3 9 0s6 3 9 0M3 16c3-3 6 3 9 0s6 3 9 0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />,
  <path key="1" d="M12 2v5M12 17v5M2 12h5M17 12h5M5 5l3.5 3.5M15.5 15.5 19 19M5 19l3.5-3.5M15.5 8.5 19 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />,
  <><circle key="c" cx="12" cy="12" r="10" /><path key="p" d="M13 5 7 13h4l-1 6 6-8h-4l1-6Z" fill="#f5f5f6" /></>,
  <><circle key="c" cx="12" cy="12" r="10" /><path key="p" d="M8 8h3v3H8zM13 13h3v3h-3zM13 8h3v3h-3zM8 13h3v3H8z" fill="#f5f5f6" /></>,
  <><circle key="c" cx="12" cy="12" r="10" opacity=".35" /><circle key="d" cx="10" cy="12" r="7" /></>,
];

export default function LogoStrip() {
  return (
    <section className="bg-[#f5f5f6] py-14">
      <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-16 gap-y-6 px-6 text-neutral-500 lg:justify-between">
        {marks.map((m, i) => (
          <li key={i} className="flex items-center gap-2 font-display text-xl font-semibold">
            <svg viewBox="0 0 24 24" className="size-7" fill="currentColor" aria-hidden>{m}</svg>
            Logoipsum
          </li>
        ))}
      </ul>
    </section>
  );
}
