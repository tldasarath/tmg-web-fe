'use client';

import { useEffect, useRef, useState } from 'react';
import { Container } from '../layout/Container';

const MissionVisionSection = () => {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0); // 0 -> Mission, 1 -> Vision
  const scrollProgressRef = useRef(0);
  const isScrollingRef = useRef(false);
  const isSectionActiveRef = useRef(false);

  useEffect(() => {
    const handleWheel = (e) => {
      if (!sectionRef.current || isScrollingRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      
      // Check if section fully covers the viewport
      const isSectionFullyInView = rect.top <= 0 && rect.bottom >= window.innerHeight;

      if (isSectionActiveRef.current) {
        // Section is active - handle internal scrolling
        e.preventDefault();
        e.stopPropagation();

        const scrollSensitivity = 0.015; // Increased sensitivity for faster transition
        const delta = e.deltaY * scrollSensitivity;

        scrollProgressRef.current += delta;
        
        // Clamp between 0 and 1
        scrollProgressRef.current = Math.max(0, Math.min(1, scrollProgressRef.current));
        setProgress(scrollProgressRef.current);

        // Release scroll lock when at boundaries
        if ((scrollProgressRef.current <= 0 && e.deltaY < 0) || 
            (scrollProgressRef.current >= 1 && e.deltaY > 0)) {
          releaseScrollLock();
        }
      } else if (isSectionFullyInView) {
        // Section just became fully in view - activate it
        isSectionActiveRef.current = true;
        e.preventDefault();
        e.stopPropagation();

        // Start handling the scroll for content transition
        const scrollSensitivity = 0.015;
        const delta = e.deltaY * scrollSensitivity;

        scrollProgressRef.current = Math.max(0, Math.min(1, delta));
        setProgress(scrollProgressRef.current);
      }
    };

    const releaseScrollLock = () => {
      isSectionActiveRef.current = false;
      isScrollingRef.current = true;
      window.removeEventListener('wheel', handleWheel);
      
      setTimeout(() => {
        window.addEventListener('wheel', handleWheel, { passive: false });
        isScrollingRef.current = false;
      }, 100);
    };

    const handleKeyDown = (e) => {
      if (!sectionRef.current || !isSectionActiveRef.current) return;

      if (e.key === ' ' || e.key === 'ArrowDown' || e.key === 'ArrowUp' || 
          e.key === 'PageDown' || e.key === 'PageUp') {
        e.preventDefault();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const rect = entry.boundingClientRect;
            const isFullyInView = rect.top <= 0 && rect.bottom >= window.innerHeight;
            
            if (isFullyInView && !isSectionActiveRef.current) {
              isSectionActiveRef.current = true;
              
              if (progress === 1) {
                scrollProgressRef.current = 1;
                setProgress(1);
              } else {
                scrollProgressRef.current = 0;
                setProgress(0);
              }
            }
          } else {
            isSectionActiveRef.current = false;
          }
        });
      },
      { 
        threshold: [0, 1],
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [progress]);

  return (
    <div className="relative h-screen overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/banner/mission&vision.png')" }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Progress Indicator */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20">
        <div className="flex flex-col items-center space-y-2">
          <div className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
            progress < 0.1 ? 'bg-yellow-500 border-yellow-500 scale-125' : 'border-white scale-100'
          }`}></div>
          <div className="w-0.5 h-16 bg-white/50">
            <div 
              className="w-full bg-yellow-500 transition-all duration-300"
              style={{ height: `${progress * 100}%` }}
            ></div>
          </div>
          <div className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
            progress > 0.9 ? 'bg-yellow-500 border-yellow-500 scale-125' : 'border-white scale-100'
          }`}></div>
        </div>
      </div>

      {/* Pinned Content */}
      <Container className="relative z-10 h-full flex items-center justify-center">
        <div className="relative w-full max-w-6xl mx-auto h-64"> {/* Fixed height container */}
          
          {/* Mission Section - Disappears as progress increases */}
          <div
            className="absolute top-1/2 left-0 w-full flex items-center transition-all duration-500 ease-out"
            style={{
              opacity: 1 - progress, // Fades out as progress increases
              transform: `translateY(calc(-50% - ${progress * 80}px))`, // Moves up and disappears
              pointerEvents: progress > 0.1 ? 'none' : 'auto',
            }}
          >
            <div className="w-1/2 pr-12">
              <h3 className="text-4xl lg:text-5xl font-bold text-yellow-500 mb-6">
                Our Mission
              </h3>
              <div className="w-20 h-1 bg-yellow-500 mb-4"></div>
            </div>
            <div className="w-1/2 pl-12">
              <p className="text-gray-100 text-xl lg:text-2xl leading-relaxed font-light">
                To simplify business setup and government processes in the UAE,
                empowering entrepreneurs and corporations with reliable and efficient solutions.
              </p>
            </div>
          </div>

          {/* Vision Section - Appears as progress increases */}
          <div
            className="absolute top-1/2 left-0 w-full flex items-center transition-all duration-500 ease-out"
            style={{
              opacity: progress, // Fades in as progress increases
              transform: `translateY(calc(-50% + ${(1 - progress) * 80}px))`, // Moves down from above
              pointerEvents: progress < 0.9 ? 'none' : 'auto',
            }}
          >
            <div className="w-1/2 pr-12">
              <h3 className="text-4xl lg:text-5xl font-bold text-yellow-500 mb-6">
                Our Vision
              </h3>
              <div className="w-20 h-1 bg-yellow-500 mb-4"></div>
            </div>
            <div className="w-1/2 pl-12">
              <p className="text-gray-100 text-xl lg:text-2xl leading-relaxed font-light">
                To be the most trusted and innovative business consultancy in the Middle East,
                recognized for integrity, expertise, and client success.
              </p>
            </div>
          </div>

        </div>
      </Container>

      {/* Scroll Hint */}
      {isSectionActiveRef.current && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-white text-center">
          <div className="animate-bounce">
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <span className="text-sm mt-2 block">Scroll to transition</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MissionVisionSection;