import React from "react";
import HeroSection from "../components/HeroSection";
import Partners from "../components/Partners";
import Services from "../components/Services";
import { partnersOne } from "../data/partnersData";
const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <Services />
      <Partners partners={partnersOne} />
    </div>
  );
};

export default Home;
