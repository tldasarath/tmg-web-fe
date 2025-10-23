"use client";
import { Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const BottomCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const homeSection = document.getElementById("home");
    const footer = document.querySelector("footer");

    if (!homeSection || !footer) return;

    const checkIfShouldShow = () => {
      const homeRect = homeSection.getBoundingClientRect();
      const footerRect = footer.getBoundingClientRect();

      const isHomeOutOfView = homeRect.bottom <= window.innerHeight * 0.75;
      const isFooterNotInView = footerRect.top > window.innerHeight;

      setIsVisible(isHomeOutOfView && isFooterNotInView);
    };

    const handleScroll = () => checkIfShouldShow();

    const homeObserver = new IntersectionObserver(
      (entries) => entries.forEach(() => checkIfShouldShow()),
      { threshold: [0.1, 0.9], rootMargin: "0px" }
    );

    const footerObserver = new IntersectionObserver(
      (entries) => entries.forEach(() => checkIfShouldShow()),
      { threshold: 0.1, rootMargin: "0px" }
    );

    homeObserver.observe(homeSection);
    footerObserver.observe(footer);
    window.addEventListener("scroll", handleScroll, { passive: true });

    checkIfShouldShow();

    return () => {
      homeObserver.disconnect();
      footerObserver.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 left-0 right-0 z-[60] flex justify-center"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="bg-[#C79A59]/80 rounded-2xl shadow-2xl h-[70px] px-6 sm:px-8 md:px-10 backdrop-blur-sm flex items-center justify-between w-[90%] max-w-[1029px]">
            {/* Text Content */}
            <div className="text-white flex-shrink">
              <h3 className="text-sm sm:text-base md:text-lg font-semibold leading-tight whitespace-nowrap">
                Get Experts Advice to Setup Your Business in Dubai
              </h3>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <motion.button
                className="bg-[#49051E] hover:bg-[#3d1429] text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-2xl font-medium transition-all duration-300 flex items-center gap-2 text-sm sm:text-base shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src="/assets/images/whatsapp-icon.png"
                  alt="Chat"
                  className="w-4 h-4 sm:w-6 sm:h-6"
                />
                <span>Chat Now</span>
              </motion.button>

              <motion.button
                className="bg-[#49051E] hover:bg-[#3d1429] text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-2xl font-medium transition-all duration-300 flex items-center gap-2 text-sm sm:text-base shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Call Now</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
