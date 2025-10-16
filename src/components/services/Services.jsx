"use client";
import { useState } from "react";
import { motion } from "framer-motion"; // 🪄 Add this line
import { Container } from "../layout/Container";
import ScheduleMeeting from "../common/ScheduleMeeting";

const Services = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 8;

  // ---- same allServices array ----
  const allServices = [
    { id: 1, title: 'BUSINESS SETUP IN DUBAI', description: 'Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis mole himenaeos. Praesent auctor purusdictu mattis tellus.   ', image: '/assets/images/services/Company-Formation.png' },
    { id: 2, title: 'Company Formation', description: 'Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis mole himenaeos. Praesent auctor purusdictu mattis tellus.   ', image: '/assets/images/services/BUSINESS-SETUP-IN-DUBAI.png' },
    { id: 3, title: 'Golden Visa', description: 'Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis mole himenaeos. Praesent auctor purusdictu mattis tellus.   ', image: '/assets/images/services/BUSINESS-SETUP-IN-DUBAI.png' },
    { id: 4, title: 'PRO Services', description: 'Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis mole himenaeos. Praesent auctor purusdictu mattis tellus.   ', image: '/assets/images/services/PRO-Services.png' },
    { id: 5, title: 'Local Sponsorship', description: 'Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis mole himenaeos. Praesent auctor purusdictu mattis tellus.   ', image: '/assets/images/services/PRO-Services.png' },
    { id: 6, title: 'Visa Services', description: 'Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis mole himenaeos. Praesent auctor purusdictu mattis tellus.   ', image: '/assets/images/services/Visa-Services.png' },
    { id: 7, title: 'ISO Certification & Trademark Registration', description: 'Jorem ipsum dolor sit amet, consecteturadipiscing elit. Etiam eu turpis mole himenaeos. Praesent auctor purusdictu mattis tellus.   ', image: '/assets/images/services/ISO-Certification-&-Trademark-Registration.png' },
    { id: 8, title: 'Virtual Office', description: 'Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis mole himenaeos. Praesent auctor purusdictu mattis tellus.   ', image: '/assets/images/services/Virtual-Office.png' },
    { id: 9, title: 'Company Liquidation', description: 'Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis mole himenaeos. Praesent auctor purusdictu mattis tellus.   ', image: '/assets/images/services/Company-Liquidation.png' },
    { id: 10, title: 'Document Attestation', description: 'Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis mole himenaeos. Praesent auctor purusdictu mattis tellus.   ', image: '/assets/images/services/Document-Attestation.png' },
    { id: 11, title: 'Legal Translation', description: 'Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis mole himenaeos. Praesent auctor purusdictu mattis tellus.   ', image: '/assets/images/services/Legal-Translation.png' },
    { id: 12, title: 'Insurance & VAT Services', description: 'Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis mole himenaeos. Praesent auctor purusdictu mattis tellus.   ', image: '/assets/images/services/Insurance&VAT-Services.png' },
    { id: 13, title: 'Bank Account Opening', description: 'Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis mole himenaeos. Praesent auctor purusdictu mattis tellus.   ', image: '/assets/images/services/Bank-Account-Opening.png' },
    { id: 14, title: 'Typing Services', description: 'Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis mole himenaeos. Praesent auctor purusdictu mattis tellus.   ', image: '/assets/images/services/Typing-Services.png' },
    { id: 15, title: 'UAE Government Approvals', description: 'Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis mole himenaeos. Praesent auctor purusdictu mattis tellus.   ', image: '/assets/images/services/UAE-Government-Approvals.png' },
    { id: 16, title: 'Medical & Emirates Id Services', description: 'Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis mole himenaeos. Praesent auctor purusdictu mattis tellus.   ', image: '/assets/images/services/Medical&Emirates-Id-Services.png' }
  ];

  // Pagination logic
  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = allServices.slice(indexOfFirstService, indexOfLastService);
  const totalPages = Math.ceil(allServices.length / servicesPerPage);
  const sidebarServices = allServices.filter(
    (service) => !currentServices.some((currentService) => currentService.id === service.id)
  );

  return (
    <div className="lg:py-16 py-8">
      <Container>
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* 🪄 Header Section with animation */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-[3rem] text-[#49051E] mb-6 lg:mb-8 leading-tight font-bold">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              We offer a comprehensive range of digital services to help your business grow and succeed in the modern landscape. 
              From development to marketing, we've got you covered.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content - Services Grid */}
            <motion.div
              className="lg:w-3/4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {currentServices.map((service, i) => (
<motion.div
  key={service.id}
  className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 border-animated relative cursor-pointer"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 + i * 0.05, duration: 0.6, ease: "easeOut" }}
>
  <div className="h-48 bg-gradient-to-br from-[#8E1A3D] to-[#B23A5E] flex items-center justify-center">
    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
  </div>
  <div className="p-6">
    <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
    <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
  </div>
</motion.div>

                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center items-center space-x-2 pt-8">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className={`px-3 py-1 rounded-lg border-2 font-semibold ${
                    currentPage === 1
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200"
                      : "bg-white text-[#8E1A3D] hover:bg-[#8E1A3D] hover:text-white border-[#8E1A3D]"
                  } transition-colors duration-200`}
                >
                  Previous
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-1 rounded-full border-2 font-semibold ${
                      currentPage === page
                        ? "bg-[#8E1A3D] text-white border-[#8E1A3D]"
                        : "bg-white text-[#8E1A3D] hover:bg-[#8E1A3D] hover:text-white border-[#8E1A3D]"
                    } transition-colors duration-200`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className={`px-3 py-1 rounded-lg border-2 font-semibold ${
                    currentPage === totalPages
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200"
                      : "bg-white text-[#8E1A3D] hover:bg-[#8E1A3D] hover:text-white border-[#8E1A3D]"
                  } transition-colors duration-200`}
                >
                  Next
                </button>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              className="lg:w-1/4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
            >
              <div className="space-y-6 sticky top-6">
                {/* Other Services */}
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-200">
                    Other Services
                  </h2>
                  <div className="max-h-[400px] overflow-y-auto pr-2">
                    <div className="space-y-4">
                      {sidebarServices.map((service) => (
                        <div
                          key={service.id}
                          className="bg-gray-50 rounded-lg p-4 hover:bg-blue-50 transition-colors duration-200 border border-gray-200 hover:border-[#b9436e]"
                        >
                          <div className="h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-3">
                            <img
                              src={service.image}
                              alt={service.title}
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </div>
                          <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{service.title}</h3>
                          <p className="text-sm text-gray-600 line-clamp-2">{service.description}</p>
                          <button className="mt-3 text-sm text-[#49051E] hover:text-[#280110] font-medium transition-colors duration-200">
                            View Details →
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Schedule Meeting */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
                  className=""
                >
                  <ScheduleMeeting />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
