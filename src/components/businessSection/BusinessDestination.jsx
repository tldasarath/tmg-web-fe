// components/ImageWithRectangles.tsx
'use client';

import Image from 'next/image';
import { Container } from '../layout/Container';

const BusinessDestination = () => {
  const rectangles = [
    {
      id: 1,
      icon: '/assets/images/BusinessSection/logos/icon01.png',
      title: 'World-Class Infrastructure',
      description: 'Dubai offers state-of-the-art facilities, modern office spaces, and cutting-edge logistics that empower businesses to operate efficiently and scale seamlessly. Our offices provide a professional environment with top-tier amenities to ensure productivity and comfort.'
    },
    {
      id: 2,
      icon: '/assets/icons/icon2.svg',
      title: 'Strategic Location',
      description: 'Dubai’s prime location connects businesses to key markets across the Middle East, Asia, Europe, and beyond, making it a global hub for trade and investment. We have 4 strategically located branches to serve you efficiently across the city.'
    },
    {
      id: 3,
      icon: '/assets/icons/icon3.svg',
      title: 'Ease of Doing Business',
      description: 'Dubai is recognized as one of the world’s easiest cities to start and operate a business, thanks to streamlined government processes and investor-friendly policies. With 18+ years of industry experience, TMG Global ensures a smooth and hassle-free setup process.'
    },
    {
      id: 4,
      icon: '/assets/icons/icon4.svg',
      title: 'Explore Our Departments',
      description: 'TMG Global supports every aspect of business setup — from licensing and document clearance to PRO services and government approvals. Explore all our departments designed to cater to your unique business requirements.'
    },
    {
      id: 5,
      icon: '/assets/icons/icon5.svg',
      title: '0% Corporate & Income Tax',
      description: 'Dubai provides a highly attractive tax environment, including 0% corporate and personal income tax, allowing businesses to maximize profits and growth.'
    },
    {
      id: 6,
      icon: '/assets/icons/icon6.svg',
      title: '100% Ownership',
      description: 'Foreign investors enjoy 100% ownership of their businesses in Dubai’s free zones, giving complete control and operational freedom without the need for a local partner.'
    }
  ];

  return (
    <div className="min-h-screen relative bg-white overflow-hidden  py-16 ">
      <div className="w-full ">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16">
          {/* Heading - Left Side */}
    <Container>
            <div className="lg:w-1/2 mb-8 lg:mb-0 ">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Our Comprehensive
              <span className="text-blue-600 block">Business Solutions</span>
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl">
              We provide end-to-end business consulting services to help you achieve 
              your goals and drive sustainable growth in today's competitive market.
            </p>
          </div>
    </Container>

          {/* Image - Right Top */}
          {/* <div className="lg:w-1/2 flex justify-end">
            <div className="relative  w-40 h-64 lg:h-40 rounded-2xl overflow-hidden ">
              <Image
                src="/assets/images/common/right_element.png"
                alt="Business Solutions"
                fill
                className="object-fit"
                priority
              />
            </div>
          </div> */}
           <div
        className="absolute top-[15%] right-[-3%] w-80 h-80 opacity-100 "
        style={{ transform: "translateY(-50%)" }}
      >
        <img
          src="/assets/images/common/right_element.png"
          alt="Professional woman with tablet"
          className="w-full h-auto rounded-2xl"
        />{" "}
      </div>
        </div>

        {/* Rectangles Grid */}
  <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Section - 3 Rectangles */}
          <div className="space-y-6">
            {rectangles.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-lg md:h-56 hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-[#941D43] group"
              >
                <div className="flex items-start space-x-4">
                  {/* Small Image/Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                      <div className="w-6 h-6 relative">
                        <Image
                          src={item.icon}
                          alt={item.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#941D43] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Section - 3 Rectangles */}
          <div className="space-y-6">
            {rectangles.slice(3, 6).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-lg md:h-56 hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-[#941D43] group"
              >
                <div className="flex items-start space-x-4">
                  {/* Small Image/Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                      <div className="w-6 h-6 relative">
                        <Image
                          src={item.icon}
                          alt={item.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
  </Container>

        {/* Optional CTA Button */}
       
      </div>
    </div>
  );
};

export default BusinessDestination;