import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const PhotoGallery = ({ photos = [] }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const constraintsRef = useRef(null);
  const x = useMotionValue(0);

  const openModal = (photo, index) => {
    // Add a small delay to distinguish between drag and click
    setTimeout(() => {
      if (!isDragging) {
        setSelectedPhoto(photo);
        setSelectedIndex(index);
      }
    }, 50);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  const nextPhoto = () => {
    const nextIndex = (selectedIndex + 1) % photos.length;
    setSelectedPhoto(photos[nextIndex]);
    setSelectedIndex(nextIndex);
  };

  const prevPhoto = () => {
    const prevIndex = (selectedIndex - 1 + photos.length) % photos.length;
    setSelectedPhoto(photos[prevIndex]);
    setSelectedIndex(prevIndex);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowRight") nextPhoto();
    if (e.key === "ArrowLeft") prevPhoto();
  };

  return (
    <>
      <div className="my-32">
        <h2 className="font-bold text-8xl mb-16 w-full text-center md:text-6xl xs:text-4xl md:mb-8 bg-gradient-to-r from-appleBlue to-appleGreen bg-clip-text text-transparent">
          Photo Gallery
        </h2>
        
        {/* Horizontal Scrolling Gallery */}
        {photos.length > 0 ? (
          <div className="relative">
            <div 
              ref={constraintsRef}
              className="overflow-hidden"
            >
              <motion.div
                drag="x"
                dragConstraints={constraintsRef}
                dragElastic={0.1}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={() => setTimeout(() => setIsDragging(false), 150)}
                className={`flex gap-6 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                style={{ x }}
                whileTap={{ cursor: "grabbing" }}
              >
                {photos.map((photo, index) => (
                  <motion.div
                    key={index}
                    className="flex-shrink-0 apple-card overflow-hidden cursor-pointer group hover:shadow-apple-lg"
                    whileHover={{ scale: 1.02, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => openModal(photo, index)}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    style={{ 
                      width: "320px", 
                      height: "240px",
                    }}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={photo.src}
                        alt={photo.alt || `Working photo ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="320px"
                        draggable={false}
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                      
                      {/* Photo Info - Always Visible */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="font-semibold text-lg leading-tight mb-1 drop-shadow-lg bg-gradient-to-r from-white to-appleSecondary bg-clip-text text-transparent">
                          {photo.title || `Photo ${index + 1}`}
                        </h3>
                        {photo.description && (
                          <p className="text-sm text-gray-200 leading-tight drop-shadow-lg opacity-90">
                            {photo.description}
                          </p>
                        )}
                      </div>

                      {/* Hover Effect Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-appleBlue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Play Icon on Hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
                
                {/* Spacer for better scroll experience */}
                <div className="flex-shrink-0 w-8" />
              </motion.div>
            </div>

            {/* Scroll Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {photos.slice(0, Math.min(photos.length, 8)).map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-appleSecondary/30 dark:bg-light/30"
                />
              ))}
            </div>

            {/* Instructions */}
            <p className="text-center text-appleSecondary dark:text-light/60 text-sm mt-4">
              Drag to scroll • Click to view full size
            </p>
          </div>
        ) : (
          <div className="apple-card p-12 text-center max-w-md mx-auto">
            <div className="text-6xl mb-4">📸</div>
            <h3 className="text-2xl font-semibold text-appleSecondary mb-2">No Photos Yet</h3>
            <p className="text-appleSecondary">Working photos will be displayed here when available.</p>
          </div>
        )}
      </div>

      {/* Full-Screen Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Close Button */}
            <button
              className="absolute top-8 right-8 z-60 w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
              onClick={closeModal}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Navigation Arrows */}
            {photos.length > 1 && (
              <>
                <button
                  className="absolute left-8 z-60 w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevPhoto();
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M15 18L9 12L15 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  className="absolute right-8 z-60 w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextPhoto();
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </>
            )}

            {/* Main Image Container */}
            <motion.div
              className="relative max-w-7xl max-h-[90vh] mx-8"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt || "Working photo"}
                width={1400}
                height={900}
                className="max-w-full max-h-[90vh] object-contain rounded-3xl shadow-apple-xl"
                priority
              />
              
              {/* Photo Information Overlay */}
              {(selectedPhoto.title || selectedPhoto.description) && (
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-8 rounded-b-3xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {selectedPhoto.title && (
                    <h3 className="text-2xl font-bold mb-3 leading-tight bg-gradient-to-r from-white to-appleSecondary bg-clip-text text-transparent">
                      {selectedPhoto.title}
                    </h3>
                  )}
                  {selectedPhoto.description && (
                    <p className="text-gray-200 text-lg leading-relaxed max-w-3xl">
                      {selectedPhoto.description}
                    </p>
                  )}
                </motion.div>
              )}

              {/* Photo Counter */}
              {photos.length > 1 && (
                <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-md rounded-full px-4 py-2 text-white text-sm font-medium border border-white/20">
                  {selectedIndex + 1} of {photos.length}
                </div>
              )}
            </motion.div>

            {/* Bottom Thumbnail Strip */}
            {photos.length > 1 && (
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 bg-black/30 backdrop-blur-md rounded-2xl p-3 border border-white/10">
                {photos.map((photo, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPhoto(photo);
                      setSelectedIndex(index);
                    }}
                    className={`relative w-16 h-12 rounded-lg overflow-hidden transition-all duration-300 ${
                      index === selectedIndex 
                        ? 'ring-2 ring-white/80 scale-110' 
                        : 'ring-1 ring-white/20 hover:ring-white/40'
                    }`}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt || `Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PhotoGallery;