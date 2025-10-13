"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { BusinessSetupPackages } from "../BusinessSetupPackages/BusinessSetupPackages";
import { LicenseCard } from "./LicenseCard";
import { Container } from "../layout/Container";
import { licenseCategories } from "../data/LicenseCategories";

const LicenseSetupPage = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden py-4 md:py-8">
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-200 rounded-full blur-3xl opacity-30"></div>

      <div
        className="absolute right-0 w-72 h-72 opacity-100 top-[38%] md:top-[30%] lg:top-[38%] hidden md:block"
        style={{ transform: "translateY(-50%)" }}
      >
        <img
          src="/assets/images/category/right_element.png"
          alt="Professional woman with tablet"
          className="w-full h-auto rounded-2xl"
        />{" "}
      </div>

      <Container>
        <div className="container z-10 mx-auto px-4 py-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#49051E] mb-4">
              License category
            </h2>
            <p className="text-[#4b5563] max-w-2xl mx-auto">
              Rorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 lg:mb-52">
            {licenseCategories.map((category, index) => (
              <LicenseCard
                key={index}
                title={category.title}
                image={category.image}
                delay={index * 0.1}
              />
            ))}
          </div>
          {/* </Container> */}

          {/* <div className="w-full ">
  <div className="flex">
    <div className="w-1/2 lg:w-2/3"></div>
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="w-[412px] lg:w-[412px]"
    >
      <img 
        src="/assets/images/category/right_element.png" 
        alt="License Information" 
        className="w-full h-64 lg:h-80 object-cover"
      />
    </motion.div>
  </div>
</div> */}

          {/* <Container> */}

          <BusinessSetupPackages />
        </div>
      </Container>
    </div>
  );
};

export default LicenseSetupPage;
