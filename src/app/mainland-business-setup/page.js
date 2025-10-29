import BannerSection from "@/components/banner/Banner";
import ScheduleMeetingContentCard from "@/components/common/ScheduleMeetingContentCard";
import Footer from "@/components/footer/Footer";
import { Navbar } from "@/components/navbar/Navbar";
import OffshoreDetails from "@/components/offshore/OffshoreDetails";
import OffshoreSetup from "@/components/offshore/OffshoreSetup";
import OffshoreSimplifiesSetup from "@/components/offshore/OffshoreSimplifiesSetup";
import OffshoreCompanyStructure from "@/components/offshore/OffshoreStructure";
import { offshoreData } from "@/data/OffshoreData";
import React from "react";
import OffshoreSolutions from "@/components/offshore/OffshoreSolutions";
import MainlandDetails from "@/components/mainland/MainlandDetails";
import MainlandLicenseSection from "@/components/mainland/MainlandLicenseSection";
import MainlandSetup from "@/components/mainland/MainlandSetup";
import SimplifyProcessSection from "@/components/mainland/SimplifyProcessSection";
import MainlandCompanyFormation from "@/components/mainland/MainlandCompanyFormation";

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
              name: "UAE Mainland Business Setup Services",
              path: "/mainland-business-setup",
            },
          ]}
        />
<MainlandDetails/>
<MainlandLicenseSection/>
<MainlandSetup/>
        <SimplifyProcessSection/>
        <MainlandCompanyFormation/>
        <ScheduleMeetingContentCard data={offshoreData} />
        <Footer />
      </div>
    </>
  );
};

export default page;
