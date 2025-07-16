import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ImageSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName = "",
  className = "",
  autoplay = true,
  direction = "up",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadedImages, setLoadedImages] = useState([]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) =>
      prev + 1 === images.length ? 0 : prev + 1
    );
  }, [images.length]);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? images.length - 1 : prev - 1
    );
  }, [images.length]);

  const loadImages = useCallback(() => {
    setLoading(true);
    const loadPromises = images.map((image) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image;
        img.onload = () => resolve(image);
        img.onerror = reject;
      });
    });

    Promise.all(loadPromises)
      .then((loaded) => {
        setLoadedImages(loaded);
        setLoading(false);
      })
      .catch((err) => console.error("Erreur de chargement d'image", err));
  }, [images]);

  useEffect(() => {
    loadImages();
  }, [loadImages]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") handleNext();
      else if (event.key === "ArrowLeft") handlePrevious();
    };

    window.addEventListener("keydown", handleKeyDown);

    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(interval);
    };
  }, [autoplay, handleNext, handlePrevious]);

  const slideVariants = {
    initial: {
      scale: 0,
      opacity: 0,
      rotateX: 45,
    },
    visible: {
      scale: 1,
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.645, 0.045, 0.355, 1.0],
      },
    },
    upExit: {
      opacity: 1,
      y: "-150%",
      transition: {
        duration: 1,
      },
    },
    downExit: {
      opacity: 1,
      y: "150%",
      transition: {
        duration: 1,
      },
    },
  };

  const areImagesLoaded = loadedImages.length > 0;

  return (
    <div
      className={`overflow-hidden h-full w-full relative flex items-center justify-center ${className}`}
      style={{ perspective: "1000px" }}
    >
      {loading && (
        <div className="absolute z-50 text-white bg-black/70 px-4 py-2 rounded">
          Chargement...
        </div>
      )}

      {areImagesLoaded && children}

      {areImagesLoaded && overlay && (
        <div className={`absolute inset-0 bg-black/60 z-40 ${overlayClassName}`} />
      )}

      {areImagesLoaded && (
        <AnimatePresence>
          <motion.div
  key={currentIndex}
  initial="initial"
  animate="visible"
  exit={direction === "up" ? "upExit" : "downExit"}
  variants={slideVariants}
  className="absolute inset-0 bg-center bg-cover"
  style={{ backgroundImage: `url(${loadedImages[currentIndex]})` }}
/>
        </AnimatePresence>
      )}
    </div>
  );
};

export default ImageSlider;
