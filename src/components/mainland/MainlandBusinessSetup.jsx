'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Container } from '../layout/Container'
import { motion } from "framer-motion";

const MainlandBusinessSetup = () => {
      const sectionRef = useRef(null);
      const [inView, setInView] = useState(false);

       useEffect(() => {
          const observer = new IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            { threshold: 0.2 }
          );
          if (sectionRef.current) observer.observe(sectionRef.current);
          return () => observer.disconnect();
        }, []);

          const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };
  return (
    <>
          <section
      ref={sectionRef}
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-white overflow-hidden"
    >

      <Container>
           <motion.div
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={fadeUp}
                  className="max-w-5xl  lg:text-left mt-12"
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#49051E] mb-3">
                  Understanding Mainland <br className="hidden sm:block"/>Business Setup

                  </h3>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    A UAE mainland company allows you to conduct business anywhere within the UAE and
                    internationally without restrictions. Licensed by the Department of Economic
                    Development (DED), mainland businesses can engage directly with local markets,
                    government contracts, and large-scale corporate projects.
                    <br />
                    Unlike Freezones, a mainland license gives you maximum flexibility, unlimited visas,
                    and strategic access to UAE’s growing economy.
                  </p>
                </motion.div>
      </Container>
    </section>

    </>
  )
}

export default MainlandBusinessSetup
