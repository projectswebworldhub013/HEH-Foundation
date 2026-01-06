import React from "react";
import { FaTimes } from "react-icons/fa";
import qrImage from "../assets/images/QR.jpeg";

export default function DonateQRModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity"
      />

      {/* Modal Box */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-sm w-[90%] p-6 animate-modal">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition"
        >
          <FaTimes size={20} />
        </button>

        {/* Title */}
        <h2 className="text-center text-xl font-bold text-[#0B1F33] mb-4">
          Scan to Donate ❤️
        </h2>

        {/* QR Image */}
        <div className="flex justify-center">
          <img
            src={qrImage}
            alt="Donate QR Code"
            className="w-60 h-60 object-contain rounded-2xl shadow-md"
          />
        </div>

        {/* Footer Text */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Your contribution helps change lives.
        </p>
      </div>
    </div>
  );
}
