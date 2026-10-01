"use client";
import { useMemo, useState } from "react";
import CourseCard from "./CourseCard";
import { categories, courses } from "@/lib/data";

const PER_PAGE = 18;
const PAGES = 5;

// placeholder catalogue: the 6 sample courses repeated to fill a results page
const catalogue = Array.from({ length: 3 }, () => courses).flat();

const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" } as const;
const Icon = ({ children, className = "size-5" }: { children: React.ReactNode; className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden>{children}</svg>
);
const icons = {
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></>,
  chevron: <path d="m6 9 6 6 6-6" />,
  filter: <path d="M4 5h16l-6 7.5V19l-4 1v-7.5L4 5Z" />,
  level: <path d="M6 20v-5M12 20V9M18 20V4" />,
  category: <><path d="M12 3 8 9h8l-4-6Z" /><rect x="4" y="13" width="7" height="7" rx="1" /><circle cx="17.5" cy="16.5" r="3.5" /></>,
  sort: <path d="M4 7h16M4 12h11M4 17h6" />,
  prev: <path d="m15 6-6 6 6 6" />,
  next: <path d="m9 6 6 6-6 6" />,
};

const pill = "flex h-12 items-center gap-2 rounded-full border border-line px-4 text-base transition hover:border-ink/30";

export default function CourseSearch({ nav }: { nav: React.ReactNode }) {
  const [query, setQuery] = useState("");
  const [scope, setScope] = useState("Courses");
  const [chip, setChip] = useState(categories[0]);
  const [sort, setSort] = useState("Most relevant");
  const [page, setPage] = useState(1);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = q ? catalogue.filter((c) => c.title.toLowerCase().includes(q)) : catalogue;
    return sort === "Title A–Z" ? [...list].sort((a, b) => a.title.localeCompare(b.title, undefined, { sensitivity: "base" })) : list;
  }, [query, sort]);

  const go = (p: number) => { setPage(Math.min(PAGES, Math.max(1, p))); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <>
      <div className="bg-grid bg-brand pb-16 text-white">
        {nav}
        <div className="container-x mt-12 text-center">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-[40px]">Find Your Next Course</h1>
          <form role="search" onSubmit={(e) => e.preventDefault()} className="mx-auto mt-8 flex max-w-[624px] items-center gap-4">
            <label className="flex h-[52px] flex-1 items-center gap-3 rounded-full bg-white px-6 text-ink/50">
              <Icon>{icons.search}</Icon>
              <span className="sr-only">Search {scope.toLowerCase()}</span>
              <input type="search" value={query} onChange={(e) => { setQuery(e.target.value); setPage(1); }} placeholder="Search"
                className="w-full bg-transparent text-lg text-ink outline-none placeholder:text-ink/50" />
            </label>
            <label className="relative">
              <span className="sr-only">Search in</span>
              <select value={scope} onChange={(e) => setScope(e.target.value)}
                className="h-12 cursor-pointer appearance-none rounded-full bg-lime pl-6 pr-12 text-lg text-ink outline-none transition hover:brightness-95">
                <option>Courses</option>
                <option>Creators</option>
              </select>
              <Icon className="pointer-events-none absolute right-5 top-1/2 size-5 -translate-y-1/2 text-ink">{icons.chevron}</Icon>
            </label>
          </form>
        </div>
      </div>

      <div className="container-x pt-[72px]">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-4">
            <button className={pill}><Icon>{icons.filter}</Icon>Filter</button>
            <button className={pill}><Icon>{icons.level}</Icon>Level</button>
            <button className={pill}><Icon>{icons.category}</Icon>Category</button>
          </div>
          <label className={`${pill} relative pr-5`}>
            <Icon>{icons.sort}</Icon>
            <span className="sr-only">Sort by</span>
            <select value={sort} onChange={(e) => setSort(e.target.value)} className="cursor-pointer appearance-none bg-transparent outline-none">
              <option>Most relevant</option>
              <option>Title A–Z</option>
            </select>
          </label>
        </div>

        <div className="mt-8 flex flex-wrap gap-3 xl:justify-between xl:gap-x-2">
          {categories.slice(0, 8).concat("Cooking").map((c) => (
            <button key={c} onClick={() => setChip(c)} aria-pressed={chip === c}
              className={`rounded-full px-4 py-2.5 text-base transition ${chip === c ? "bg-lime" : "bg-chip text-ink/80 hover:bg-neutral-200"}`}>{c}</button>
          ))}
        </div>

        {results.length ? (
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {results.slice(0, PER_PAGE).map((c, i) => <CourseCard key={i} course={c} i={i} />)}
          </div>
        ) : (
          <div className="mt-16 rounded-3xl border border-dashed border-line py-20 text-center">
            <p className="font-display text-xl font-semibold">No courses match &ldquo;{query}&rdquo;</p>
            <p className="mt-2 text-muted">Try a different keyword or browse the categories above.</p>
            <button onClick={() => setQuery("")} className="mt-6 rounded-full bg-lime px-6 py-2.5">Clear search</button>
          </div>
        )}

        {results.length > 0 && (
          <nav aria-label="Pagination" className="flex items-center justify-center gap-6 pt-[72px] text-xl">
            <button onClick={() => go(page - 1)} disabled={page === 1} aria-label="Previous page"
              className="grid h-12 w-14 place-items-center rounded-full border border-line transition hover:border-ink/30 disabled:opacity-40"><Icon className="size-6">{icons.prev}</Icon></button>
            {Array.from({ length: PAGES }, (_, i) => i + 1).map((n) => (
              <button key={n} onClick={() => go(n)} aria-current={n === page ? "page" : undefined}
                className={`font-display font-medium ${n === page ? "text-neutral-300" : "hover:text-brand"}`}>{n}</button>
            ))}
            <button onClick={() => go(page + 1)} disabled={page === PAGES} aria-label="Next page"
              className="grid h-12 w-14 place-items-center rounded-full border border-line transition hover:border-ink/30 disabled:opacity-40"><Icon className="size-6">{icons.next}</Icon></button>
          </nav>
        )}
      </div>
    </>
  );
}
