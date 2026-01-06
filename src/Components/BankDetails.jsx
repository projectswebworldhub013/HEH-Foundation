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
    <section className="w-full bg-[#F9FAF7] pb-10 px-4 md:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-[#E5E7EB]">

        {/* Header */}
        <div className="bg-gradient-to-r from-[#E8590C] to-[#DC2626] px-6 py-4">
          <h2 className="text-white text-xl font-bold text-center">
            Bank Account Details
          </h2>
          <p className="text-white/90 text-center text-xs mt-1">
            Official HEH Foundation Banking Information
          </p>
        </div>

        {/* Body */}
        <div className="px-6 py-5 space-y-4">

          <DetailRow
            icon={<FaUserShield />}
            label="Entity Name"
            value="HEH FOUNDATION"
            highlight
          />

          <Divider />

          <DetailRow
            icon={<FaHashtag />}
            label="Account Number"
            value="1105120030000572"
            mono
          />

          <Divider />

          <DetailRow
            icon={<FaUniversity />}
            label="IFSC Code"
            value="UJVN0001105"
            mono
          />

          <Divider />

          <DetailRow
            icon={<FaCodeBranch />}
            label="Branch Name"
            value="MAGADI ROAD"
          />

          <Divider />

          <DetailRow
            icon={<FaMapMarkerAlt />}
            label="Bank Location"
            value="Bangalore, Karnataka"
          />
        </div>

        {/* Footer */}
        <div className="bg-[#F9FAF7] px-6 py-4 border-t border-[#E5E7EB]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">

            <div>
              <p className="text-xs text-[#6B7280]">
                Banking Assistance
              </p>
              <p className="font-semibold text-[#0B1F33] text-sm">
                Sharat Naik
              </p>
              <p className="text-xs text-[#6B7280]">
                TASC Relationship Manager
              </p>
            </div>

            <div className="flex items-center gap-2 text-[#16A34A] font-semibold text-sm">
              <FaPhoneAlt />
              <span>+91 88611 01926</span>
            </div>

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
