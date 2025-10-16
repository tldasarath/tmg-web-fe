'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="w-full flex items-center justify-center py-4 sm:py-6 lg:py-8">
      <div className="flex flex-col lg:flex-row w-full max-w-[1083px] mx-auto">
        {/* Left Section - Text with Background Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#941D43]/70 w-full lg:w-[611px] h-[400px] sm:h-[480px] lg:h-[573px] px-6 py-8 sm:px-10 sm:py-10 md:px-12 md:py-12 lg:px-14 lg:py-14 xl:px-16 xl:py-16 flex items-center overflow-hidden"
        >
          {/* Background Image - Replace with your actual image */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url('/assets/images/contact/bg-Img.png')`,
              backgroundBlendMode: 'multiply'
            }}
          />
          
          {/* Pattern Overlay */}
          {/* <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("/assets/images/contact/bg-Img.png")`,
              objectFit: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              // mixBlendMode: 'overlay' 
            }}
          /> */}
          
          {/* Decorative Building Silhouette */}
          {/* <div className="absolute right-0 bottom-0 w-[45%] sm:w-[40%] lg:w-[45%] h-[65%] sm:h-[70%] opacity-15">
            <svg viewBox="0 0 200 300" className="w-full h-full" preserveAspectRatio="xMaxYMax meet">
              <rect x="20" y="50" width="60" height="250" fill="currentColor" className="text-white"/>
              <rect x="90" y="80" width="50" height="220" fill="currentColor" className="text-white"/>
              <rect x="150" y="100" width="40" height="200" fill="currentColor" className="text-white"/>
              {[...Array(8)].map((_, i) => (
                <g key={i}>
                  <rect x="30" y={70 + i * 30} width="15" height="20" fill="currentColor" className="text-pink-300 opacity-60"/>
                  <rect x="55" y={70 + i * 30} width="15" height="20" fill="currentColor" className="text-pink-300 opacity-60"/>
                  <rect x="100" y={90 + i * 30} width="12" height="18" fill="currentColor" className="text-pink-300 opacity-60"/>
                  <rect x="118" y={90 + i * 30} width="12" height="18" fill="currentColor" className="text-pink-300 opacity-60"/>
                </g>
              ))}
            </svg>
          </div> */}

          <div className="relative z-10 w-full">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] font-bold text-white mb-4 sm:mb-5 lg:mb-6 leading-tight"
            >
              Torem ipsum dolor turpis molestie
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-white text-xs sm:text-sm md:text-[15px] lg:text-[16px] leading-relaxed"
            >
              Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent perClass aptent taciti sociosqu ad litora torquent Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
            </motion.p>
          </div>
        </motion.div>

        {/* Right Section - Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-black w-full lg:w-[472px] h-[500px] sm:h-[540px] lg:h-[573px] px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 lg:px-12 lg:py-14 flex items-center justify-center"
        >
          <div className="w-full max-w-md">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] font-bold text-white mb-5 sm:mb-6 lg:mb-8"
            >
              GET IN TOUCH
            </motion.h3>
            
            <div className="space-y-3 sm:space-y-4 lg:space-y-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <label className="block text-white text-xs sm:text-sm mb-1.5 sm:mb-2">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 sm:px-4 sm:py-2.5 lg:py-3 text-sm sm:text-base rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <label className="block text-white text-xs sm:text-sm mb-1.5 sm:mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 sm:px-4 sm:py-2.5 lg:py-3 text-sm sm:text-base rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <label className="block text-white text-xs sm:text-sm mb-1.5 sm:mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 sm:px-4 sm:py-2.5 lg:py-3 text-sm sm:text-base rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type Your Message"
                  rows={3}
                  className="w-full px-3 py-2 sm:px-4 sm:py-2.5 lg:py-3 text-sm sm:text-base rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition resize-none"
                />
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSubmit}
                className="w-full bg-[#C79A59] text-black font-semibold py-2.5 sm:py-3 px-4 sm:px-6 text-sm sm:text-base rounded-full hover:from-yellow-600 hover:to-yellow-700 transition flex items-center justify-center gap-2 mt-4 sm:mt-5 lg:mt-6"
              >
                Submit
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}