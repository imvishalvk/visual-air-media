import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import BrochureSection from "../components/BrochureSection";
import Contact from "../components/Contact";
import PortfolioPreview from "../components/PortfolioPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <PortfolioPreview />
      <About />
      <Testimonials />
      <BrochureSection />
      <Contact />
    </>
  );
}
