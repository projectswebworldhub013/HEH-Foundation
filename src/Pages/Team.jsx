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
import vaishnav from "../assets/images/team/vaishnav.jpg";
import arshad from "../assets/images/team/arshad.jpg";
import pooja from "../assets/images/team/pooja.jpg";
import murshil from "../assets/images/team/mursil.jpg";
import advaith from "../assets/images/team/advaith.jpg";
import sayana from "../assets/images/team/sayana.jpg";
import nanda from "../assets/images/team/nanda.jpg";
import salman from "../assets/images/team/salman.jpg";
import rudhin from "../assets/images/team/rudhin.jpeg";

/* TEAM DATA */
const team = [
  {
    name: "Ms. Pooja V",
    role: "Founding Member",
    quote:
      "At HEH Foundation, our focus is on creating equal opportunity and lasting change. Every initiative is designed to empower individuals with dignity, confidence, and a stronger future.",
    img: pooja,
  },
  {
    name: "Mr. Arshad R S",
    role: "Founding Member",
    quote:
      "HEH Foundation stands on the belief that dignity is a basic right. Our work is driven by compassion, responsibility, and a commitment to uplift communities through action.",
    img: arshad,
  },
  {
    name: "Mr. Salman",
    role: "Managing Director",
    quote:
      "Leadership is about responsibility and impact. At HEH Foundation, we ensure every decision is purposeful, transparent, and aligned with creating meaningful social outcomes.",
    img: salman,
  },
  {
  name: "Mr. Rudhin Raj",
  role: "Executive Director",
  quote:
    "As Executive Director of HEH Foundation, my commitment is to lead with integrity, empower communities, and transform vision into measurable social impact.",
  img: rudhin,
},
  {
    name: "Mr. Vaishnav Balaji Singh",
    role: "Team Manager",
    quote:
      "Strong coordination and clear execution are essential for impact. My role is to ensure our initiatives run efficiently while staying true to the foundation’s mission.",
    img: vaishnav,
  },
  {
    name: "Sayana Unnikrishnan",
    role: "Team Leader",
    quote:
      "Effective leadership begins with collaboration. I believe meaningful change happens when teams work with empathy, clarity, and a shared sense of purpose.",
    img: sayana,
  },
  {
    name: "Mursil Zaman",
    role: "Fundraising Executive",
    quote:
      "Fundraising is about building trust and shared vision. Connecting supporters to our mission helps transform generosity into sustainable social impact.",
    img: murshil,
  },
  {
    name: "Advaith P",
    role: "Fundraising Executive",
    quote:
      "Every contribution matters. My focus is to connect meaningful causes with committed supporters, ensuring transparency and long-term value.",
    img: advaith,
  },
  {
    name: "Nanda Kishor",
    role: "Fundraising Executive",
    quote:
      "Sustainable change grows through collective support. By clearly sharing our vision, we strengthen partnerships that help expand our impact.",
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
  return (
    <section className="mt-24 w-full bg-[#fffaf3d8] py-20">
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
                <div className="hidden md:block shrink-0 w-[170px]">
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
                    "{member.quote}"
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
