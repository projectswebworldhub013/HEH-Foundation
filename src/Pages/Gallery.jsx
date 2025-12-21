// src/pages/Gallery.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { HeartHandshake, Sparkles } from "lucide-react";
import GalleryHero from "../Components/GalleryHero";

/* Gallery Images */
import g6 from "../assets/images/gallery/g6.jpg";
import g7 from "../assets/images/gallery/g7.jpg";
import g8 from "../assets/images/gallery/g13.jpg";
import g9 from "../assets/images/gallery/g9.jpg";
import g10 from "../assets/images/gallery/g10.jpg";
import g11 from "../assets/images/gallery/g11.jpg";
import g12 from "../assets/images/gallery/g12.jpg";
import g13 from "../assets/images/gallery/g8.jpg";
import g14 from "../assets/images/gallery/g14.jpg";
import g15 from "../assets/images/gallery/g15.jpg";
import g16 from "../assets/images/gallery/g16.jpg";
import g17 from "../assets/images/gallery/g19.jpg";
import g18 from "../assets/images/gallery/g18.jpg";
import g19 from "../assets/images/gallery/g17.jpg";
import g20 from "../assets/images/gallery/g21.jpg";

/* HEH COLOR SYSTEM */
const COLORS = {
  primary: "#F47A1F",
  section: "#FFF4E6",
  heading: "#0B1F33",
  text: "#374151",
  border: "#E5E7EB",
};

export default function Gallery() {
  const images = [
    g6, g7, g8, g9, g10, g11, g12, g13,
    g14, g15, g16, g17, g18, g19, g20
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);

  /* Detect screen size */
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleImages = isDesktop ? images.slice(0, images.length - 1) : images;

  const closeModal = () => setSelectedIndex(null);
  const prevImage = () =>
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : visibleImages.length - 1));
  const nextImage = () =>
    setSelectedIndex((prev) => (prev < visibleImages.length - 1 ? prev + 1 : 0));

  /* Keyboard */
  useEffect(() => {
    const handleKey = (e) => {
      if (selectedIndex !== null) {
        if (e.key === "Escape") closeModal();
        if (e.key === "ArrowLeft") prevImage();
        if (e.key === "ArrowRight") nextImage();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex]);

  return (
    <>
      <GalleryHero />

      {/* GALLERY SECTION */}
      <section
        className="w-full py-16 px-4 bg-[#fff8f8]"
        id="gallery"
      >

<div className="max-w-7xl mx-auto text-center mb-16 relative">

  {/* Soft background glow */}
  <div className="absolute inset-0 flex justify-center">
    <div className="w-72 h-72 bg-[#F47A1F]/10 blur-3xl rounded-full -z-10"></div>
  </div>

  {/* Top badge */}
  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-5"
       style={{ borderColor: COLORS.border, backgroundColor: "#FFF" }}>
    <Sparkles size={14} className="text-[#F47A1F]" />
    <span
      className="text-xs tracking-widest uppercase font-semibold"
      style={{ color: COLORS.navy }}
    >
      Our Journey in Action
    </span>
  </div>

  {/* Main Heading */}
  <h2
    className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight"
    style={{ color: COLORS.heading }}
  >
    Our{" "}
    <span className="relative inline-block">
      <span className="relative z-10">Moments of Impact</span>
      {/* <span className="absolute left-0 bottom-1 w-full h-3 bg-[#F47A1F]/25 -z-0 rounded-sm"></span> */}
    </span>
  </h2>

  {/* Decorative divider */}
  <div className="flex items-center justify-center gap-3 mt-6">
    <span className="w-10 h-[2px] bg-[#E5E7EB]"></span>
    <HeartHandshake size={22} className="text-[#F47A1F]" />
    <span className="w-10 h-[2px] bg-[#E5E7EB]"></span>
  </div>

  {/* Description */}
  <p
    className="mt-6 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
    style={{ color: COLORS.text }}
  >
    A visual reflection of{" "}
    <span className="font-semibold text-[#0B1F33]">
      compassion in action
    </span>{" "}
    — restoring dignity, building hope, and standing beside communities
    with purpose and care.
  </p>
</div>


        {/* GRID */}
        <div className="max-w-7xl mx-auto grid grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {visibleImages.map((src, index) => {
            const isLarge = index % 6 === 0 || index % 6 === 1;

            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedIndex(index)}
                className={`relative overflow-hidden cursor-pointer rounded-xl border bg-white
                  aspect-square
                  ${isLarge ? "lg:col-span-2 lg:aspect-[16/10]" : ""}
                `}
                style={{ borderColor: COLORS.border }}
              >
                <img
                  src={src}
                  alt={`HEH Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ backgroundColor: "rgba(0,0,0,0.9)" }}
          >
            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 p-2 rounded-full text-white"
              style={{ backgroundColor: COLORS.primary }}
            >
              <X size={26} />
            </button>

            {/* Image */}
            <div className="relative max-w-5xl w-full flex items-center justify-center">
              <motion.img
                key={selectedIndex}
                src={visibleImages[selectedIndex]}
                alt="Gallery View"
                className="max-h-[80vh] w-full object-contain rounded-xl"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
              />

              {/* Controls */}
              <button
                onClick={prevImage}
                className="absolute left-3 md:-left-12 p-2 rounded-full text-white"
                style={{ backgroundColor: COLORS.primary }}
              >
                <ChevronLeft size={28} />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-3 md:-right-12 p-2 rounded-full text-white"
                style={{ backgroundColor: COLORS.primary }}
              >
                <ChevronRight size={28} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
