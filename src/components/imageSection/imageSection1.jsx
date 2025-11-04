'use client'
import Image from 'next/image';
import MainButton from '../button/main-button';
import { Container } from '../layout/Container';
import LettersPullUpText from '../text/LettersPullUpText';
import { useState } from 'react';
import ConsultationModal from '../common/ConsultationModal';


const ImageSection = () => {
     const [showModal, setShowModal] = useState(false);
    return (
        <section className="relative h-auto lg:h-[278px] py-4 lg:py-4 flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/images/ImageSection/image-section-01.jpg" // Replace with your image path
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Optional overlay for better text readability */}
                <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Content Container */}
            <Container>
            <div className="relative z-10 container   mx-auto ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 justify-items-center">

                    {/* Left Side - Main Heading Content */}
                    <div className="text-white   flex justify-center items-center">
                        <LettersPullUpText
                  text="Connect with Our Premium Business Consultants"
                  className="text-[#FFFFFF]"
                />
                    </div>

                    {/* Right Side - Description Content */}
                    <div className="text-white flex flex-col justify-center items-center">
                        <p className="text-[0.938rem]  md:text-lg mb-6 leading-relaxed">
                      Premium business consultants in Dubai empowering entrepreneurs with expert 
                      planning, seamless documentation, and reliable government-linked solutions.

                        </p>


                        {/* Button */}
                      <div className='flex justify-center'>
                                <MainButton 
                                    bgColor='#C79A59'
                                    text='Connect with Us'
                             
                                    className=''
                                    icon='external' 
                                    scroll={true}
                                     onClick={() => setShowModal(true)} 
                                />
                            </div>
                    </div>
                </div>
            </div>
                    </Container>

                       {showModal && (
        <ConsultationModal isOpen={showModal} setIsOpen={setShowModal} />
      )}

        </section>
    );
};

export default ImageSection;