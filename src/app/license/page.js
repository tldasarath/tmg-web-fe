import BannerSection from "@/components/banner/Banner";
import Blog from "@/components/blog/Blog";
import ComingSoon from "@/components/ComingSoon";
import SmallBanner from "@/components/common/SmallBanner";
import Footer from "@/components/footer/Footer";
import { Navbar } from "@/components/navbar/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <div className="w-full h-screen">
        <Navbar />
        <BannerSection
          title="License"
          breadcrumbs={[
            { name: "Home", path: "/" },
            { name: "Licence", path: "/license" },
          ]}
        />
<ComingSoon/>

        <Footer />
      </div>
    </>
  );
};

export default page;
