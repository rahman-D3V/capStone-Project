import { useState } from "react";
import {
  FiUser, FiPhone, FiMail, FiMapPin, FiLock, FiEye, FiEyeOff,
  FiShield, FiArrowRight, FiCheck
} from "react-icons/fi";
import { MdOutlineLocationCity } from "react-icons/md";
import { motion } from "framer-motion";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen flex relative overflow-hidden" style={{ background: "linear-gradient(135deg, #f0fdfa 0%, #f8fafc 50%, #eff6ff 100%)" }}>
      
      {/* Animated Sky Blue Bubbles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { size: 120, left: '5%', top: '10%', delay: 0 },
          { size: 90, left: '15%', top: '60%', delay: 2 },
          { size: 150, left: '80%', top: '20%', delay: 1 },
          { size: 110, left: '70%', top: '70%', delay: 3 },
          { size: 95, left: '25%', top: '85%', delay: 1.5 },
          { size: 130, left: '90%', top: '50%', delay: 2.5 },
          { size: 100, left: '50%', top: '5%', delay: 0.5 },
          { size: 85, left: '40%', top: '40%', delay: 3.5 },
        ].map((bubble, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: bubble.size,
              height: bubble.size,
              left: bubble.left,
              top: bubble.top,
              background: 'linear-gradient(135deg, rgba(125, 211, 252, 0.15) 0%, rgba(2, 132, 199, 0.08) 100%)',
              backdropFilter: 'blur(2px)',
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              delay: bubble.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* ── LEFT PANEL (desktop only) ── */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hidden lg:flex flex-col justify-between w-[480px] shrink-0 relative overflow-hidden px-12 py-10 z-10"
        style={{ background: "linear-gradient(160deg, #0f172a 0%, #0d4a45 60%, #0c2340 100%)" }}
      >
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: "radial-gradient(#5eead4 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        {/* Glow */}
        <div className="absolute top-20 -left-20 w-72 h-72 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 right-0 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Logo */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative z-10 flex items-center gap-2.5"
        >
          <div className="w-9 h-9 rounded-xl bg-teal-500/25 border border-teal-400/30 flex items-center justify-center">
            <FiShield size={18} className="text-teal-400" />
          </div>
          <span className="text-white font-bold text-xl tracking-tight">NeoVault</span>
        </motion.div>

        {/* Middle content */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative z-10 space-y-12"
        >
          <div>
            <motion.p 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-teal-400 text-xs font-bold uppercase tracking-[0.25em] mb-6 flex items-center gap-2"
            >
              <span className="w-8 h-px bg-teal-400/50"></span>
              Why NeoVault?
            </motion.p>
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-[2.75rem] font-black text-white leading-[1.15] mb-5"
            >
              Bank smarter.<br />
              <span className="relative inline-block">
                <span style={{ background: "linear-gradient(120deg,#2dd4bf,#38bdf8,#60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Stay safer.
                </span>
                <motion.span
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-teal-400 to-sky-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                />
              </span>
            </motion.h2>
            <motion.p 
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-slate-300 text-[15px] leading-[1.7] max-w-md"
            >
              Open your account in under 60 seconds. No KYC required for balances under ₹1 lakh.
              Our AI guards every transaction — 24/7.
            </motion.p>
          </div>

          {/* Feature list */}
          <div className="space-y-3.5">
            {[
              { icon: "⚡", title: "60-second setup", sub: "No branch visit. No paperwork.", color: "from-yellow-400/20 to-orange-400/10" },
              { icon: "🛡️", title: "AI fraud protection", sub: "200+ signals on every transaction.", color: "from-teal-400/20 to-cyan-400/10" },
              { icon: "🌍", title: "Global travel mode", sub: "Use your card anywhere, never get blocked.", color: "from-blue-400/20 to-indigo-400/10" },
              { icon: "🔒", title: "Zero-trust security", sub: "Device + behavior + location verified.", color: "from-purple-400/20 to-pink-400/10" },
            ].map((f, i) => (
              <motion.div 
                key={i} 
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.9 + i * 0.1, duration: 0.5 }}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                className="group flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/0 hover:border-white/10 transition-all duration-300 cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} border border-white/10 flex items-center justify-center shrink-0 text-xl group-hover:scale-110 transition-transform duration-300`}>
                  {f.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-base font-bold mb-1 group-hover:text-teal-300 transition-colors">{f.title}</p>
                  <p className="text-slate-400 text-[13px] leading-relaxed">{f.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom trust badges */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="relative z-10 flex items-center gap-3 flex-wrap"
        >
          <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
            <span className="text-slate-300 text-[11px]">RBI Licensed</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
            <span className="text-slate-300 text-[11px]">256-bit Encrypted</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
            <span className="text-slate-300 text-[11px]">99.9% Uptime</span>
          </div>
        </motion.div>
      </motion.div>

      {/* ── RIGHT PANEL: Form ── */}
      <div className="flex-1 flex items-center justify-center px-5 py-12 overflow-y-auto relative z-10">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full max-w-lg"
        >

          {/* Mobile logo */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="lg:hidden flex items-center gap-2 mb-8"
          >
            <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center">
              <FiShield size={15} className="text-white" />
            </div>
            <span className="text-slate-900 font-bold text-lg">NeoVault</span>
          </motion.div>

          {/* Header */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-9"
          >
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
              Create your account
            </h1>
            <p className="text-slate-500 text-sm">
              Already have one?{" "}
              <a href="/login" className="text-teal-600 font-semibold hover:text-teal-700 transition-colors">
                Sign in →
              </a>
            </p>
          </motion.div>

          {/* Progress steps */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex items-center gap-2 mb-8"
          >
            {["Personal Info", "Contact", "Security"].map((step, i) => (
              <div key={i} className="flex items-center gap-2 flex-1">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${i === 0 ? "bg-teal-600 text-white" : "bg-slate-100 text-slate-400"}`}>
                  {i === 0 ? <FiCheck size={11} /> : i + 1}
                </div>
                <span className={`text-xs font-medium whitespace-nowrap ${i === 0 ? "text-teal-600" : "text-slate-400"}`}>{step}</span>
                {i < 2 && <div className="flex-1 h-px bg-slate-200" />}
              </div>
            ))}
          </motion.div>

          {/* Form card */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="bg-white rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-shadow duration-300 p-7 space-y-5"
          >

            {/* Row 1: First + Last name */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                  First Name <span className="text-rose-400">*</span>
                </label>
                <div className="relative">
                  <FiUser size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Priya"
                    className="w-full pl-9 pr-3 py-2.5 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-sky-400 focus:bg-white transition-all duration-200"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                  Last Name <span className="text-rose-400">*</span>
                </label>
                <div className="relative">
                  <FiUser size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Sharma"
                    className="w-full pl-9 pr-3 py-2.5 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-sky-400 focus:bg-white transition-all duration-200"
                  />
                </div>
              </div>
            </div>

            {/* Mobile number */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                Mobile Number <span className="text-rose-400">*</span>
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
                  <span className="text-xs font-semibold text-slate-500">🇮🇳 +91</span>
                  <span className="w-px h-4 bg-slate-200" />
                </div>
                <input
                  type="tel"
                  placeholder="98765 43210"
                  className="w-full pl-16 pr-10 py-2.5 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-sky-400 focus:bg-white transition-all duration-200"
                />
                <FiPhone size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-300" />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                Email Address <span className="text-rose-400">*</span>
              </label>
              <div className="relative">
                <FiMail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  placeholder="priya@example.com"
                  className="w-full pl-9 pr-4 py-2.5 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-sky-400 focus:bg-white transition-all duration-200"
                />
              </div>
            </div>

            {/* Row 2: City + State */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                  City <span className="text-rose-400">*</span>
                </label>
                <div className="relative">
                  <MdOutlineLocationCity size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Bengaluru"
                    className="w-full pl-9 pr-3 py-2.5 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-sky-400 focus:bg-white transition-all duration-200"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                  State <span className="text-rose-400">*</span>
                </label>
                <div className="relative">
                  <FiMapPin size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <select className="w-full pl-9 pr-6 py-2.5 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-sky-400 focus:bg-white transition-all duration-200 appearance-none">
                    <option value="" disabled defaultValue>Select state</option>
                    {["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal","Delhi","Jammu & Kashmir","Ladakh","Puducherry"].map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  <svg className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 py-1">
              <div className="h-px flex-1 bg-slate-100" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">Security</span>
              <div className="h-px flex-1 bg-slate-100" />
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                Password <span className="text-rose-400">*</span>
              </label>
              <div className="relative">
                <FiLock size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Min. 8 characters"
                  className="w-full pl-9 pr-10 py-2.5 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-sky-400 focus:bg-white transition-all duration-200"
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <FiEyeOff size={15} /> : <FiEye size={15} />}
                </button>
              </div>
              {/* Strength bar — static UI */}
              <div className="flex gap-1 mt-2">
                {[0, 1, 2, 3].map(i => (
                  <div key={i} className="h-1 flex-1 rounded-full bg-slate-100" />
                ))}
              </div>
              <p className="text-[10px] text-slate-300 mt-1">Password strength indicator</p>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                Confirm Password <span className="text-rose-400">*</span>
              </label>
              <div className="relative">
                <FiLock size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Re-enter your password"
                  className="w-full pl-9 pr-10 py-2.5 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-sky-400 focus:bg-white transition-all duration-200"
                />
                <button 
                  type="button" 
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-600 transition-colors"
                >
                  {showConfirmPassword ? <FiEyeOff size={15} /> : <FiEye size={15} />}
                </button>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-3 pt-1">
              <div className="w-4 h-4 rounded border border-slate-300 bg-slate-50 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-500 leading-relaxed">
                I agree to NeoVault's{" "}
                <a href="#" className="text-teal-600 font-semibold hover:underline">Terms of Service</a>
                {" "}and{" "}
                <a href="#" className="text-teal-600 font-semibold hover:underline">Privacy Policy</a>.
                Your data is encrypted and never shared.
              </p>
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group w-full flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-sky-600 hover:from-teal-700 hover:to-sky-700 active:from-teal-800 active:to-sky-800 text-white font-bold py-3.5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-sm mt-2"
            >
              <FiShield size={15} />
              Create My Free Account
              <FiArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
            </motion.button>
          </motion.div>

          {/* Bottom note */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-center text-[11px] text-slate-400 mt-5 leading-relaxed"
          >
            🔒 256-bit SSL encrypted · RBI-licensed · Your data stays in India
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
