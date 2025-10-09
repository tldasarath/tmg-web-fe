import AboutSection from "@/components/about/AboutSection";
import BusinessSection from "@/components/businessSection/businessSection";
import { HeroSection } from "@/components/hero/HeroSection";
import ImageSection from "@/components/imageSection/imageSection1";
import { Navbar } from "@/components/navbar/Navbar";
import ServicesSection from "@/components/serviceSection/serviceSection";
import React from "react";

const page = () => {
  return (
    <>
      <div className="min-h-screen w-full">
        <Navbar />
        <HeroSection />
        <AboutSection/>
        <ImageSection/>
        <BusinessSection/>
        <ServicesSection/>
      </div>
    </>
  );
};

export default page;
