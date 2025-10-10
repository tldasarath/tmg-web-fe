import React from 'react';
import MainButton from '../button/main-button';
import { Container } from '../layout/Container';
import LettersPullUpText from '../text/LettersPullUpText';

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
        <Container>
    <section className="lg:py-16 py-8 ">
      <div className="w-full">
        {/* Heading and Description */}
        <div className=" mb-12">
         <LettersPullUpText
                  text=" Our Services"
                  className="text-[#49051E]"
                />
          <p className="text-[0.938rem]  md:text-lg ">
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
        <div className="text-center flex justify-center">
          {/* <button className="bg-[#49051E] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#3a0418] transition-colors duration-300">
            More Services
          </button> */}
          <MainButton text='More Services'   gradient="linear-gradient(90deg, rgba(14,14,14,1) 0%, rgba(73,5,30,1) 100%)"
/>
        </div>
      </div>
    </section>
        </Container>
  );
};

const ServiceItem = ({ service }) => {
  return (
    <div
      className="
        group 
        p-6  
        border-b-2 border-black 
        rounded-lg 
        hover:text-white 
        transition-all duration-300 
        cursor-pointer 
        relative 
        overflow-hidden
      "
    >
      {/* Content */}
      <div className="flex items-center gap-3 relative z-10 transition-all duration-300">
        {/* Icon before text */}
        <svg
          className="
            w-6 h-6 
            text-[#49051E] 
            group-hover:text-white 
            transition-all duration-300 
            transform group-hover:-translate-y-0.5
          "
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
        </svg>

        {/* Service name */}
        <span className="text-[1.875rem] font-bold">{service}</span>
      </div>

      {/* Gradient background on hover */}
      <div
        className="
          absolute inset-0 
          opacity-0 
          group-hover:opacity-100 
          transition-opacity duration-300 
          rounded-lg 
          -z-0
        "
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(142,26,61,1) 0%, rgba(40,7,17,1) 100%)',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
      ></div>
    </div>
  );
};

export default ServicesSection;