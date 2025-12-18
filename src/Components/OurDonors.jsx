// src/components/OurDonors.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import {
  FaUserCircle,
  FaHeart,
  FaHandsHelping,
} from "react-icons/fa";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

// Background image
// import bgImage from "../assets/images/hands2.jpg";

const donors = [
  {
    id: 1,
    message:
      "Supporting HEH Foundation has been deeply fulfilling. My contribution helps deliver food, education, and healthcare to vulnerable communities, creating dignity, stability, and long-term hope for those in need.",
    name: "Ananya Sharma",
    role: "Individual Donor • Delhi",
  },
  {
    id: 2,
    message:
      "HEH Foundation operates transparently at the grassroots level. Their focused efforts create sustainable impact through education, nutrition, and healthcare initiatives that genuinely uplift underserved populations.",
    name: "Rajeev Malhotra",
    role: "Philanthropist • Gurgaon",
  },
  {
    id: 3,
    message:
      "From hunger relief programs to medical outreach camps, HEH consistently serves humanity with compassion, professionalism, and commitment toward improving lives across diverse and vulnerable communities.",
    name: "Sarah Khan",
    role: "Healthcare Supporter • Lucknow",
  },
  {
    id: 4,
    message:
      "Being associated with HEH Foundation is an honour. Their structured approach, ethical governance, and inclusive initiatives reflect a genuine commitment to dignity, care, and social responsibility.",
    name: "Amit Verma",
    role: "Corporate Donor • Noida",
  },
  {
    id: 5,
    message:
      "I have personally observed the impact of HEH Foundation’s work. Every donation is transformed into meaningful action that restores hope, happiness, strength, opportunity, and confidence within disadvantaged communities.",
    name: "Ritika Singh",
    role: "Education Supporter • Jaipur",
  },
  {
    id: 6,
    message:
      "HEH Foundation represents compassion in action. Their programs ensure that no individual is overlooked, providing essential support regardless of background, age, or any kind of social circumstance.",
    name: "Arjun Mehta",
    role: "Community Contributor • Ahmedabad",
  },
];


export default function OurDonors() {
  return (
    <section
      className="relative w-full py-24 px-6 md:px-12 lg:px-20 bg-cover bg-center"
    //   style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#fffbf6]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-[#F47A1F]/10 text-[#F47A1F] px-5 py-2 rounded-full text-sm font-semibold">
            <FaHeart /> Our Supporters
          </span>

          <h2 className="text-3xl md:text-5xl font-semibold text-[#0B1F33] mt-5">
            Our <span className="text-[#DC2626]">Donors</span> & Well-Wishers
          </h2>

          <p className="mt-4 text-[#374151] max-w-2xl mx-auto text-lg">
            Every act of generosity strengthens our mission. Meet the people who
            stand beside HEH Foundation in serving humanity with compassion,
            dignity, and hope.
          </p>
        </div>

        {/* Swiper */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: ".donor-prev",
              nextEl: ".donor-next",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            spaceBetween={40}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            speed={1200}
            loop={true}
            className="pb-12"
          >
            {donors.map((donor) => (
              <SwiperSlide key={donor.id}>
                <div className="bg-white rounded-3xl border border-[#E5E7EB] shadow-lg p-10 h-full flex flex-col justify-between hover:shadow-xl transition">
                  {/* Top */}
                  <div className="flex items-center justify-between mb-6">
                    <FaUserCircle className="text-5xl text-[#0F2A44]" />
                    <FaHandsHelping className="text-3xl text-[#F47A1F]" />
                  </div>

                  {/* Message */}
                  <p className="text-[#374151] text-lg leading-relaxed mb-8">
                    “{donor.message}”
                  </p>

                  {/* Footer */}
                  <div className="border-t pt-5 border-[#E5E7EB]">
                    <h4 className="text-lg font-bold text-[#0B1F33]">
                      {donor.name}
                    </h4>
                    <p className="text-sm text-[#1E4ED8] font-medium">
                      {donor.role}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation */}
          <div className="absolute -top-14 right-0 hidden md:flex gap-4">
            <button className="donor-prev w-12 h-12 flex items-center justify-center rounded-full bg-[#0F2A44] text-white hover:bg-[#F47A1F] transition">
              <MdOutlineArrowBackIos />
            </button>
            <button className="donor-next w-12 h-12 flex items-center justify-center rounded-full bg-[#0F2A44] text-white hover:bg-[#F47A1F] transition">
              <MdOutlineArrowForwardIos />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
