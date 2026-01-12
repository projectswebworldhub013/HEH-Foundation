import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

/* Payment Links */
const oneTimeOptions = [
  { amount: 6000, link: "https://rzp.io/rzp/XoWe9Mu" },
  { amount: 9000, link: "https://rzp.io/rzp/Y42FoJpp" },
  { amount: 12000, link: "https://rzp.io/rzp/Z48IjgDo" },
  { amount: 18000, link: "https://rzp.io/rzp/o4PvAsDB" },
];

const monthlyOptions = [
  { amount: 800, link: "https://rzp.io/rzp/JjJZ27Hg" },
  { amount: 1200, link: "https://rzp.io/rzp/vLkEGca0" },
  { amount: 1600, link: "https://rzp.io/rzp/kcMewnEs" },
  { amount: 2400, link: "https://rzp.io/rzp/CqzXnwcE" },
];

const impactText = {
  oneTime: {
    6000: "Can help provide educational support to one child",
    9000: "Can help provide healthcare support to one child",
    12000: "Can help provide educational support to two children",
    18000: "Can help provide healthcare support to two children",
  },
  monthly: {
    800: "Can help provide continuous education support to one child",
    1200: "Can help provide continuous healthcare support to one child",
    1600: "Can help provide continuous education support to two children",
    2400: "Can help provide continuous healthcare support to two children",
  },
};


export default function DonatePopup({ open, onClose }) {
  const [mode, setMode] = useState("oneTime");
  const [selected, setSelected] = useState(null);

  const options = mode === "oneTime" ? oneTimeOptions : monthlyOptions;

  useEffect(() => setSelected(null), [mode]);

  useEffect(() => {
    const handler = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const proceed = () => {
    if (!selected) return;
    window.open(selected.link, "_blank");
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-md p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ type: "spring", stiffness: 200, damping: 22 }}
            className="relative w-full max-w-md bg-[#FFF4E6] rounded-3xl shadow-2xl border border-[#E5E7EB]"
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-[#374151] hover:text-[#0F2A44]"
            >
              <X size={22} />
            </button>

            <div className="p-6 md:p-7 space-y-5">
              <h2 className="text-center text-xl md:text-2xl font-bold text-[#0B1F33]">
                I pledge to
              </h2>

              {/* Toggle */}
              <div className="flex bg-white rounded-xl p-1 border border-[#E5E7EB]">
                <button
                  onClick={() => setMode("oneTime")}
                  className={`flex-1 py-2.5 rounded-lg text-xs font-semibold transition ${
                    mode === "oneTime"
                      ? "bg-[#DC2626] text-white shadow"
                      : "text-[#374151]"
                  }`}
                >
                  GIVE ONE-TIME
                </button>

                <button
                  onClick={() => setMode("monthly")}
                  className={`flex-1 py-2.5 rounded-lg text-xs font-semibold transition ${
                    mode === "monthly"
                      ? "bg-[#DC2626] text-white shadow"
                      : "text-[#374151]"
                  }`}
                >
                  GIVE MONTHLY
                </button>
              </div>

              <p className="text-center text-sm font-semibold text-[#0B1F33]">
                A sum of INR
              </p>

              {/* Amounts */}
              <div className="grid grid-cols-2 gap-3">
                {options.map((opt) => (
                  <button
                    key={opt.amount}
                    onClick={() => setSelected(opt)}
                    className={`border rounded-xl py-3 font-semibold text-sm transition ${
                      selected?.amount === opt.amount
                        ? "bg-[#E8590C] text-white border-[#E8590C] shadow-md scale-[1.03]"
                        : "border-[#F47A1F] text-[#E8590C] hover:bg-[#FFF4E6]"
                    }`}
                  >
                    ₹ {opt.amount}
                  </button>
                ))}
              </div>

              {/* Manual Amount */}
              <button
                onClick={() =>
                  window.open("https://razorpay.me/@hehfoundation", "_blank")
                }
                className="w-full py-3 border border-[#1E4ED8] text-[#1E4ED8] rounded-xl text-sm font-semibold hover:bg-[#1E4ED8] hover:text-white transition"
              >
                Enter Custom Amount
              </button>

              {/* Impact */}
              <div className="bg-white font-bold text-[#1f242c] text-center py-2 rounded-lg text-xs md:text-sm border border-[#E5E7EB]">
  {selected
    ? impactText[mode][selected.amount]
    : "Select an amount to see the impact"}
</div>


              {/* Donate */}
              <button
                disabled={!selected}
                onClick={proceed}
                className="cursor-pointer w-full py-3 bg-[#DC2626] text-white rounded-xl text-base font-bold tracking-wide hover:bg-red-700 transition disabled:opacity-40"
              >
                DONATE NOW
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
