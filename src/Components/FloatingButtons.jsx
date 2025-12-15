// src/components/FloatingButtons.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, Headphones, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";


const FloatingButtons = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center space-y-3">
      {/* Buttons when open */}
      <AnimatePresence>
        {open && (
          <>
            {/* Call Button */}
            <motion.a
              href="tel:+917012502008"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-[#C9A44C] to-[#E3C567] shadow-lg hover:scale-110 hover:shadow-2xl transition-transform"
              title="Call Now"
            >
              <Phone size={22} className="text-black" />
            </motion.a>

            {/* WhatsApp Button */}
            <motion.a
              href="https://wa.me/+919980483859"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.35 }}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-[#25D366] shadow-lg hover:scale-110 hover:shadow-2xl transition-transform"
              title="Chat on WhatsApp"
            >
              <FaWhatsapp size={22} className="text-white" />
            </motion.a>
          </>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="cursor-pointer w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-[#1A1A1A] to-[#333333] text-white shadow-2xl hover:scale-110 hover:shadow-[#C9A44C]/50 transition-transform"
      >
        {open ? (
          <X size={26} />
        ) : (
          <Headphones size={26} className="text-[#C9A44C]" />
        )}
      </button>
    </div>
  );
};

export default FloatingButtons;
