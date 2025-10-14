// components/ImageWithRectangles.tsx
'use client';

import Image from 'next/image';
import { Container } from '../layout/Container';

const BusinessDestination = () => {
  const rectangles = [
    {
      id: 1,
      title: 'World-Class Infrastructure',
      description: 'Dubai offers state-of-the-art facilities, modern office spaces, and cutting-edge logistics that empower businesses to operate efficiently and scale seamlessly. Our offices provide a professional environment with top-tier amenities to ensure productivity and comfort.'
    },
    {
      id: 2,
      title: 'Strategic Location',
      description: 'Dubai\'s prime location connects businesses to key markets across the Middle East, Asia, Europe, and beyond, making it a global hub for trade and investment. We have 4 strategically located branches to serve you efficiently across the city.'
    },
    {
      id: 3,
      title: 'Ease of Doing Business',
      description: 'Dubai is recognized as one of the world\'s easiest cities to start and operate a business, thanks to streamlined government processes and investor-friendly policies. With 18+ years of industry experience, TMG Global ensures a smooth and hassle-free setup process.'
    },
    {
      id: 4,
      title: 'Explore Our Departments',
      description: 'TMG Global supports every aspect of business setup — from licensing and document clearance to PRO services and government approvals. Explore all our departments designed to cater to your unique business requirements.'
    },
    {
      id: 5,
      title: '0% Corporate & Income Tax',
      description: 'Dubai provides a highly attractive tax environment, including 0% corporate and personal income tax, allowing businesses to maximize profits and growth.'
    },
    {
      id: 6,
      title: '100% Ownership',
      description: 'Foreign investors enjoy 100% ownership of their businesses in Dubai\'s free zones, giving complete control and operational freedom without the need for a local partner.'
    }
  ];

  return (
    <div className="min-h-screen relative bg-white overflow-hidden py-16">
      <div className="w-full">
        {/* Header Section */}
        <Container>
          <div className="lg:w-1/2 mb-12">
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

        {/* Decorative Image */}
        <div
          className="absolute top-[15%] right-[-3%] w-80 h-80 opacity-100"
          style={{ transform: "translateY(-50%)" }}
        >
          <img
            src="/assets/images/common/right_element.png"
            alt="Professional woman with tablet"
            className="w-full h-auto rounded-2xl"
          />
        </div>

        {/* Main Content with Central Logo and Pulse Animation */}
        <Container>
          <div className="relative py-20">
            {/* Central Logo Section with Pulse Animation */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              {/* Pulse Animation Rings */}
              <div className="absolute inset-0 -m-4">
                <div className="absolute inset-0 rounded-full border-2 border-blue-500 animate-pulse-slow opacity-70"></div>
                <div className="absolute inset-2 rounded-full border-2 border-blue-400 animate-pulse-slower opacity-50"></div>
                <div className="absolute inset-4 rounded-full border-2 border-blue-300 animate-pulse-slowest opacity-30"></div>
              </div>
              
              {/* Logo Container */}
              <div className="relative bg-white rounded-full p-6 shadow-2xl border border-gray-200 z-10">
                <div className="w-24 h-24 relative">
                  <Image
                    src="/assets/images/BusinessSection/logos/icon01.png"
                    alt="Business Solutions"
                    fill
                    className="object-contain"
                  />
                </div>
                
                {/* Center Dot for Connection Points */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full animate-ping-slow"></div>
                </div>
              </div>
            </div>

            {/* Rectangles Grid with Animated Lines */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
              {rectangles.map((item, index) => (
                <div
                  key={item.id}
                  className={`relative group ${
                    index < 3 ? 'md:pr-48' : 'md:pl-48'
                  }`}
                >
                  {/* Card */}
                  <div className="bg-white rounded-xl shadow-lg md:h-56 hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-[#941D43] group">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#941D43] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Animated Connecting Line */}
                  <div className={`absolute hidden md:block ${
                    index < 3 ? 
                    'right-24 top-1/2 transform -translate-y-1/2' :
                    'left-24 top-1/2 transform -translate-y-1/2'
                  }`}>
                    {/* Static Line */}
                    <div className={`absolute top-1/2 transform -translate-y-1/2 w-48 h-0.5 bg-gray-300 ${
                      index < 3 ? 'right-0' : 'left-0'
                    }`}></div>
                    
                    {/* Animated Pulse Line */}
                    <div className={`absolute top-1/2 transform -translate-y-1/2 w-48 h-0.5 bg-gradient-to-r ${
                      index < 3 ? 
                      'from-blue-500 to-blue-300 right-0 animate-pulse-flow-left' :
                      'from-blue-300 to-blue-500 left-0 animate-pulse-flow-right'
                    }`}></div>
                    
                    {/* Connection Dot at Card End */}
                    <div className={`absolute top-1/2 transform -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full animate-ping ${
                      index < 3 ? 'right-0' : 'left-0'
                    }`} style={{ animationDelay: `${index * 0.2}s` }}></div>
                    
                    {/* Connection Dot at Center End */}
                    <div className={`absolute top-1/2 transform -translate-y-1/2 w-2 h-2 bg-blue-600 rounded-full ${
                      index < 3 ? 'left-0' : 'right-0'
                    }`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Add custom animations to global CSS */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.05); }
        }
        
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.1); }
        }
        
        @keyframes pulse-slowest {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.1; transform: scale(1.15); }
        }
        
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        
        @keyframes pulse-flow-left {
          0% { transform: translateX(100%) scaleX(0); opacity: 0; }
          50% { transform: translateX(50%) scaleX(1); opacity: 1; }
          100% { transform: translateX(0%) scaleX(0); opacity: 0; }
        }
        
        @keyframes pulse-flow-right {
          0% { transform: translateX(-100%) scaleX(0); opacity: 0; }
          50% { transform: translateX(-50%) scaleX(1); opacity: 1; }
          100% { transform: translateX(0%) scaleX(0); opacity: 0; }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .animate-pulse-slower {
          animation: pulse-slower 4s ease-in-out infinite;
        }
        
        .animate-pulse-slowest {
          animation: pulse-slowest 5s ease-in-out infinite;
        }
        
        .animate-ping-slow {
          animation: ping-slow 2s ease-in-out infinite;
        }
        
        .animate-pulse-flow-left {
          animation: pulse-flow-left 3s ease-in-out infinite;
        }
        
        .animate-pulse-flow-right {
          animation: pulse-flow-right 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default BusinessDestination;