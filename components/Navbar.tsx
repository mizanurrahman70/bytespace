import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
];

export function Logo({ iconOnly = false }: { iconOnly?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2 font-display text-xl font-bold tracking-tight text-white">
      {/* lime "b" mark with a play notch */}
      <svg viewBox="0 0 32 32" className="size-8" aria-hidden>
        <rect x="2" y="1" width="9" height="28" rx="4.5" fill="#d0f70c" />
        <circle cx="19" cy="19" r="11" fill="#d0f70c" />
        <path d="M16 14.5v9l7-4.5z" fill="#003be2" />
      </svg>
      {!iconOnly && <span>ByteSpace</span>}
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
