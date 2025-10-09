'use client';
import { cn } from '@/lib/utils';
import { motion, useInView } from 'framer-motion';
import * as React from 'react';

const LettersPullUpText = ({ text, className = '' }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  // Split text into individual letters
  const letters = text.split('');

  // Animation variant (pull up + fade in)
  const variants = {
    hidden: { y: 10, opacity: 0 },
    show: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <motion.h2
      ref={ref}
      initial="hidden"
      animate={isInView ? 'show' : ''}
      className={cn(
        '  text-4xl sm:text-5xl lg:text-[3.3rem] text-maroon-900 mb-6 lg:mb-8 leading-tight font-bold ',
        className
      )}
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          variants={variants}
          custom={i}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.h2>
  );
};

export default LettersPullUpText;
