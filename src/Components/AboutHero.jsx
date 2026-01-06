// src/components/AboutHero.jsx
import React from "react";
import img from "../assets/images/about-hero2.avif"; // replace with HEH related image
import { Link } from "react-router-dom";
import { FaArrowRight, FaRegImages } from "react-icons/fa";

const AboutHero = () => {
  return (
    <section
      className="mt-16 md:mt-8 relative h-screen w-full flex items-center text-[#F9FAF7]"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00040898] via-[#0000006c] to-[#00000041]" />

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          
          {/* Left: Main Heading */}
          <div className="text-center md:text-left flex flex-col justify-center">
  <p className="uppercase tracking-widest text-xs text-[#F47A1F] mb-4">
    About HEH Foundation
  </p>

  <h1
  className="text-4xl sm:text-5xl lg:text-5xl leading-tight font-md
             text-[#F9FAF7]"
//   style={{
//     textShadow: `
//       0 1px 2px rgba(0,0,0,0.65),
//       0 4px 14px rgba(0,0,0,0.45)
//     `,
//   }}
>
  Restoring human dignity with compassion and purpose,{" "}
  <span
    className="bg-gradient-to-r from-[#ff6600] to-[#ffffff] bg-clip-text text-transparent"
    // style={{
    //   WebkitTextStroke: "0.6px rgba(0,0,0,0.45)",
    //   textShadow: "0 2px 10px rgba(0,0,0,0.45)",
    // }}
  >
    creating lasting hope through meaningful action
  </span>
</h1>




  {/* CTA Buttons */}
  <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-5 items-center md:items-start">
    {/* Learn More */}
    <a
      href="#story"
      className="group inline-flex items-center gap-2 px-6 py-3 rounded-full
                 bg-[#E8590C] text-white text-sm font-medium                           
                 transition-all duration-300"
    >
      Learn More
      <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
    </a>

    {/* Our Memories */}
    <Link
      to="/gallery"
      className="group inline-flex items-center gap-2 px-6 py-3 rounded-full
                 border border-[#E5E7EB] text-[#F9FAF7] text-sm font-medium
                 backdrop-blur-sm bg-white/5
                 hover:bg-white/10 hover:border-white
                 transition-all duration-300"
    >
      Our Work
      <FaRegImages className="text-sm opacity-90" />
    </Link>
  </div>
</div>


          {/* Right: Supporting Text */}
          <div className="hidden md:flex text-[#E5E7EB] text-sm justify-end">
            <p className="max-w-sm md:text-center mt-10 leading-relaxed">
              HEH Foundation is a humanitarian non-profit working at the
              grassroots to address hunger, education, healthcare, and social
              care — driven by compassion, responsibility, and sustainable
              action.
            </p>
          </div>
        </div>

        {/* Bottom Index Strip */}
        <div className=" relative -bottom-24 md:-bottom-16 hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 text-xs sm:text-sm text-[#E5E7EB] uppercase tracking-wide">
          
          <div className="hover:text-white cursor-pointer transition border-b border-[#E5E7EB]/30 pb-2">
            <span className="text-[#F47A1F] mr-2">01.</span>
            Hunger, Education & Healthcare
          </div>

          <div className="hover:text-white cursor-pointer transition border-b border-[#E5E7EB]/30 pb-2">
            <span className="text-[#F47A1F] mr-2">02.</span>
            Children, Elderly & Community Care
          </div>

          <div className="hover:text-white cursor-pointer transition border-b border-[#E5E7EB]/30 pb-2">
            <span className="text-[#F47A1F] mr-2">03.</span>
            Compassion Backed by Action
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;
