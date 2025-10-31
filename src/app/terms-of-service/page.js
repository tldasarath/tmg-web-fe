import BannerSection from "@/components/banner/Banner";
import Footer from "@/components/footer/Footer";

import { Navbar } from "@/components/navbar/Navbar";
import TermsOfService from "@/components/termsOfService/Terms";
import React from "react";

const page = () => {
  return (
    <>
      <div className="min-h-screen w-full">
        <Navbar />
        <BannerSection
          title="Terms Of Service"
          breadcrumbs={[
            { name: "Home", path: "/" },
            { name: "Terms Of Service", path: "/terms-of-service" }
          ]} />
        <TermsOfService />
        {/* <SmallBanner /> */}
        <Footer />
      </div>
    </>
  );
};

export default page;
