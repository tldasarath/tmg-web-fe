import BusinessSection from "@/components/businessSection/businessSection";
import { HeroSection } from "@/components/hero/HeroSection";
import ImageSection from "@/components/imageSection/imageSection1";
import { Navbar } from "@/components/navbar/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <div className="min-h-screen w-full">
        <Navbar />
        <HeroSection />
        <ImageSection/>
        <BusinessSection/>
      </div>
    </>
  );
};

export default page;
