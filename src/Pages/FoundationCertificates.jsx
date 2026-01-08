import React, { useRef, useState } from "react";
import {
  FaFilePdf,
  FaChevronLeft,
  FaChevronRight,
  FaCertificate,
  FaUniversity,
  FaRegFileAlt,
  FaBalanceScale,
  FaIdCard,
} from "react-icons/fa";

/* ===================== PDF IMPORTS ===================== */


/* ===================== IMAGE IMPORTS ===================== */
import tanImg from "../assets/images/pdf-one.jpg";
import udyamImg from "../assets/images/msme.jpg";
import annexureImg from "../assets/images/udyam.jpg";
import trustImg from "../assets/images/legal.jpg";
import panImg from "../assets/images/pan.jpg";

/* ===================== DATA ===================== */
const certificates = [
  {
    title: "TAN Allotment Letter",
    subtitle: "Tax Deduction Account Number",
    description:
      "Official TAN allotment issued by the Income Tax Department, authorizing HEH Foundation to deduct and remit tax in compliance with Indian tax regulations.",
    icon: <FaUniversity />,
    pdf: "/certificates/tan-allotment.pdf",
    image: tanImg,
  },
  {
    title: "Udyam Registration Certificate",
    subtitle: "MSME Recognition",
    description:
      "Government-issued Udyam Registration recognizing HEH Foundation as a registered entity, strengthening credibility and transparency in operations.",
    icon: <FaCertificate />,
    pdf: "/certificates/udyam-registration.pdf",
    image: udyamImg,
  },
  {
    title: "Udyam Registration Annexure",
    subtitle: "Detailed MSME Annexure",
    description:
      "Annexure document providing extended registration details under the Udyam framework, supporting institutional and regulatory verification.",
    icon: <FaRegFileAlt />,
    pdf: "/certificates/anexture-print-udyam-registration.pdf",
    image: annexureImg,
  },
  {
    title: "Trust Deed",
    subtitle: "Legal Formation Document",
    description:
      "Foundational legal document defining the objectives, governance structure, and charitable purpose of HEH Foundation.",
    icon: <FaBalanceScale />,
    pdf: "/certificates/trust-deed.pdf",
    image: trustImg,
  },
  {
    title: "PAN Certificate",
    subtitle: "Permanent Account Number",
    description:
      "Official PAN issued to HEH Foundation, enabling lawful financial transactions, donations, and statutory compliance.",
    icon: <FaIdCard />,
    pdf: "/certificates/pan.pdf",
    image: panImg,
  },
];

/* ===================== COMPONENT ===================== */
export default function FoundationCertificates() {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (dir) => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({
      left: dir === "left"
        ? -sliderRef.current.offsetWidth * 0.85
        : sliderRef.current.offsetWidth * 0.85,
      behavior: "smooth",
    });
  };

  const scrollToIndex = (index) => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollTo({
      left: index * (sliderRef.current.offsetWidth * 0.33),
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  return (
    <section className="bg-[#fffdfa] py-16 mt-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="mb-16 flex flex-col items-center text-center px-4">

  {/* Top Accent */}
  <div className="flex items-center gap-3 mb-4">
    <span className="h-[2px] w-10 bg-[#F47A1F]" />
    <span className="text-[#F47A1F] text-sm">
      <FaCertificate />
    </span>
    <span className="h-[2px] w-10 bg-[#F47A1F]" />
  </div>

  {/* Heading */}
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0B1F33] leading-tight max-w-3xl">
    HEH Foundation{" "}
    <span className="text-[#F47A1F]">
      Certificates & Legal Documents
    </span>
  </h2>

  {/* Description */}
  <p className="mt-5 text-sm sm:text-base text-[#374151] leading-relaxed max-w-2xl">
    Transparency and accountability are central to HEH Foundation.
    Below are our officially issued certifications and legal documents
    that reflect our governance, credibility, and regulatory compliance.
  </p>

  {/* Bottom Divider */}
  <div className="mt-8 flex items-center gap-2">
    <span className="h-[3px] w-6 rounded-full bg-[#E5E7EB]" />
    <span className="h-[3px] w-14 rounded-full bg-[#F47A1F]" />
    <span className="h-[3px] w-6 rounded-full bg-[#E5E7EB]" />
  </div>
</div>


        {/* ================= SLIDER ================= */}
        <div className="relative">

  {/* LEFT BUTTON */}
  <button
    onClick={() => scroll("left")}
    className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-30
               w-11 h-11 rounded-full bg-white/90 backdrop-blur
               border border-[#E5E7EB]
               text-[#F47A1F] items-center justify-center
               hover:bg-[#F47A1F] hover:text-white
               transition-all duration-300 shadow-md"
  >
    <FaChevronLeft />
  </button>

  {/* RIGHT BUTTON */}
  <button
    onClick={() => scroll("right")}
    className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-30
               w-11 h-11 rounded-full bg-white/90 backdrop-blur
               border border-[#E5E7EB]
               text-[#F47A1F] items-center justify-center
               hover:bg-[#F47A1F] hover:text-white
               transition-all duration-300 shadow-md"
  >
    <FaChevronRight />
  </button>

{/* ================= CARDS ================= */}
<div
  ref={sliderRef}
  onScroll={() => {
    if (!sliderRef.current) return;
    const cardWidth =
      sliderRef.current.scrollWidth / certificates.length;
    const index = Math.round(
      sliderRef.current.scrollLeft / cardWidth
    );
    setActiveIndex(index);
  }}
  className="flex gap-6 overflow-x-auto snap-x snap-mandatory
             scroll-smooth pb-8 px-1
             [-ms-overflow-style:none]
             [scrollbar-width:none]
             [&::-webkit-scrollbar]:hidden"
>
  {certificates.map((item, index) => (
    <div
      key={index}
      className="min-w-[100%] sm:min-w-[52%] lg:min-w-[30%] snap-center"
    >
      <div
        className="relative h-[360px] rounded-2xl overflow-hidden
                   group border border-white/10
                   shadow-lg hover:shadow-2xl
                   transition-all duration-500
                   hover:-translate-y-1"
      >
        {/* Background Image */}
        <img
          src={item.image}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover
                     transition-transform duration-700
                     group-hover:scale-110"
        />

        {/* FULL CARD GLASS + GRADIENT OVERLAY */}
        <div
          className="absolute inset-0
                     bg-gradient-to-br
                     from-black/35 via-black/65 to-black/90
                     "
        />

        {/* Soft Highlight Layer */}
        <div
          className="absolute inset-0
                     bg-gradient-to-t
                     from-black/90 via-transparent to-white/5"
        />

        {/* CONTENT */}
        <div className="absolute bottom-0 left-0 right-0 p-6">

          <h3 className="text-base font-semibold text-white leading-tight">
            {item.title}
          </h3>

          <p className="text-[11px] uppercase tracking-widest
                        text-[#ffffff] mt-1">
            {item.subtitle}
          </p>

          <p className="text-[12px] text-[#E5E7EB]
                        mt-3 leading-snug line-clamp-3">
            {item.description}
          </p>

          <a
            href={item.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4
                       px-4 py-2 rounded-full
                       bg-white/10 backdrop-blur-md
                       border border-white/20
                       text-white text-[11px] font-medium
                       hover:bg-white/20
                       transition-all"
          >
            <FaFilePdf className="text-xs text-red-400" />
            View Certificate
          </a>
        </div>
      </div>
    </div>
  ))}
</div>


  {/* ================= DOTS ================= */}
  <div className="flex justify-center gap-2 mt-6">
    {certificates.map((_, i) => (
      <button
        key={i}
        onClick={() => scrollToIndex(i)}
        className={`h-2 rounded-full transition-all duration-300 ease-out ${
          activeIndex === i
            ? "w-10 bg-[#16A34A]"
            : "w-2 bg-[#e67a00] hover:bg-[#fa7000]"
        }`}
      />
    ))}
  </div>
</div>

      </div>
    </section>
  );
}
