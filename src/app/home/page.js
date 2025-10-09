import AboutSection from "@/components/about/AboutSection";
import BusinessSection from "@/components/businessSection/businessSection";
import GoldenVisaBanner from "@/components/goldenVisa/GoldenVisaBanner";
import { HeroSection } from "@/components/hero/HeroSection";
import ImageSection from "@/components/imageSection/imageSection1";
import LicenseSetupPage from "@/components/licenseCategory/LicenseSetupSection";
import LicenseSetup from "@/components/licenseCategory/LicenseSetupSection";
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
        <GoldenVisaBanner/>
        <LicenseSetupPage/>
      </div>
    </>
  );
};

export default page;
