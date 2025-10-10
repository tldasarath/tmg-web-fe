// import React, { useState } from 'react';
import { motion } from 'framer-motion';
export const LicenseCard = ({ title, image, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="relative group cursor-pointer fade-in-90"
  >
    <div className="relative h-[320px] w-auto rounded-2xl overflow-hidden">
      <div className="absolute inset-0 bg-[#941D43]/60 h-64 w-56 z-10 top-[10%] left-[10%]"></div>
      <img
        src={image}
        alt={title}
        className="w-full h-full object-scale-down group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <h3 className="text-white font-semibold text-lg text-center px-4">{title}</h3>
      </div>
    </div>
  </motion.div>
);