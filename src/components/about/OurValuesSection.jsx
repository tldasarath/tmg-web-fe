'use client';

import { Container } from '../layout/Container';

const OurValuesSection = () => {
  const values = [
    {
      title: "Integrity",
      description:
        "We conduct business with honesty, transparency, and ethical practices. Our clients trust us because we always do what's right, even when no one is watching.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "Excellence",
      description:
        "We strive for the highest standards in everything we do. From client service to business solutions, we are committed to delivering exceptional quality and results.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Innovation",
      description:
        "We embrace change and continuously seek better ways to serve our clients. Our forward-thinking approach keeps us at the forefront of business consultancy.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      title: "Client Success",
      description:
        "Our success is measured by our clients' achievements. We are deeply committed to understanding and fulfilling our clients' unique needs and aspirations.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-0 py-12 lg:py-20 bg-gray-50 relative overflow-visible">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#49051E] mb-4">
            Our Values
          </h2>
          <div className="w-20 h-1 bg-[#C79A59] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            These guiding principles define our culture and drive our actions —
            shaping how we work, serve, and grow together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {values.map((value, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-visible"
            >
              {/* Animated Corner Lines */}
              <div className="corner-anim absolute -top-6 -left-6 w-40 h-40 pointer-events-none">
                <div className="horizontal-line"></div>
                <div className="vertical-line"></div>
                <div className="horizontal-circle"></div>
                <div className="vertical-circle"></div>
              </div>


              <h3 className="text-xl font-bold text-[#49051E] mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OurValuesSection;
