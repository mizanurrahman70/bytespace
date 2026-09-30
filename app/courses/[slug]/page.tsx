import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseTabs from "@/components/CourseTabs";
import CourseSidebar from "@/components/CourseSidebar";

const pill = "inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm text-ink";

export default function CourseDetails() {
  return (
    <main>
      <div className="relative">
        <div aria-hidden className="bg-grid absolute inset-x-0 top-0 h-[600px] bg-brand lg:h-[640px]" />
        <div className="relative">
          <Navbar active="/courses" />
          <div className="container-x grid gap-10 lg:grid-cols-[1fr_400px]">
            <div className="min-w-0">
              <div className="mt-6 flex items-start justify-between gap-4 text-white">
                <div>
                  <h1 className="text-3xl font-semibold sm:text-4xl">Build Digital Asset: A Comprehensive Guide</h1>
                  <p className="mt-1 font-display text-lg font-medium">Unlock the Power of Digital Creation with Expert Guidance</p>
                  <p className="mt-4">by <span className="text-lime">purepearl studio</span></p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <span className={pill}>▂▄ Intermediate</span>
                <span className={pill}><span className="text-brand">★</span> 4.8 (172 reviews)</span>
                <span className={pill}>👥 199 Students</span>
              </div>
              <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-200 to-neutral-400">
                <button aria-label="Play preview" className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl bg-white/40 text-white backdrop-blur">▶</button>
              </div>
              <CourseTabs />
            </div>
            <div className="lg:mt-[190px]"><CourseSidebar /></div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
