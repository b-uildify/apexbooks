import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Software from "@/components/Software";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Software />
      <Testimonials />
      <Contact />
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Index;
