import CourseCard from "./CourseCard";
import { courses } from "@/lib/data";

export default function CourseGrid({ repeat = 1 }: { repeat?: number }) {
  const list = Array.from({ length: repeat }, () => courses).flat();
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
      {list.map((c, i) => <CourseCard key={i} course={c} i={i} />)}
    </div>
  );
}
