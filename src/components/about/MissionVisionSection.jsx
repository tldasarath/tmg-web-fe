'use client';

import { useEffect, useRef, useState } from 'react';
import { Container } from '../layout/Container';

const MissionVisionSection = () => {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0); // 0 -> Mission, 1 -> Vision
  const scrollProgressRef = useRef(0);
  const isSectionActiveRef = useRef(false); // whether we have the section-level lock
  const isScrollingRef = useRef(false); // temporary flag while we programmatically hand off scroll

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleWheel = (e) => {
      // If we're temporarily handing off the scroll to the page, ignore wheel events here
      if (isScrollingRef.current) return;

      const rect = section.getBoundingClientRect();

      // Use a forgiving visible check (center of viewport)
      const sectionTopVisible = rect.top <= window.innerHeight * 0.6;
      const sectionBottomVisible = rect.bottom >= window.innerHeight * 0.4;

      // Activate/pin & lock page scroll if the section is sufficiently in-view
      if (sectionTopVisible && sectionBottomVisible && !isSectionActiveRef.current) {
        isSectionActiveRef.current = true;
        document.body.style.overflow = 'hidden'; // lock page scroll
        section.classList.add('is-pinned');
      }

      if (!isSectionActiveRef.current) {
        // If section is not active, allow page scroll normally
        return;
      }

      // Section is active -> handle internal scroll
      e.preventDefault();
      e.stopPropagation();

      const scrollSensitivity = 0.02;
      const delta = e.deltaY * scrollSensitivity;
      scrollProgressRef.current = Math.max(
        0,
        Math.min(1, scrollProgressRef.current + delta)
      );
      setProgress(scrollProgressRef.current);

      // If the user keeps pushing past the boundary, release lock and hand the scroll to the page
      const atTopBoundary = scrollProgressRef.current <= 0 && e.deltaY < 0;
      const atBottomBoundary = scrollProgressRef.current >= 1 && e.deltaY > 0;

      if (atTopBoundary || atBottomBoundary) {
        // Pass the original deltaY so page continues scrolling in the same direction
        releaseScrollLock(e.deltaY);
      }
    };

    /**
     * Release the scroll lock and hand the user's scroll delta to the page.
     * remainingDelta is the original event.deltaY (signed).
     */
    const releaseScrollLock = (remainingDelta = 0) => {
      // Prevent re-entry while we are handing off scroll to the page
      isSectionActiveRef.current = false;
      isScrollingRef.current = true;

      // unlock page scrolling
      document.body.style.overflow = 'auto';
      if (section) section.classList.remove('is-pinned');

      // Small delay to ensure browser processes the unlock and prevents immediate re-locking.
      // Then scroll the page by a small amount to continue the user's scroll momentum.
      // Use non-zero delay so any other listeners settle (like native inertial scrolling).
      setTimeout(() => {
        try {
          // Programmatically scroll the page by the user's raw delta (this continues their intent)
          // We divide by 1 (no change) but you could scale this if you want less jump.
          // Use behavior: 'auto' so it's immediate-ish; 'smooth' can feel delayed
          window.scrollBy({ top: remainingDelta, left: 0, behavior: 'auto' });
        } catch (err) {
          // fallback if scrollBy with options not supported
          window.scrollBy(0, remainingDelta);
        }

        // Give some time for the scroll to take place and for the page to stabilize.
        // During this window we ignore internal wheel events to avoid re-locking immediately.
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 180); // 120-250ms is typically enough
      }, 20);
    };

    // In case user navigates away or scrolls with keyboard/trackpad and section leaves view:
    const handleScroll = () => {
      if (!section) return;
      const rect = section.getBoundingClientRect();

      // If section is mostly out of view, ensure lock is removed
      if (rect.bottom < window.innerHeight * 0.2 || rect.top > window.innerHeight * 0.8) {
        // release but without extra delta
        if (isSectionActiveRef.current) {
          releaseScrollLock(0);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      // cleanup: ensure scroll unlocked
      document.body.style.overflow = 'auto';
      isSectionActiveRef.current = false;
      isScrollingRef.current = false;
      if (section) section.classList.remove('is-pinned');
    };
  }, []);

  // Intersection observer remains to set progress when entering/leaving (optional safety)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // if re-entering, keep previous progress
            const rect = entry.boundingClientRect;
            const mostlyInView = rect.top <= window.innerHeight * 0.6 && rect.bottom >= window.innerHeight * 0.4;
            if (mostlyInView) {
              // ensure refs match state
              scrollProgressRef.current = progress;
            }
          }
        });
      },
      { threshold: [0, 0.4, 0.6, 1] }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      observer.disconnect();
    };
  }, [progress]);

  return (
    <div ref={sectionRef} className="relative h-screen overflow-hidden transition-all duration-500">
      {/* local CSS for pin class — you can also place this in your global CSS */}
      <style>{`
        .is-pinned {
          position: sticky;
          top: 0;
          z-index: 50;
        }
      `}</style>

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/banner/mission&vision.png')" }}
        aria-hidden
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Progress Indicator */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 pointer-events-none">
        <div className="flex flex-col items-center space-y-2">
          <div
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              progress < 0.1 ? 'bg-yellow-500 border-yellow-500 scale-125' : 'border-white scale-100'
            }`}
          />
          <div className="w-0.5 h-16 bg-white/50">
            <div
              className="w-full bg-yellow-500 transition-all duration-300"
              style={{ height: `${progress * 100}%` }}
            />
          </div>
          <div
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              progress > 0.9 ? 'bg-yellow-500 border-yellow-500 scale-125' : 'border-white scale-100'
            }`}
          />
        </div>
      </div>

      {/* Pinned Content */}
      <Container className="relative z-10 h-full flex items-center justify-center">
        <div className="relative w-full max-w-6xl mx-auto h-64">
          {/* Mission Section */}
       <div
  className="absolute top-1/2 left-0 w-full flex flex-col md:flex-row items-start md:items-center transition-all duration-500 ease-out"
  style={{
    opacity: 1 - progress,
    transform: `translateY(calc(-50% - ${progress * 80}px))`,
    pointerEvents: progress > 0.1 ? 'none' : 'auto',
  }}
>
  <div className="w-full md:w-1/2 pr-0 md:pr-12 mb-4 md:mb-0">
    <h3 className="text-4xl lg:text-5xl font-bold text-yellow-500 mb-6">Our Mission</h3>
    <div className="w-20 h-1 bg-yellow-500 mb-4" />
  </div>
  <div className="w-full md:w-1/2 pl-0 md:pl-12">
    <p className="text-gray-100 text-xl lg:text-2xl leading-relaxed font-light">
      To simplify business setup and government processes in the UAE,
      empowering entrepreneurs and corporations with reliable and efficient solutions.
    </p>
  </div>
</div>

          {/* Vision Section */}
         <div
  className="absolute top-1/2 left-0 w-full flex flex-col md:flex-row items-start md:items-center transition-all duration-500 ease-out"
  style={{
    opacity: progress,
    transform: `translateY(calc(-50% + ${(1 - progress) * 80}px))`,
    pointerEvents: progress < 0.9 ? 'none' : 'auto',
  }}
>
  <div className="w-full md:w-1/2 pr-0 md:pr-12 mb-4 md:mb-0">
    <h3 className="text-4xl lg:text-5xl font-bold text-yellow-500 mb-6">Our Vision</h3>
    <div className="w-20 h-1 bg-yellow-500 mb-4" />
  </div>
  <div className="w-full md:w-1/2 pl-0 md:pl-12">
    <p className="text-gray-100 text-xl lg:text-2xl leading-relaxed font-light">
      To be the most trusted and innovative business consultancy in the Middle East,
      recognized for integrity, expertise, and client success.
    </p>
  </div>
</div>
        </div>
      </Container>

      {/* Scroll Hint */}
      {!isSectionActiveRef.current ? null : (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-white text-center pointer-events-none">
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
