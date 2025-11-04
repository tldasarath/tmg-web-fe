"use client";
import BannerSection from "@/components/banner/Banner";
import ConsultationModal from "@/components/common/ConsultationModal";
import SmallBanner from "@/components/common/SmallBanner";
import Footer from "@/components/footer/Footer";

import { Navbar } from "@/components/navbar/Navbar";
import Services from "@/components/services/Services";
import React, { useState } from "react";

const page = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="min-h-screen w-full">
        <Navbar />
        <BannerSection
          title="Services"
          breadcrumbs={[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]}
        />
        <Services />
        <SmallBanner onOpenModal={() => setShowModal(true)} />
        <Footer />
        <ConsultationModal isOpen={showModal} setIsOpen={setShowModal} />
      </div>
    </>
  );
};

export default page;
