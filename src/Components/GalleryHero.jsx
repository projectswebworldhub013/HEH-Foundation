// src/components/GalleryHero.jsx
import React from "react";
import { Image, HeartHandshake, ChevronDown } from "lucide-react";
import img from "../assets/images/gallery/g7.jpg"; // Gallery hero image
import { Link } from "react-router-dom";

const GalleryHero = () => {
  return (
    <section
      className="mt-28 relative h-[90vh] w-full flex items-center justify-center text-[#F9FAF7]"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#000000]/45 backdrop-blur-[4px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-5 md:px-12 w-full max-w-5xl flex flex-col items-center text-center">
        {/* Tagline */}
        <p className="uppercase tracking-[0.25em] text-sm text-[#ffffff] mb-4">
          Our Journey
        </p>

        {/* Heading */}
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-snug text-[#F9FAF7]"
          style={{
            textShadow:
              "0 2px 12px rgba(0,0,0,0.45), 0 6px 24px rgba(0,0,0,0.35)",
          }}
        >
          Moments that{" "}
          <span className="text-white">
            Define Our Impact
          </span>
        </h1>

        {/* Divider */}
        <div className="w-28 h-[3px] bg-gradient-to-r from-[#F47A1F] to-[#DC2626] mt-5 mb-7 rounded-full"></div>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-[#E5E7EB] max-w-2xl mb-10 leading-relaxed">
          Every image tells a story of{" "}
          <span className="text-[#F47A1F] font-semibold">hope, resilience, and dignity</span>.
          From community outreach to moments of quiet transformation,  
          <br className="hidden sm:block" />
          these memories reflect the heart of{" "}
          <span className="text-[#FFF4E6] font-medium">
            HEH Foundation
          </span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-5 mb-6 justify-center">
          <a
            href="#gallery"
            className="flex items-center gap-2 px-7 py-3 font-semibold rounded-xl
                       bg-[#E8590C] text-white shadow-lg
                       transition-all duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <Image size={20} /> View Gallery
          </a>

          <Link
            to="/contact"
            className="flex items-center gap-2 px-7 py-3 font-semibold rounded-xl
                       bg-[#1E4ED8] text-white shadow-lg
                       transition-all duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <HeartHandshake size={20} /> Join the Journey
          </Link>
        </div>

        {/* Supporting Line */}
        <p className="text-sm text-[#E5E7EB]/80">
          Capturing real stories, real people, and real change.
        </p>

        {/* Impact Line */}
        <div className="hidden md:block mt-2 text-[#E5E7EB]/90 max-w-xl text-sm sm:text-base">
          These moments are not staged — they are lived experiences from the
          communities we serve, reflecting trust, compassion, and collective
          action.
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6">
        <ChevronDown
          size={32}
          className="text-[#F47A1F] animate-bounce"
        />
      </div>
    </section>
  );
};

export default GalleryHero;
