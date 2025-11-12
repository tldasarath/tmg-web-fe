"use client";
import BannerSection from "@/components/banner/Banner";

import Footer from "@/components/footer/Footer";
import BusinessJourneySection from "@/components/license/BusinessJourneySection";
import LicenseDetailSection from "@/components/license/LicenseDetailSection";
import LicenseFAQSection from "@/components/license/LicenseFaqSection";
import { Navbar } from "@/components/navbar/Navbar";

import { LicenseDetails } from "@/data/LicenseData";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const params = useParams();
  const [license, setLicense] = useState(null);

  useEffect(() => {
    if (params?.slug) {
      const Licenses = LicenseDetails.find((s) => s.slug === params.slug);
      setLicense(Licenses);
    }
  }, [params?.slug]);

  if (!license) {
    return (
      <div className="min-h-screen w-full">
        <Navbar />
        <BannerSection
          title="License Not Found"
          breadcrumbs={[
            { name: "Home", path: "/home" },
            { name: "License", path: "/license" },
          ]}
        />
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              License Details Not Found
            </h2>
            <p className="text-gray-600">
              The License you are looking for does not exist.
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
        title={license.title}
        breadcrumbs={[
          { name: "Home", path: "/home" },
          // { name: "Services", path: "/services" },
          { name: license.title, path: `/license/${license.slug}` },
        ]}
      />
      <LicenseDetailSection license={license} />
      <BusinessJourneySection license={license} />
      <LicenseFAQSection license={license} />
      <Footer />
    </div>
  );
};

export default Page;
