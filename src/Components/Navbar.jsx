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
import { FaUserGroup, FaXTwitter } from "react-icons/fa6";

import logo from "../assets/images/logo-heh.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(true);
  const [workOpen, setWorkOpen] = useState(false);
  const [whoOpen, setWhoOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaInfoCircle /> },
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
    { name: "Our Story", path: "/story", icon: <FaBookOpen /> },
    { name: "Vision & Mission", path: "/vision-mission", icon: <FaBullseye /> },
    { name: "How We Work", path: "/working", icon: <FaCogs /> },
    { name: "Our Supporters", path: "/supporters", icon: <FaUsers /> },
    { name: "Our Team", path: "/team", icon: <FaUserGroup /> },
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
useEffect(() => {
  if (!menuOpen) {
    setWorkOpen(false);
    setWhoOpen(false);
  }
}, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* 🔹 Top Marquee */}
      <div className={`bg-[#0F2A44] text-white text-sm overflow-hidden transition-all duration-500 ${showTop ? "h-10 opacity-100" : "h-0 opacity-0"}`}>
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
      <nav className="bg-white shadow-md">
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
            {navLinks.map((link, i) => (
              <li key={i}>
                <Link to={link.path} className="flex items-center gap-2 hover:text-[#F47A1F]">
                  {link.icon} {link.name}
                </Link>
              </li>
            ))}
            <li className="relative group">
              <button className="flex items-center gap-2 hover:text-[#F47A1F]">
                <FaHandsHelping /> What We Do <FaChevronDown className="text-xs" />
              </button>
              <ul className="absolute left-0 mt-4 w-72 bg-white shadow-xl rounded-xl opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all">
                {workAreas.map((item, i) => (
                  <li key={i}>
                    <Link to={item.path} className="flex gap-3 px-5 py-3 text-sm hover:bg-[#FFF4E6]">
                      {item.icon} {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li className="relative group">
              <button className="flex items-center gap-2 hover:text-[#F47A1F]">
                <FaUsers /> Who We Are <FaChevronDown className="text-xs" />
              </button>
              <ul className="absolute left-0 mt-4 w-64 bg-white shadow-xl rounded-xl opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all">
                {whoWeAreLinks.map((item, i) => (
                  <li key={i}>
                    <Link to={item.path} className="flex gap-3 px-5 py-3 text-sm hover:bg-[#FFF4E6]">
                      {item.icon} {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            
          </ul>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex gap-5 text-lg">
            <a href="https://in.pinterest.com/hehfoundation/" target="_blank" rel="noreferrer" className="text-[#E60023] hover:scale-110"><FaPinterestP /></a>
            <a href="https://www.instagram.com/heh_foundation_official" target="_blank" rel="noreferrer" className="text-[#E1306C] hover:scale-110"><FaInstagram /></a>
            <a href="https://x.com/hehfoundation" target="_blank" rel="noreferrer" className="hover:scale-110"><FaXTwitter /></a>
            <a href="https://www.youtube.com/@hehfoundation" target="_blank" rel="noreferrer" className="text-[#FF0000] hover:scale-110"><FaYoutube /></a>
            <a href="https://www.facebook.com/profile.php?id=61584475671866" target="_blank" rel="noreferrer" className="text-[#1877F2] hover:scale-110"><FaFacebookF /></a>
            <a href="https://www.linkedin.com/company/hunger-education-healthcare-foundation/" target="_blank" rel="noreferrer" className="text-[#0A66C2] hover:scale-110"><FaLinkedinIn /></a>
            <a href="https://t.me/hehfoundation" target="_blank" rel="noreferrer" className="text-[#229ED9] hover:scale-110"><FaTelegramPlane /></a>
          </div>

          {/* Mobile Button */}
          <button className="md:hidden" onClick={() => setMenuOpen(true)}>
            <FaBars size={26} />
          </button>
        </div>
      </nav>

      {/* 🔹 Mobile Menu */}
      <div
  className={`fixed top-0 left-0 h-full w-80 bg-white z-50 shadow-2xl transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
  ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
>
  {/* Header */}
  <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
    <h2 className="font-bold text-lg text-[#0F2A44] tracking-wide">
      HEH Foundation
    </h2>
    <button
      onClick={() => setMenuOpen(false)}
      className="p-2 rounded-full hover:bg-gray-100 transition"
    >
      <FaTimes size={18} />
    </button>
  </div>

  {/* Content */}
  <div className="h-full overflow-y-auto px-5 py-4 space-y-4">
    {/* Primary Links */}
    {navLinks.map((link, i) => (
      <Link
        key={i}
        to={link.path}
        onClick={() => setMenuOpen(false)}
        className="flex items-center gap-3 py-3 text-[15px] font-medium text-[#0F2A44]
                   hover:text-[#F47A1F] transition relative"
      >
        <span className="text-[#F47A1F]">{link.icon}</span>
        {link.name}
        <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      </Link>
    ))}

    {/* WHAT WE DO */}
    <div className="pt-2">
      <button
        onClick={() => setWorkOpen(!workOpen)}
        className="w-full flex items-center justify-between py-3 text-[15px] font-semibold text-[#0F2A44]"
      >
        <span className="flex items-center gap-3">
          <FaHandsHelping className="text-[#F47A1F]" />
          What We Do
        </span>
        <FaChevronDown
          className={`transition-transform duration-300 ${
            workOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out
        ${workOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="pl-6 pt-2 space-y-2">
          {workAreas.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 py-2 text-sm text-gray-700 hover:text-[#F47A1F] transition"
            >
              <span className="text-[#F47A1F]">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>

    {/* WHO WE ARE */}
    <div className="pt-2">
      <button
        onClick={() => setWhoOpen(!whoOpen)}
        className="w-full flex items-center justify-between py-3 text-[15px] font-semibold text-[#0F2A44]"
      >
        <span className="flex items-center gap-3">
          <FaUsers className="text-[#F47A1F]" />
          Who We Are
        </span>
        <FaChevronDown
          className={`transition-transform duration-300 ${
            whoOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out
        ${whoOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="pl-6 pt-2 space-y-2">
          {whoWeAreLinks.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 py-2 text-sm text-gray-700 hover:text-[#F47A1F] transition"
            >
              <span className="text-[#F47A1F]">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="my-6 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

    {/* Social Icons */}
    <div className="flex flex-wrap gap-4 text-lg justify-center pb-10">
      <FaPinterestP className="text-[#E60023] hover:scale-110 transition" />
      <FaInstagram className="text-[#E1306C] hover:scale-110 transition" />
      <FaXTwitter className="hover:scale-110 transition" />
      <FaYoutube className="text-[#FF0000] hover:scale-110 transition" />
      <FaFacebookF className="text-[#1877F2] hover:scale-110 transition" />
      <FaLinkedinIn className="text-[#0A66C2] hover:scale-110 transition" />
      <FaTelegramPlane className="text-[#229ED9] hover:scale-110 transition" />
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
