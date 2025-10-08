"use client";

import React, { useState } from "react";
import { ArrowRight, MessageCircle, Phone, ChevronRight } from "lucide-react";
import { Container } from "../layout/Container";
import { motion } from "framer-motion";
const AboutSection = () => {
  const [selectedDate, setSelectedDate] = useState(2);

  const dates = [
    { day: 31, month: "May" },
    { day: 1, month: "We" },
    { day: 2, month: "We" },
    { day: 3, month: "We" },
    { day: 4, month: "We" },
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Top Watercolor Background Elements */}
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

      {/* Middle/Bottom Watercolor Background Elements - Between sections */}
      <div
        className="absolute left-0 w-80 h-80 opacity-100"
        style={{ top: "55%", transform: "translateY(-50%)" }}
      >
        <img
          src="/assets/images/about/left_element.png"
          alt="Professional woman with tablet"
          className="w-full h-auto rounded-2xl"
        />{" "}
      </div>
      {/* <div className="absolute left-12 w-64 h-64 opacity-25" style={{ top: '58%', transform: 'translateY(-50%)' }}>
        <div className="w-full h-full bg-gradient-to-tr from-orange-300 via-amber-300 to-yellow-200 rounded-full blur-2xl"></div>
      </div> */}
      <div
        className="absolute left-8 w-48 h-48 opacity-20"
        style={{ top: "62%", transform: "translateY(-50%)" }}
      >
        <div className="w-full h-full bg-gradient-to-br from-amber-400 via-orange-300 to-yellow-300 rounded-full blur-xl"></div>
      </div>

      {/* Middle Decorative dots */}
      {/* <div className="absolute left-16 w-2.5 h-2.5 bg-orange-400 rounded-full opacity-70" style={{ top: '52%' }}></div>
      <div className="absolute left-32 w-2 h-2 bg-amber-500 rounded-full opacity-60" style={{ top: '56%' }}></div>
      <div className="absolute left-24 w-1.5 h-1.5 bg-orange-500 rounded-full opacity-50" style={{ top: '60%' }}></div>
      <div className="absolute left-40 w-1.5 h-1.5 bg-amber-600 rounded-full opacity-55" style={{ top: '58%' }}></div>
      <div className="absolute left-8 w-1 h-1 bg-orange-600 rounded-full opacity-45" style={{ top: '54%' }}></div>
      <div className="absolute left-20 w-2 h-2 bg-amber-400 rounded-full opacity-50" style={{ top: '64%' }}></div>
      <div className="absolute left-36 w-1 h-1 bg-orange-400 rounded-full opacity-40" style={{ top: '62%' }}></div> */}

      <Container>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-0 py-8 lg:py-16">
          {/* Hero Section */}
          <section className="mb-16 lg:mb-24">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="order-2 lg:order-1">
                <h2 className="text-4xl sm:text-5xl lg:text-[3.3rem] font-bold text-maroon-900 mb-6 leading-tight">
                  <span className="text-[#5c1a2e]">
                  Driven by Vision, Built on Trust
                  </span>
                </h2>

                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-5">
At Thameem Management Group Global LLC (TMG), we specialize in providing end-to-end solutions for both individuals 
and government service requirements. Our mission is to simplify complex processes, offer transparent guidance, and 
help our clients achieve new levels of growth and success.
                </p>

                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
       Founded under the visionary leadership of Mr. Thameem Aboobacker a respected figure in the business setup 
       industry and a dedicated philanthropist TMG was built on the values of service, trust, and community impact. 
       What began as a mission to assist people has grown into a global organization delivering innovative, reliable, 
       and people-centric solutions.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-[#5c1a2e] hover:bg-[#7a2240] text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl">
                   Read More
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="bg-[#9d3b5b] hover:bg-[#b4476a] text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl">
                    BUTTON
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Right Image */}
              {/* <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <div className="relative"> */}
              {/* <div className="
                  absolute 
                  inset-0 
                  bg-gradient-to-br from-blue-300 to-blue-400 
                  rounded-3xl transform rotate-6 opacity-80"></div> */}
              {/* <div className="relative bg-white rounded-3xl p-8 shadow-2xl"> */}
              {/* <div className="w-full max-w-md">
                      <img 
                        src="/assets/images/about/about_img.png" 
                        alt="Professional woman with tablet"
                        className="w-full h-auto rounded-2xl"
                      /> */}
              {/* <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
                        <div className="bg-white rounded-xl shadow-xl p-4 w-48">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                            <div className="flex-1 h-2 bg-gray-200 rounded"></div>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="bg-gray-100 rounded h-16"></div>
                            <div className="bg-gray-100 rounded h-16"></div>
                          </div>
                        </div>
                      </div> */}
              {/* Floating icons */}
              {/* <div className="absolute -top-4 right-12 bg-yellow-400 w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                        💡
                      </div>
                      <div className="absolute top-16 -right-2 bg-blue-400 w-8 h-8 rounded-full flex items-center justify-center shadow-lg">
                        ✈️
                      </div>
                      <div className="absolute bottom-24 -right-4 bg-red-400 w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                        🎓
                      </div>
                      <div className="absolute bottom-12 right-8 bg-orange-400 w-8 h-8 rounded-full flex items-center justify-center shadow-lg">
                        📢
                      </div> */}
              {/* </div> */}
              {/* </div> */}
              {/* </div> */}
              {/* </div> */}
              {/* Right Image - Composite of Two Images */}
              <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md lg:max-w-lg h-[400px] sm:h-[500px] lg:h-[600px]">
                  {/* Person Image - Base layer with bounce animation */}
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

          {/* Bottom Section with 3 Cards */}
          <section className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Schedule Meeting Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#5c1a2e] mb-4">
                Schedule
                <br />
                Meeting
              </h2>
              <p className="text-gray-700 font-semibold mb-4">
                Your Path to UAE Business Ownership
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
                condimentum lobortis.
              </p>
            </div>

            {/* Support Card */}
            <div className="bg-gradient-to-br from-[#7a2240] to-[#5c1a2e] rounded-2xl p-8 shadow-xl text-white">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Hurry? Get Support
                <br />
                Right Away!
              </h3>
              <p className="text-white/90 mb-6 text-sm">
                Short on time? Connect or chat with us on WhatsApp instantly.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 border border-white/30">
                  <MessageCircle className="w-5 h-5" />
                  Chat Now
                </button>
                <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 border border-white/30">
                  <Phone className="w-5 h-5" />
                  Call Now
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
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
              </div>
            </div>

            {/* Appointment Booking Card */}
            <div className="bg-[#C79A59] rounded-2xl px-8 py-10 shadow-xl text-white flex flex-col justify-end">
              <p className="text-[#000000] mb-6 text-lg leading-relaxed font-normal">
                Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.te
                libero et velit interdum, ac aliquet odio mattis.
              </p>

              {/* Date Selector */}
              <div className="grid grid-cols-5 gap-2 mb-6">
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

              <button className="w-full bg-[#5c1a2e] hover:bg-[#7a2240] text-white px-6 py-4 rounded-xl font-semibold flex items-center justify-between transition-all duration-300 shadow-lg hover:shadow-xl">
                <span>Schedule Meeting</span>
                <div className="bg-white/20 p-2 rounded-lg">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </button>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default AboutSection;
