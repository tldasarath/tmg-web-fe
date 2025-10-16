import BannerSection from "@/components/banner/Banner";
import SmallBanner from "@/components/common/SmallBanner";
import Footer from "@/components/footer/Footer";

import { Navbar } from "@/components/navbar/Navbar";
import Services from "@/components/services/Services";
import React from "react";

const page = () => {
  return (
    <>
      <div className="min-h-screen w-full">
        <Navbar />
        <BannerSection
          title="Services"
          breadcrumbs={[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" }
          ]} />
        <Services />
        <SmallBanner />
        <Footer />
      </div>
    </>
  );
};

export default page;
