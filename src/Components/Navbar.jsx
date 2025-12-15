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
  FaTwitter,
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
} from "react-icons/fa";

import logo from "../assets/images/logo-heh.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(true);
  const [workOpen, setWorkOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaInfoCircle /> },
    { name: "What We Do", path: "#", icon: <FaHandsHelping /> },
    { name: "Gallery", path: "/gallery", icon: <FaImages /> },
    { name: "Contact Us", path: "/contact", icon: <FaPhoneAlt /> },
    { name: "Who We Are", path: "/who-we-are", icon: <FaInfoCircle /> },
  ];

  const workAreas = [
    { name: "Education", path: "/what-we-do/education", icon: <FaGraduationCap /> },
    { name: "Health & Nutrition", path: "/what-we-do/health-nutrition", icon: <FaHeartbeat /> },
    { name: "Economic Well Being", path: "/what-we-do/economic-wellbeing", icon: <FaHandHoldingUsd /> },
    { name: "Child Protection", path: "/what-we-do/child-protection", icon: <FaChild /> },
    { name: "Humanitarian", path: "/what-we-do/humanitarian", icon: <FaHandsHelping /> },
    { name: "Resilience", path: "/what-we-do/resilience", icon: <FaLeaf /> },
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
          {/* Logo + Name */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="HEH Foundation" className="h-14" />
            <div className="leading-tight">
              <h1 className="text-xl font-bold text-[#0F2A44] tracking-wide">
                HEH Foundation
              </h1>
              <p className="text-xs text-[#F47A1F] font-medium">
                Hunger • Education • Healthcare
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 font-medium text-[#0F2A44]">
            {navLinks.map((link, index) => (
              <li key={index} className="relative group">
                {link.name === "What We Do" ? (
                  <>
                    <button className="flex items-center gap-2 hover:text-[#F47A1F] transition">
                      {link.icon} {link.name}
                      <FaChevronDown className="text-xs" />
                    </button>

                    <ul className="absolute left-0 mt-4 w-72 bg-white shadow-2xl rounded-xl opacity-0 invisible group-hover:visible group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      {workAreas.map((item, idx) => (
                        <li key={idx}>
                          <Link
                            to={item.path}
                            className="flex items-center gap-3 px-5 py-3 text-sm text-[#0F2A44] hover:bg-[#FFF4E6] hover:text-[#F47A1F] transition"
                          >
                            {item.icon}
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 hover:text-[#F47A1F] transition"
                  >
                    {link.icon} {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex gap-5 text-lg">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-[#1877F2] hover:scale-110 transition"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-[#E1306C] hover:scale-110 transition"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-[#1DA1F2] hover:scale-110 transition"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-[#0A66C2] hover:scale-110 transition"><FaLinkedinIn /></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-[#FF0000] hover:scale-110 transition"><FaYoutube /></a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMenuOpen(true)}>
            <FaBars size={26} className="text-[#0F2A44]" />
          </button>
        </div>
      </nav>

      {/* 🔹 Mobile Menu (Slide from LEFT) */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-2xl z-50 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold text-[#0F2A44]">HEH Foundation</h2>
          <FaTimes onClick={() => setMenuOpen(false)} className="cursor-pointer text-[#0F2A44]" />
        </div>

        <div className="p-4">
          {navLinks.map((link, index) => (
            <div key={index}>
              {link.name === "What We Do" ? (
                <>
                  <button
                    onClick={() => setWorkOpen(!workOpen)}
                    className="flex justify-between w-full py-3 border-b text-[#0F2A44]"
                  >
                    <span className="flex gap-2 items-center">{link.icon} {link.name}</span>
                    {workOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </button>

                  <div className={`${workOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden transition-all duration-500`}>
                    {workAreas.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.path}
                        onClick={() => setMenuOpen(false)}
                        className="flex gap-3 py-2 pl-6 text-sm text-[#0F2A44]"
                      >
                        {item.icon} {item.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 py-3 border-b text-[#0F2A44]"
                >
                  {link.icon} {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Animation */}
      <style>
        {`
          .marquee-track {
            animation: marquee 18s linear infinite;
          }
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </header>
  );
}
