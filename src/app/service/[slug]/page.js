"use client";
import BannerSection from "@/components/banner/Banner";
import BusinessBanner from "@/components/banner/BusinessBanner";
import SmallBanner from "@/components/common/SmallBanner";
import Footer from "@/components/footer/Footer";
import { Navbar } from "@/components/navbar/Navbar";
import AdvantageSection from "@/components/serviceDetails/AdvantageSection";
import AnimatedTabs from "@/components/serviceDetails/AnimatedTabs";
import BusinessSection from "@/components/serviceDetails/BusinessSection ";
import BusinessSetupComponent from "@/components/serviceDetails/BusinessSetupComponent";
import FAQSection from "@/components/serviceDetails/FaqSection";
import { ServiceDetails } from "@/data/ServiceDetails";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const params = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params?.slug) {
      const foundService = ServiceDetails.find((s) => s.slug === params.slug);
      setService(foundService);
      setLoading(false);
    }
  }, [params?.slug]);

  // if (loading) {
  //   return (
  //     <div className="min-h-screen w-full flex items-center justify-center">
  //       <div className="text-center">
  //         <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#8B2645]"></div>
  //         <p className="mt-4 text-gray-600">Loading service details...</p>
  //       </div>
  //     </div>
  //   );
  // }

  if (!service) {
    return (
      <div className="min-h-screen w-full">
        <Navbar />
        <BannerSection
          title="Service Not Found"
          breadcrumbs={[
            { name: "Home", path: "/home" },
            { name: "Services", path: "/service" },
          ]}
        />
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Service Not Found
            </h2>
            <p className="text-gray-600">
              The service you are looking for does not exist.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <BannerSection
        title={service.title}
        breadcrumbs={[
          { name: "Home", path: "/home" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/service/${service.slug}` },
        ]}
      />
      <AnimatedTabs
        data={service.data}
        heading={service.heading}
        image={service.image}
      />
      <BusinessBanner bannerData={service.banner} />
      {service.sections.map((section) => {
        if (section.id === "section1") {
          return <BusinessSection key={section.id} section={section} />;
        }
        if (section.id === "section2") {
          return <BusinessSetupComponent key={section.id} section={section} />;
        }
        if (section.id === "section3") {
          return <AdvantageSection key={section.id} section={section} />;
        }
        if (section.id === "section4") {
          return <FAQSection key={section.id} section={section} />;
        }
        
        return null;
      })}
      <SmallBanner />
      <Footer />
    </div>
  );
};

export default page;
