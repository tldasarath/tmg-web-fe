'use client';

import { Container } from '../layout/Container';

const AboutChairmanSection = () => {
  const sisterConcerns = [
    { name: "Company One", logo: "/assets/images/logos/logo1.png" },
    { name: "Company Two", logo: "/assets/images/logos/logo2.png" },
    { name: "Company Three", logo: "/assets/images/logos/logo3.png" },
    { name: "Company Four", logo: "/assets/images/logos/logo4.png" },
    { name: "Company Five", logo: "/assets/images/logos/logo5.png" },
  ];

  return (
    <section className="relative px-4 sm:px-6 lg:px-0 py-8 lg:py-16 overflow-hidden bg-white">
       <div
          className="absolute  right-[-3%] w-80 h-80 opacity-100"
        >
          <img
            src="/assets/images/common/right_element.png"
            alt="Professional woman with tablet"
            className="w-full h-auto rounded-2xl"
          />
        </div>
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Side - Content */}
          <div className="w-full lg:w-1/2">
            <div className="max-w-2xl">
              <div className="mb-8">
                <h2 className="text-4xl sm:text-5xl lg:text-[3rem] text-[#49051E] mb-6 lg:mb-8 leading-tight font-bold">
                  About Chairman
                </h2>
              </div>

              <div className="space-y-2 text-gray-700">
                <p className="text-gray-600 text-[0.938rem] md:text-lg font-normal leading-relaxed">
                  First and foremost, I thank God for bringing this small initiative of a simple man to the attention of the world.
                </p>

                <p className="text-gray-600 text-[0.938rem] md:text-lg font-normal leading-relaxed">
                  When I began this journey, I started from zero — with nothing but a vision and determination to make a difference. Today, by the grace of God and the hard work of my dedicated team, I am proud to lead <span className="font-semibold text-gray-900">10+ branches</span> under various sister concerns, with over <span className="font-semibold text-gray-900">250 committed professionals</span> working alongside me.
                </p>

                <p className="text-gray-600 text-[0.938rem] md:text-lg font-normal leading-relaxed">
                  Despite this growth, I continue to work with the same dedication and mindset as an employee, because I understand the struggle and effort it takes to build something meaningful.
                </p>

                <p className="text-gray-600 text-[0.938rem] md:text-lg font-normal leading-relaxed">
                  My mission has always been to help people — to serve them sincerely, offer solutions that make their lives easier, and build relationships rooted in trust and respect.
                </p>

                <p className="text-gray-600 text-[0.938rem] md:text-lg font-normal leading-relaxed">
                  It is this belief in integrity, teamwork, and quality service that has brought TMG Global to where it stands today.
                </p>

                <p className="text-gray-600 text-[0.938rem] md:text-lg font-normal leading-relaxed">
                  And as we look ahead, my vision is clear — within the next two years, we will expand our brands globally, taking our values, professionalism, and service excellence to the world.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Chairman Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Outer colored circle with reduced thickness */}
                <div 
                  className="absolute inset-0  rounded-full"
                  style={{
                    background: 'conic-gradient(from 275deg, #C79A59 85deg, transparent 85deg 360deg)'
                  }}
                >
                  {/* Reduced thickness - increased inset from 4 to 6 */}
                  <div className="absolute inset-1 bg-white rounded-full"></div>
                  <div className="absolute inset-6 bg-[#8E1A3D] rounded-full"></div>
                </div>

                {/* Small circle at start point (275deg) */}
             

                {/* Small circle at end point (0deg) */}
               

                {/* Chairman Image */}
               <div className="absolute inset-8 rounded-full overflow-hidden">
  <img
    src="/assets/images/chairman/boss.jpg"
    alt="Chairman - TMG Global LLC"
    className="w-full h-full object-fit"
  />
</div>

              </div>

              {/* Chairman Name and Position */}
              <div className="text-center mt-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-[#49051E] mb-2">
                  THAMEEM ABOOBACKER
                </h3>
                <p className="text-lg text-[#C79A59] font-semibold">
                  Chairman Of TMG Global
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Logos Section */}
        <div className="py-8
        ">
          {/* <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-[#49051E] mb-4">
              Our Sister Concerns
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Part of the TMG Global family, these sister companies work together to provide comprehensive business solutions across various sectors.
            </p>
            <div className="w-20 h-1 bg-[#C79A59] mx-auto"></div>
          </div> */}
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 items-center justify-items-center">
            {sisterConcerns.map((company, index) => (
              <div 
                key={index}
                className="group flex justify-center items-center w-full h-24 lg:h-28 p-4 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="max-w-full max-h-12 lg:max-h-16 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutChairmanSection;