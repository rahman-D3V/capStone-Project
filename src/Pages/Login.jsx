import { FiMail, FiLock, FiEye, FiEyeOff, FiShield, FiArrowRight } from "react-icons/fi";

export default function SigninPage() {
  return (
    <div
      className="min-h-screen flex"
      style={{ background: "linear-gradient(135deg, #f0fdfa 0%, #f8fafc 50%, #eff6ff 100%)" }}
    >

      {/* ── LEFT PANEL (desktop) ── */}
      <div
        className="hidden lg:flex flex-col justify-between w-[480px] shrink-0 relative overflow-hidden px-12 py-10"
        style={{ background: "linear-gradient(160deg, #0f172a 0%, #0d4a45 60%, #0c2340 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: "radial-gradient(#5eead4 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        <div className="absolute top-20 -left-20 w-72 h-72 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 right-0 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Logo */}
        <div className="relative z-10 flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-teal-500/25 border border-teal-400/30 flex items-center justify-center">
            <FiShield size={18} className="text-teal-400" />
          </div>
          <span className="text-white font-bold text-xl tracking-tight">NeoVault</span>
        </div>

        {/* Center content */}
        <div className="relative z-10 space-y-6">
          <div>
            <p className="text-teal-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Welcome back
            </p>
            <h2 className="text-4xl font-extrabold text-white leading-tight mb-4">
              Your money,<br />
              <span
                style={{
                  background: "linear-gradient(90deg, #2dd4bf, #38bdf8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                always safe.
              </span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Every login is verified across device, location, and behavior — not just your password.
            </p>
          </div>

          {/* Live login shield mockup */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Login Shield — Active
            </p>
            {[
              { label: "Device recognized", ok: true },
              { label: "Location verified", ok: true },
              { label: "Behavior match", ok: true },
              { label: "Unusual activity", ok: false },
            ].map((row, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-slate-300 text-xs">{row.label}</span>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    row.ok
                      ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20"
                      : "bg-rose-500/15 text-rose-400 border border-rose-500/20"
                  }`}
                >
                  {row.ok ? "✓ Clear" : "✕ None"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom badges */}
        <div className="relative z-10 flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-slate-300 text-[11px]">RBI Licensed</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
            <span className="text-slate-300 text-[11px]">256-bit SSL</span>
          </div>
        </div>
      </div>

      {/* ── RIGHT PANEL: Form ── */}
      <div className="flex-1 flex items-center justify-center px-5 py-12">
        <div className="w-full max-w-md">

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
              Welcome back 👋
            </h1>
            <p className="text-slate-500 text-sm">
              Don't have an account?{" "}
              <a href="/register" className="text-teal-600 font-semibold hover:text-teal-700 transition-colors">
                Create one free →
              </a>
            </p>
          </div>

          {/* Form card */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 space-y-5">

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
                  className="w-full pl-9 pr-4 py-3 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-400/40 focus:border-teal-400 transition-all duration-200"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-semibold text-slate-600">
                  Password <span className="text-rose-400">*</span>
                </label>
                <a href="#" className="text-xs text-teal-600 font-semibold hover:text-teal-700 transition-colors">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <FiLock size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full pl-9 pr-10 py-3 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-400/40 focus:border-teal-400 transition-all duration-200"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-500 transition-colors"
                >
                  <FiEye size={15} />
                </button>
              </div>
            </div>

            {/* Remember me */}
            <div className="flex items-center gap-2.5">
              <div className="w-4 h-4 rounded border border-slate-300 bg-slate-50 shrink-0" />
              <span className="text-xs text-slate-500">Keep me signed in on this device</span>
            </div>

            {/* Divider */}
            <div className="h-px bg-slate-100" />

            {/* Submit */}
            <button
              type="submit"
              className="group w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-bold py-3.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg text-sm"
            >
              <FiShield size={15} />
              Sign In Securely
              <FiArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            {/* Divider OR */}
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-slate-100" />
              <span className="text-[11px] font-bold text-slate-300 uppercase tracking-widest">or</span>
              <div className="h-px flex-1 bg-slate-100" />
            </div>

            {/* OTP login */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 border border-slate-200 hover:border-teal-300 text-slate-600 hover:text-teal-700 font-semibold py-3 rounded-xl transition-all duration-200 bg-white text-sm"
            >
              📱 Sign in with OTP instead
            </button>
          </div>

          {/* Bottom note */}
          <p className="text-center text-[11px] text-slate-400 mt-6 leading-relaxed">
            🔒 256-bit SSL encrypted · AI-protected login · RBI-licensed
          </p>
        </div>
      </div>
    </div>
  );
}