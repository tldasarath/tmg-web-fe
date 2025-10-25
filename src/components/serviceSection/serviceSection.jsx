"use client";
import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import MainButton from "../button/main-button";
import { Container } from "../layout/Container";

// Animation variants
const leftVariants = {
  hidden: { x: -150, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 2, ease: "easeOut" },
  },
};

const rightVariants = {
  hidden: { x: 150, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 2, ease: "easeOut" },
  },
};

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 }); // triggers when 30% visible
  const leftControls = useAnimation();
  const rightControls = useAnimation();

  // Trigger animation when in view
  React.useEffect(() => {
    if (isInView) {
      leftControls.start("visible");
      rightControls.start("visible");
    }
  }, [isInView, leftControls, rightControls]);

  const leftServices = [
    { label: "Business Setup", link: "/service/business-setup-dubai" },
    { label: "Company Formation ", link: "/service/company-formation-dubai" },
    { label: "Company Liquidation", link: "/link" },
  ];

  const rightServices = [
    { label: "PRO Services", link: "/service/pro-services-dubai" },
    { label: "Visa Services", link: "/service/uae-visa-services" },
    { label: "Legal Translation", link: "/service/legal-translation" },
  ];

  return (
    <section ref={ref} className="relative lg:py-16 py-8 overflow-hidden ">
      <Container>
        <div className="w-full relative z-10">
          {/* Heading */}
          <div className="mb-12">
            <div className="keyboard mb-6 lg:mb-8">
              {"OUR SERVICES".split("").map((letter, i) => (
                <span
                  key={i}
                  className={`key text-4xl sm:text-5xl lg:text-[3rem] ${
                    letter === " " ? "ml-4" : ""
                  }`}
                >
                  {letter}
                </span>
              ))}
            </div>

            <p className="text-[0.938rem] md:text-lg">
              We provide comprehensive solutions to meet all your service needs
              with professionalism and excellence. Our team is dedicated to
              delivering outstanding results.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Left Section */}
            <motion.div
              className="space-y-4"
              variants={leftVariants}
              initial="hidden"
              animate={leftControls}
            >
              {leftServices.map((service, index) => (
                <ServiceItem key={index} service={service} />
              ))}
            </motion.div>

            {/* Right Section */}
            <motion.div
              className="space-y-4 relative"
              variants={rightVariants}
              initial="hidden"
              animate={rightControls}
            >
              {rightServices.map((service, index) => (
                <ServiceItem key={index} service={service} />
              ))}
            </motion.div>
          </div>

          {/* Button */}
          <div className="text-center flex justify-center">
            <MainButton
              text="More Services"
              link="/services"
              gradient="linear-gradient(90deg, rgba(14,14,14,1) 0%, rgba(73,5,30,1) 100%)"
            />
          </div>
        </div>
      </Container>

      {/* Decorative Image */}
      <div className="hidden lg:block absolute top-0 right-0 h-full">
        <img
          src="/assets/images/lines/lines01.png"
          alt="Decorative"
          className="h-full object-cover w-full"
        />
      </div>
    </section>
  );
};

const ServiceItem = ({ service }) => (
  <div
    className="
      group 
      p-2.5 md:p-6  
      border-b-2 border-black 
      rounded-2xl 
      hover:text-white 
      transition-all duration-300 
      cursor-pointer 
      relative 
      overflow-hidden
    "
  >
    <div
      className="
        flex items-center gap-3 
        relative z-10 
        transition-transform duration-500 ease-out 
        group-hover:translate-x-2
      "
    >
      <svg
        className="
          w-8 h-8 
          text-[#49051E]
          opacity-0 
          transition-opacity duration-300 ease-out
          group-hover:opacity-100
          group-hover:text-white
        "
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 17L17 7M7 7h10v10"
        />
      </svg>

      <a
        href={service.link}
        target="_blank"
        className="text-[1.200rem] lg:text-[1.875rem] font-bold group-hover:translate-x-2 transition-transform duration-500 ease-out"
      >
        {service.label}
      </a>
    </div>

    <div
      className="
        absolute inset-0 
        opacity-0 
        group-hover:opacity-100 
        transition-opacity duration-300 
        rounded-2xl 
        -z-0
      "
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(142,26,61,1) 0%, rgba(40,7,17,1) 100%)",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    ></div>
  </div>
);

export default ServicesSection;
