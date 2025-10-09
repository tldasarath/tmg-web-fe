'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../layout/Container';

const GoldenVisaBanner = () => {
  return (
    <section className="relative w-full h-[655px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/assets/images/visa/sky-banner.png" 
          alt="Sky background"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-gray-100/40 to-blue-100/20"></div>
      </div>

      <Container>
        <div className="relative z-10 h-[655px] flex items-center">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
            {/*Airplane Image */}
            <motion.div 
              className="flex justify-center lg:justify-start"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="relative">
                {/* Large Golden Text - OPTION 1: Staggered Word Animation (RECOMMENDED) */}
                <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-8xl font-bold mb-4">
                  <motion.span 
                    className="inline-block text-[#c99b5a]"
                    initial={{ opacity: 0, x: -50, rotateY: -90 }}
                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                    transition={{ 
                      duration: 1, 
                      delay: 0.2,
                      type: "spring",
                      stiffness: 100
                    }}
                  >
                    Golden
                  </motion.span>{' '}
                  <motion.span 
                    className="inline-block text-black"
                    initial={{ opacity: 0, x: 50, rotateY: 90 }}
                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                    transition={{ 
                      duration: 1, 
                      delay: 0.5,
                      type: "spring",
                      stiffness: 100
                    }}
                  >
                    Visa
                  </motion.span>
                </h2>

                {/* OPTION 2: Scale + Fade (Elegant & Professional) */}
                {/* <motion.h1 
                  className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-4"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 1, 
                    delay: 0.3,
                    type: "spring",
                    stiffness: 80
                  }}
                >
                  <span className="text-[#c99b5a]">Golden</span>{' '}
                  <span className="text-black">Visa</span>
                </motion.h1> */}
               

                {/* OPTION 3: Typewriter Effect with Glow */}
                {/* <motion.h1 
                  className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.span 
                    className="text-[#c99b5a] drop-shadow-[0_0_15px_rgba(201,155,90,0.5)]"
                    initial={{ width: 0, display: "inline-block", overflow: "hidden" }}
                    animate={{ width: "auto" }}
                    transition={{ duration: 1, delay: 0.3 }}
                  >
                    Golden
                  </motion.span>{' '}
                  <motion.span 
                    className="text-black"
                    initial={{ width: 0, display: "inline-block", overflow: "hidden" }}
                    animate={{ width: "auto" }}
                    transition={{ duration: 1, delay: 1.3 }}
                  >
                    Visa
                  </motion.span>
                </motion.h1> */}
               

                {/* OPTION 4: Bounce In (Energetic & Fun) */}
                {/* <motion.h1 
                  className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-4"
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.3,
                    type: "spring",
                    bounce: 0.5
                  }}
                >
                  <span className="text-[#c99b5a]">Golden</span>{' '}
                  <span className="text-black">Visa</span>
                </motion.h1> */}
               

                {/* OPTION 5: Slide & Fade from Bottom (Smooth & Classic) */}
                {/* <motion.h1 
                  className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-4"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 1, 
                    delay: 0.3,
                    ease: [0.6, -0.05, 0.01, 0.99]
                  }}
                >
                  <span className="text-[#c99b5a]">Golden</span>{' '}
                  <span className="text-black">Visa</span>
                </motion.h1> */}
               

                {/* OPTION 6: Letter by Letter Animation (Most Premium) */}
                {/* <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-4">
                  {"Golden".split("").map((letter, index) => (
                    <motion.span
                      key={index}
                      className="inline-block text-[#c99b5a]"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.1 + index * 0.1,
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}{' '}
                  {"Visa".split("").map((letter, index) => (
                    <motion.span
                      key={index}
                      className="inline-block text-black"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.7 + index * 0.1,
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </h1> */}
               
                
                {/* Airplane Image with Floating Animation */}
                <motion.div 
                  className="relative w-full max-w-sm lg:max-w-md mt-8"
                  animate={{ 
                    y: [0, -15, 0],
                    x: [0, 10, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <img 
                    src="/assets/images/visa/plane-element.png" 
                    alt="Golden airplane"
                    className="w-full h-auto object-contain"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div 
              className="space-y-6 px-4 sm:px-6 lg:px-0"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <motion.h2 
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5c1a2e] leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Golden Visa<br />Assistance
              </motion.h2>
              
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </p>
                
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GoldenVisaBanner;