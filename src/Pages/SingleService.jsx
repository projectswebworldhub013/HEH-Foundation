import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaQuoteLeft,
  FaChevronDown,
  FaDonate,
  FaEnvelopeOpenText,
  FaHandsHelping,
} from "react-icons/fa";
import { FaHeart, FaEnvelope } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";  // ✅ correct
import "swiper/css";

import { whatWeOfferData } from "../data/whatWeOfferData";



export default function SingleService() {
  const { slug } = useParams();
  const service = whatWeOfferData.find(
    (item) => item.path.split("/").pop() === slug
  );

  const [activeFaq, setActiveFaq] = React.useState(null);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Service not found
      </div>
    );
  }

  return (
    <div className="bg-[#F9FAF7] text-[#374151] overflow-hidden">

      {/* ================= CINEMATIC HERO ================= */}
      <section
  className="relative min-h-[80vh] flex items-center bg-cover bg-center"
  style={{ backgroundImage: `url(${service.image})` }}
>
  {/* OVERLAYS */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#0F2A44]/95 via-[#0F2A44]/80 to-[#0B1F33]/85" />
  <div className="absolute inset-0 bg-black/10" />

  {/* TOP ACCENT LINE */}
  <motion.div
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-[#F47A1F] via-[#DC2626] to-[#1E4ED8]"
  />

  {/* CONTENT */}
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="relative z-10 w-full"
  >
    <div className="max-w-7xl mx-auto px-6 pt-24">

      {/* BADGES – COMPACT GLASS STRIP */}
      <div className="flex justify-center md:justify-start mb-6">
        <div className="inline-flex items-center gap-4 px-5 py-2 rounded-full
                        bg-white/10 backdrop-blur-md border border-white/20
                        shadow-lg">
          {["Mission Driven", "Impact Focused", "Future Ready"].map((b) => (
            <span
              key={b}
              className="flex items-center gap-2 text-xs md:text-sm text-white tracking-wide"
            >
              <span className="w-2 h-2 rounded-full bg-[#F47A1F]" />
              {b}
            </span>
          ))}
        </div>
      </div>

      {/* TITLE */}
      <h1 className="max-w-4xl text-center md:text-left
                     text-3xl md:text-5xl font-semibold
                     text-white leading-tight">
        {service.title}
      </h1>

      {/* DESCRIPTION */}
      <p className="mt-3 max-w-xl text-center md:text-left
                    text-base md:text-lg text-gray-200 leading-relaxed">
        {service.shortDescription}
      </p>

      {/* CTA BUTTONS */}
<div
  className="mt-8 flex flex-wrap gap-4
             justify-center md:justify-start"
>
  {/* PRIMARY CTA – DONATE */}
  <Link
    to="/donate"
    className="group inline-flex items-center gap-2
               px-6 py-2.5 rounded-full
               bg-[#E8590C]
               text-white text-sm md:text-base font-semibold
               shadow-md
               hover:bg-[#DC2626]
               hover:shadow-lg
               transition-all duration-300"
  >
    <FaHeart className="text-white/90 group-hover:scale-110 transition" />
    Donate Now
  </Link>

  {/* SECONDARY CTA – CONTACT */}
  <Link
    to="/contact"
    className="group inline-flex items-center gap-2
               px-6 py-2.5 rounded-full
               bg-white/10 backdrop-blur
               border border-white/30
               text-white text-sm md:text-base font-semibold
               hover:bg-white/20
               hover:border-white/50
               transition-all duration-300"
  >
    <FaEnvelope className="text-white/80 group-hover:scale-110 transition" />
    Contact Us
  </Link>
</div>


    </div>
  </motion.div>
</section>


      {/* ================= LONG DESCRIPTION ================= */}
      <section className="py-24 px-6 bg-[#FFF4E6]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[60px_1fr] gap-10">
          
          {/* vertical accent */}
          <div className="hidden md:flex justify-center">
            <div className="w-[3px] bg-gradient-to-b from-[#F47A1F] to-[#DC2626] rounded-full" />
          </div>

          <div>
            <div className="flex items-center gap-4 mb-12">
              <FaQuoteLeft className="text-5xl text-[#F47A1F]" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F33]">
                Building Change With Purpose
              </h2>
            </div>

            {service.longDescription.split("\n\n").map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="mb-8 text-lg leading-relaxed text-[#374151] max-w-4xl"
              >
                {para}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FUTURISTIC DIFFERENCE ================= */}
     <section className="py-12 bg-[#F9FAF7] relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    {/* Section Header */}
    <div className="text-center mb-20 relative">
      <p className="text-sm uppercase tracking-widest text-[#DC2626] font-semibold mb-3">
        Impact In Action
      </p>

      <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F33] mb-4">
        How We Make a Difference
      </h2>

      <p className="text-[#6B7280] max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
        Our commitment to meaningful action is reflected in every project we undertake. Each initiative demonstrates our dedication to innovation, sustainability, and creating real-world impact for communities, businesses, and the environment.
      </p>
    </div>

    {/* Swiper Cards */}
    <div className="relative">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        loop={true}
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        grabCursor={true}
        freeMode={true}
        breakpoints={{
          0: {
            slidesPerView: 1, // small screens
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2, // tablets
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3, // small laptops
            spaceBetween: 25,
          },
          1280: {
            slidesPerView: 4, // large screens
            spaceBetween: 30,
          },
        }}
      >
        {service.quickPoints.map((point, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative w-full"
            >
              <div
                className="h-full bg-white border border-[#E5E7EB]
                           rounded-2xl px-6 py-7
                           shadow-md hover:shadow-xl
                           transition-all duration-300
                           flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-bold tracking-wide text-[#F47A1F]">
                    0{index + 1}
                  </span>

                  <div className="w-10 h-10 rounded-lg
                                  bg-gradient-to-br from-[#F47A1F] to-[#DC2626]
                                  flex items-center justify-center
                                  shadow-sm">
                    <FaHandsHelping className="text-white text-lg" />
                  </div>
                </div>

                <h3 className="text-base font-semibold text-[#0B1F33] mb-3">
                  Meaningful Action
                </h3>

                <p className="text-sm text-[#6B7280] leading-relaxed">
                  {point}
                </p>

                <div className="absolute bottom-0 left-0 right-0 h-[3px]
                                bg-gradient-to-r from-[#F47A1F] to-[#DC2626]
                                scale-x-0 group-hover:scale-x-100
                                origin-left transition-transform duration-500" />
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
</section>






      {/* ================= FAQ ================= */}
      <section className="py-24 px-6 bg-[#FFF4E6]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-3xl md:text-5xl font-bold text-[#0B1F33] mb-16">
            Questions People Ask
          </h2>

          {service.faqs.map((faq, index) => (
            <div key={index} className="mb-6">
              <button
                onClick={() =>
                  setActiveFaq(activeFaq === index ? null : index)
                }
                className="w-full flex justify-between items-center px-8 py-6 rounded-2xl bg-white border border-[#E5E7EB] text-left shadow-md hover:shadow-lg transition"
              >
                <span className="font-semibold text-lg">
                  {faq.question}
                </span>
                <FaChevronDown
                  className={`transition ${
                    activeFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden px-8"
                  >
                    <p className="py-5 text-[#374151]">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 bg-gradient-to-r from-[#0F2A44] to-[#0B1F33] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 rounded-full mb-8 backdrop-blur">
            <FaHandsHelping className="text-[#F47A1F]" />
            <span className="font-semibold tracking-wide">
              Join the Mission
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-10">
            Your Action Creates Impact
          </h2>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/donate"
              className="px-10 py-4 bg-[#E8590C] hover:bg-[#DC2626] rounded-full text-lg font-semibold transition shadow-lg"
            >
              <FaDonate className="inline mr-2" />
              Donate Now
            </Link>

            <Link
              to="/contact"
              className="px-10 py-4 bg-[#1E4ED8] hover:bg-blue-700 rounded-full text-lg font-semibold transition shadow-lg"
            >
              <FaEnvelopeOpenText className="inline mr-2" />
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
