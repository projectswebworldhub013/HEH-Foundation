import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import GalleryHero from "../Components/GalleryHero";

/* Gallery Images */
import og1 from "../assets/images/gallery/og1.jpeg";
import og2 from "../assets/images/gallery/og2.jpeg";
import og3 from "../assets/images/gallery/og3.jpeg";
import og4 from "../assets/images/gallery/og4.jpeg";
import og5 from "../assets/images/gallery/og5.jpeg";
import og6 from "../assets/images/gallery/og6.jpeg";

import eg1 from "../assets/images/gallery/eg1.jpeg";
import eg2 from "../assets/images/gallery/eg2.jpeg";
import eg3 from "../assets/images/gallery/eg3.jpeg";
import eg4 from "../assets/images/gallery/eg4.jpeg";
import eg5 from "../assets/images/gallery/eg5.jpeg";
import eg6 from "../assets/images/gallery/eg6.jpeg";
import eg7 from "../assets/images/gallery/eg7.jpeg";
import eg8 from "../assets/images/gallery/eg8.jpeg";
import eg9 from "../assets/images/gallery/eg9.jpeg";
import eg10 from "../assets/images/gallery/eg10.jpeg";
import eg11 from "../assets/images/gallery/eg11.jpeg";
import eg12 from "../assets/images/gallery/eg12.jpeg";

import ng1 from "../assets/images/gallery/ng1.jpeg";
import ng2 from "../assets/images/gallery/ng2.jpeg";
import ng3 from "../assets/images/gallery/ng3.jpeg";
import ng4 from "../assets/images/gallery/ng4.jpeg";
import ng5 from "../assets/images/gallery/ng5.jpeg";
import ng6 from "../assets/images/gallery/ng6.jpeg";
import ng7 from "../assets/images/gallery/ng7.jpeg";
import ng8 from "../assets/images/gallery/ng8.jpeg";
import ng9 from "../assets/images/gallery/ng9.jpeg";
import ng10 from "../assets/images/gallery/ng10.jpeg";
import ng11 from "../assets/images/gallery/ng11.jpeg";
import ng12 from "../assets/images/gallery/ng12.jpeg";

import tg1 from "../assets/images/gallery/tg1.jpeg";
import tg3 from "../assets/images/gallery/tg3.jpeg";

export default function Gallery() {
 const galleryGroups = [
  {
    title: "Empowering Futures Through Education",
    subtitle: "Education Support",
    description:
      "The images below reflect HEH Foundation’s commitment to empowering underprivileged children through education. With books, learning materials, and personal guidance, we nurture curiosity, confidence, and brighter futures.",
    images: [eg1, eg2, eg3, eg4, eg5, eg6, eg7, eg8, eg9, eg10, eg11, eg12],
  },
  {
    title: "Care & Dignity for the Elderly",
    subtitle: "Old Age Support",
    description:
      "The images below highlight the compassionate work of HEH Foundation volunteers supporting elderly and vulnerable individuals. By providing warm clothing and essential care, we help restore dignity, comfort, and emotional well-being to those who need it most.",
    images: [og1, og2, og3, og4, og5, og6],
  },
  {
    title: "Nourishing Lives with Compassion",
    subtitle: "Food Distribution",
    description:
      "The images below showcase HEH Foundation’s efforts to provide nutritious meals to children and the elderly. Every meal served brings not just nourishment, but care, dignity, and hope to those facing hardship.",
    images: [ng1, ng2, ng3, ng4, ng5, ng6, ng11, ng8, ng9, ng10, ng7, ng12],
  },
  {
    title: "The People Behind the Mission",
    subtitle: "Our Team",
    description:
      "The images below feature the dedicated HEH Foundation team whose passion and commitment drive every initiative. Their tireless efforts transform compassion into real-world impact.",
    images: [tg1, tg3],
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

      <section className="w-full pt-18 px-4 bg-[#fff8f8]">
        {galleryGroups.map((group, gIndex) => {
          const blocks = [];
          for (let i = 0; i < group.images.length; i += 6) {
            blocks.push(group.images.slice(i, i + 6));
          }

          return (
            <div key={gIndex} className="max-w-7xl mx-auto mb-28" id="gallery">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <p className="uppercase tracking-widest text-xs text-[#F47A1F] font-semibold">
                  {group.subtitle}
                </p>
                <h2 className="text-3xl md:text-5xl font-bold mt-3 text-[#0B1F33]">
                  {group.title}
                </h2>
                <p className="mt-6 max-w-4xl mx-auto text-gray-600">
                  {group.description}
                </p>
              </motion.div>

              {/* Gallery Blocks */}
              <div className="space-y-24">
                {blocks.map((set, blockIndex) => (
                  <div key={blockIndex} className="space-y-6">
                    {/* TWO LARGE */}
                    <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6">
                      {set.slice(0, 2).map((img, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.02 }}
                          onClick={() => {
                            setSelectedIndex(blockIndex * 6 + i);
                            setActiveGroup(group.images);
                          }}
                          className="relative cursor-pointer aspect-square md:aspect-auto md:h-[380px] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl"
                        >
                          <img
                            src={img}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      ))}
                    </div>

                    {/* FOUR SMALL */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                      {set.slice(2, 6).map((img, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          onClick={() => {
                            setSelectedIndex(blockIndex * 6 + i + 2);
                            setActiveGroup(group.images);
                          }}
                          className="relative cursor-pointer aspect-square md:aspect-auto md:h-[220px] rounded-2xl overflow-hidden shadow-lg md:shadow-xl"
                        >
                          <img
                            src={img}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white"
            >
              <X size={32} />
            </button>

            <button onClick={prevImage} className="absolute left-6 text-white">
              <ChevronLeft size={40} />
            </button>

            <motion.img
              src={activeGroup[selectedIndex]}
              className="max-h-[85vh] max-w-[90vw] rounded-2xl"
            />

            <button onClick={nextImage} className="absolute right-6 text-white">
              <ChevronRight size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
