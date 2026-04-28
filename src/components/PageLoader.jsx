import { useEffect, useState } from "react";
import { FiShield } from "react-icons/fi";

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-sm bg-white/20">
      {/* Only Transparent Logo */}
      <div className="animate-pulse">
        <FiShield size={80} className="text-teal-600" strokeWidth={2.5} />
      </div>
    </div>
  );
}
