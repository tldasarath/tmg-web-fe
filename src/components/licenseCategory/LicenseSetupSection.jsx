
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BusinessSetupPackages } from '../BusinessSetupPackages/BusinessSetupPackages';
import { LicenseCard } from './LicenseCard';
import { Container } from '../layout/Container';


// License Category Card Component





// Main Component
const LicenseSetupPage = () => {
  const licenseCategories = [
    { title: 'Professional License', image: '/assets/images/category/category1.png' },
    { title: 'Commercial License', image: '/assets/images/category/category2.png' },
    { title: 'Industrial License', image: '/assets/images/category/category3.png' },
    { title: 'E-Trader License', image: '/assets/images/category/category4.png' }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Decorative Watercolor Effect */}
      <Container>
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-200 rounded-full blur-3xl opacity-30"></div>

      <div className="container mx-auto px-4 py-16 lg:py-24">
        {/* License Category Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            License category
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Rorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </motion.div>

        {/* License Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {licenseCategories.map((category, index) => (
            <LicenseCard
              key={index}
              title={category.title}
              image={category.image}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Business Setup Packages Section */}
        <BusinessSetupPackages />
      </div>
      </Container>

    </div>
  );
};

export default LicenseSetupPage;