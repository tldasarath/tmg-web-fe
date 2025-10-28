"use client";

import { useState, useMemo, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages } from "@/data/GalleryData";
import { Container } from "../layout/Container";

export default function Gallery() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const ITEMS_PER_PAGE = 16;
  const totalPages = Math.ceil(galleryImages.length / ITEMS_PER_PAGE);

  // Get current page items
  const currentItems = useMemo(() => {
    const startIndex = currentPage * ITEMS_PER_PAGE;
    return galleryImages.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [currentPage, galleryImages]);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Scroll container variants
  const scrollVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  // Get card variants based on index - 4 different directions professionally
  const getCardVariants = (index) => {
    const directions = [
      { x: -80, y: -80 }, // top-left
      { x: 80, y: -80 }, // top-right
      { x: -80, y: 80 }, // bottom-left
      { x: 80, y: 80 }, // bottom-right
    ];
    const direction = directions[index % 4];

    return {
      hidden: {
        opacity: 0,
        x: direction.x,
        y: direction.y,
        scale: 0.85,
        rotateZ: index % 2 === 0 ? -3 : 3,
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotateZ: 0,
        transition: {
          duration: 0.7,
          ease: "easeOut",
          type: "spring",
          stiffness: 120,
          damping: 18,
          delay: (index % 4) * 0.05,
        },
      },
      exit: {
        opacity: 0,
        x: -direction.x,
        y: -direction.y,
        scale: 0.85,
        rotateZ: index % 2 === 0 ? 3 : -3,
        transition: {
          duration: 0.3,
          ease: "easeIn",
        },
      },
    };
  };

  // Title animation
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.5,
      },
    },
  };

  // Pagination button animation
  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  // Modal animation
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="w-full bg-white pt-8 sm:pt-12 md:pt-20 pb-12 sm:pb-20 md:pb-32 overflow-hidden">
      <Container>
        <div className="w-full">
          {/* Title */}
          <motion.div
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="mb-8 sm:mb-12 md:mb-16 text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#49051E] mb-5">
              Our Gallery
            </h1>
            <p>
              Explore a curated collection of our finest moments and creations.
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              variants={scrollVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              className="flex justify-center mb-8 sm:mb-12"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 w-full justify-items-center">
                {currentItems.map((image, index) => (
                  <GalleryCard
                    key={`${currentPage}-${image.id}`}
                    image={image}
                    index={index}
                    cardVariants={getCardVariants(index)}
                    onSelect={setSelectedImage}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 flex-wrap mb-10 md:mb-5"
          >
            {/* Previous Button */}
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={handlePrevPage}
              disabled={currentPage === 0}
              className="w-8 sm:w-8 md:w-10 h-8 sm:h-8 md:h-10 rounded-full flex items-center justify-center border-2 border-gray-300 text-gray-700 hover:border-gray-400 transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-md flex-shrink-0"
            >
              <ChevronLeft
                size={18}
                className="w-4 sm:w-4 md:w-5 h-4 sm:h-4 md:h-5"
              />
            </motion.button>

            {/* Page Numbers - Show max 4 pages */}
            <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
              {Array.from({ length: Math.min(4, totalPages) }).map(
                (_, index) => {
                  const pageNum = index + 1;
                  const isActive = currentPage === index;

                  return (
                    <motion.button
                      key={index}
                      variants={buttonVariants}
                      whileHover={!isActive ? "hover" : {}}
                      whileTap="tap"
                      onClick={() => {
                        setCurrentPage(index);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className={`w-8 sm:w-8 md:w-10 h-8 sm:h-8 md:h-10 rounded-full font-bold text-base sm:text-lg md:text-xl transition-all duration-300 flex items-center justify-center flex-shrink-0 ${
                        isActive
                          ? "bg-amber-600 text-white shadow-lg"
                          : "bg-white border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:shadow-md"
                      }`}
                    >
                      {pageNum}
                    </motion.button>
                  );
                }
              )}
            </div>

            {/* Next Button */}
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={handleNextPage}
              disabled={currentPage === totalPages - 1}
              className="w-8 sm:w-8 md:w-10 h-8 sm:h-8 md:h-10 rounded-full flex items-center justify-center border-2 border-gray-300 text-gray-700 hover:border-gray-400 transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-md flex-shrink-0"
            >
              <ChevronRight size={18} className="sm:w-5 sm:h-5" />
            </motion.button>
          </motion.div>
        </div>
      </Container>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 sm:p-6 md:p-8"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-2xl shadow-2xl"
            />

            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 sm:-top-5 right-0 md:-right-20 text-white hover:text-red-300 transition-colors bg-black/50 rounded-full p-2"
            >
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

// Gallery Card Component with Scroll Trigger
function GalleryCard({ image, index, cardVariants, onSelect }) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: false, amount: 0.3 }}
      whileHover={{
        y: -6,
        transition: {
          duration: 0.3,
        },
      }}
      onClick={() => onSelect(image)}
      className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg w-full max-w-xs hover:shadow-2xl transition-shadow"
      style={{
        width: "100%",
        maxWidth: "280px",
        height: "290px",
      }}
    >
      {/* Card Background with Image */}
      <div className="w-full h-full bg-gradient-to-br from-red-900 to-red-800 flex items-center justify-center">
        <motion.img
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4 }}
          src={image.src}
          alt={image.alt}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Hover Overlay */}
        <motion.div
          className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <motion.div whileHover={{ scale: 1.2 }} className="text-white">
            <svg
              className="w-10 sm:w-12 h-10 sm:h-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* Image Number */}
        <motion.div
          className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white font-semibold text-base sm:text-lg bg-black/50 px-2 py-1 rounded"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          #{image.id}
        </motion.div>
      </div>

      {/* Border Highlight on Hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-blue-400 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
