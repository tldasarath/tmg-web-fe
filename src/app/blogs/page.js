import BannerSection from "@/components/banner/Banner";
import Blog from "@/components/blog/Blog";
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
          title="Blogs"
          breadcrumbs={[
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blogs" },
          ]}
        />
        <Blog/>
      <SmallBanner />

        <Footer />
      </div>
    </>
  );
};

export default page;
