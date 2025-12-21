import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BsInstagram,
  BsFacebook,
  BsLinkedin,
  BsTwitterX,
} from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";

/* Team Images */
import vaishnav from "../assets/images/team/vaishnav.jpg";
import arshad from "../assets/images/team/arshad.jpg";
import pooja from "../assets/images/team/pooja.jpg";
import murshil from "../assets/images/team/mursil.jpg";
import advaith from "../assets/images/team/advaith.jpg";
import sayana from "../assets/images/team/sayana.jpg";
import nanda from "../assets/images/team/nanda.jpg";
import salman from "../assets/images/team/salman.jpg";

/* TEAM DATA */
const team = [
  {
    name: "Ms. Pooja V",
    role: "Founding Member",
    quote:
      "At HEH Foundation, our focus is on creating equal opportunity and lasting change through dignity-driven initiatives.",
    img: pooja,
  },
  {
    name: "Mr. Arshad R S",
    role: "Founding Member",
    quote:
      "Our work is rooted in compassion and responsibility, ensuring dignity and access for every community we serve.",
    img: arshad,
  },
  {
    name: "Mr. Salman",
    role: "Managing Director",
    quote:
      "Every decision we take is guided by purpose, transparency, and measurable social impact.",
    img: salman,
  },
  {
    name: "Mr. Vaishnav Balaji Singh",
    role: "Team Manager",
    quote:
      "Clear coordination and disciplined execution help translate vision into meaningful action.",
    img: vaishnav,
  },
  {
    name: "Sayana Unnikrishnan",
    role: "Team Leader",
    quote:
      "Collaboration and empathy are key to building strong teams and lasting community impact.",
    img: sayana,
  },
  {
    name: "Mursil Zaman",
    role: "Fundraising Executive",
    quote:
      "Building trust with supporters helps turn generosity into sustainable impact.",
    img: murshil,
  },
  {
    name: "Advaith P",
    role: "Fundraising Executive",
    quote:
      "Connecting purpose-driven people with meaningful causes is at the heart of my work.",
    img: advaith,
  },
  {
    name: "Nanda Kishor",
    role: "Fundraising Executive",
    quote:
      "Strong partnerships allow us to scale impact and support long-term change.",
    img: nanda,
  },
];

/* SOCIAL ICONS */
const socials = [
  { icon: BsInstagram, link: "https://www.instagram.com" },
  { icon: BsFacebook, link: "https://www.facebook.com" },
  { icon: BsLinkedin, link: "https://www.linkedin.com" },
  { icon: BsTwitterX, link: "https://x.com" },
];

export default function OurTeam() {
  const [showAll, setShowAll] = useState(false);

  const visibleTeam = showAll ? team : team.slice(0, 4);

  return (
    <section className="w-full bg-[#fffaf3d8] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="uppercase tracking-widest text-sm font-semibold text-[#F47A1F] mb-3">
            Our People
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0B1F33]">
            Meet the Team Behind HEH Foundation
          </h2>
          <p className="mt-4 text-base text-[#374151] leading-relaxed">
            Dedicated individuals working together to restore dignity and create lasting impact.
          </p>
        </div>

        {/* TEAM GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-22 md:gap-10">
          <AnimatePresence>
            {visibleTeam.map((member, index) => (
              <motion.article
                key={member.name}
                initial={{ opacity: 0, scale: 0.92, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                  delay: index * 0.06,
                }}
                className="relative bg-white border border-[#E5E7EB] rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
              >

                {/* MOBILE AVATAR */}
                <div className="md:hidden flex justify-center -mt-14">
                  <div className="relative w-28 h-28 rounded-full border-4 border-white overflow-hidden bg-[#F9FAF7] shadow-md">
                    <FaHandsHelping className="absolute top-1 left-1 text-[#F47A1F]/20 text-2xl" />
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 p-6 pt-16 md:pt-6">

                  {/* DESKTOP IMAGE */}
                  <div className="hidden md:block shrink-0 w-[170px]">
                    <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#F9FAF7]">
                      <FaHandsHelping className="absolute top-2 left-2 text-[#F47A1F]/20 text-3xl" />
                      <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="flex-1 text-center md:text-left -mt-12 md:mt-1">
                    <h3 className="text-lg font-semibold text-[#0B1F33]">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-[#DC2626] mb-3">
                      {member.role}
                    </p>
                    <p className="text-sm text-[#374151] leading-relaxed mb-5">
                      “{member.quote}”
                    </p>

                    {/* SOCIAL ICONS */}
                    <div className="flex justify-center md:justify-start gap-3">
                      {socials.map(({ icon: Icon, link }, i) => (
                        <a
                          key={i}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 flex items-center justify-center rounded-full bg-[#F9FAF7] border border-[#E5E7EB] text-[#0F2A44] hover:bg-[#F47A1F] hover:text-white transition"
                        >
                          <Icon size={15} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* VIEW MORE BUTTON */}
        {team.length > 4 && (
          <div className="flex justify-center mt-14">
            <button
              onClick={() => setShowAll(!showAll)}
              className="cursor-pointer px-8 py-3 rounded-full bg-[#F47A1F] text-white font-medium tracking-wide hover:bg-[#dc6512] transition"
            >
              {showAll ? "Show Less" : "View More Team"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
