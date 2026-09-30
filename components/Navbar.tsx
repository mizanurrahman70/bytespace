import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
];

export function Logo({ iconOnly = false }: { iconOnly?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2 text-lg font-bold text-white">
      <span className="grid size-7 place-items-center rounded-md bg-lime text-brand">
        <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
          <path d="M6 3h6a5 5 0 0 1 3.5 8.6A5 5 0 0 1 13 21H6V3Zm4 4v3h2a1.5 1.5 0 0 0 0-3h-2Zm0 7v3h3a1.5 1.5 0 0 0 0-3h-3Z" />
        </svg>
      </span>
      {!iconOnly && "ByteSpace"}
    </Link>
  );
}

export default function Navbar({ active = "/" }: { active?: string }) {
  return (
    <header className="relative z-20 mx-auto flex max-w-[1200px] items-center justify-between px-6 py-6 text-sm text-white">
      <Logo />

      <nav aria-label="Main" className="hidden gap-8 md:flex">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={l.href === active ? "font-semibold" : "text-white/80 hover:text-white"}
          >
            {l.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-5">
        <Link href="/login" className="hidden text-white/80 hover:text-white sm:block">
          Sign In
        </Link>
        <Link href="/register" className="hidden text-white/80 hover:text-white sm:block">
          Join Us
        </Link>
        <button aria-label="Cart" className="text-white">
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 7h12l-1 13H7L6 7Z" />
            <path d="M9 7a3 3 0 0 1 6 0" />
          </svg>
        </button>
      </div>
    </header>
  );
}
