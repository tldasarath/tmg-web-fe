import AboutUsSection from "@/components/about/about";
import AboutChairmanSection from "@/components/about/AboutChairmanSection";
import MissionVisionSection from "@/components/about/MissionVisionSection";
import OurValuesSection from "@/components/about/OurValuesSection";
import ScheduleSection from "@/components/about/ScheduleSection";
import WhyChooseSection from "@/components/about/WhyChooseSection";
import BannerSection from "@/components/banner/Banner";
import Footer from "@/components/footer/Footer";

import { Navbar } from "@/components/navbar/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <div className="min-h-screen w-full">
        <Navbar/>
        <BannerSection 
        title="About Us"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" }
        ]}/>
      <AboutUsSection/>
      <MissionVisionSection/>
      <ScheduleSection/>
      <WhyChooseSection/>
      <AboutChairmanSection/>
      <OurValuesSection/>
      <Footer/>
      </div>
    </>
  );
};

export default page;
