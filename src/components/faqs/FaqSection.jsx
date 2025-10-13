"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../layout/Container";
import { faqsData } from "../data/FaqData";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(2);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen md:min-h-fit bg-white py-16 relative overflow-hidden">
      {/* Decorative watercolor splash */}
      {/* <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 0.3, scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-yellow-300 via-orange-200 to-amber-300 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
        animate={{ opacity: 0.2, scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        className="absolute top-20 left-5 w-48 h-48 bg-gradient-to-br from-green-200 via-emerald-200 to-teal-200 rounded-full blur-2xl"
      /> */}

      <div
        className="absolute left-0 top-[30%] w-80 h-80 opacity-100"
        style={{ transform: "translateY(-50%)" }}
      >
        <img
          src="/assets/images/faqs/left_element_faq.png"
          alt="Professional woman with tablet"
          className="w-full h-auto rounded-2xl"
        />{" "}
      </div>

      <Container>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-red-900 via-rose-800 to-red-900 bg-clip-text text-transparent"
          >
            Frequently Asking Questions
          </motion.h1>

          <div className="space-y-4">
            {faqsData.map((faq, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: isEven ? -100 : 100,
                    rotateY: isEven ? -15 : 15,
                    scale: 0.8,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    rotateY: 0,
                    scale: 1,
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.15,
                    ease: [0.34, 1.56, 0.64, 1],
                    opacity: { duration: 0.5 },
                    scale: {
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                    },
                  }}
                  className="relative"
                  style={{ perspective: 1000 }}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                      y: -2,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="rounded-lg shadow-lg overflow-hidden"
                    style={{
                      backgroundColor:
                        openIndex === index ? "#C79A59" : "#941D43",
                    }}
                  >
                    <motion.button
                      onClick={() => toggleFAQ(index)}
                      className="w-full text-left p-6 text-white font-medium text-lg flex justify-between items-center group"
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="pr-8">{faq.question}</span>
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="flex-shrink-0"
                      >
                        {openIndex === index ? (
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M5 15l7-7 7 7"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        )}
                      </motion.div>
                    </motion.button>

                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                            transition: {
                              height: { duration: 0.4, ease: "easeOut" },
                              opacity: { duration: 0.3, delay: 0.1 },
                            },
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                            transition: {
                              height: { duration: 0.3, ease: "easeIn" },
                              opacity: { duration: 0.2 },
                            },
                          }}
                          className="overflow-hidden"
                        >
                          <motion.div
                            initial={{ y: -10 }}
                            animate={{ y: 0 }}
                            exit={{ y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="px-6 pb-6 text-white text-base leading-relaxed bg-black bg-opacity-10"
                          >
                            {faq.answer}
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Decorative glow effect */}
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.6, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                        className="absolute -inset-0.5 rounded-lg blur-sm -z-10"
                        style={{
                          backgroundColor: "#C79A59",
                        }}
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Floating particles effect */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-amber-400 rounded-full opacity-40"
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FAQSection;
