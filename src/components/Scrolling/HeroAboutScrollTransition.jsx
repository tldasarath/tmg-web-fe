"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HeroSection } from "../hero/HeroSection";
import AboutSection from "../about/AboutSection";


export const HeroAboutScrollTransition = () => {

  return (
  <div className="relative z-20">
  <div className="sticky top-0 ">
   <HeroSection/>
  </div>
    <div className="sticky top-0 ">
    <AboutSection/>
  </div>
  </div>
  );
};
