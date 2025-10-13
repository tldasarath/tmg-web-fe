"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { packageData } from "../data/PackageData";

export const BusinessSetupPackages = () => {
  const [activeTab, setActiveTab] = useState("FREEZONE");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const currentOptions = packageData[activeTab];

    const handleLearnMore = (e) => {
    e.stopPropagation();
    router.push("/");
  };

  return (
    <div className="bg-black  rounded-3xl p-8 lg:p-12">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Left Side  */}
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white text-4xl lg:text-5xl font-bold mb-8"
          >
            All-inclusive Business Setup Packages
          </motion.h2>

          <div className="flex gap-4 mb-8 flex-wrap">
            <button
              onClick={() => setActiveTab("FREEZONE")}
              className={`px-6 py-3 rounded-2xl font-medium transition-all ${
                activeTab === "FREEZONE"
                  ? "bg-[#C79A59] text-white"
                  : "bg-transparent text-white border-2 border-[#C79A59]"
              }`}
            >
              FREEZONE
            </button>
            <button
              onClick={() => setActiveTab("Mainland")}
              className={`px-6 py-3 rounded-2xl font-medium transition-all ${
                activeTab === "Mainland"
                  ? "bg-[#C79A59] text-white"
                  : "bg-transparent text-white border-2 border-[#C79A59]"
              }`}
            >
              Mainland
            </button>
            <button
              onClick={() => setActiveTab("OFFSHORE")}
              className={`px-6 py-3 rounded-2xl font-medium transition-all ${
                activeTab === "OFFSHORE"
                  ? "bg-[#C79A59] text-white"
                  : "bg-transparent text-white border-2 border-[#C79A59]"
              }`}
            >
              OFFSHORE
            </button>
          </div>

          {/* Options List */}
          <div className="space-y-4 mb-10">
            <AnimatePresence mode="wait">
              {currentOptions.map((option, index) => (
                <motion.div
                  key={`${activeTab}-${option.name}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: 1,
                    x: hoveredIndex === index ? 20 : 0,
                  }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 text-amber-400 hover:text-amber-300 cursor-pointer group"
                >
              <span
          className="
            text-xl lg:text-2xl font-semibold 
            bg-[conic-gradient(from_180deg,rgba(199,154,89,1)_0%,rgba(241,241,241,1)_100%)]
            bg-clip-text text-transparent transition-all duration-300
            group-hover:opacity-90
          "
        >
                    {option.name}
                  </span>
                  <motion.div
                    animate={{
                      rotate: hoveredIndex === index ? 50 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowUpRight className="w-6 h-6" />
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="flex justify-center ">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#C79A59] text-white px-4 py-4 rounded-full font-semibold flex items-center gap-2transition-colors"
            >
              Explore Packages
              <ArrowUpRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

      {/* Right Side*/}
        <div className="h-[600px] overflow-y-auto pr-2 scrollbar-hide">
          <div className="space-y-6">
            <AnimatePresence mode="wait">
              {currentOptions.map((option, index) => (
                <motion.div
                  key={`${activeTab}-img-${option.name}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className="relative w-full aspect-[4/3] mx-auto"
                  style={{ perspective: "1000px" }}
                >
                  <motion.div
                    className="relative w-full h-full"
                    style={{ transformStyle: "preserve-3d" }}
                    animate={{
                      rotateY: hoveredIndex === index ? 180 : 0,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    {/* Front Side */}
                    <div
                      className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl bg-gray-900"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      {/* Logo Badge */}
                      <div className="absolute top-0 left-0 z-10 bg-white/95 backdrop-blur-sm py-4 px-2 rounded-br-2xl shadow-md">
                        <img
                          className="h-12 w-auto  object-contain"
                          src={option.logo}
                          alt="Logo"
                        />
                      </div>
                      

                      <img
                        src={option.image}
                        alt={option.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Back Side */}
                    <div
                      className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                        background: "linear-gradient(180deg, rgba(152,32,68,1) 0%, rgba(100,14,41,1) 100%)"
                      }}
                    >
                      <div className="w-full h-full p-8 flex flex-col justify-between">
                        <div>
                          <h3 className="text-white text-2xl font-bold mb-4">
                            {option.name}
                          </h3>
                          <p className="text-white/90 text-sm md:text-base leading-relaxed">
                            {option.description}
                          </p>
                        </div>
                        
                        <button 
                          className="bg-white text-[#982044] px-6 py-3 rounded-full font-semibold self-start hover:bg-gray-100 transition-colors flex items-center gap-2 mt-4"
                          onClick={handleLearnMore}
                        >
                          Learn More
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};


