'use client'
import { MessageCircle, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const BottomCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const homeSection = document.getElementById('home');
    const footer = document.querySelector('footer');
    
    if (!homeSection || !footer) return;

    // Observer for home section - hide CTA when home is visible
    const homeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Hide CTA when home section is fully/mostly visible
          if (entry.isIntersecting) {
            setIsVisible(false);
          } else {
            // Home section is out of view, check if we should show CTA
            checkIfShouldShow();
          }
        });
      },
      {
        threshold: [0.1, 0.9], // Trigger when home section enters/leaves view
        rootMargin: '0px'
      }
    );

    // Observer for footer - hide CTA when footer starts to appear
    const footerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Hide CTA when footer starts intersecting (becoming visible)
          if (entry.isIntersecting) {
            setIsVisible(false);
          } else {
            // Footer is not visible, check if we should show CTA
            checkIfShouldShow();
          }
        });
      },
      {
        threshold: 0.1, 
        rootMargin: '0px'
      }
    );

    // Function to check if CTA should be visible
    const checkIfShouldShow = () => {
      const homeRect = homeSection.getBoundingClientRect();
      const footerRect = footer.getBoundingClientRect();
      
      // Show CTA if:
      // 1. Home section is out of view (scrolled past it)
      // 2. Footer is not yet in view
      // const isHomeOutOfView = homeRect.bottom <= window.innerHeight /2;
      const isHomeOutOfView = homeRect.bottom <= window.innerHeight * 0.75;
      const isFooterNotInView = footerRect.top > window.innerHeight;
      
      setIsVisible(isHomeOutOfView && isFooterNotInView);
    };

    // Also check on scroll for more precise control
    const handleScroll = () => {
      checkIfShouldShow();
    };

    // Set up observers
    homeObserver.observe(homeSection);
    footerObserver.observe(footer);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial check
    checkIfShouldShow();

    return () => {
      homeObserver.disconnect();
      footerObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed bottom-6 left-[15%] -translate-x-1/2 z-[60] w-[95%] sm:w-[90%] md:w-[1029px] max-w-[1029px]"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ 
            duration: 0.3,
            ease: "easeInOut"
          }}
        >
          <div className="bg-[#C79A59]/80 rounded-2xl shadow-2xl h-[70px] px-6 sm:px-8 md:px-10 backdrop-blur-sm">
            <div className="h-full flex items-center justify-between gap-4 md:gap-8">
              {/* Text Content */}
              <motion.div className="text-white flex-shrink">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold leading-tight whitespace-nowrap">
                  Get Experts Advice to Setup Your Business in Dubai
                </h3>
              </motion.div>

              {/* Action Buttons */}
              <motion.div className="flex items-center gap-3 flex-shrink-0">
                <motion.button 
                  className="bg-[#2D0A1F] hover:bg-[#3d1429] text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 text-sm sm:text-base shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Chat Now</span>
                </motion.button>
                
                <motion.button 
                  className="bg-[#2D0A1F] hover:bg-[#3d1429] text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 text-sm sm:text-base shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Call Now</span>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};