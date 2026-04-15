import Hero from "@/components/sections/Hero";
import AboutUs from "@/components/sections/AboutUs";
import Packages from "@/components/sections/Packages";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Packages />
      <Gallery />
      <Testimonials />
      <Contact />
    </>
  );
}