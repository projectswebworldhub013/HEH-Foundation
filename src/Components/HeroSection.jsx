import React, { useState } from "react";
import { Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// Hero images
import hero1 from "../assets/images/hero/h1.jpg"; // Education
import hero2 from "../assets/images/hero/h2.jpg"; // Healthcare
import hero3 from "../assets/images/hero/h3.jpg"; // Hunger Relief

// Background overlay
import bgHero from "../assets/images/bg.avif";

const SLIDES = [
  {
    src: hero1,
    title: "Education for Every Child",
    subtitle:
      "We empower underprivileged children through quality education, digital learning, and school support.",
  },
  {
    src: hero2,
    title: "Healthcare & Nutrition",
    subtitle:
      "Ensuring access to medical care, nutrition, and healthy lives for vulnerable communities.",
  },
  {
    src: hero3,
    title: "Ending Hunger with Compassion",
    subtitle:
      "Providing meals, ration support, and emergency relief to families in need.",
  },
];

export default function HeroSection() {
  const [active, setActive] = useState(0);
  const [fade, setFade] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handleImageChange = (idx) => {
    if (idx === active) return;
    setFade(true);
    setTimeout(() => {
      setActive(idx);
      setFade(false);
    }, 300);
  };

  return (
    <section className="relative w-full bg-[#F9FAF7] px-6 md:px-12 lg:px-20 py-20 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-[-1] bg-cover bg-center "
        style={{ backgroundImage: `url(${bgHero})` }}
      />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block bg-[#FFF4E6] text-[#E8590C] px-4 py-1 rounded-full text-sm font-semibold mb-4">
            HEH FOUNDATION
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#0B1F33]">
            Together We Fight{" "}
            <span className="text-[#DC2626]">Hunger</span>,{" "}
            <span className="text-[#F47A1F]">Ignorance</span> &{" "}
            <span className="text-[#1E4ED8]">Illness</span>
          </h1>

          <p className="mt-5 text-[#374151] max-w-xl">
            HEH Foundation works to uplift children and vulnerable communities
            through <strong>Education</strong>, <strong>Healthcare</strong>,
            <strong> Nutrition</strong>, and <strong>Humanitarian support</strong>.
            Every contribution creates real impact.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mt-8">
            <Link to="/donate">
              <button className="bg-[#E8590C] hover:bg-[#DC2626] text-white font-semibold px-7 py-3 rounded-lg shadow-lg transition">
                Donate Now
              </button>
            </Link>

            <Link to="/volunteer">
              <button className="border-2 border-[#1E4ED8] text-[#1E4ED8] hover:bg-[#1E4ED8] hover:text-white px-7 py-3 rounded-lg font-semibold transition">
                Become a Volunteer
              </button>
            </Link>

            <button
              onClick={() => setShowVideo(true)}
              className="flex items-center gap-2 text-[#0F2A44] font-medium hover:underline"
            >
              <Play size={18} /> Watch Our Story
            </button>
          </div>

          {/* IMPACT STATS */}
          <div className="flex flex-wrap gap-10 mt-10">
            <div>
              <p className="text-2xl font-bold text-[#16A34A]">10,000+</p>
              <p className="text-sm text-[#374151]">Children Supported</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#16A34A]">50+</p>
              <p className="text-sm text-[#374151]">Health Camps</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#16A34A]">25,000+</p>
              <p className="text-sm text-[#374151]">Meals Distributed</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative hidden md:block">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#E5E7EB]">
            <img
              src={SLIDES[active].src}
              alt={SLIDES[active].title}
              className={`w-full h-[420px] object-cover transition-opacity duration-500 ${
                fade ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>

          {/* Badge */}
          <div className="absolute top-4 left-4 bg-[#F47A1F] text-white px-4 py-1 rounded-full text-xs font-semibold">
            Making Lives Better
          </div>

          {/* Thumbnails */}
          <div className="flex gap-4 mt-5 justify-center">
            {SLIDES.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleImageChange(idx)}
                className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition ${
                  active === idx
                    ? "border-[#DC2626] scale-105"
                    : "border-[#E5E7EB]"
                }`}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Slide Text */}
          <div className="mt-4 text-center">
            <h3 className="font-bold text-[#0B1F33]">
              {SLIDES[active].title}
            </h3>
            <p className="text-sm text-[#374151] max-w-md mx-auto">
              {SLIDES[active].subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* VIDEO MODAL */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-[90%] max-w-3xl bg-white rounded-2xl overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-3 right-3 bg-black text-white rounded-full p-2"
              >
                <X size={22} />
              </button>

              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
                  title="HEH Foundation"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
