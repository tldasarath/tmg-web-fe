import React from 'react';

const ServicesSection = () => {
  const leftServices = [
    'Document Services',
    'Value-Added Services', 
    'Value-Added Services'
  ];

  const rightServices = [
    'PRO Services',
    'Visa Services',
    'Government Services'
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading and Description */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive solutions to meet all your service needs with 
            professionalism and excellence. Our team is dedicated to delivering 
            outstanding results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left Section */}
          <div className="space-y-4">
            {leftServices.map((service, index) => (
              <ServiceItem key={index} service={service} />
            ))}
          </div>

          {/* Right Section */}
          <div className="space-y-4">
            {rightServices.map((service, index) => (
              <ServiceItem key={index} service={service} />
            ))}
          </div>
        </div>

        {/* More Services Button */}
        <div className="text-center">
          <button className="bg-[#49051E] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#3a0418] transition-colors duration-300">
            More Services
          </button>
        </div>
      </div>
    </section>
  );
};

const ServiceItem = ({ service }) => {
  return (
    <div className="group p-6  border-b-2 border-black rounded-lg hover:bg-[#49051E] hover:text-white transition-all duration-300 cursor-pointer relative overflow-hidden">
      <div className="flex justify-between items-center">
        <span className="text-lg font-medium">{service}</span>
        <div className="opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;