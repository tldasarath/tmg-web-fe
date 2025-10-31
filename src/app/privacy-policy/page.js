import BannerSection from "@/components/banner/Banner";
import Footer from "@/components/footer/Footer";

import { Navbar } from "@/components/navbar/Navbar";
import PrivacyPolicy from "@/components/privacyPolicy/PrivacyPolicy";
import React from "react";

const page = () => {
  return (
    <>
      <div className="min-h-screen w-full">
        <Navbar />
        <BannerSection
          title="Privacy Policy"
          breadcrumbs={[
            { name: "Home", path: "/" },
            { name: "Privacy Policy", path: "/privacy-policy" }
          ]} />
        <PrivacyPolicy />
        {/* <SmallBanner /> */}
        <Footer />
      </div>
    </>
  );
};

export default page;
