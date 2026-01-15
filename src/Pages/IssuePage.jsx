import { AlertTriangle, Mail, Phone, RefreshCcw, Home, Frown } from "lucide-react";
import { motion } from "framer-motion";

export default function IssuePage() {
  return (
    <div className="min-h-screen flex gap-0 md:gap-4 items-center justify-center bg-[#000000] px-4 w-full">
      <Frown className="w-14 h-14 text-green-500" />
<span className="text-green-500 text-center">The page is having some issues, try contacting the developer...</span>
    </div>
  );
}
