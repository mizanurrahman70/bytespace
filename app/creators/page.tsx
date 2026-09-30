import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseGrid from "@/components/CourseGrid";
import { Toolbar } from "@/components/Chips";

export default function CreatorProfile() {
  return (
    <main>
      <div className="bg-grid bg-brand pb-14 text-white">
        <Navbar active="/creators" />
        <div className="container-x mt-8">
          <div className="flex items-center gap-5">
            <span className="size-24 rounded-2xl bg-pink-200" aria-hidden />
            <div>
              <h1 className="flex items-center gap-3 text-4xl font-semibold">PurePearl Studio <span className="rounded-full bg-lime px-4 py-1 text-base font-normal text-ink">Creator</span></h1>
              <p className="mt-1 text-lg">Passionate UI/UX, Web designer</p>
            </div>
          </div>
          <p className="mt-10 max-w-none text-lg leading-8">Welcome to the creative world of [Creator&apos;s Name]. Here, you&apos;ll discover the passion, expertise, and inspiration that drive my creative journey. Let&apos;s explore and learn together!<br />Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.</p>
          <div className="mt-10 flex items-center justify-between">
            <div className="flex gap-4 text-lg">
              <span className="rounded-full bg-white px-6 py-2.5 text-ink"><b className="font-normal text-brand">3</b> Products</span>
              <span className="rounded-full bg-white px-6 py-2.5 text-ink"><b className="font-normal text-brand">12</b> Followers</span>
            </div>
            <button className="rounded-full bg-lime px-6 py-2.5 text-lg text-ink">Follow</button>
          </div>
        </div>
      </div>
      <div className="container-x space-y-8 pt-14"><Toolbar /><CourseGrid /></div>
      <Footer />
    </main>
  );
}
