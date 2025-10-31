"use client";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";

// MainButton component (you'll need to create this or replace with your actual button)
const MainButton = ({ text, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-white text-[#4A0E2E] px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-gray-100 transition-colors duration-300"
    onClick={onClick}
  >
    {text}
  </motion.button>
);

export default function BusinessJourneySection({ license }) {
  const [isSwiped, setIsSwiped] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSwipe = () => {
    setIsSwiped(true);
    setTimeout(() => {
      console.log("Opening scheduler...");
    }, 1000);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.4,
        ease: "easeOut",
      },
    },
  };

  const circleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5 + i * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section ref={sectionRef} className="py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content - Banner */}
          <motion.div
            className="min-h-[200px] lg:min-h-[300px] w-full rounded-2xl p-6 lg:p-8 flex items-center justify-center text-white relative overflow-hidden"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(40,7,17,1.00) 0%, rgba(142,26,61,1.00) 100%)",
              backgroundPosition: "center center",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <motion.div
                custom={0}
                variants={circleVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="absolute top-0 right-0 w-20 h-20 lg:w-32 lg:h-32 bg-white rounded-full -translate-y-8 lg:-translate-y-16 translate-x-8 lg:translate-x-16"
              />
              <motion.div
                custom={1}
                variants={circleVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="absolute bottom-0 left-0 w-16 h-16 lg:w-24 lg:h-24 bg-white rounded-full translate-y-8 lg:translate-y-12 -translate-x-8 lg:-translate-x-12"
              />
            </div>

            <motion.div
              className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.h1
                variants={titleVariants}
                className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 leading-tight"
              >
                Ready to Start Your Business Journey
              </motion.h1>

              <motion.p
                variants={descriptionVariants}
                className="text-base md:text-lg lg:text-xl mb-6 lg:mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed"
              >
                {license?.bannerDescription || "Get expert assistance from TMG Global and launch your UAE business with confidence. Contact us today for a free consultation and customized setup plan."}
              </motion.p>

              <motion.div
                variants={buttonVariants}
                className="flex justify-center"
              >
                <MainButton text="Contact Now" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Card - Consultation Booking */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex justify-center lg:justify-start relative z-10 mt-8 lg:mt-0"
          >
            <div className="bg-[#C79A59] rounded-3xl px-6 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16 shadow-2xl w-full max-w-sm lg:max-w-md h-fit">
              {/* Card Content */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#49051E] mb-3 lg:mb-4 leading-tight">
                    Meeting Scheduler
                  </h3>
                  <p className="text-sm md:text-base text-gray-800 leading-relaxed">
                    {license?.schedulerDescription || "Plan your meeting with ease. Select a date that suits you, and we'll make sure an expert is ready to assist you with your business setup in the UAE."}
                  </p>
                </div>

                {/* Swipe Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative w-full bg-gradient-to-r from-[#49051E] to-[#6B2838] rounded-full overflow-hidden h-12 flex items-center px-1 cursor-pointer select-none shadow-lg"
                  >
                    <motion.div
                      className="relative z-10 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg flex-shrink-0"
                      drag="x"
                      dragConstraints={{ left: 0, right: 235 }}
                      dragElastic={0.2}
                      onDragEnd={(e, info) => {
                        if (info.offset.x > 200) {
                          handleSwipe();
                        }
                      }}
                      whileTap={{ scale: 0.95 }}
                      whileHover={{ scale: 1.05 }}
                      animate={
                        isSwiped
                          ? {
                              x: 235,
                              transition: { duration: 0.5, ease: "easeOut" },
                            }
                          : { x: 0 }
                      }
                    >
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ChevronRight className="w-5 h-5 text-[#49051E]" />
                      </motion.div>
                    </motion.div>

                    <motion.span
                      className="absolute w-full text-center text-white font-semibold text-sm pointer-events-none"
                      animate={{ opacity: isSwiped ? 0 : 1 }}
                    >
                      {isSwiped ? (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="inline-flex items-center gap-2"
                        >
                          ✓ Opening...
                        </motion.span>
                      ) : (
                        "Schedule Meeting"
                      )}
                    </motion.span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}