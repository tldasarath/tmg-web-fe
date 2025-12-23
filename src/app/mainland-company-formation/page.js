import React from "react";
import BannerSection from "@/components/banner/Banner";
import ScheduleMeetingContentCard from "@/components/common/ScheduleMeetingContentCard";
import Footer from "@/components/footer/Footer";
import { Navbar } from "@/components/navbar/Navbar";

import MainlandDetails from "@/components/mainland/MainlandDetails";
import MainlandLicenseSection from "@/components/mainland/MainlandLicenseSection";
import MainlandSetup from "@/components/mainland/MainlandSetup";
import SimplifyProcessSection from "@/components/mainland/SimplifyProcessSection";
import MainlandCompanyFormation from "@/components/mainland/MainlandCompanyFormation";
import { mainlandData } from "@/data/MainlandData";

const page = () => {
  return (
    <>
      <div className="w-full h-screen">
        <Navbar />
        <BannerSection
          title="UAE Mainland Business Setup Services"
          breadcrumbs={[
            { name: "Home", path: "/" },
            {
              name: "Mainland",
              path: "/mainland-company-formation",
            },
          ]}
        />
        <MainlandDetails />
        <MainlandLicenseSection />
        <MainlandSetup />
        <SimplifyProcessSection />
        <MainlandCompanyFormation />
        <ScheduleMeetingContentCard data={mainlandData} />
        <Footer />
      </div>
    </>
  );
};

export default page;
