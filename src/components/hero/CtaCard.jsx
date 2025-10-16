'use client'
import { motion } from "framer-motion";

export const LetsTalkCard = () => {
  return (
    <motion.div
      className="w-[213px] h-[213px] bg-gradient-to-br from-[#C79A59] to-[#2D0A1F] rounded-2xl shadow-2xl p-6 flex flex-col justify-between relative overflow-hidden"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full -translate-x-8 translate-y-8"></div>
      
      {/* Content */}
      <div className="text-white z-10">
        <h3 className="text-2xl font-bold leading-tight mb-2">
          Let&apos;s Talk
        </h3>
        <p className="text-white/80 text-sm font-medium mb-1">Service</p>
      </div>

      {/* Bottom section */}
      <div className="flex justify-between items-end z-10">
        <button className="bg-white/20 hover:bg-white/30 text-white text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-300 backdrop-blur-sm">
          Schedule Meet
        </button>
        <div className="text-white text-2xl font-bold">
          7
        </div>
      </div>

      {/* Shine effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
        whileHover={{ translateX: "200%" }}
        transition={{ duration: 0.6 }}
      />
    </motion.div>
  );
};