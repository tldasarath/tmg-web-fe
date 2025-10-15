// components/BannerSection.jsx
import React from 'react';
import Link from 'next/link';

const BannerSection = ({ 
  title = "Page Title", 
  breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about-us" }
  ],
  backgroundImage = "/assets/images/banner/banner01.png" 
}) => {
  return (
    <section 
      className="relative h-80 md:h-[500px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="relative z-10 text-center text-white">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {title}
        </h1>
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center justify-center space-x-2 text-lg">
          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center">
              {index > 0 && <span className="mx-2">/</span>}
              
              {/* Last item - current page (not clickable) */}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-gray-300 cursor-default">
                  {crumb.name}
                </span>
              ) : (
                /* Clickable breadcrumb links */
                <Link 
                  href={crumb.path}
                  className="hover:text-gray-300 transition-colors duration-200"
                >
                  {crumb.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default BannerSection;