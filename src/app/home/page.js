import AboutSection from "@/components/about/AboutSection";
import BusinessDestination from "@/components/businessSection/BusinessDestination";
import BusinessSection from "@/components/businessSection/businessSection";
import FounderSection from "@/components/founderSection/FounderSection";
import Gallery from "@/components/gallerySection/Gallery";
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
        <FounderSection/>
        <BusinessDestination/>
        <Gallery/>
      </div>
    </>
  );
};

export default page;
