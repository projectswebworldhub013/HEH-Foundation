import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { HeartHandshake, Sparkles } from "lucide-react";
import GalleryHero from "../Components/GalleryHero";

/* Gallery Images */
import og1 from "../assets/images/gallery/og1.jpeg";
import og2 from "../assets/images/gallery/og2.jpeg";
import og3 from "../assets/images/gallery/og3.jpeg";
import og4 from "../assets/images/gallery/og4.jpeg";
import og5 from "../assets/images/gallery/og5.jpeg";
import og6 from "../assets/images/gallery/og6.jpeg";
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
  const galleryGroups = [
    {
      title: "Care & Dignity for the Elderly",
      subtitle: "Old Age Support",
      description:
        "The images displayed above reflect the humanitarian efforts and community outreach initiatives undertaken by the employees and volunteers of HEH Foundation. These moments capture our team actively engaging with underprivileged communities, extending care and support to children and elderly individuals who face daily challenges due to limited resources. Through the distribution of essential clothing items such as blankets, sweaters, and warm garments, HEH Foundation aims to provide comfort, dignity, and protection. These interactions reflect our unwavering commitment to compassion, empathy, and social responsibility.",
      images: [og1, og2, og3, og4, og5, og6],
    },
    {
      title: "Empowering Futures Through Education",
      subtitle: "Education Support",
      description:
        "The images displayed above reflect the unwavering commitment of HEH Foundation to empowering children in underprivileged communities through access to education. Each moment captured represents hope, opportunity, and the belief that every child deserves the tools to learn and grow. Through books, stationery, and hands-on support, HEH Foundation nurtures curiosity, confidence, and lifelong learning.",
      images: [g13, g14, g15, g16, g17, g18, g19, g20, og6, g7, g8, g9, g10],
    },
    {
      title: "Nourishing Lives with Compassion",
      subtitle: "Food Distribution",
      description:
        "The images displayed here reflect the heartfelt commitment and humanitarian spirit of the HEH Foundation. Our team actively supports children and elderly individuals by distributing nutritious food with dignity and respect. These moments reflect our mission to stand beside vulnerable communities and provide care that fosters security and well-being.",
      images: [g11, g12, g13, g14, g15, g16, g17, g18, g19, g20, og6],
    },
    {
      title: "The People Behind the Mission",
      subtitle: "Our Team",
      description:
        "These images reflect the dedication and compassion of the HEH Foundation team after long days of serving underprivileged communities. Tired yet inspired, our team members embody resilience, empathy, and commitment. They are not just employees — they are changemakers creating lasting impact through service and purpose.",
      images: [g7, g8, g9, g10, g11, g12, g13, g14, g15],
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [activeGroup, setActiveGroup] = useState([]);

  const closeModal = () => setSelectedIndex(null);

  const prevImage = () =>
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : activeGroup.length - 1));

  const nextImage = () =>
    setSelectedIndex((prev) => (prev < activeGroup.length - 1 ? prev + 1 : 0));

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
  }, [selectedIndex, activeGroup]);

  return (
    <>
      <GalleryHero />

      <section className="w-full py-20 px-4 bg-[#fff8f8]">
        {galleryGroups.map((group, gIndex) => (
          <div key={gIndex} className="max-w-7xl mx-auto mb-32">
            {/* Group Header */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-14 relative"
            >
              <div className="absolute inset-0 flex justify-center">
                <div className="w-[350px] h-[350px] bg-[#F47A1F]/10 blur-[120px] rounded-full"></div>
              </div>

              <p className="uppercase tracking-widest text-xs text-[#F47A1F] font-semibold">
                {group.subtitle}
              </p>

              <h2 className="text-3xl md:text-5xl font-bold mt-3 text-[#0B1F33]">
                {group.title}
              </h2>

              <p className="mt-6 max-w-4xl mx-auto text-gray-600 leading-relaxed">
                {group.description}
              </p>
            </motion.div>

            {/* Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {group.images.map((src, index) => {
                const isLarge = index % 7 === 0 || index % 7 === 3;

                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => {
                      setSelectedIndex(index);
                      setActiveGroup(group.images);
                    }}
                    className={`relative overflow-hidden rounded-2xl border bg-white cursor-pointer ${
                      isLarge ? "lg:col-span-2 lg:row-span-2" : ""
                    }`}
                    style={{ borderColor: COLORS.border }}
                  >
                    <img
                      src={src}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ backgroundColor: "rgba(0,0,0,0.9)" }}
          >
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#F47A1F] text-white"
            >
              <X size={28} />
            </button>

            <div className="relative max-w-6xl w-full flex items-center justify-center">
              <motion.img
                key={selectedIndex}
                src={activeGroup[selectedIndex]}
                className="max-h-[85vh] w-full object-contain rounded-xl"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
              />

              <button
                onClick={prevImage}
                className="absolute left-4 md:-left-14 p-3 rounded-full bg-[#F47A1F] text-white"
              >
                <ChevronLeft size={30} />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 md:-right-14 p-3 rounded-full bg-[#F47A1F] text-white"
              >
                <ChevronRight size={30} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
