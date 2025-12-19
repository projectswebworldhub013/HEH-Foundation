import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import faqBg from "../assets/images/faq-bg.jpg"; 

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
  className="relative min-h-[85vh] flex items-center bg-cover bg-center"
  style={{ backgroundImage: `url(${service.image})` }}
>
  {/* OVERLAYS */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#00000075] via-[#0000007c] to-[#050000b4]" />
  <div className="absolute inset-0 bg-black/10" />

  {/* TOP ACCENT LINE */}
  <motion.div
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    className="absolute top-0 left-0 h-[3px]
               bg-gradient-to-r from-[#F47A1F] via-[#DC2626] to-[#1E4ED8]"
  />

  {/* CONTENT */}
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="relative z-10 w-full"
  >
    <div className="max-w-7xl mx-auto px-6 pt-24">

      {/* BADGES – DESKTOP ONLY */}
      <div className="hidden md:flex justify-start mb-6">
        <div className="inline-flex items-center gap-4 px-5 py-2 rounded-full
                        bg-white/10 backdrop-blur-md border border-white/20
                        shadow-lg">
          {["Mission Driven", "Impact Focused", "Future Ready"].map((b) => (
            <span
              key={b}
              className="flex items-center gap-2 text-sm text-white tracking-wide"
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

      {/* BADGES – MOBILE ONLY */}
      <div className="md:hidden mt-5 flex flex-wrap justify-center gap-2">
        {["Mission Driven", "Impact Focused", "Future Ready"].map((b) => (
          <div
            key={b}
            className="px-4 py-1.5 rounded-full text-xs
                       bg-white/10 backdrop-blur
                       border border-white/20
                       text-white tracking-wide"
          >
            {b}
          </div>
        ))}
      </div>

      {/* CTA BUTTONS */}
      <div
        className="mt-7 flex flex-wrap gap-4
                   justify-center md:justify-start"
      >
        {/* PRIMARY CTA */}
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

        {/* SECONDARY CTA */}
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
      <section className="py-12 px-6 bg-[#FFF4E6]">
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





        {/* faq */}
     <section className="relative py-20 px-4 sm:px-6 overflow-hidden bg-[#fff4e646]">

  {/* Parallax Background */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-fixed "
    style={{ backgroundImage: `url(${faqBg})` }}
  />
  <div className="absolute inset-0 bg-gradient-to-b from-[#fff4e636] to-[#0000003f]" />

  <div className="relative max-w-5xl mx-auto">

    {/* Header */}
    <div className="relative text-center mb-16">

  {/* Accent line */}
  <div className="mx-auto mb-5 h-[3px] w-20 rounded-full
                  bg-gradient-to-r from-[#F47A1F] via-[#ff5100] to-[#1E4ED8]" />

  {/* Eyebrow */}
  <p className="text-[11px] uppercase tracking-[0.45em]
                text-[#000000] font-semibold mb-4">
    Frequently Asked Questions
  </p>

  {/* Main Heading */}
  <h2
    className="text-3xl sm:text-4xl md:text-5xl font-semibold
               leading-[1.1] tracking-tight
               bg-gradient-to-br from-[#0B1F33] via-[#102A43] to-[#1F3A5F]
               bg-clip-text text-transparent"
  >
    Questions That Shape Clarity
    <br className="hidden sm:block" />
    <span className="font-light"> & Build Confidence</span>
  </h2>

  {/* Description */}
  {/* <p className="mt-6 text-sm sm:text-base md:text-lg
                text-[#374151] max-w-2xl mx-auto leading-relaxed">
    We believe informed decisions create meaningful outcomes. Explore
    thoughtfully curated answers that explain our approach, values, and
    processes—so you move forward with absolute clarity, trust, and
    confidence at every step.
  </p> */}

  {/* Subtle divider */}
  <div className="mt-2 mx-auto w-24 h-[1px] bg-gradient-to-r
                  from-transparent via-[#DC2626]/40 to-transparent" />

</div>


    {/* FAQ List */}
    <div className="space-y-4">
      {service.faqs.map((faq, index) => {
        const isOpen = activeFaq === index;

        return (
          <motion.div
            key={index}
            layout
            className={`relative rounded-xl bg-white
                        border border-[#E5E7EB]
                        transition-all duration-300
                        ${isOpen ? "shadow-lg" : "shadow-sm hover:shadow-md"}`}
          >
            {/* Gradient Accent */}
            <div
              className={`absolute left-0 top-0 h-full w-[3px]
                          rounded-l-xl bg-gradient-to-b
                          from-[#F47A1F] to-[#DC2626]
                          transition-opacity duration-300
                          ${isOpen ? "opacity-100" : "opacity-0"}`}
            />

            {/* Question */}
            <button
              onClick={() => setActiveFaq(isOpen ? null : index)}
              className="w-full flex items-start sm:items-center justify-between
                         gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left"
            >
              <div className="flex items-start gap-3">
                {/* Smaller Icon */}
                <div
                  className={`mt-[2px] w-7 h-7 rounded-md
                              flex items-center justify-center
                              bg-gradient-to-br from-[#F47A1F] to-[#DC2626]
                              text-white transition-transform duration-300
                              ${isOpen ? "rotate-180" : ""}`}
                >
                  <FaChevronDown className="text-[11px]" />
                </div>

                <span
                  className="font-semibold text-sm sm:text-base md:text-lg
                             text-[#0B1F33] leading-snug"
                >
                  {faq.question}
                </span>
              </div>

              {/* Status */}
              <span
                className={`hidden sm:block text-[11px] font-bold tracking-widest
                            transition-colors ${
                              isOpen
                                ? "text-[#DC2626]"
                                : "text-[#9CA3AF]"
                            }`}
              >
                {isOpen ? "ACTIVE" : "VIEW"}
              </span>
            </button>

            {/* Answer */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6
                                  text-sm sm:text-base
                                  text-[#374151] leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  </div>
    </section>





      {/* ================= CTA ================= */}
      <section className="relative py-8 sm:py-10 px-4 overflow-hidden bg-[#0B1F33] text-white">

  {/* Subtle animated glow */}
  <div className="absolute inset-0">
    <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#F47A1F]/10 rounded-full blur-3xl" />
    <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#1E4ED8]/20 rounded-full blur-3xl" />
  </div>

  {/* Content */}
  <div className="relative max-w-4xl mx-auto text-center">

    {/* Glass Badge */}
    <div
      className="inline-flex items-center gap-2 px-5 py-2
                 bg-white/10 backdrop-blur-md
                 border border-white/20
                 rounded-full mb-6"
    >
      <FaHandsHelping className="text-[#F47A1F] text-sm" />
      <span className="text-xs tracking-widest font-semibold uppercase">
        Join the Mission
      </span>
    </div>

    {/* Heading */}
    <h2
      className="text-2xl sm:text-3xl md:text-4xl
                 font-extrabold leading-tight
                 bg-gradient-to-r from-white to-gray-300
                 bg-clip-text text-transparent"
    >
      Your Action Creates Impact
    </h2>

    {/* Subtext */}
    <p className="mt-3 text-sm sm:text-base text-gray-300 max-w-xl mx-auto">
      Every contribution moves communities forward and turns purpose into
      measurable change.
    </p>

    {/* CTA Buttons */}
    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

      {/* Donate */}
      <Link
        to="/donate"
        className="group inline-flex items-center justify-center gap-2
                   px-7 py-3 rounded-full
                   bg-gradient-to-r from-[#F47A1F] to-[#DC2626]
                   text-sm sm:text-base font-semibold
                   shadow-md hover:shadow-xl
                   transition-all duration-300"
      >
        <FaDonate className="text-sm group-hover:scale-110 transition" />
        Donate Now
      </Link>

      {/* Contact */}
      <Link
        to="/contact"
        className="group inline-flex items-center justify-center gap-2
                   px-7 py-3 rounded-full
                   bg-white/10 backdrop-blur
                   border border-white/30
                   text-sm sm:text-base font-semibold
                   hover:bg-white/20
                   hover:border-white/50
                   transition-all duration-300"
      >
        <FaEnvelopeOpenText className="text-sm group-hover:scale-110 transition" />
        Contact Us
      </Link>

    </div>

    {/* Micro trust line */}
    <div className="mt-6 text-[11px] tracking-widest uppercase text-gray-400">
      Trusted • Transparent • Impact-Driven
    </div>
  </div>
</section>

    </div>
  );
}
