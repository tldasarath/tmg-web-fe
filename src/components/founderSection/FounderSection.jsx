// components/FounderSection.js
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Container } from '../layout/Container';
import { ArrowUpRight } from 'lucide-react';
import ProfileCard from '../animations/Card';
import { useRouter } from 'next/navigation';

const FounderSection = () => {
    const router = useRouter();

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      image: '/assets/images/founder/18.png', // Replace with your image paths
      alt: 'Slide 1'
    },
    {
      id: 2,
      image: '/assets/images/founder/150.png',
      alt: 'Slide 2'
    },
    {
      id: 3,
      image: '/assets/images/founder/18.png',
      alt: 'Slide 3'
    }
  ];

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  const HighlightWord = ({ children }) => (
    <span className=" inline-block pl-2">
      <span
        className="text-transparent"
        style={{
          WebkitTextStroke: '0.5px #fff',
        }}
      >
        {children}
      </span>

    </span>
  );
  return (
    <section
      className="xl:h-[500px] h-auto lg:py-16 py-8"
      style={{
        backgroundImage: "linear-gradient(180deg, rgba(142,26,61,1) 0%, rgba(40,7,17,1) 100%)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container>
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-8 items-center">

         
            <div className="flex justify-center   lg:justify-start xl:w-80 w-72  relative h-96 xl:h-96 ">
              <Image
                src="/assets/images/chairman/chairman.jpg"
                alt="Founder"
                fill
                className="object-contain rounded-2xl "
                priority
              />

              {/* Name + Button overlay */}
              <div className="absolute lg:bottom-11 bottom-12 left-4 right-4 
    bg-white/30 backdrop-blur-md 
    flex items-center rounded-2xl justify-between 
    px-4 py-3 shadow-lg border border-white/20">
                <div className="text-left">
                  <p className="text-[#B2104B] font-semibold tracking-wide leading-tight">
                    THAMEEM ABOOBACKER
                  </p>
                  <p className="text-gray-800 text-sm font-medium">
                    Chairman of TMG Global
                  </p>
                </div>

                <button   onClick={() => router.push('/about-us')}  className="bg-[#B2104B] text-white p-2 rounded-2xl hover:bg-[#8e0d3a] transition flex items-center justify-center w-9 h-9">
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>

            </div>



            {/* Center - About Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-4xl sm:text-5xl lg:text-[3rem] text-white  mb-6 lg:mb-8 leading-tight font-bold">
                Starting Career
                <HighlightWord>
                  Since </HighlightWord> 2008
              </h2>

              <p className="text-[0.938rem] md:text-lg text-white mb-4 leading-relaxed">
                Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra,Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
              </p>

            </div>

            {/* Right Side - Image Slider */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative md:w-60 w-52  ">
                {/* Slider Container */}
                <div className="relative md:h-60 h-52 rounded-2xl overflow-hidden ">
                  {slides.map((slide, index) => (
                    <div
                      key={slide.id}
                      className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                      <Image
                        src={slide.image}
                        alt={slide.alt}
                        fill
                        className="object-fit"
                      />
                    </div>
                  ))}
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-6 space-x-3">
                  {slides.map((_, index) => (
                    <div
                      key={index}
                      className={`w-6 h-6 flex items-center justify-center rounded-full transition-all duration-300
        ${index === currentSlide ? 'border-2 border-white' : 'border-transparent'}`}
                    >
                      <button
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300
          ${index === currentSlide
                            ? 'bg-[#C79A59] scale-110'
                            : 'bg-gray-300 hover:bg-gray-400'}`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    </div>
                  ))}
                </div>


              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FounderSection;