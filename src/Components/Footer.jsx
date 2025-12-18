import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaHome,
  FaInfoCircle,
  FaImages,
  FaPhoneAlt,
  FaGraduationCap,
  FaHeartbeat,
  FaHandHoldingUsd,
  FaChild,
  FaHandsHelping,
  FaLeaf,
  FaPinterestP,
  FaLinkedinIn,
  FaTelegramPlane,
  FaPeopleCarry,
  FaUserShield,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import bgImg from "../assets/images/bg.avif";
import VisitorCounter from "./VisitorCounter";
import Translator from "./Translator";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const quickLinks = [
  { name: "Home", path: "/", icon: <FaHome /> },
  { name: "About", path: "/about", icon: <FaInfoCircle /> },
  { name: "Who We Are", path: "/who-we-are", icon: <FaInfoCircle /> },
  { name: "Gallery", path: "/gallery", icon: <FaImages /> },
  { name: "Contact Us", path: "/contact", icon: <FaPhoneAlt /> },
  { name: "Certificates", path: "/certificates", icon: <FaInfoCircle /> },
  { name: "Terms & Conditions", path: "/terms-conditions", icon: <FaInfoCircle /> },
  { name: "Privacy Policy", path: "/privacy-policy", icon: <FaInfoCircle /> },
];

const workAreas = [
  { name: "Education", path: "/what-we-do/education", icon: <FaGraduationCap /> },
  { name: "Health & Nutrition", path: "/what-we-do/health-nutrition", icon: <FaHeartbeat /> },
  { name: "Economic Well Being", path: "/what-we-do/economic-wellbeing", icon: <FaHandHoldingUsd /> },
  { name: "Child Protection", path: "/what-we-do/child-protection", icon: <FaChild /> },
  { name: "Humanitarian", path: "/what-we-do/humanitarian", icon: <FaHandsHelping /> },
  { name: "Resilience", path: "/what-we-do/resilience", icon: <FaLeaf /> },
  { name: "Dignity & Elder Care", path: "/what-we-do/elder-care", icon: <FaUserShield />},
  { name: "Poverty Alleviation", path: "/what-we-do/poverty-alleviation",icon: <FaPeopleCarry />,}
];

export default function Footer() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView, controls]);

  return (
    <motion.footer
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="relative bg-cover bg-center bg-no-repeat text-[#374151] pt-20 pb-10 px-6 md:px-16 overflow-hidden"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-sm">
        {/* About */}
        <div className="space-y-4">
          <h4 className="text-3xl font-semibold text-[#0F2A44]">
            HEH Foundation
          </h4>
          <p className="leading-relaxed">
            HEH Foundation (Hunger, Education & Healthcare) is a humanitarian
            organization committed to uplifting underserved communities across
            India. Through focused initiatives in education, nutrition,
            healthcare, and resilience, we work to restore dignity, create
            opportunity, and build a compassionate future for all.
          </p>

          {/* Webmail */}
          <a
            href="https://md-in-82.webhostbox.net:2096/cpsess3927650103/3rdparty/roundcube/?_task=mail&_mbox=INBOX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 px-4 py-2 border border-[#461e00] text-[#4e2200] rounded hover:bg-[#F47A1F] hover:text-white transition"
          >
            Webmail Login
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-2xl font-semibold mb-4 text-[#0F2A44]">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {quickLinks.map((link, i) => (
              <li key={i}>
                <Link
                  to={link.path}
                  className="flex items-center gap-2 hover:text-[#F47A1F] transition"
                >
                  {link.icon} {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Working Areas */}
        <div>
          <h4 className="text-2xl font-semibold mb-4 text-[#0F2A44]">
            Working Areas
          </h4>
          <ul className="space-y-2">
            {workAreas.map((area, i) => (
              <li key={i}>
                <Link
                  to={area.path}
                  className="flex items-center gap-2 hover:text-[#DC2626] transition"
                >
                  {area.icon} {area.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Other Information */}
        <div>
          <h4 className="text-2xl font-semibold mb-4 text-[#0F2A44]">
            Other Information
          </h4>

          <address className="not-italic leading-relaxed mb-4">
            Office Address: <br />
            #9, Sai Nagar, Thippenahalli, <br />
            Doddabidarakkallu, Bengaluru, <br />
            Karnataka, India – 560073
          </address>

          <div className="mb-4 flex">
            <Translator />
            <div className="w-42"></div>
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap gap-4 text-xl mt-6">
            <a href="https://in.pinterest.com/hehfoundation/" target="_blank" rel="noreferrer" className="text-[#E60023] hover:scale-110 transition">
              <FaPinterestP />
            </a>
            <a href="https://www.instagram.com/heh_foundation_official" target="_blank" rel="noreferrer" className="text-[#E1306C] hover:scale-110 transition">
              <FaInstagram />
            </a>
            <a href="https://x.com/hehfoundation" target="_blank" rel="noreferrer" className="text-black hover:scale-110 transition">
              <FaXTwitter />
            </a>
            <a href="https://www.youtube.com/@hehfoundation" target="_blank" rel="noreferrer" className="text-[#FF0000] hover:scale-110 transition">
              <FaYoutube />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61584475671866" target="_blank" rel="noreferrer" className="text-[#1877F2] hover:scale-110 transition">
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com/company/hunger-education-healthcare-foundation/" target="_blank" rel="noreferrer" className="text-[#0A66C2] hover:scale-110 transition">
              <FaLinkedinIn />
            </a>
            <a href="https://t.me/hehfoundation" target="_blank" rel="noreferrer" className="text-[#229ED9] hover:scale-110 transition">
              <FaTelegramPlane />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 text-center text-xs text-[#374151] border-t border-[#00000057] pt-6 space-y-2">
        <VisitorCounter />
        <p>© {new Date().getFullYear()} HEH Foundation. All rights reserved.</p>
        <p>
          Designed & Developed by{" "}
          <a
            href="https://webworldhub.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#1E4ED8] hover:underline"
          >
            Web World Hub
          </a>
        </p>
      </div>
    </motion.footer>
  );
}
