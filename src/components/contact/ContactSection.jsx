"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import MainButton from "../button/main-button";
import { Container } from "../layout/Container";

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };


  const textWords =
    `Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`.split(
      " "
    );


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: "easeOut",
      },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };


  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(8px)",
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.03, 
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="h-[671px] w-full relative overflow-hidden flex items-center justify-center ">
      {/* Background Image with Overlay */}
      <Container>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/assets/images/contact/background_img.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Decorative Elements */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-10 left-10 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border-4 border-white/10 rounded-full"
      />
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-10 right-10 w-24 h-24 sm:w-28 sm:h-28 lg:w-40 lg:h-40 border-4 border-white/10 rounded-full"
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 items-center"
      >
        {/* Form Section */}
        <motion.div
          variants={formVariants}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-black rounded-3xl shadow-2xl order-2 lg:order-1 mx-auto w-full max-w-[442px] h-[566px] p-6 sm:p-7 lg:p-8 flex flex-col justify-between"
        >
          {/* Header Section */}
          <div>
            <motion.h2
              variants={inputVariants}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-6 tracking-wide text-center lg:text-left"
            >
              GET IN TOUCH
            </motion.h2>
          </div>

          {/* Form Fields - Optimized for space */}
          <div className="space-y-3 lg:space-y-3 flex-1">
            <motion.div variants={inputVariants}>
              <label
                htmlFor="fullName"
                className="block text-white text-xs mb-1 font-medium"
              >
                Full Name
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all text-sm"
                placeholder="Enter your full name"
              />
            </motion.div>

            <motion.div variants={inputVariants}>
              <label
                htmlFor="phone"
                className="block text-white text-xs mb-1 font-medium"
              >
                Phone Number
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all text-sm"
                placeholder="Enter your phone number"
              />
            </motion.div>

            <motion.div variants={inputVariants}>
              <label
                htmlFor="email"
                className="block text-white text-xs mb-1 font-medium"
              >
                Email
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all text-sm"
                placeholder="Enter your email"
              />
            </motion.div>

            <motion.div variants={inputVariants} className="flex-1">
              <label
                htmlFor="message"
                className="block text-white text-xs mb-1 font-medium"
              >
                Message
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                rows="3"
                className="w-full px-3 py-2 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all resize-none text-sm min-h-[80px]"
              />
            </motion.div>
          </div>

          {/* Button Section */}
          <motion.div
            variants={inputVariants}
            className="pt-0 flex justify-center"
          >
            <MainButton
              bgColor="#C79A59"
              text="Submit"
              link="/"
              className=""
              icon="external"
            />
            {/* <motion.button
              onClick={handleSubmit}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 30px rgba(217, 119, 6, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-[#C79A59] hover:bg-[#B68A4D] text-white font-semibold px-6 py-2 rounded-full transition-colors flex items-center justify-center gap-2 shadow-lg w-full text-sm"
            >
              Submit
              <motion.svg
                animate={{ x: [0, 4, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </motion.svg>
            </motion.button> */}
          </motion.div>
        </motion.div>

        {/* Text Content Section with Word-by-Word Animation */}
        <motion.div
          variants={textVariants}
          className="relative order-1 lg:order-2 text-white px-2 lg:px-6 xl:px-8 h-full flex items-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full"
          >
            <p className="text-sm sm:text-lg  lg:text-xl xl:text-2xl leading-relaxed font-light text-center lg:text-left">
              {textWords.map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordVariants}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="inline-block mr-1"
                >
                  {word}
                </motion.span>
              ))}
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
      </Container>

    </div>
  );
}
