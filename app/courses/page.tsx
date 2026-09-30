import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseGrid from "@/components/CourseGrid";
import Chips, { Toolbar } from "@/components/Chips";
import { categories } from "@/lib/data";

export default function CoursesPage() {
  return (
    <main>
      <div className="bg-grid bg-brand pb-10 text-white">
        <Navbar active="/courses" />
        <div className="container-x mt-6 text-center">
          <h1 className="text-3xl font-semibold">Find Your Next Course</h1>
          <form role="search" className="mx-auto mt-6 flex max-w-2xl gap-3">
            <input type="search" placeholder="Search" className="h-11 flex-1 rounded-full bg-white px-5 text-sm text-ink outline-none" />
            <button className="h-11 rounded-full bg-lime px-5 text-sm font-medium text-ink">Courses ⌄</button>
          </form>
        </div>
      </div>

      <div className="container-x space-y-6 pt-12">
        <Toolbar />
        <Chips items={categories.slice(0, 9)} />
        <div className="pt-4"><CourseGrid repeat={3} /></div>
        <nav aria-label="Pagination" className="flex items-center justify-center gap-6 pt-6 text-sm">
          <button className="grid size-10 place-items-center rounded-full border border-line" aria-label="Previous">‹</button>
          {[1, 2, 3, 4, 5].map((n) => <a key={n} href="#" className={n === 1 ? "text-muted" : "font-medium"}>{n}</a>)}
          <button className="grid size-10 place-items-center rounded-full border border-line" aria-label="Next">›</button>
        </nav>
      </div>
      <Footer />
    </main>
  );
}
