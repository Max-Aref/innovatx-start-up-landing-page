import { memo } from "react";
import Hero from "../sections/Hero";
import Features from "../sections/Features";
import Pricing from "../sections/Pricing";
import FAQ from "../sections/Faq";
import Contact from "../sections/Contact";
// Import any other sections you have

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      <FAQ />
      <Contact />
      {/* Add any other sections from your original main page */}
    </>
  );
};

export default memo(Home);
