"use client"

import MainButton from "../button/main-button";
import { Container } from "../layout/Container";

const SmallBanner = () => {
  return (
   <section className="pb-32 lg:pt-16 pt-8">
    <Container>
     <div 
      className="min-h-[200px] w-full rounded-2xl p-6  flex items-center justify-center text-white relative overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(180deg, rgba(40,7,17,1.00) 0%, rgba(142,26,61,1.00) 100%)',
        backgroundPosition: 'center center',
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Icon */}
       
        
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
         Ready to Start Your Business Journey
        </h1>
        
        <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
         Get expert assistance from TMG Global and launch your UAE business with confidence. Contact us today for a free consultation and customized setup plan.
        </p>
        
      <div className=" flex justify-center">
         <MainButton text="Contact Now"/>
      </div>
      </div>
    </div>
   </Container>
   </section>
  );
};
export default SmallBanner