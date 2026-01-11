// src/components/HeroSection.jsx
import React, { useState, useEffect } from "react";
import { Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// Hero images
import hero1 from "../assets/images/gallery/g2.jpg"; // Education
import hero2 from "../assets/images/gallery/g1.jpg"; // Healthcare
import hero3 from "../assets/images/gallery/g3.jpg"; // Hunger Relief
import hero4 from "../assets/images/gallery/g4.jpg"; // Community Support
import hero5 from "../assets/images/gallery/g5.jpg"; // Volunteer Work
// Background
import bgHero from "../assets/images/bg.avif";

// 🔥 Donation Popup
import DonatePopup from "./DonatePopup";

const SLIDES = [
  {
    src: hero1,
    title: "Education for All",
    subtitle:
      "Empowering children and adults through quality education and digital learning.",
  },
  {
    src: hero2,
    title: "Healthcare & Nutrition",
    subtitle:
      "Providing medical care, nutrition support, and health awareness programs.",
  },
  {
    src: hero3,
    title: "Ending Hunger",
    subtitle:
      "Ensuring no one sleeps hungry through meal programs and ration drives.",
  },
  {
    src: hero4,
    title: "Community Development",
    subtitle:
      "Strengthening families and communities through sustainable initiatives.",
  },
  {
    src: hero5,
    title: "Volunteer & Humanity",
    subtitle:
      "Mobilizing volunteers to serve humanity with compassion and dignity.",
  },
];

export default function HeroSection() {
  const [active, setActive] = useState(0);
  const [fade, setFade] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showDonate, setShowDonate] = useState(false);

  // 🔁 AUTO SLIDE
  useEffect(() => {
    if (showVideo) return;

    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setActive((prev) => (prev + 1) % SLIDES.length);
        setFade(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [showVideo]);

  // Manual change
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
        className="absolute inset-0 z-[-1] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgHero})` }}
      />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block bg-[#FFF4E6] text-[#E8590C] px-4 py-1 rounded-full text-sm font-semibold mb-4">
            HEH FOUNDATION
          </span>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#0B1F33]">
            Together We Fight{" "}
            <span className="text-[#DC2626]">Hunger</span>,{" "}
            <span className="text-[#F47A1F]">Ignorance</span> &{" "}
            <span className="text-[#1E4ED8]">Illness</span>
          </h1>

          <p className="mt-5 text-[#374151] max-w-xl">
            HEH Foundation uplifts vulnerable individuals and communities through
            <strong> education</strong>, <strong>healthcare</strong>,
            <strong> nutrition</strong>, and
            <strong> humanitarian action</strong>.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 mt-8">
            <button
              onClick={() => setShowDonate(true)}
              className="cursor-pointer px-7 py-3 rounded-full bg-[#E8590C] hover:bg-[#DC2626] text-white font-semibold shadow-lg transition"
            >
              Donate Now
            </button>

            <Link to="/contact">
              <button className="cursor-pointer border-2 border-[#1E4ED8] text-[#1E4ED8] hover:bg-[#1E4ED8] hover:text-white px-7 py-3 rounded-lg font-semibold transition">
                Become a Volunteer
              </button>
            </Link>

            <button
              onClick={() => setShowVideo(true)}
              className="cursor-pointer flex items-center gap-2 text-[#0F2A44] font-medium hover:underline"
            >
              <Play size={18} /> Watch Our Story
            </button>
          </div>

          {/* IMPACT */}
          <div className="flex flex-wrap gap-10 mt-10">
            <div>
              <p className="text-2xl font-bold text-[#16A34A]">10,000+</p>
              <p className="text-sm text-[#374151]">People Supported</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#16A34A]">50+</p>
              <p className="text-sm text-[#374151]">Health Camps</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#16A34A]">25,000+</p>
              <p className="text-sm text-[#374151]">Meals Served</p>
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
            Creating Real Impact
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3 mt-5 justify-center">
            {SLIDES.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleImageChange(idx)}
                className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition ${
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
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
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

      {/* 🔥 Donation Popup */}
      <DonatePopup open={showDonate} onClose={() => setShowDonate(false)} />
    </section>
  );
}
