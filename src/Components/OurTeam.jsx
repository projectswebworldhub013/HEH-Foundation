import React from "react";
import { motion } from "framer-motion";
import {
  BsInstagram,
  BsFacebook,
  BsLinkedin,
  BsTwitterX,
} from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";

/* Team Images */
import team1 from "../assets/images/team/vaishnav.jpg";
import team2 from "../assets/images/team/arshad.jpg";
import team3 from "../assets/images/team/pooja.jpg";
import team4 from "../assets/images/team/rahul.jpg";

/* TEAM DATA */
const team = [
  {
    name: "Mr. Vaishnav Balaji Singh",
    role: "Team Manager",
    desc:
      "Vaishnav plays a key role in coordinating initiatives and ensuring smooth execution of HEH Foundation’s programs, aligning on-ground efforts with the organization’s mission.",
    img: team1,
  },
  {
    name: "Mr. Arshad R S",
    role: "Founding Member",
    desc:
      "As a founding member, Arshad brings vision, leadership, and deep commitment toward uplifting underserved communities through education, healthcare, and hunger relief.",
    img: team2,
  },
  {
    name: "Ms. Pooja V",
    role: "Founding Member",
    desc:
      "Pooja has been instrumental in shaping HEH Foundation’s values and outreach strategies, focusing on compassion-driven action and sustainable social impact.",
    img: team3,
  },
  {
    name: "Mr. Rahul Sharma",
    role: "Community Outreach Coordinator",
    desc:
      "Rahul works closely with volunteers and local communities to ensure HEH Foundation’s initiatives reach those who need them the most, with dignity and respect.",
    img: team4,
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
            A group of dedicated individuals working together to restore dignity
            through hunger relief, education, and healthcare.
          </p>
        </div>

        {/* TEAM GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-22 md:gap-10">
          {team.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative bg-white border border-[#E5E7EB] rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
            >

              {/* 🔵 MOBILE AVATAR (OVERLAP) */}
              <div className="md:hidden flex justify-center -mt-14">
                <div className="relative w-28 h-28 rounded-full border-4 border-white overflow-hidden bg-[#F9FAF7] shadow-md">
                  <FaHandsHelping className="absolute top-1 left-1 text-[#F47A1F]/20 text-2xl" />
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 p-6 pt-16 md:pt-6">

                {/* 🟠 DESKTOP IMAGE */}
                <div className="hidden md:block shrink-0 w-[120px]">
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#F9FAF7]">
                    <FaHandsHelping className="absolute top-2 left-2 text-[#F47A1F]/20 text-3xl" />
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
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
                    {member.desc}
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
        </div>
      </div>
    </section>
  );
}
