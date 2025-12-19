import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaHandsHelping,
  FaPhoneAlt,
  FaImages,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
  FaGraduationCap,
  FaHeartbeat,
  FaHandHoldingUsd,
  FaChild,
  FaLeaf,
  FaTelegramPlane,
  FaPinterestP,
  FaUserShield,
  FaPeopleCarry,
  FaBookOpen,
  FaBullseye,
  FaCogs,
  FaUsers,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/images/logo-heh.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(true);
  const [workOpen, setWorkOpen] = useState(false);
  const [whoOpen, setWhoOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaInfoCircle /> },
    { name: "What We Do", path: "#", icon: <FaHandsHelping /> },
    { name: "Who We Are", path: "#", icon: <FaUsers /> },
    { name: "Gallery", path: "/gallery", icon: <FaImages /> },
    { name: "Contact Us", path: "/contact", icon: <FaPhoneAlt /> },
  ];

  const workAreas = [
    { name: "Education", path: "/what-we-do/education", icon: <FaGraduationCap /> },
    { name: "Health & Nutrition", path: "/what-we-do/health-nutrition", icon: <FaHeartbeat /> },
    { name: "Economic Well Being", path: "/what-we-do/economic-wellbeing", icon: <FaHandHoldingUsd /> },
    { name: "Child Protection", path: "/what-we-do/child-protection", icon: <FaChild /> },
    { name: "Humanitarian", path: "/what-we-do/humanitarian", icon: <FaHandsHelping /> },
    { name: "Resilience", path: "/what-we-do/resilience", icon: <FaLeaf /> },
    { name: "Dignity & Elder Care", path: "/what-we-do/elder-care", icon: <FaUserShield /> },
    { name: "Poverty Alleviation", path: "/what-we-do/poverty-alleviation", icon: <FaPeopleCarry /> },
  ];

  const whoWeAreLinks = [
    { name: "Our Story", href: "/story", icon: <FaBookOpen /> },
    { name: "Vision & Mission", href: "/vision-mission", icon: <FaBullseye /> },
    { name: "How We Work", href: "/working", icon: <FaCogs /> },
    { name: "Our Supporters", href: "/supporters", icon: <FaUsers /> },
  ];

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      setShowTop(window.scrollY <= lastScrollY || window.scrollY < 80);
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* 🔹 Top Marquee */}
      <div
        className={`bg-[#0F2A44] text-white text-sm overflow-hidden transition-all duration-500 ${
          showTop ? "h-10 opacity-100" : "h-0 opacity-0"
        }`}
      >
        <div className="flex items-center h-10 marquee-track whitespace-nowrap">
          {[1, 2].map((i) => (
            <p key={i} className="px-10 flex items-center gap-6">
              <FaHandsHelping className="text-[#F47A1F]" />
              Welcome to <span className="text-[#F47A1F] font-semibold">HEH Foundation</span>
              – Hunger, Education & Healthcare for a Better Tomorrow
              <FaLeaf className="text-[#F47A1F]" />
            </p>
          ))}
        </div>
      </div>

      {/* 🔹 Main Navbar */}
      <nav className="bg-white shadow-md backdrop-blur-lg">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="HEH Foundation" className="h-14" />
            <div>
              <h1 className="text-xl font-bold text-[#0F2A44]">HEH Foundation</h1>
              <p className="text-xs text-[#F47A1F] font-medium">
                Hunger • Education • Healthcare
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 font-medium text-[#0F2A44]">
            {navLinks.map((link, index) => (
              <li key={index} className="relative group">
                {/* What We Do */}
                {link.name === "What We Do" && (
                  <>
                    <button className="flex items-center gap-2 hover:text-[#F47A1F]">
                      {link.icon} {link.name} <FaChevronDown className="text-xs" />
                    </button>
                    <ul className="absolute left-0 mt-4 w-72 bg-white shadow-xl rounded-xl opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all">
                      {workAreas.map((item, i) => (
                        <li key={i}>
                          <Link
                            to={item.path}
                            className="flex gap-3 px-5 py-3 text-sm hover:bg-[#FFF4E6]"
                          >
                            {item.icon} {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {/* Who We Are */}
                {link.name === "Who We Are" && (
                  <>
                    <button className="flex items-center gap-2 hover:text-[#F47A1F]">
                      {link.icon} {link.name} <FaChevronDown className="text-xs" />
                    </button>
                    <ul className="absolute left-0 mt-4 w-64 bg-white shadow-xl rounded-xl opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all">
                      {whoWeAreLinks.map((item, i) => (
                        <li key={i}>
                          <Link
                            to={item.href}
                            className="flex gap-3 px-5 py-3 text-sm hover:bg-[#FFF4E6]"
                          >
                            {item.icon} {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {link.path !== "#" && (
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 hover:text-[#F47A1F]"
                  >
                    {link.icon} {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* 🔹 Desktop Social Icons */}
          <div className="hidden md:flex gap-5 text-lg">
            <a href="https://in.pinterest.com/hehfoundation/" target="_blank" rel="noreferrer" className="text-[#E60023] hover:scale-110 transition"><FaPinterestP /></a>
            <a href="https://www.instagram.com/heh_foundation_official" target="_blank" rel="noreferrer" className="text-[#E1306C] hover:scale-110 transition"><FaInstagram /></a>
            <a href="https://x.com/hehfoundation" target="_blank" rel="noreferrer" className="text-black hover:scale-110 transition"><FaXTwitter /></a>
            <a href="https://www.youtube.com/@hehfoundation" target="_blank" rel="noreferrer" className="text-[#FF0000] hover:scale-110 transition"><FaYoutube /></a>
            <a href="https://www.facebook.com/profile.php?id=61584475671866" target="_blank" rel="noreferrer" className="text-[#1877F2] hover:scale-110 transition"><FaFacebookF /></a>
            <a href="https://www.linkedin.com/company/hunger-education-healthcare-foundation/" target="_blank" rel="noreferrer" className="text-[#0A66C2] hover:scale-110 transition"><FaLinkedinIn /></a>
            <a href="https://t.me/hehfoundation" target="_blank" rel="noreferrer" className="text-[#229ED9] hover:scale-110 transition"><FaTelegramPlane /></a>
          </div>

          {/* Mobile Button */}
          <button className="md:hidden" onClick={() => setMenuOpen(true)}>
            <FaBars size={26} />
          </button>
        </div>
      </nav>

      {/* 🔹 Mobile Menu */}
      <div className={`fixed top-0 left-0 h-full w-72 bg-white shadow-xl z-50 transition-transform duration-500 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex justify-between p-4 border-b">
          <h2 className="font-bold text-[#0F2A44]">HEH Foundation</h2>
          <FaTimes onClick={() => setMenuOpen(false)} />
        </div>

        <div className="p-4 space-y-3">
          {/* Who We Are */}
          <button onClick={() => setWhoOpen(!whoOpen)} className="flex justify-between w-full py-3 border-b">
            <span className="flex gap-2 items-center"><FaUsers /> Who We Are</span>
            {whoOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>

          <div className={`${whoOpen ? "max-h-60" : "max-h-0"} overflow-hidden transition-all`}>
            {whoWeAreLinks.map((item, i) => (
              <a key={i} href={item.href} className="flex gap-3 py-2 pl-6 text-sm">
                {item.icon} {item.name}
              </a>
            ))}
          </div>

          {/* 🔹 Mobile Social Icons */}
          <div className="pt-6 border-t flex flex-wrap gap-4 text-lg">
            <FaPinterestP className="text-[#E60023]" />
            <FaInstagram className="text-[#E1306C]" />
            <FaXTwitter />
            <FaYoutube className="text-[#FF0000]" />
            <FaFacebookF className="text-[#1877F2]" />
            <FaLinkedinIn className="text-[#0A66C2]" />
            <FaTelegramPlane className="text-[#229ED9]" />
          </div>
        </div>
      </div>

      {/* Marquee Animation */}
      <style>{`
        .marquee-track { animation: marquee 13s linear infinite; }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </header>
  );
}
