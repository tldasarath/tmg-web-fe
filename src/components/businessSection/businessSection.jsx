// components/VerticalRectangles.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Container } from '../layout/Container';
import MainButton from '../button/main-button';

const BusinessSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const rectangles = [
    {
      id: 1,
      title: 'FREEZONE',
      image: '/assets/images/businessSection/business01.png',
      color: '#8E8E8E',
      hoverColor: '#49051E',
      icon: '💡',
    },
    {
      id: 2,
      title: 'MAINLAND',
      image: '/assets/images/businessSection/business02.png',
      color: '#FFFFFF',
      hoverColor: '#49051E',
      icon: '⭐',
    },
    {
      id: 3,
      title: 'OFFSHORE',
      image: '/assets/images/businessSection/business03.png',
      color: '#49051E',
      hoverColor: '#49051E',
      icon: '📈',
    },
  ];

  useEffect(() => {
    // ✅ Keep the first rectangle open by default on load
    setActiveIndex(0);
  }, []);

  const getRectangleColor = (index, rectangle) => {
    if (activeIndex === index) {
      return rectangle.hoverColor;
    }
    if (rectangle.id === 2) {
      if (index === 1) return '#FFFFFF';
      else if (index === 0) return '#49051E';
    }
    if (rectangle.id === 1 && index === 0) return '#8E8E8E';
    if (rectangle.id === 3 && index === 2) return '#49051E';
    return rectangle.color;
  };

  const getBorderColor = (index, rectangle) => {
    if (rectangle.id === 2) return 'border-[#49051E]';
    return 'border-white';
  };

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="lg:h-[500px] h-auto py-16 px-4 sm:px-6 lg:px-10">
      <Container>
        <div className="w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Heading and Content */}
            <div className="space-y-8 lg:w-4/5 pr-4">
              <div className="space-y-6">
                <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                  Start Your Business in 
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                </p>
              </div>
            </div>

            {/* Right Side - Rectangles */}
{/* Right Side - Rectangles */}
<div className="flex flex-col lg:flex-row gap-4 justify-center lg:justify-end w-full lg:max-w-[70vw] overflow-visible">
  {rectangles.map((rectangle, index) => (
    <div
      key={rectangle.id}
      className="relative group cursor-pointer flex-shrink-0"
      onMouseEnter={() => handleMouseEnter(index)}
    >
      <div
        className={`
          relative overflow-hidden transition-all duration-700 ease-out
          h-[220px] sm:h-[260px] lg:h-[400px] rounded-2xl shadow-2xl
          transform group-hover:scale-[1.03]
          border-2 border-opacity-20
          ${activeIndex === index ? 'w-full lg:w-[500px]' : 'w-full lg:w-28'}
          backdrop-blur-sm
          ${getBorderColor(index, rectangle)}
        `}
        style={{ background: getRectangleColor(index, rectangle) }}
      >
        {/* Collapsed Text */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 z-10 ${
            activeIndex === index ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
          }`}
        >
          <div className="text-center">
            <span
              className={`font-bold text-2xl lg:text-[40px] tracking-wider ${
                rectangle.id === 2 && index === 1 ? 'text-[#49051E]' : 'text-white'
              } lg:[writing-mode:vertical-rl] lg:[text-orientation:mixed]`}
            >
              {rectangle.title}
            </span>
          </div>
        </div>

        {/* Expanded Image Content */}
        <div
          className={`absolute w-full h-full inset-0 transition-all duration-700 ${
            activeIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
          }`}
        >
          <div className="w-full h-full relative">
            <Image
              src={rectangle.image}
              alt={rectangle.title}
              fill
              className="object-fit"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index === 0}
            />
          </div>

          {/* Button */}
          <div className="absolute bottom-3 right-8">
            <MainButton text="View more" icon="arrow" />
          </div>
        </div>

        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      </div>
    </div>
  ))}
</div>

          </div>
        </div>
      </Container>

      <style jsx>{`
        .writing-mode-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </div>
  );
};

export default BusinessSection;
