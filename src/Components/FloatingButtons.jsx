// src/components/FloatingButtons.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, BellRing, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingButtons = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="fixed bottom-5 right-5 z-50 flex flex-col items-center gap-3"
      animate={{ y: [0, -6, 0] }}                 // 🌊 floating motion
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >

      {/* ACTION BUTTONS */}
      <AnimatePresence>
        {open && (
          <>
            {/* CALL */}
            <motion.a
              href="tel:+917012502008"
              initial={{ opacity: 0, y: 18, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="relative w-13 h-13 flex items-center justify-center rounded-full
                         bg-gradient-to-br from-[#F47A1F] to-[#DC2626]
                         shadow-lg hover:scale-110 hover:shadow-[#DC2626]/40
                         transition-transform"
            >
              <Phone size={24} className="text-white" />
            </motion.a>

            {/* WHATSAPP */}
            <motion.a
              href="https://wa.me/+917012502008"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 18, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 220, damping: 18, delay: 0.05 }}
              className="relative w-13 h-13 flex items-center justify-center rounded-full
                         bg-[#16A34A]
                         shadow-lg hover:scale-110 hover:shadow-[#16A34A]/40
                         transition-transform"
            >
              <FaWhatsapp size={24} className="text-white" />
            </motion.a>
          </>
        )}
      </AnimatePresence>

      {/* MAIN TOGGLE */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.9 }}                // 🫧 click compression
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="relative w-14 h-14 flex items-center justify-center rounded-full
                   bg-gradient-to-br from-[#0F2A44] to-[#0B1F33]
                   shadow-2xl hover:scale-105"
        aria-label="Contact Options"
      >
        {/* RING 1 – STRONG */}
        {!open && (
          <motion.span
            className="absolute inset-0 rounded-full border-2 border-[#F47A1F]/70"
            animate={{ scale: [1, 1.7], opacity: [0.7, 0] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        )}

        {/* RING 2 – SOFT GLOW */}
        {!open && (
          <motion.span
            className="absolute inset-0 rounded-full border border-[#F47A1F]/40"
            animate={{ scale: [1, 2.1], opacity: [0.4, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeOut",
              delay: 0.4,
            }}
          />
        )}

        {/* ICON */}
        <motion.span
          className="relative z-10"
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          {open ? (
            <X size={26} className="text-white" />
          ) : (
            <BellRing size={21} className="text-[#F47A1F]" />
          )}
        </motion.span>
      </motion.button>
    </motion.div>
  );
};

export default FloatingButtons;
