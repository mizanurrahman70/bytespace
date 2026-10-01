import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseSearch from "@/components/CourseSearch";

export default function CoursesPage() {
  return (
    <main>
      <CourseSearch nav={<Navbar active="/courses" />} />
      <Footer />
    </main>
  );
}
