import React from "react";
import {
  FaUniversity,
  FaUserShield,
  FaHashtag,
  FaCodeBranch,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

export default function BankDetails() {
  return (
    <section className="w-full bg-[#F9FAF7] py-16 px-6 md:px-12">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl border border-[#E5E7EB] overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#E8590C] to-[#DC2626] px-8 py-6">
          <h2 className="text-white text-2xl font-bold text-center">
            Bank Account Details
          </h2>
          <p className="text-white/90 text-center text-sm mt-1">
            Please find our official banking details below
          </p>
        </div>

        {/* Body */}
        <div className="p-8 space-y-6">

          {/* Entity Name */}
          <DetailRow
            icon={<FaUserShield />}
            label="Entity Name"
            value="HEH FOUNDATION"
            highlight
          />

          <Divider />

          {/* Account Number */}
          <DetailRow
            icon={<FaHashtag />}
            label="Account Number"
            value="1105120030000572"
            mono
          />

          <Divider />

          {/* IFSC */}
          <DetailRow
            icon={<FaUniversity />}
            label="IFSC Code"
            value="UJVN0001105"
            mono
          />

          <Divider />

          {/* Branch */}
          <DetailRow
            icon={<FaCodeBranch />}
            label="Branch Name"
            value="MAGADI ROAD"
          />

          <Divider />

          {/* Location */}
          <DetailRow
            icon={<FaMapMarkerAlt />}
            label="Bank Location"
            value="Bangalore, Karnataka"
          />
        </div>

        {/* Footer */}
        <div className="bg-[#F9FAF7] px-8 py-6 border-t border-[#E5E7EB] text-center">
          <p className="text-sm text-[#374151] font-medium">
            For any banking-related assistance
          </p>

          <p className="mt-2 text-[#0B1F33] font-semibold">
            Sharat Naik
          </p>

          <p className="text-sm text-[#374151]">
            TASC Relationship Manager
          </p>

          <div className="flex items-center justify-center gap-2 mt-3 text-[#16A34A] font-semibold">
            <FaPhoneAlt />
            <span>+91 88611 01926</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- */
/* Reusable Sub Components           */
/* -------------------------------- */

function DetailRow({ icon, label, value, mono = false, highlight = false }) {
  return (
    <div className="flex items-start gap-4">
      <div
        className={`p-3 rounded-xl ${
          highlight
            ? "bg-[#FFF4E6] text-[#E8590C]"
            : "bg-[#F3F4F6] text-[#374151]"
        }`}
      >
        {icon}
      </div>

      <div>
        <p className="text-sm text-[#6B7280]">{label}</p>
        <p
          className={`text-base font-semibold text-[#0B1F33] ${
            mono ? "font-mono tracking-wide" : ""
          }`}
        >
          {value}
        </p>
      </div>
    </div>
  );
}

function Divider() {
  return <div className="h-px bg-[#E5E7EB] w-full" />;
}
