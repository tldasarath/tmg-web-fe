'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: 'easeOut'
      }
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `

            url('/assets/images/contact/background_img.png')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
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
          ease: "linear"
        }}
        className="absolute top-10 left-10 w-32 h-32 border-4 border-white/10 rounded-full"
      />
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 right-20 w-40 h-40 border-4 border-white/10 rounded-full"
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
      >
        {/* Form Section */}
        <motion.div
          variants={formVariants}
          className="bg-black rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl order-2 lg:order-1"
        >
          <motion.h2
            variants={inputVariants}
            className="text-4xl sm:text-5xl font-bold text-white mb-8 tracking-wide"
          >
            GET IN TOUCH
          </motion.h2>

          <div className="space-y-5">
            <motion.div variants={inputVariants}>
              <label htmlFor="fullName" className="block text-white text-sm mb-2 font-medium">
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
                className="w-full px-4 py-3 rounded-xl bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
              />
            </motion.div>

            <motion.div variants={inputVariants}>
              <label htmlFor="phone" className="block text-white text-sm mb-2 font-medium">
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
                className="w-full px-4 py-3 rounded-xl bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
              />
            </motion.div>

            <motion.div variants={inputVariants}>
              <label htmlFor="email" className="block text-white text-sm mb-2 font-medium">
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
                className="w-full px-4 py-3 rounded-xl bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
              />
            </motion.div>

            <motion.div variants={inputVariants}>
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type Your Message"
                rows="4"
                className="w-full px-4 py-3 rounded-xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all resize-none"
              />
            </motion.div>

            <motion.div variants={inputVariants} className="pt-2">
              <motion.button
                onClick={handleSubmit}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 10px 30px rgba(217, 119, 6, 0.4)'
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-8 py-3 rounded-full transition-colors flex items-center gap-2 shadow-lg"
              >
                Submit
                <motion.svg
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  className="w-5 h-5"
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
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Text Content Section */}
        <motion.div
          variants={textVariants}
          className="relative order-1 lg:order-2 text-white px-4 lg:px-8"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl lg:text-2xl leading-relaxed font-light"
          >
            Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
}