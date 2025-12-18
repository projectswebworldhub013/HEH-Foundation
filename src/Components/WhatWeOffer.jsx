// src/components/WhatWeOffer.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";

// NGO Images (replace with real HEH assets)
import education from "../assets/images/offer/o1.jpg";
import health from "../assets/images/offer/o2.jpg";
import economic from "../assets/images/offer/o3.jpg";
import child from "../assets/images/offer/o4.jpg";
import humanitarian from "../assets/images/offer/o5.jpg";
import resilience from "../assets/images/offer/o6.avif";

// COLOR SCHEME (HEH Foundation)
const COLORS = {
  brand: "#F47A1F",
  navy: "#0F2A44",
  red: "#DC2626",
  background: "#F9FAF7",
  sectionBg: "#FFF4E6",
  heading: "#0B1F33",
  body: "#374151",
  border: "#E5E7EB",
};

// WORK AREAS
const workAreas = [
  {
    title: "Education",
    path: "/what-we-do/education",
    image: education,
  },
  {
    title: "Health & Nutrition",
    path: "/what-we-do/health-nutrition",
    image: health,
  },
  {
    title: "Economic Well Being",
    path: "/what-we-do/economic-wellbeing",
    image: economic,
  },
  {
    title: "Child Protection",
    path: "/what-we-do/child-protection",
    image: child,
  },
  {
    title: "Humanitarian",
    path: "/what-we-do/humanitarian",
    image: humanitarian,
  },
  {
    title: "Resilience",
    path: "/what-we-do/resilience",
    image: resilience,
  },
];

export default function WhatWeOffer() {
  return (
    <section
      className="py-24 bg-[#fffbf6]"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-14 items-start">

        {/* LEFT CONTENT */}
        <div>
          <span
            className="inline-block text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: COLORS.brand }}
          >
            What We Offer
          </span>

          <h2
            className="text-4xl md:text-5xl font-semibold leading-tight"
            style={{ color: COLORS.heading }}
          >
            Creating Impact Through <br />
            <span style={{ color: COLORS.red }}>Purposeful Action</span>
          </h2>

          <p
            className="mt-6 text-base leading-relaxed"
            style={{ color: COLORS.body }}
          >
            HEH Foundation works at the grassroots to uplift vulnerable
            communities. Our initiatives focus on education, health,
            protection, and long-term resilience — ensuring dignity,
            opportunity, and hope for every individual we serve.
          </p>

          <Link
            to="/what-we-do"
            className="inline-block mt-8 px-8 py-3 rounded-full text-white text-sm font-semibold shadow-lg hover:scale-105 transition-all"
            style={{ backgroundColor: COLORS.brand }}
          >
            Explore Our Work →
          </Link>
        </div>

        {/* RIGHT SLIDER */}
        <div className="col-span-2">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            loop
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {workAreas.map((area, index) => (
              <SwiperSlide key={index}>
                <Link to={area.path}>
                  <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-xl group border"
                    style={{ borderColor: COLORS.border }}
                  >
                    {/* IMAGE */}
                    <img
                      src={area.image}
                      alt={area.title}
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                    />

                    {/* DARK OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                    {/* INDEX NUMBER */}
                    <div
                      className="absolute top-6 left-6 text-6xl font-bold opacity-30"
                      style={{ color: COLORS.background }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* TITLE */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3
                        className="text-2xl font-semibold tracking-wide"
                        style={{ color: COLORS.background }}
                      >
                        {area.title}
                      </h3>

                      <span
                        className="block mt-3 w-12 h-[3px] group-hover:w-20 transition-all"
                        style={{ backgroundColor: COLORS.brand }}
                      />
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
