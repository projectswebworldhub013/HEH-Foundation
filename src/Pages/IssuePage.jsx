import { AlertTriangle, RefreshCcw, Home } from "lucide-react";
import { motion } from "framer-motion";

export default function IssuePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md border border-black/20 rounded-2xl p-8 text-center shadow-sm"
      >
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <AlertTriangle size={48} className="text-black" />
        </div>

        {/* Error Code */}
        <h1 className="text-4xl font-bold tracking-tight">400</h1>

        {/* Title */}
        <h2 className="text-xl font-semibold mt-2">Bad Request</h2>

        {/* Description */}
        <p className="text-sm mt-3 text-black/70 leading-relaxed">
          The request could not be understood by the server due to malformed syntax.
          Please check your input and try again.
        </p>

        {/* Divider */}
        <div className="my-6 border-t border-black/10" />

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <button className="flex items-center justify-center gap-2 border border-black px-4 py-2 rounded-lg hover:bg-black hover:text-white transition active:scale-95 transition">
            <RefreshCcw size={16} />
            Retry Request
          </button>

          
        </div>

        {/* Footer hint */}
        <p className="text-xs text-black/50 mt-6">
          If the problem persists, check your API request or contact support.
        </p>
      </motion.div>
    </div>
  );
}