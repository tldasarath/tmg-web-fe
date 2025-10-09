"use client"
import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, ChevronRight, MoveRight, ArrowUpRight } from 'lucide-react';
import ShinyText from '../animations/ShinyText';
import { motion } from 'framer-motion';

const MainButton = ({ 
  bgColor = '#C79A59',
  text = 'Button', 
  link = '/',
  className = '',
  icon = 'external' // 'arrow' | 'chevron' | 'move' | 'external'
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const iconComponents = {
    arrow: ArrowRight,
    chevron: ChevronRight,
    move: MoveRight,
    external: ArrowUpRight
  };

  const IconComponent = iconComponents[icon] || iconComponents.external;

  return (
    <Link href={link}>
      <motion.button
        initial={{ opacity: 0, y: 20 }}      // fade up start
        animate={{ opacity: 1, y: 0 }}       // fade up end
        transition={{ duration: 0.5, delay: 0 }} // adjust delay if needed
        className={`
          text-white 
          font-semibold 
          py-2 px-4 sm:py-3 sm:px-5     
          rounded-xl sm:rounded-2xl    
          text-sm sm:text-base md:text-lg 
          transition duration-300 ease-in-out transform 
          hover:scale-105 flex items-center gap-2 group
          ${className}
        `}
        style={{
          backgroundColor: isHovered
            ? `color-mix(in srgb, ${bgColor} 90%, black)`
            : bgColor,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span>
          <ShinyText 
            text={text} 
            disabled={false} 
            speed={1.4} 
            className='custom-class' 
          />
        </span>
        <IconComponent 
          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-1" 
        />
      </motion.button>
    </Link>
  );
};

export default MainButton;
