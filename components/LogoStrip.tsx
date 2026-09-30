const logos = ["Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum"];

export default function LogoStrip() {
  return (
    <section className="bg-neutral-100 py-12">
      <ul className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-14 gap-y-6 px-6 text-neutral-500">
        {logos.map((name, i) => (
          <li key={i} className="flex items-center gap-2 font-semibold">
            <span className="size-6 rounded-full border-2 border-current" aria-hidden />
            {name}
          </li>
        ))}
      </ul>
    </section>
  );
}
