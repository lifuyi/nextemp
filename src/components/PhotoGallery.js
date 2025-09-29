import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const PhotoGallery = ({ photos = [] }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openModal = (photo, index) => {
    setSelectedPhoto(photo);
    setSelectedIndex(index);
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
        <h2 className="font-bold text-8xl mb-16 w-full text-center md:text-6xl xs:text-4xl md:mb-8">
          Photo Gallery
        </h2>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              className="apple-card overflow-hidden cursor-pointer group hover:shadow-apple-lg"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openModal(photo, index)}
              transition={{ duration: 0.3 }}
            >
              <div className="relative aspect-square">
                <Image
                  src={photo.src}
                  alt={photo.alt || `Working photo ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Photo Title */}
                {photo.title && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold text-lg">{photo.title}</h3>
                    {photo.description && (
                      <p className="text-sm text-gray-200 mt-1">{photo.description}</p>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {photos.length === 0 && (
          <div className="apple-card p-12 text-center">
            <div className="text-6xl mb-4">📸</div>
            <h3 className="text-2xl font-semibold text-appleSecondary mb-2">No Photos Yet</h3>
            <p className="text-appleSecondary">Working photos will be displayed here when available.</p>
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 z-60 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
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
                  className="absolute left-6 z-60 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
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
                  className="absolute right-6 z-60 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
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

            {/* Image */}
            <motion.div
              className="relative max-w-5xl max-h-[80vh] mx-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt || "Working photo"}
                width={1200}
                height={800}
                className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-apple-xl"
                priority
              />
              
              {/* Photo Info */}
              {(selectedPhoto.title || selectedPhoto.description) && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
                  {selectedPhoto.title && (
                    <h3 className="text-white text-xl font-semibold mb-2">{selectedPhoto.title}</h3>
                  )}
                  {selectedPhoto.description && (
                    <p className="text-gray-200">{selectedPhoto.description}</p>
                  )}
                </div>
              )}

              {/* Photo Counter */}
              {photos.length > 1 && (
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md rounded-full px-3 py-1 text-white text-sm">
                  {selectedIndex + 1} / {photos.length}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PhotoGallery;