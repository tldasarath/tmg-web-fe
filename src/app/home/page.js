import AboutSection from "@/components/about/AboutSection";
import { HeroSection } from "@/components/hero/HeroSection";
import { Navbar } from "@/components/navbar/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <div className="min-h-screen w-full">
        <Navbar />
        <HeroSection />
        <AboutSection/>
      </div>
    </>
  );
};

export default page;
