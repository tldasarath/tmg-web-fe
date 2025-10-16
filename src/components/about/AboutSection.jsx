"use client";

import React, { useState } from "react";
import { ArrowRight, MessageCircle, Phone, ChevronRight } from "lucide-react";
import { Container } from "../layout/Container";
import { motion, useMotionValue, useTransform } from "framer-motion";
import MainButton from "../button/main-button";
import LettersPullUpText from "../text/LettersPullUpText";
import ScheduleMeetingSection from "../meetingSchedule/ScheduleMeetingSection";

const AboutSection = () => {
  const [selectedDate, setSelectedDate] = useState(2);
  const [isSwiped, setIsSwiped] = useState(false);

  const dates = [
    { day: 31, month: "May" },
    { day: 1, month: "We" },
    { day: 2, month: "We" },
    { day: 3, month: "We" },
    { day: 4, month: "We" },
  ];

  const x = useMotionValue(0);
  const background = useTransform(x, [0, 150], ["#5c1a2e", "#7a2240"]);

  const handleDragEnd = (event, info) => {
    if (info.offset.x > 150) {
      setIsSwiped(true);

      setTimeout(() => setIsSwiped(false), 2000);
    } else {
      x.set(0);
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Top Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-30">
        <div className="w-full h-full bg-gradient-to-br from-amber-200 via-orange-200 to-amber-100 rounded-full blur-3xl"></div>
      </div>
      <div className="absolute top-32 left-20 w-48 h-48 opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-orange-300 via-amber-200 to-yellow-200 rounded-full blur-2xl"></div>
      </div>

      {/* Top Decorative dots */}
      {/* <div className="absolute top-40 left-10 w-2 h-2 bg-amber-400 rounded-full opacity-60"></div>
      <div className="absolute top-48 left-24 w-1.5 h-1.5 bg-orange-400 rounded-full opacity-50"></div>
      <div className="absolute top-56 left-16 w-1 h-1 bg-amber-500 rounded-full opacity-40"></div> */}

      <div
        className="absolute left-0 w-80 h-80 opacity-100"
        style={{ top: "55%", transform: "translateY(-50%)" }}
      >
        <img
          src="/assets/images/about/left_element_about.png"
          alt="Professional woman with tablet"
          className="w-full h-auto rounded-2xl"
        />{" "}
      </div>

      <div
        className="absolute left-8 w-48 h-48 opacity-20"
        style={{ top: "62%", transform: "translateY(-50%)" }}
      >
        <div className="w-full h-full bg-gradient-to-br from-amber-400 via-orange-300 to-yellow-300 rounded-full blur-xl"></div>
      </div>

      <Container>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-0 py-8 lg:py-16">
          <section className="mb-16 lg:mb-24">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-6 lg:py-8">
              <div className="order-2 lg:order-1">
                <LettersPullUpText
                  text="Empowering Businesses. Simplifying Solutions."
                  className="text-[#49051E]"
                />
                {/* <h2 className="text-4xl sm:text-5xl lg:text-[3.3rem] font-bold text-maroon-900 mb-6 lg:mb-8 leading-tight">
                  <span className="text-[#49051E]">
                  Driven by Vision, Built on Trust
                  </span>
                </h2> */}

                <p className="text-gray-600 text-[0.938rem]  md:text-lg leading-relaxed mb-5">
                  <strong>
                    {" "}
                    TMG Global Services LLC (Thameem Management Group Global
                    LLC)
                  </strong>{" "}
                  stands as a trusted
                  <strong>
                    {" "}
                    business setup and document-clearing company in Dubai,{" "}
                  </strong>{" "}
                  offering comprehensive solutions for individuals,
                  entrepreneurs, and corporations throughout the UAE. Founded by{" "}
                  <strong>Mr. Thameem Aboobacker ,</strong> a pioneering figure
                  in{" "}
                  <strong>
                    {" "}
                    business consultancy and government services{" "}
                  </strong>
                  , we specialize in simplifying complex procedures including{" "}
                  <strong>
                    company formation, visa processing, PRO services,{" "}
                  </strong>{" "}
                  and <strong> government documentation. </strong>
                </p>

                <p className="text-gray-600 text-[0.938rem]  md:text-lg leading-relaxed mb-5 md:mb-8">
                  With our expanding network of{" "}
                  <strong> over four branches across Dubai ,</strong> we bring
                  together deep local expertise, professional guidance, and
                  transparent processes to ensure our clients can establish and
                  grow their businesses seamlessly. Our commitment is to deliver
                  fast, reliable, and fully compliant services that empower
                  sustainable success in the UAE's dynamic and competitive
                  business landscape, making us your ideal partner for business
                  growth and establishment in the region.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <MainButton
                    bgColor="#49051E"
                    text="  Read More"
                    link="/"
                    className=""
                    icon="external"
                  />
                  <MainButton
                    bgColor="#8E1A3D"
                    text="Enquire Now"
                    link="/"
                    className=""
                    icon="external"
                  />
                </div>
              </div>

              <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md lg:max-w-lg h-[400px] sm:h-[500px] lg:h-[600px]">
                  {/* Person Image */}
                  <motion.div
                    className="absolute bottom-0 left-0 w-[60%] sm:w-[55%] lg:w-[58%] h-auto z-10"
                    animate={{
                      y: [0, -20, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <img
                      src="/assets/images/about/girl_img.png"
                      alt="Professional woman with tablet"
                      className="w-full h-auto object-contain"
                    />
                  </motion.div>

                  {/* Background Image - Top layer */}
                  <div className="absolute bottom-0 left-0 w-full h-auto z-20 pointer-events-none">
                    <img
                      src="/assets/images/about/background_img.png"
                      alt="Background with laptop and icons"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Schedule Section */}
          <section className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-transparent rounded-2xl p-0 ">
              <LettersPullUpText
                text="Schedule Meeting"
                className="text-[#49051E] w-full lg:w-[250px]"
              />

              {/* <h2 className="text-3xl sm:text-4xl font-bold text-[#5c1a2e] mb-4">
                Schedule
                <br />
                Meeting
              </h2> */}
              <p className="text-gray-700 font-semibold mb-4 text-[0.938rem]  md:text-lg">
                Your Path to UAE Business Ownership
              </p>
              <p className="text-gray-600 text-[0.938rem]  md:text-lg font-normal leading-relaxed">
                Take the first step toward establishing your business in the UAE
                with TMG Global. Our experts guide you through every stage from
                company setup and licensing to document clearance and approvals
                making your business journey seamless and hassle-free.
              </p>
            </div>

            <div className="bg-[#8E1A3D] rounded-2xl px-8 py-10 lg:px-5 lg:py-6 xl:px-8 xl:py-10 shadow-xl text-white">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 md:mb-8">
                Hurry? Get Support
                <br />
                Right Away!
              </h3>
              <p className="text-white/90 mb-6 md:mb-8 text-[0.938rem]  md:text-lg font-normal">
                Short on time? Connect with our team directly via WhatsApp or
                call for immediate support. We’re here to answer your questions
                and guide you through your business setup efficiently.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 mb-8 lg:mb-0 xl:mb-8"
              >
                <motion.button
                  whileHover={{ scale: 1.08, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 border border-white/30"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat Now
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.08, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 border border-white/30"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </motion.button>
              </motion.div>

              {/* <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces"
                    alt="Support representative"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces"
                    alt="Support representative"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div> */}
            </div>

            {/* Swipe Button Section*/}
            <div className="bg-[#C79A59] rounded-2xl px-6 py-10 lg:px-5 lg:py-6 xl:px-8 xl:py-10 shadow-xl text-white flex flex-col ">
              <p className="text-[#000000] mb-6 lg:mb-8 xl:mb-6 text-lg leading-relaxed font-normal">
                Plan your meeting with ease. Select a date that suits you, and
                we’ll make sure an expert is ready to assist you with your
                business setup in the UAE.
              </p>

              {/* Date Selector */}
              {/* <div className="grid grid-cols-5 gap-2 mb-6 lg:mb-8 xl:mb-6">
                {dates.map((date, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedDate(index)}
                    className={`rounded-lg p-3 text-center transition-all duration-300 ${
                      selectedDate === index
                        ? "bg-[#5c1a2e] shadow-lg scale-105"
                        : "bg-white/20 hover:bg-white/30 backdrop-blur-sm"
                    }`}
                  >
                    <div className="text-xl font-bold">{date.day}</div>
                    <div className="text-xs opacity-90">{date.month}</div>
                  </button>
                ))}
              </div>
              <motion.div
                className="relative w-full bg-[#5c1a2e] rounded-xl overflow-hidden h-14 flex items-center px-3 cursor-pointer select-none"
                style={{ background }}
              >
                <motion.div
                  className="absolute left-0 top-0 h-full bg-[#7a2240]/50"
                  style={{ width: useTransform(x, [0, 200], ["0%", "100%"]) }}
                />
                <motion.div
                  className="relative z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center"
                  drag="x"
                  dragConstraints={{ left: 0, right: 200 }}
                  dragElastic={0.05}
                  style={{ x }}
                  onDragEnd={handleDragEnd}
                >
                  <ChevronRight className="w-6 h-6 text-[#5c1a2e]" />
                </motion.div>
                <motion.span
                  className="relative z-0 w-full text-center text-white font-semibold text-base pointer-events-none"
                  animate={{ opacity: isSwiped ? 0 : 1 }}
                >
                  {isSwiped ? "Meeting Scheduled!" : "Swipe to Schedule Meeting"}
                </motion.span>
              </motion.div> */}

              <ScheduleMeetingSection />
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default AboutSection;
