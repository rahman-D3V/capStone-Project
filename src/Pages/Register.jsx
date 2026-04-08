import {
  FiUser, FiPhone, FiMail, FiMapPin, FiLock, FiEye, FiEyeOff,
  FiShield, FiArrowRight, FiCheck
} from "react-icons/fi";
import { MdOutlineLocationCity } from "react-icons/md";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex" style={{ background: "linear-gradient(135deg, #f0fdfa 0%, #f8fafc 50%, #eff6ff 100%)" }}>

      {/* ── LEFT PANEL (desktop only) ── */}
      <div
        className="hidden lg:flex flex-col justify-between w-[480px] shrink-0 relative overflow-hidden px-12 py-10"
        style={{ background: "linear-gradient(160deg, #0f172a 0%, #0d4a45 60%, #0c2340 100%)" }}
      >
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: "radial-gradient(#5eead4 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        {/* Glow */}
        <div className="absolute top-20 -left-20 w-72 h-72 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 right-0 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Logo */}
        <div className="relative z-10 flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-teal-500/25 border border-teal-400/30 flex items-center justify-center">
            <FiShield size={18} className="text-teal-400" />
          </div>
          <span className="text-white font-bold text-xl tracking-tight">NeoVault</span>
        </div>

        {/* Middle content */}
        <div className="relative z-10 space-y-8">
          <div>
            <p className="text-teal-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">Why NeoVault?</p>
            <h2 className="text-3xl font-extrabold text-white leading-snug mb-3">
              Bank smarter.<br />
              <span style={{ background: "linear-gradient(90deg,#2dd4bf,#38bdf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Stay safer.
              </span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Open your account in under 60 seconds. No KYC required for balances under ₹1 lakh.
              Our AI guards every transaction — 24/7.
            </p>
          </div>

          {/* Feature list */}
          <div className="space-y-4">
            {[
              { icon: "⚡", title: "60-second setup", sub: "No branch visit. No paperwork." },
              { icon: "🛡️", title: "AI fraud protection", sub: "200+ signals on every transaction." },
              { icon: "🌍", title: "Global travel mode", sub: "Use your card anywhere, never get blocked." },
              { icon: "🔒", title: "Zero-trust security", sub: "Device + behavior + location verified." },
            ].map((f, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-base">
                  {f.icon}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{f.title}</p>
                  <p className="text-slate-400 text-xs mt-0.5">{f.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom trust badges */}
        <div className="relative z-10 flex items-center gap-3 flex-wrap">
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
        </div>
      </div>

      {/* ── RIGHT PANEL: Form ── */}
      <div className="flex-1 flex items-center justify-center px-5 py-12 overflow-y-auto">
        <div className="w-full max-w-lg">

          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center">
              <FiShield size={15} className="text-white" />
            </div>
            <span className="text-slate-900 font-bold text-lg">NeoVault</span>
          </div>

          {/* Header */}
          <div className="mb-9">
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
              Create your account
            </h1>
            <p className="text-slate-500 text-sm">
              Already have one?{" "}
              <a href="/login" className="text-teal-600 font-semibold hover:text-teal-700 transition-colors">
                Sign in →
              </a>
            </p>
          </div>

          {/* Progress steps */}
          <div className="flex items-center gap-2 mb-8">
            {["Personal Info", "Contact", "Security"].map((step, i) => (
              <div key={i} className="flex items-center gap-2 flex-1">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${i === 0 ? "bg-teal-600 text-white" : "bg-slate-100 text-slate-400"}`}>
                  {i === 0 ? <FiCheck size={11} /> : i + 1}
                </div>
                <span className={`text-xs font-medium whitespace-nowrap ${i === 0 ? "text-teal-600" : "text-slate-400"}`}>{step}</span>
                {i < 2 && <div className="flex-1 h-px bg-slate-200" />}
              </div>
            ))}
          </div>

          {/* Form card */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7 space-y-5">

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
                    className="w-full pl-9 pr-3 py-2.5 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-400/40 focus:border-teal-400 transition-all duration-200"
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
                    className="w-full pl-9 pr-3 py-2.5 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-400/40 focus:border-teal-400 transition-all duration-200"
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
                  className="w-full pl-16 pr-10 py-2.5 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-400/40 focus:border-teal-400 transition-all duration-200"
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
                  className="w-full pl-9 pr-4 py-2.5 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-400/40 focus:border-teal-400 transition-all duration-200"
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
                    className="w-full pl-9 pr-3 py-2.5 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-400/40 focus:border-teal-400 transition-all duration-200"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                  State <span className="text-rose-400">*</span>
                </label>
                <div className="relative">
                  <FiMapPin size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <select className="w-full pl-9 pr-6 py-2.5 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400/40 focus:border-teal-400 transition-all duration-200 appearance-none">
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
                  type="password"
                  placeholder="Min. 8 characters"
                  className="w-full pl-9 pr-10 py-2.5 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-400/40 focus:border-teal-400 transition-all duration-200"
                />
                <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-500 transition-colors">
                  <FiEye size={15} />
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
                  type="password"
                  placeholder="Re-enter your password"
                  className="w-full pl-9 pr-10 py-2.5 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-400/40 focus:border-teal-400 transition-all duration-200"
                />
                <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-500 transition-colors">
                  <FiEyeOff size={15} />
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
            <button
              type="submit"
              className="group w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-bold py-3.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg text-sm mt-2"
            >
              <FiShield size={15} />
              Create My Free Account
              <FiArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Bottom note */}
          <p className="text-center text-[11px] text-slate-400 mt-5 leading-relaxed">
            🔒 256-bit SSL encrypted · RBI-licensed · Your data stays in India
          </p>
        </div>
      </div>
    </div>
  );
}