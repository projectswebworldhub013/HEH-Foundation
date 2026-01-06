// src/components/ContactHero.jsx
import React from "react";
import { Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import img from "../assets/images/contact-hero.jpg"; // NGO hero image

const ContactHero = () => {
  return (
    <section
      className="mt-24 relative h-[90vh] w-full flex items-center justify-center text-[#F9FAF7]"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#000000]/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-5 md:px-12 w-full max-w-5xl flex flex-col items-center text-center">
        {/* Tagline */}
        <p className="uppercase tracking-[0.25em] text-sm text-[#F47A1F] mb-4">
          Get in Touch
        </p>

        {/* Heading */}
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-snug text-[#F9FAF7]"
          style={{
            textShadow:
              "0 2px 12px rgba(0,0,0,0.45), 0 6px 24px rgba(0,0,0,0.35)",
          }}
        >
          Let’s{" "}
          <span className="bg-gradient-to-r from-[#F47A1F] to-[#DC2626] bg-clip-text text-transparent">
            Connect
          </span>{" "}
          for Change
        </h1>

        {/* Divider */}
        <div className="w-28 h-[3px] bg-gradient-to-r from-[#F47A1F] to-[#DC2626] mt-5 mb-7 rounded-full"></div>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-[#E5E7EB] max-w-2xl mb-10 leading-relaxed">
          Whether you wish to <span className="text-[#F47A1F] font-semibold">support a cause</span>,
          volunteer your time, or collaborate with us —  
          <br className="hidden sm:block" />
          <span className="text-[#FFF4E6] font-medium">
            HEH Foundation
          </span>{" "}
          is here to listen and act with compassion.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-5 mb-6 justify-center">
          <a
            href="tel:+917012502008"
            className="flex items-center gap-2 px-7 py-3 font-semibold rounded-xl
                       bg-[#E8590C] text-white shadow-lg
                       transition-all duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <Phone size={20} /> Call Us
          </a>

          <a
            href="mailto:info@hehfoundation.org"
            className="flex items-center gap-2 px-7 py-3 font-semibold rounded-xl
                       bg-[#1E4ED8] text-white shadow-lg
                       transition-all duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <Mail size={20} /> Email Us
          </a>
        </div>

        {/* Supporting Line */}
        <p className="text-sm text-[#E5E7EB]/80">
          Together, we can restore dignity and build lasting hope.
        </p>

        {/* Address */}
        <div className="mt-6 flex items-center gap-2 text-[#E5E7EB]/90">
          <MapPin size={18} className="text-[#F47A1F]" />
          <span>
            No. 9, Sai Nagar, Thippenahalli, Bengaluru – 560073, Karnataka
          </span>
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

export default ContactHero;
