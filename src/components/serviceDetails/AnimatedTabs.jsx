'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion';
import { Container } from '../layout/Container';

export default function AnimatedTabs() {
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const tabProgress = useTransform(scrollYProgress, [0, 1], [0, 2]);
  
  useMotionValueEvent(tabProgress, "change", (latest) => {
    setActiveTab(Math.round(latest));
  });

  const smoothTabProgress = useSpring(tabProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const tabs = [
    {
      title: "Simplifying Your Business",
      highlight: "Setup Journey",
        description:
        'Starting a business in Dubai is one of the smartest investments you can make but understanding the regulatory landscape can be overwhelming. Our experts streamline every step, offering a one-stop solution that saves you time, effort, and unnecessary costs.',
    },
    {
      title: "Why Dubai is the Ideal",
      highlight: "Business Destination",
      description:
        "Dubai's thriving economy, world-class infrastructure, and strategic location make it a global hub for entrepreneurs. With options like the Mainland, Freezone, and Offshore setups, the UAE offers unmatched flexibility for every type of venture.",
    },
    {
      title: "End-to-End Support for a ",
      highlight: "Seamless Launch",
      description:
        'From business registration and licensing to visa processing and financial planning, our team of seasoned professionals guides you through every phase. We ensure compliance with all regulations and help you establish a solid foundation for sustainable growth.',
    },
  ];

  return (
    <section ref={containerRef} className="relative w-full bg-white">
        <Container>
      <div className="h-[300vh] relative">
        {/* Sticky container */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 h-full gap-8 lg:gap-12 items-center grid-flow-dense">
            
            {/* Left Column - Text Content */}
            <div className="flex flex-col justify-center relative h-full">
            <h2 className='text-black '>heading</h2>
              {tabs.map((tab, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0 flex flex-col justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: activeTab === index ? 1 : 0
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Number - Large and faded */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeTab === index ? 0.15 : 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute top-0 md:top-[18%] lg:top-[25%] left-0"
                  >
                    <h2 className="text-9xl md:text-9xl font-bold text-gray-300">0{index + 1}</h2>
                  </motion.div>

                  {/* Heading */}
                  <motion.h2 
                    className="text-2xl md:text-3xl lg:text-3xl font-bold leading-tight tracking-tight mb-4 text-black relative z-10"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ 
                      opacity: activeTab === index ? 1 : 0,
                      y: activeTab === index ? 0 : 15
                    }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    {tab.title} <span className="text-black">{tab.highlight}</span>
                  </motion.h2>

                  {/* Description */}
                  <motion.p 
                    className="text-sm md:text-base text-gray-600 leading-relaxed max-w-lg relative z-10"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ 
                      opacity: activeTab === index ? 1 : 0,
                      y: activeTab === index ? 0 : 15
                    }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {tab.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>

            {/* Right Column - Fixed Image */}
            <div className="hidden lg:flex justify-center items-center h-full">
              <motion.div 
                className="relative w-full max-w-md"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <img 
                  src="/assets/images/services/serviceDetails.png" 
                  alt="Yoda Design"
                  className="w-full h-auto rounded-2xl object-cover shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      </Container>
    </section>
  );
}