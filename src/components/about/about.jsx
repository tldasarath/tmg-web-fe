'use client';

import Image from 'next/image';
import { Container } from '../layout/Container';
import { useState } from 'react';

const AboutUsSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative px-4 sm:px-6 lg:px-0 py-8 lg:py-16">
       <div
        className="absolute left-0 w-80 h-80 opacity-100 bottom-0 "
      >
        <img
          src="/assets/images/about/left_element.png"
          alt="Professional woman with tablet"
          className="w-full h-auto rounded-2xl"
        />{" "}
      </div>
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Content Section */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#49051E] mb-6">
              About Us
            </h2>
            <div className="space-y-2 text-lg text-gray-600 leading-relaxed">
              <p>
                TMG Global Services LLC (Thameem Management Group Global LLC) is a leading business setup and document clearing company in Dubai, providing complete, end-to-end solutions for individuals, entrepreneurs, and corporations across the UAE.
              </p>
              <p>
                Founded by Mr. Thameem Aboobacker, a visionary leader and pioneer in business consultancy and government services, TMG Global was created with one mission — to simplify complex business and government processes and empower people to achieve success. With over four branches across Dubai and a team of highly skilled professionals, we offer a full spectrum of services including business setup, visa processing, PRO services, trade license renewals, and corporate documentation.
              </p>
              <p>
                At TMG Global, we combine local expertise, global perspective, and customer-first service — ensuring fast, compliant, and reliable business solutions tailored to your needs.
              </p>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="lg:w-1/2 relative">
            {/* Corner Design Container */}
            <div className="absolute -top-4 -left-4 w-72 h-52 pointer-events-none">
              {/* Horizontal Line (animated width) */}
              <div
                className={`absolute top-2 left-2 h-0.5 bg-[#C79A59] transition-all duration-700 ease-in-out ${
                  isHovered ? 'w-72' : 'w-20'
                }`}
              ></div>

              {/* Vertical Line (animated height) */}
              <div
                className={`absolute top-2 left-2 w-0.5  bg-[#C79A59] transition-all duration-700 ease-in-out delay-150 ${
                  isHovered ? 'h-52' : 'h-20'
                }`}
              ></div>

              {/* Moving Circle on Horizontal Line */}
              <div
                className={`absolute top-[0.4rem] transition-all duration-700 ease-in-out ${
                  isHovered ? 'left-[17.5rem]' : 'left-[5.3rem]'
                }`}
              >
                <div className="w-4 h-4 bg-[#49051E] rounded-full border-2 border-white shadow-lg transform -translate-y-1/2"></div>
              </div>

              {/* Moving Circle on Vertical Line */}
              <div
                className={`absolute left-[0.4rem] transition-all duration-700 ease-in-out delay-150 ${
                  isHovered ? 'top-[12.5rem]' : 'top-[5.3rem]'
                }`}
              >
                <div className="w-4 h-4 bg-[#49051E] rounded-full border-2 border-white shadow-lg transform -translate-x-1/2"></div>
              </div>
            </div>

            {/* Main Image */}
            <div
              className="relative overflow-hidden  ml-6 mt-6 transform transition-all duration-500 hover:scale-105"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Image
                src="/assets/images/about/about02.png"
                alt="TMG Global Team"
                width={600} 
                height={500}
                className="w-full h-auto object-cover"
              />

              {/* Overlay Gradient */}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUsSection;
