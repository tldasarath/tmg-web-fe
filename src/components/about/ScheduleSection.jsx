'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';
import ScheduleMeetingSection from '../meetingSchedule/ScheduleMeetingSection';
import LettersPullUpText from '../text/LettersPullUpText';
import { Container } from '../layout/Container';

const ScheduleSection = () => {
  return (
            <div className="relative px-4 sm:px-6 lg:px-0 py-8 lg:py-16">
  <Container>
      <section className="grid lg:grid-cols-3 gap-6 lg:gap-8">
      {/* Left Column */}
      <div className="bg-transparent rounded-2xl p-0">
        <LettersPullUpText
          text="Schedule Meeting"
          className="text-[#49051E] w-full lg:w-[250px]"
        />
        <p className="text-gray-700 font-semibold mb-4 text-[0.938rem] md:text-lg">
          Your Path to UAE Business Ownership
        </p>
        <p className="text-gray-600 text-[0.938rem] md:text-lg font-normal leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Curabitur tempus urna at turpis condimentum
          lobortis.
        </p>
      </div>

      {/* Middle Column */}
      <div className="bg-[#8E1A3D] rounded-2xl px-8 py-10 lg:px-5 lg:py-6 xl:px-8 xl:py-10 shadow-xl text-white">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4 md:mb-8">
          Hurry? Get Support
          <br />
          Right Away!
        </h3>
        <p className="text-white/90 mb-6 md:mb-8 text-[0.938rem] md:text-lg font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 mb-8 lg:mb-0 xl:mb-8"
        >
          {/* Chat Now Button */}
          <motion.button
            whileHover={{ scale: 1.08, y: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 border border-white/30"
          >
            <MessageCircle className="w-5 h-5" />
            Chat Now
          </motion.button>

          {/* Call Now Button */}
          <motion.button
            whileHover={{ scale: 1.08, y: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 border border-white/30"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </motion.button>
        </motion.div>
      </div>

      {/* Right Column */}
      <div className="bg-[#C79A59] rounded-2xl px-6 py-10 lg:px-5 lg:py-6 xl:px-8 xl:py-10 shadow-xl text-white flex flex-col">
        <p className="text-[#000000] mb-6 lg:mb-8 xl:mb-6 text-lg leading-relaxed font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>

        {/* ScheduleMeetingSection Component */}
        <ScheduleMeetingSection />
      </div>
    </section>
  </Container>
    </div>

  );
};

export default ScheduleSection;
