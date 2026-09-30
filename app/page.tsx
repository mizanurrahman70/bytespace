import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import Footer from "@/components/Footer";
import { CreatorCTA, Discover, Growth, Testimonials } from "@/components/HomeSections";

export default function Home() {
  return (
    <main>
      <div className="relative bg-brand"><Navbar active="/" /><Hero /></div>
      <LogoStrip />
      <Discover />
      <Growth />
      <CreatorCTA />
      <Testimonials />
      <Footer />
    </main>
  );
}
