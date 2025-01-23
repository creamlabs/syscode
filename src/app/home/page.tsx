import Demo from "@/components/landing/Demo";
import FAQ from "@/components/landing/FAQ";
import Features from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import Navbar from "@/components/landing/Navbar";
import Pricing from "@/components/landing/Pricing";
import Tutorials from "@/components/landing/Tutorials";

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      {/* <Demo /> */}
      {/* <Tutorials/> */}
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default page;
