"use client";

import React, { useEffect, useState } from "react";
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
  const cards = [
    {
      name: "John Doe",
      role: "Visionary founder leading with passion and innovation.",
      price: "$199",
      image: "/assets/images/about/why-choose.png",
    },
    {
      name: "Jane Smith",
      role: "Creative director inspiring innovation in every project.",
      price: "$249",
      image: "/assets/images/about/why-choose01.png",
    },
    {
      name: "Alice Johnson",
      role: "Product manager driving excellence in every launch.",
      price: "$179",
      image: "/assets/images/about/why-choose02.png",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out
      setFade(false);

      setTimeout(() => {
        // Change card after fade-out
        setCurrentIndex((prev) => (prev + 1) % cards.length);
        setFade(true); // Fade back in
      }, 400); // Fade duration
    }, 2000); // Change every 2s

    return () => clearInterval(interval);
  }, [])

  const card = cards[currentIndex];
  // Auto flip the first card when it enters viewport
  useEffect(() => {
    const firstCard = document.querySelector("[data-first-card]");
    if (!firstCard) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {

            setHoveredIndex(0); // flip
            setTimeout(() => setHoveredIndex(null), 1000); // unflip after 1s
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% visible
    );

    observer.observe(firstCard);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="pb-16" >
      <div className="bg-black mx-3 md:mx-10 rounded-3xl flex justify-center
      py-10 xl:px-40 px-10">
        <div className="grid lg:grid-cols-3  w-full  gap-8 items-start">
          {/* Left Side  */}
          <div  >
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
                className={`px-6 py-3 rounded-2xl font-medium transition-all ${activeTab === "FREEZONE"
                    ? "bg-[#C79A59] text-white"
                    : "bg-transparent text-white border-2 border-[#C79A59]"
                  }`}
              >
                FREEZONE
              </button>
              <button
                onClick={() => setActiveTab("Mainland")}
                className={`px-6 py-3 rounded-2xl font-medium transition-all ${activeTab === "Mainland"
                    ? "bg-[#C79A59] text-white"
                    : "bg-transparent text-white border-2 border-[#C79A59]"
                  }`}
              >
                MAINLAND
              </button>
              <button
                onClick={() => setActiveTab("OFFSHORE")}
                className={`px-6 py-3 rounded-2xl font-medium transition-all ${activeTab === "OFFSHORE"
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
                    data-first-card={index === 0 ? true : undefined}

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
            text-xl lg:text-3xl font-semibold 
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

        
          <div className="flex justify-center  w-full ">
            <div className="w-full md:w-[400px] h-[600px] overflow-y-auto pr-2 scrollbar-hide">
              <div className="space-y-6">
                <AnimatePresence mode="wait">
                  {currentOptions.map((option, index) => (
                    <motion.div
                      key={`${activeTab}-img-${option.name}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                      onHoverStart={() => {
                        if (window.innerWidth > 768) setHoveredIndex(index); // hover for desktop
                      }}
                      onHoverEnd={() => {
                        if (window.innerWidth > 768) setHoveredIndex(null);
                      }}
                      onClick={() => {
                        // Flip on click for mobile
                        if (window.innerWidth <= 768) {
                          setHoveredIndex(hoveredIndex === index ? null : index);
                        }
                      }}
                      className="relative w-full cursor-pointer aspect-[3/2.5] lg:aspect-[3/3] xl:aspect-[3/2.5]"
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
                          <div className="absolute top-0 left-0 z-10 bg-white/95 backdrop-blur-sm py-4 px-2 rounded-br-2xl shadow-md">
                            <img
                              className="h-6 md:h-12 w-auto object-contain"
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
                            background:
                              "linear-gradient(180deg, rgba(152,32,68,1) 0%, rgba(100,14,41,1) 100%)",
                          }}
                        >
                          <div className="w-full h-full p-4 2xl:p-8 flex flex-col justify-between">
                            {/* Top content */}
                            <div>
                              <h3 className="text-white text-2xl font-bold mb-4">
                                {option.name}
                              </h3>
                              <p className="text-white/90 text-sm md:text-base leading-relaxed">
                                {option.description}
                              </p>
                            </div>

                            {/* Bottom section — Price + Logo */}
                            <div className="flex items-center bg-white p-4 h-14 rounded-xl justify-between mt-2 lg:mt-2 xl:mt-6">
                              <span className="text-black text-lg md:text-xl font-semibold">
                                {option.rate}
                              </span>
                              <a
                                href={option.link || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:scale-105 transition-transform duration-300"
                              >
                                <img
                                  src={option.logo}
                                  alt={`${option.name} logo`}
                                  className="h-20 w-20 object-contain"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}

                </AnimatePresence>
              </div>
            </div>
          </div>



        <div className="w-full flex flex-col items-center  space-y-6">
  {/* Heading */}
  <h2 className=" text-xl md:text-2xl xl:text-3xl font-bold text-white  ">
    Explore Our Packages
  </h2>

  {/* Card */}
  <div className="w-full h-full flex justify-center lg:justify-end">
    <div className="w-full md:w-96 h-96 md:h-[500px] flex flex-col items-center shadow-2xl p-6 border border-[#8E1A3D] rounded-2xl transition-all duration-700 ease-in-out">
      <div className="relative w-full h-full rounded-lg overflow-hidden">
        {/* Image with fade effect */}
        <img
          src={card.image}
          alt={card.name}
          className={`w-full h-full object-cover transition-opacity duration-700 ${fade ? "opacity-100" : "opacity-0"}`}
        />

        {/* Content */}
        <div
          className={`absolute bottom-0 w-full bg-white/80 p-1 md:p-4 text-center transition-opacity duration-700 ${fade ? "opacity-100" : "opacity-0"}`}
        >
          <h2 className="text-xl md:text-2xl font-bold text-black mb-1">
            {card.name}
          </h2>
          <p className="text-gray-800 md:text-base text-sm mb-2">
            {card.role}
          </p>
          <p className="text-[#8E1A3D] md:text-base text-sm  px-4 md:px-6 py-1 md:py-2 rounded-lg hover:bg-[#6b1430] font-bold transition">
            {card.price}
          </p>
        </div>
      </div>
    </div>
  </div>
</div>



        </div>
      </div>
    </section>
  );
};


