"use client"
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ServicesSection from "../serviceSection/serviceSection";
import BusinessSection from "../businessSection/businessSection";

const BusinessServiceTransition = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Define scale animations for each service card
  const scale1 = useTransform(scrollYProgress, [0, 0.3, 1], [1, 0.8, 0.5]);
  const scale2 = useTransform(scrollYProgress, [0.2, 0.5, 1], [0.8, 1, 0.8]);
  const scale3 = useTransform(scrollYProgress, [0.4, 0.8, 1], [0.7, 0.9, 1]);

  return (
    <div className="w-full">
      {/* Normal (non-animated) Business Section */}

      {/* Animated Services Section */}
      <div ref={containerRef} className=" flex flex-col ">
        {/* Service Card 1 */}
        <motion.div
          className="c-card sticky top-0 w-full"
          style={{ scale: scale1 }}
        >
      <BusinessSection />
        </motion.div>

        {/* Service Card 2 */}
        <motion.div
          className="c-card sticky top-0 w-full "
          style={{ scale: scale2 }}
        >
          <ServicesSection index={1} />
        </motion.div>

        {/* Service Card 3 */}
     
      </div>
    </div>
  );
};

export default BusinessServiceTransition;
