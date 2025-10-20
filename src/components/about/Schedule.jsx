"use client"
import  { useState } from 'react'
import ScheduleMeetingSection from '../meetingSchedule/ScheduleMeetingSection'
import LettersPullUpText from '../text/LettersPullUpText'
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, MessageCircle, Phone, ChevronRight } from "lucide-react";
import { Container } from '../layout/Container';

const Schedule = () => {
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
   <Container>
        <section className="grid lg:grid-cols-3 gap-6 lg:gap-8 px-4 sm:px-6 lg:px-0 py-8 lg:pb-16">
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
   </Container>
  )
}

export default Schedule