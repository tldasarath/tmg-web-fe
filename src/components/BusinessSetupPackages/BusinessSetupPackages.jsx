
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';



export const BusinessSetupPackages = () => {
  const [activeTab, setActiveTab] = useState('FREEZONE');

  const freezoneOptions = [
    { name: 'SPC FREEZONE', icon: '↗' },
    { name: 'Shams FREEZONE', icon: '↗' },
    { name: 'IFZ', icon: '↗' },
    { name: 'MEYDAN', icon: '↗' }
  ];

  return (
    <div className="bg-black rounded-3xl p-8 lg:p-12">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Content */}
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white text-4xl lg:text-5xl font-bold mb-8"
          >
            All-inclusive Business Setup Packages
          </motion.h2>

          {/* Tab Buttons */}
          <div className="flex gap-4 mb-8 flex-wrap">
            <button
              onClick={() => setActiveTab('FREEZONE')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === 'FREEZONE'
                  ? 'bg-amber-500 text-black'
                  : 'bg-transparent text-white border border-gray-600 hover:border-amber-500'
              }`}
            >
              FREEZONE
            </button>
            <button
              onClick={() => setActiveTab('Mainland')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === 'Mainland'
                  ? 'bg-amber-500 text-black'
                  : 'bg-transparent text-white border border-gray-600 hover:border-amber-500'
              }`}
            >
              Mainland
            </button>
            <button
              onClick={() => setActiveTab('OFFSHORE')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === 'OFFSHORE'
                  ? 'bg-amber-500 text-black'
                  : 'bg-transparent text-white border border-gray-600 hover:border-amber-500'
              }`}
            >
              OFFSHORE
            </button>
          </div>

          {/* Freezone Options */}
          <div className="space-y-4 mb-8">
            {freezoneOptions.map((option, index) => (
              <motion.div
                key={option.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-3 text-amber-400 hover:text-amber-300 cursor-pointer group"
              >
                <span className="text-xl lg:text-2xl font-semibold group-hover:translate-x-2 transition-transform">
                  {option.name}
                </span>
                <ArrowUpRight className="w-6 h-6" />
              </motion.div>
            ))}
          </div>

          {/* Explore Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-amber-500 text-black px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-amber-400 transition-colors"
          >
            Explore Packages
            <ArrowUpRight className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Right Side - Images */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden h-64"
          >
            <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
              <img className="text-sm font-semibold text-gray-800" src='/assets/images/category/spc-logo.png' alt='SPC Logo' />
            </div>
            <img
              src="/assets/images/category/category1.png"
              alt="Dubai Skyline"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden h-64"
          >
            <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
              <img className="text-sm font-semibold text-gray-800" src='/assets/images/category/spc-logo.png' alt='SPC Logo' />
            </div>
            <div className="absolute bottom-4 left-4 z-10 bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-2 rounded-lg">
              <span className="text-sm font-bold text-white">WELCOME TO SHAMS BUSINESS CENTRE</span>
            </div>
            <img
              src="/assets/images/category/category2.png"
              alt="Shams Business Centre"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};