"use client";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Container } from "../layout/Container";

export default function AdvantageSection() {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [isSwiped, setIsSwiped] = useState(false);

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const bulletVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        delay: 0.5,
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const advantages = [
    "Dedicated business consultants for every setup.",
    "100% clarity on timelines, costs, and documentation.",
    "Strong partnerships with UAE government authorities.",
    "Personalized business solutions designed for long-term success.",
  ];

  const handleSwipe = () => {
    setIsSwiped(true);
    setTimeout(() => {
      setIsSwiped(false);
    }, 1000);
  };

  return (
    <div
      ref={sectionRef}
      className="w-full py-16 md:py-20 lg:py-24 bg-white overflow-hidden relative"
    >
      <div
        className="absolute top-[50%] left-0 w-48 h-48 opacity-100"
        style={{ transform: "translateY(-50%)" }}
      >
        <img
          src="/assets/images/about/left_element_about.png"
          alt="Professional woman with tablet"
          className="w-full h-auto rounded-2xl"
        />{" "}
      </div>
      <Container>
        <motion.div
          className="max-w-7xl mx-auto "
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-5 items-center">
            {/* Left Section */}
            <motion.div className="relative">
              <motion.div className=" relative z-10">
                {/* Title */}
                <motion.h2
                  variants={titleVariants}
                  className=" text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold text-[#49051E] leading-5 md:leading-9 mb-3 md:mb-4"
                >
                  The TMG Global Advantage
                </motion.h2>

                {/* Description */}
                <motion.p
                  variants={descriptionVariants}
                  className="text-sm sm:text-base text-gray-800 leading-relaxed max-w-md  mb-6 md:mb-8"
                >
                  TMG Global stands out through transparency, expertise, and
                  commitment. Our team understands the UAE's business landscape
                  inside out, ensuring fast and compliant results for every
                  client. We offer:
                </motion.p>

                {/* Bullet Points */}
                <motion.div
                  className="space-y-3 md:space-y-4"
                  variants={containerVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  {advantages.map((advantage, i) => (
                    <motion.div
                      key={i}
                      custom={i}
                      variants={bulletVariants}
                      className="flex items-start gap-3"
                    >
                      <div className="flex-shrink-0 w-4 h-4 rounded-full bg-[#49051E] mt-1.5" />
                      <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                        {advantage}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Section */}
            <motion.div
              variants={cardVariants}
              className="flex justify-center lg:justify-end"
            >
              <div className="bg-[#C79A59] rounded-3xl px-8 md:px-15 py-20 shadow-2xl w-full max-w-sm h-fit">
                {/* Card Content */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                  }
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="space-y-6"
                >
            
                  <div>
                    <h3 className="text-2xl font-bold text-[#49051E] mb-3 leading-tight">
                      Book a Consultation
                      <br />
                      with TMG Global
                    </h3>
                    <p className="text-sm text-gray-800 leading-relaxed">
                      Plan your meeting with ease. Select a date that suits you,
                      and we'll make sure an expert is ready to assist you with
                      your business setup in the UAE.
                    </p>
                  </div>

                  {/* Swipe Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, delay: 0.7 }}
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
        </motion.div>
      </Container>
    </div>
  );
}
