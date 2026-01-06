import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaBookOpen,
  FaHeartbeat,
  FaHandHoldingHeart,
  FaChild,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

// ✅ NGO Hero Images (education, health, humanitarian)
import hero1 from "../assets/images/hero/h3.jpg";
import hero2 from "../assets/images/hero/h2.jpg";
import hero3 from "../assets/images/hero/h1.jpg";
import hero4 from "../assets/images/gallery/g1.jpg";
import DonateQRModal from "./DonateQrModal";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [hero1, hero2, hero3, hero4];
  const [showQR, setShowQR] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const impactCards = [
    {
      icon: <FaBookOpen className="text-3xl text-[#F47A1F]" />,
      title: "Education for All",
      desc: "Supporting underprivileged children with quality education.",
    },
    {
      icon: <FaHeartbeat className="text-3xl text-[#DC2626]" />,
      title: "Health & Nutrition",
      desc: "Medical camps, nutrition drives & healthcare access.",
    },
    {
      icon: <FaHandHoldingHeart className="text-3xl text-[#16A34A]" />,
      title: "Humanitarian Aid",
      desc: "Helping communities during crisis & emergencies.",
    },
    {
      icon: <FaChild className="text-3xl text-[#1E4ED8]" />,
      title: "Child Protection",
      desc: "Ensuring safety, dignity & rights of every child.",
    },
  ];

  return (
    <section className="mt-28 md:mt-14 relative w-full h-screen overflow-hidden ">
      {/* Background Images */}

<div className="absolute inset-0">
  {images.map((img, index) => (
  <img
    key={index}
    src={img}
    alt="HEH Foundation Impact"
    className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-[2000ms] ${
      index === currentIndex ? "opacity-100" : "opacity-0"
    }`}
  />
))}


  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/30" />
</div>
    

      {/* Hero Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-[#F47A1F] tracking-widest uppercase font-semibold text-sm md:text-lg">
          HEH Foundation
        </h2>

        <h1 className="mt-4 text-2xl md:text-5xl semibold text-white leading-tight">
          <Typewriter
            words={[
              "Fighting Hunger.",
              "Empowering Education.",
              "Ensuring Healthcare.",
              "Protecting Childhood.",
            ]}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={45}
            delaySpeed={1200}
          />
        </h1>

        <p className="mt-6 max-w-3xl text-[#E5E7EB] text-sm md:text-lg leading-relaxed">
          <span className="text-[#F47A1F] font-semibold">Hunger Education & Healthcare Foundation</span>{" "}
          works to uplift children and underprivileged communities through
          education, health & nutrition programs, humanitarian aid, economic
          well-being, resilience building and child protection initiatives.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
  onClick={() => setShowQR(true)}
  className="cursor-pointer px-7 py-3 rounded-full bg-[#E8590C] hover:bg-[#DC2626] text-white font-semibold shadow-lg transition"
>
  Donate Now
</button>

          <Link
            to="/contact"
            className="px-7 py-3 rounded-full bg-[#1E4ED8] hover:bg-[#0F2A44] text-white font-semibold shadow-lg transition"
          >
            Become a Volunteer
          </Link>
        </div>

        {/* Impact Stats */}
        <div className="mt-22 flex flex-wrap justify-center gap-10 text-white">
          
        </div>
      </div>

      {/* Impact Cards */}
      <div className="absolute bottom-12 w-full hidden md:flex justify-center gap-6 px-6 z-20">
        {impactCards.map((card, i) => (
          <div
            key={i}
            className="bg-[#FFF4E6]/90 border border-[#E5E7EB] backdrop-blur-md p-6 rounded-2xl w-72 hover:scale-105 hover:shadow-2xl transition"
          >
            <div className="flex items-center gap-3 mb-3">
              {card.icon}
              <h3 className="text-[#0B1F33] font-bold uppercase text-sm">
                {card.title}
              </h3>
            </div>
            <p className="text-[#374151] text-sm">{card.desc}</p>
          </div>
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="absolute bottom-8 w-full px-6 md:hidden z-20">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
        >
          {impactCards.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="bg-[#FFF4E6]/90 border border-[#E5E7EB] p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-3">
                  {card.icon}
                  <h3 className="font-bold text-[#0B1F33] text-sm uppercase">
                    {card.title}
                  </h3>
                </div>
                <p className="text-[#374151] text-sm">{card.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <DonateQRModal
  isOpen={showQR}
  onClose={() => setShowQR(false)}
/>

    </section>
  );
}
