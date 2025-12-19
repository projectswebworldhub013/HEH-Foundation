import { motion } from "framer-motion";
import aboutImage from "../assets/images/story1.jpg";
import valuesImage from "../assets/images/story3.jpg";
import bgImage from "../assets/images/bg3.avif";
import { Link } from "react-router-dom";

export default function About2() {
  return (
    <section className="relative py-16 px-6 md:px-20 bg-[#F9FAF7]">
      
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt="HEH Foundation Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#F9FAF7]/60"></div>
      </div>

      <div className="relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          id="story"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0B1F33]">
            Hunger Education Health Care Foundation
          </h1>
          <p className="text-base sm:text-lg mt-4 max-w-3xl mx-auto text-[#374151]">
            A humanitarian non-profit dedicated to restoring dignity, nurturing
            opportunity, and creating sustainable change for vulnerable
            communities through compassion-driven action.
          </p>
        </motion.div>

        {/* Our Story */}
        <div  className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-20">
          
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0F2A44]" >
              Our Story
            </h2>
            <p className="text-[#374151] leading-relaxed text-lg">
              Founded on <span className="font-semibold text-[#F47A1F]">2 December 2025</span>,
              HEH Foundation was established with a clear purpose — to respond to
              hunger, lack of education, healthcare gaps, and social neglect
              affecting children, elderly individuals, and marginalized families.
              Our work is rooted at the grassroots, combining empathy with
              responsibility to create meaningful, long-term impact.
            </p>
          </motion.div>

          <motion.img
            src={aboutImage}
            alt="HEH Foundation Work"
            className="w-72 h-72 rounded-full object-cover shadow-xl mx-auto
                       border-4 border-[#F47A1F]/40 hover:scale-105 transition"
            initial={{ opacity: 0, rotate: 12 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 1 }}
          />
        </div>

        {/* Our Purpose & Approach */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-20">
          
          <motion.img
            src={valuesImage}
            alt="HEH Foundation Approach"
            className="w-72 h-72 rounded-full object-cover shadow-xl mx-auto
                       border-4 border-[#1E4ED8]/40 hover:scale-105 transition"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />

          <motion.div
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0F2A44]">
              Our Purpose & Approach
            </h2>
            <p className="text-[#374151] leading-relaxed text-lg">
              At HEH Foundation, we believe real change happens when immediate
              relief is paired with long-term empowerment. Our initiatives span
              hunger relief, education support, healthcare access, and care for
              orphaned children and elderly individuals — ensuring help today,
              and hope for tomorrow.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20 max-w-7xl mx-auto">
          {[
            {
              title: "Compassion",
              text: "Serving humanity with empathy, respect, and care.",
            },
            {
              title: "Integrity",
              text: "Operating with transparency, honesty, and accountability.",
            },
            {
              title: "Inclusivity",
              text: "Supporting all people without discrimination or bias.",
            },
            {
              title: "Sustainability",
              text: "Creating long-term solutions that empower communities.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-xl text-center shadow-lg
                         border border-[#E5E7EB]
                         hover:shadow-xl hover:scale-105 transition"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-[#F47A1F]">
                {item.title}
              </h3>
              <p className="text-[#374151]">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-2xl sm:text-3xl font-semibold mb-4 text-[#0B1F33]"
          >
            Together, We Can Build a More Compassionate Tomorrow
          </motion.h3>

          <p className="text-[#374151] text-lg max-w-2xl mx-auto mb-6">
            Your support helps us reach more lives with food, education,
            healthcare, and dignity. Join us in creating lasting impact.
          </p>

          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.07 }}
              className="px-6 py-3 rounded-lg font-semibold text-white
                         bg-gradient-to-r from-[#E8590C] to-[#DC2626]
                         shadow-lg hover:shadow-[#DC2626]/40 transition"
            >
              Get in Touch
            </motion.button>
          </Link>
        </div>

      </div>
    </section>
  );
}
