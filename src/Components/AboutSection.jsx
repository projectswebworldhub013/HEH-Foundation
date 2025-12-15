// src/components/AboutSection.jsx
import React from "react";
import {
  GraduationCap,
  Stethoscope,
  ShieldCheck,
  Users,
  HandHeart,
  HeartHandshake,
} from "lucide-react";
import { Link } from "react-router-dom";

// Background & Logo
import aboutBg from "../assets/images/gallery/g1.jpg";
import logo from "../assets/images/new-heh.png";

const AboutSection = () => {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-16 py-24 overflow-hidden">
      {/* PARALLAX BACKGROUND */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${aboutBg})`,
          backgroundAttachment: "fixed", // ✅ Parallax effect
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#FFF4E6]/85" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SECTION */}
          <div>
            <h2 className="text-sm tracking-widest uppercase font-semibold text-[#F47A1F] mb-3">
              About HEH Foundation
            </h2>

            <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-[#0B1F33] mb-6">
              Serving Humanity With <br />
              <span className="text-[#DC2626]">Compassion & Care</span>
            </h1>

            <p className="text-[#374151] text-lg leading-relaxed">
              <span className="font-semibold text-[#0F2A44]">
                HEH Foundation (Hunger, Education & Healthcare)
              </span>{" "}
              is a humanitarian organization dedicated to uplifting
              underprivileged and vulnerable individuals across society —
              children, families, elders, and communities in need.
            </p>

            <p className="text-[#374151] text-lg leading-relaxed mt-4">
              We work selflessly to address hunger, promote education, provide
              healthcare access, ensure dignity, and strengthen resilience.
              Through compassionate action and community-driven initiatives, we
              strive to create a society where no one is left behind.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/about"
                className="px-8 py-4 rounded-full bg-[#E8590C] hover:bg-[#DC2626] text-white font-semibold shadow-lg transition"
              >
                Know More
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 rounded-full bg-[#1E4ED8] hover:bg-[#0F2A44] text-white font-semibold shadow-lg transition"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex flex-col items-center text-center space-y-10">
            {/* Logo */}
            <div>
              <img
                src={logo}
                alt="HEH Foundation Logo"
                className="w-32 md:w-36 mx-auto drop-shadow-xl"
              />
            </div>

            {/* Impact Statement */}
            <p className="text-xl md:text-2xl font-medium text-[#0B1F33] leading-relaxed max-w-md">
              “Doing good for humanity by serving the hungry, educating minds,
              healing lives, and standing beside every needy soul.”
            </p>

            {/* Impact Stats */}
            <div className="grid grid-cols-3 gap-8 w-full max-w-md">
              <div className="text-center">
                <Users className="mx-auto w-7 h-7 text-[#1E4ED8] mb-2" />
                <h4 className="text-2xl font-bold text-[#16A34A]">10,000+</h4>
                <p className="text-sm text-[#374151]">People Helped</p>
              </div>
              <div className="text-center">
                <Stethoscope className="mx-auto w-7 h-7 text-[#DC2626] mb-2" />
                <h4 className="text-2xl font-bold text-[#16A34A]">250+</h4>
                <p className="text-sm text-[#374151]">Medical Camps</p>
              </div>
              <div className="text-center">
                <HeartHandshake className="mx-auto w-7 h-7 text-[#F47A1F] mb-2" />
                <h4 className="text-2xl font-bold text-[#16A34A]">50+</h4>
                <p className="text-sm text-[#374151]">Communities</p>
              </div>
            </div>

            {/* Focus Areas */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-[#F47A1F]" />
                <span className="text-base text-[#374151]">Education</span>
              </div>
              <div className="flex items-center gap-3">
                <Stethoscope className="w-6 h-6 text-[#DC2626]" />
                <span className="text-base text-[#374151]">
                  Health & Nutrition
                </span>
              </div>
              <div className="flex items-center gap-3">
                <HandHeart className="w-6 h-6 text-[#16A34A]" />
                <span className="text-base text-[#374151]">
                  Humanitarian Aid
                </span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-[#1E4ED8]" />
                <span className="text-base text-[#374151]">
                  Social Protection
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
