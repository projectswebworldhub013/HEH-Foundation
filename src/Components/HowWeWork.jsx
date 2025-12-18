// src/components/HowWeWork.jsx
import React from "react";
import { motion } from "framer-motion";

const colors = {
  primary: "#0F2A44", // Deep Trust Navy
  secondary: "#F47A1F", // Hope Orange
  background: "#F9FAF7", // Soft Cloud White
  sectionBg: "#FFF4E6", // Warm Cream
  heading: "#0B1F33", // Midnight Navy
  body: "#374151", // Charcoal Gray
  accent: "#DC2626", // Compassion Red
};

export default function HowWeWork() {
  const steps = [
    {
      title: "IDENTIFY COMMUNITY NEEDS",
      desc: "We work closely with local communities to understand real challenges related to hunger, education, healthcare, and social welfare through direct interaction and grassroots assessment.",
    },
    {
      title: "PLAN SUSTAINABLE ACTION",
      desc: "Our team designs transparent, ethical, and people-centered programs that combine immediate relief with long-term empowerment and sustainable development solutions.",
    },
    {
      title: "IMPLEMENT WITH COMPASSION",
      desc: "Through education support, food distribution, healthcare assistance, and care for orphaned and elderly individuals, we deliver support with dignity, respect, and accountability.",
    },
    {
      title: "MEASURE IMPACT & EMPOWER",
      desc: "We continuously monitor outcomes, ensure responsible use of resources, and empower individuals and families to become healthier, educated, and self-reliant.",
    },
  ];

  return (
    <section
      className="relative py-20 px-6 md:px-14 lg:px-20 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${colors.background}, ${colors.sectionBg})`,
      }}
    >
      {/* Soft Background Orbs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#F47A1F]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-[#0F2A44]/10 rounded-full blur-3xl"></div>

      {/* Subtle Grid Texture */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0B1F33 1px, transparent 1px), linear-gradient(to bottom, #0B1F33 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      ></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-20"
      >
        <h4
          className="uppercase tracking-widest text-lg font-medium"
          style={{ color: colors.primary }}
        >
          HEH Foundation
        </h4>

        <h2
          className="text-4xl md:text-5xl font-light mt-4"
          style={{
            color: colors.secondary,
            fontFamily: "'Italiana', serif",
          }}
        >
          How We Work
        </h2>

        <p
          className="mt-6 max-w-3xl mx-auto text-lg"
          style={{ color: colors.body }}
        >
          Our approach combines compassion with action—addressing urgent needs
          while building long-term solutions that empower individuals,
          families, and communities to live with dignity and hope.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative z-10">
        {/* Connecting Line */}
        <div
          className="hidden lg:block absolute top-[80px] left-0 right-0 mx-auto w-full h-[3px]"
          style={{
            background:
              "linear-gradient(to right, #0F2A44, #F47A1F, #0F2A44)",
            boxShadow: "0 0 25px rgba(15,42,68,0.4)",
          }}
        ></div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group p-8 rounded-3xl bg-white border border-[#E5E7EB]
              shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Large Step Number */}
              <div
                className="absolute -top-16 left-1/2 -translate-x-1/2 text-7xl font-extrabold opacity-10"
                style={{
                  color: colors.primary,
                  fontFamily: "'Italiana', serif",
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Indicator Dot */}
              <div
                className="w-6 h-6 rounded-full mx-auto mb-6"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                  boxShadow: "0 0 12px rgba(244,122,31,0.6)",
                }}
              ></div>

              {/* Title */}
              <h3
                className="text-xl font-semibold mb-4 text-center"
                style={{ color: colors.heading }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed text-center"
                style={{ color: colors.body }}
              >
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
