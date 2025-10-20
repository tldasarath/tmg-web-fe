'use client';

import { motion } from 'framer-motion';
import { Container } from '../layout/Container';

export default function FAQSection() {
  const faqs = [
    {
      question: "What is the difference between Mainland and Freezone business setup?",
      answer: "Mainland companies can trade within the UAE and internationally, while Freezone companies offer 100% ownership, no customs duty, and are ideal for import/export and global operations."
    },
    {
      question: "How long does the setup process take?",
      answer: "Typically, a business setup in Dubai takes between 5 to 15 working days, depending on the jurisdiction and activity type."
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <Container>     
             <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          
          {/* Left Column - Title and Image */}
          <motion.div 
            className="flex flex-col items-start justify-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl  font-bold text-[#49051E] leading-tight mb-12">
              <span className="block">Frequently</span>
              <span className="block">Asked Questions</span>
            </h2>
            
            {/* Question Mark Image */}
            <motion.div 
              className="w-full flex justify-center lg:justify-start"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
        <img src='/assets/images/services/question-mark-3d.png' alt='FAQ image' className=''/>
            </motion.div>
          </motion.div>

          {/* Right Column - FAQ Items */}
          <div className="lg:col-span-2 space-y-8 mt-5 md:mt-12">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 justify-center "
              >
                {/* Question Circle Badge */}
                <motion.div 
                  className="flex-shrink-0 w-14 h-14 rounded-full bg-[#972044] flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-white font-bold text-3xl">?</span>
                </motion.div>

                {/* Question and Answer */}
                <div className="flex-1 pt-1">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                  {index < faqs.length - 1 && (
                    <div className="border-b border-gray-300 mt-8"></div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      </Container>

    </section>
  );
}