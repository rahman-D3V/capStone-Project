import { useState, useEffect, useRef } from "react";
import {
  FiShield,
  FiZap,
  FiGlobe,
  FiSmartphone,
  FiLock,
  FiTrendingUp,
  FiCheckCircle,
  FiAlertTriangle,
  FiXCircle,
  FiArrowRight,
  FiActivity,
  FiCreditCard,
  FiUsers,
  FiBarChart2,
  FiBell,
  FiEye,
  FiCpu,
  FiMapPin,
  FiClock,
  FiStar,
  FiPlay,
  FiChevronDown,
} from "react-icons/fi";
import {
  MdOutlineSecurity,
  MdOutlineVerified,
  MdOutlineAccountBalance,
} from "react-icons/md";
import { HiOutlineFingerPrint } from "react-icons/hi";
import { RiRobot2Line } from "react-icons/ri";

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function AnimatedCounter({ target, suffix = "", prefix = "" }) {
  const [count, setCount] = useState(0);
  const [ref, visible] = useReveal();
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [visible, target]);
  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function Landing() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const stats = [
    { label: "Fraud Blocked", value: 99, suffix: ".9%", prefix: "" },
    { label: "Active Users", value: 2, suffix: "M+", prefix: "" },
    { label: "Transactions/sec", value: 12000, suffix: "+", prefix: "" },
    { label: "Avg Response", value: 38, suffix: "ms", prefix: "" },
  ];

  const features = [
    {
      icon: <RiRobot2Line size={22} />,
      title: "AI Fraud Detection",
      desc: "Real-time behavioral analysis flags anomalies before they become losses. Our model learns your unique spending DNA.",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      icon: <FiGlobe size={22} />,
      title: "Geo-Smart Approvals",
      desc: "Travel abroad without freezes. Context-aware engine weighs location, amount, and behavior simultaneously.",
      color: "text-sky-600",
      bg: "bg-sky-50",
    },
    {
      icon: <HiOutlineFingerPrint size={22} />,
      title: "Device Fingerprinting",
      desc: "New device? Impossible travel? We detect it instantly — even if the hacker has your password.",
      color: "text-violet-600",
      bg: "bg-violet-50",
    },
    {
      icon: <MdOutlineAccountBalance size={22} />,
      title: "Instant Account Opening",
      desc: "No KYC needed for balances under ₹1 lakh. Open your account in under 60 seconds, right from your phone.",
      color: "text-amber-600",
      bg: "bg-amber-50",
    },
    {
      icon: <FiZap size={22} />,
      title: "Instant Transfers",
      desc: "Send or receive money in milliseconds via UPI, IMPS, and NEFT — with fraud scoring on every transaction.",
      color: "text-rose-600",
      bg: "bg-rose-50",
    },
    {
      icon: <FiBell size={22} />,
      title: "Smart Alerts",
      desc: "Get intelligent notifications — not every ping, just the ones that matter. AI filters noise from signal.",
      color: "text-indigo-600",
      bg: "bg-indigo-50",
    },
  ];

  const comparisonRows = [
    {
      scenario: "You travel abroad, buy coffee for $5",
      traditional: {
        status: "blocked",
        label: "BLOCKED",
        note: "New location detected",
        icon: <FiXCircle size={18} />,
      },
      hybrid: {
        status: "approved",
        label: "APPROVED",
        note: "Low amount + behavior match",
        icon: <FiCheckCircle size={18} />,
      },
    },
    {
      scenario: "Hacker with your password sends $5,000",
      traditional: {
        status: "maybe",
        label: "MAYBE BLOCKED",
        note: "Password-only check",
        icon: <FiAlertTriangle size={18} />,
      },
      hybrid: {
        status: "blocked",
        label: "BLOCKED",
        note: "New device + impossible travel",
        icon: <FiXCircle size={18} />,
      },
    },
    {
      scenario: "You pay ₹200 at your regular grocery store",
      traditional: {
        status: "approved",
        label: "APPROVED",
        note: "Known merchant",
        icon: <FiCheckCircle size={18} />,
      },
      hybrid: {
        status: "approved",
        label: "APPROVED",
        note: "Recurring pattern match",
        icon: <FiCheckCircle size={18} />,
      },
    },
    {
      scenario: "Unusual ₹50,000 transfer at 3 AM",
      traditional: {
        status: "maybe",
        label: "MIGHT PASS",
        note: "Correct credentials used",
        icon: <FiAlertTriangle size={18} />,
      },
      hybrid: {
        status: "blocked",
        label: "BLOCKED",
        note: "Odd timing + amount spike",
        icon: <FiXCircle size={18} />,
      },
    },
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Open your account",
      desc: "Sign up in 60 seconds. No KYC for balances under ₹1 lakh. Just your phone number and a selfie.",
      icon: <FiSmartphone size={20} />,
    },
    {
      step: "02",
      title: "AI learns your patterns",
      desc: "Our engine builds your behavioral profile — where you shop, when you transact, which devices you use.",
      icon: <FiCpu size={20} />,
    },
    {
      step: "03",
      title: "Every transaction is scored",
      desc: "38ms is all it takes. Each payment is risk-scored across 200+ signals before approval.",
      icon: <FiActivity size={20} />,
    },
    {
      step: "04",
      title: "You stay protected, always",
      desc: "Legit transactions go through instantly. Suspicious ones get challenged. Fraud gets stopped cold.",
      icon: <FiShield size={20} />,
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Freelance Designer, Mumbai",
      text: "Someone tried to log into my account from Moscow at 2 AM. NeoVault stopped it before I even woke up. I got an alert and went back to sleep.",
      stars: 5,
    },
    {
      name: "Arjun Mehta",
      role: "Software Engineer, Bangalore",
      text: "I travel constantly for work. My old bank froze my card every other trip. With NeoVault, not once. It just knows it's me.",
      stars: 5,
    },
    {
      name: "Kavita Nair",
      role: "Small Business Owner, Kochi",
      text: "The instant account opening without KYC was a game-changer for my team. We were up and running in minutes.",
      stars: 5,
    },
  ];

  const faqs = [
    {
      q: "Is no-KYC safe?",
      a: "Yes. Accounts without KYC are capped at ₹1 lakh balance — per RBI guidelines. Our fraud engine monitors every rupee.",
    },
    {
      q: "How does the AI know it's really me?",
      a: "It analyzes 200+ signals: your device, location, typing speed, transaction time, and past behavior. Password alone isn't enough.",
    },
    {
      q: "What if a legitimate transaction gets blocked?",
      a: "You get an instant alert with a one-tap approval option. Most false positives resolve in under 30 seconds.",
    },
    {
      q: "Is my data safe?",
      a: "All data is encrypted end-to-end, stored in RBI-compliant servers in India, and never sold to third parties.",
    },
    {
      q: "Can I use this outside India?",
      a: "Yes. International transactions are supported and our geo-smart engine ensures you're never blocked while traveling.",
    },
  ];

  const statusBadge = (s) => {
    if (s.status === "blocked")
      return "bg-rose-100 text-rose-700 border border-rose-200";
    if (s.status === "approved")
      return "bg-emerald-100 text-emerald-700 border border-emerald-200";
    return "bg-amber-100 text-amber-700 border border-amber-200";
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased text-slate-800">
      <style>{`@keyframes heroFadeIn{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}`}</style>

      {/* NAV */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100" : "bg-transparent"}`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center shadow-sm">
              <FiShield size={16} className="text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight text-slate-900">
              NeoVault
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            {["Features", "Security", "How it works", "Pricing"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(/ /g, "-")}`}
                className="hover:text-teal-600 transition-colors duration-200"
              >
                {l}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button className="hidden sm:block text-sm text-slate-600 hover:text-slate-900 transition-colors font-medium px-3 py-1.5">
              Sign in
            </button>
            <button className="text-sm bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md">
              Open Account Free
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-28 pb-24 overflow-hidden bg-white">
        {/* Animated background grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#0f766e 1px,transparent 1px),linear-gradient(90deg,#0f766e 1px,transparent 1px)",
            backgroundSize: "48px 48px",
            animation: "gridDrift 20s linear infinite",
          }}
        />

        {/* Soft radial glows */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-teal-300/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-10 right-0 w-[400px] h-[400px] bg-sky-300/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6">
          {/* Two-column layout: text left, live demo right */}
          <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
            {/* ── LEFT: Copy ── */}
            <div
              className="flex-1 text-left"
              style={{
                animation: "heroFadeIn 0.75s cubic-bezier(0.16,1,0.3,1) both",
              }}
            >
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-7 tracking-widest uppercase">
                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse" />
                AI Fraud Detection · Live
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl xl:text-[3.6rem] font-extrabold text-slate-900 leading-[1.08] tracking-tight mb-6">
                Your bank knows
                <br />
                <span className="relative inline-block">
                  <span className="text-teal-600">the real you.</span>
                  {/* Underline squiggle */}
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 6 Q25 1 50 6 Q75 11 100 6 Q125 1 150 6 Q175 11 200 6"
                      stroke="#0d9488"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      fill="none"
                      style={{
                        strokeDasharray: 220,
                        strokeDashoffset: 220,
                        animation:
                          "drawLine 1s 0.5s cubic-bezier(0.16,1,0.3,1) forwards",
                      }}
                    />
                  </svg>
                </span>
                <br />
                Hackers don't.
              </h1>

              {/* Sub */}
              <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-lg mb-8">
                NeoVault's AI builds a behavioral fingerprint of{" "}
                <span className="font-semibold text-slate-700">you</span> — your
                devices, patterns, and rhythms. When someone else tries to be
                you, we know instantly.
              </p>

              {/* Trust pills row */}
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  { icon: "⚡", text: "60-sec account opening" },
                  { icon: "🔓", text: "No KYC under ₹1L" },
                  { icon: "🛡️", text: "99.9% fraud blocked" },
                ].map((pill) => (
                  <span
                    key={pill.text}
                    className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200 text-slate-600 text-xs font-medium px-3 py-1.5 rounded-full"
                  >
                    {pill.icon} {pill.text}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="group flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg text-sm">
                  Open Free Account
                  <FiArrowRight
                    size={15}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </button>
                <button className="flex items-center justify-center gap-2 border border-slate-200 hover:border-teal-300 text-slate-600 hover:text-teal-700 font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 bg-white text-sm">
                  <FiPlay size={14} className="text-teal-500" /> Watch 90-sec
                  demo
                </button>
              </div>

              {/* Social proof */}
              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {["P", "A", "K", "R", "M"].map((l, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white"
                      style={{
                        background: [
                          "#0d9488",
                          "#0284c7",
                          "#7c3aed",
                          "#059669",
                          "#d97706",
                        ][i],
                      }}
                    >
                      {l}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-slate-500">
                  <span className="font-semibold text-slate-700">
                    2M+ Indians
                  </span>{" "}
                  banking safely today
                </p>
              </div>
            </div>

            {/* ── RIGHT: Animated Live Dashboard ── */}
            <div
              className="flex-1 w-full max-w-md"
              style={{
                animation:
                  "heroFadeIn 0.75s 0.15s cubic-bezier(0.16,1,0.3,1) both",
              }}
            >
              {/* Phone frame */}
              <div className="relative mx-auto w-full max-w-[360px]">
                {/* Glow behind phone */}
                <div className="absolute inset-0 bg-teal-400/20 blur-2xl rounded-3xl scale-90 -z-10" />

                <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
                  {/* Status bar */}
                  <div className="bg-slate-900 px-5 pt-4 pb-5">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-slate-400 text-[10px] tracking-widest uppercase mb-0.5">
                          NeoVault
                        </p>
                        <p className="text-white text-xs font-medium">
                          Priya Sharma
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 bg-emerald-500/15 border border-emerald-500/25 px-2.5 py-1 rounded-full">
                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                        <span className="text-emerald-400 text-[10px] font-semibold">
                          Protected
                        </span>
                      </div>
                    </div>
                    <p className="text-white text-3xl font-extrabold tracking-tight">
                      ₹84,250
                    </p>
                    <p className="text-slate-500 text-xs mt-0.5">
                      Available balance
                    </p>

                    {/* Mini bar graph */}
                    <div className="mt-4 flex items-end gap-1 h-8">
                      {[30, 55, 40, 70, 45, 85, 60, 90, 50, 75, 65, 88].map(
                        (h, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-sm bg-teal-500/40"
                            style={{
                              height: `${h}%`,
                              animation: `barGrow 0.5s ${i * 0.04}s cubic-bezier(0.16,1,0.3,1) both`,
                            }}
                          />
                        ),
                      )}
                    </div>
                    <p className="text-slate-500 text-[10px] mt-1">
                      Spending — last 12 days
                    </p>
                  </div>

                  {/* Live Feed */}
                  <div className="px-4 py-3 bg-white">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        Live Shield Activity
                      </p>
                      <span className="text-[10px] text-teal-600 font-semibold">
                        38ms avg
                      </span>
                    </div>

                    {/* Transaction rows with staggered animation */}
                    <div className="space-y-1.5">
                      {[
                        {
                          icon: "✓",
                          iconCls: "text-emerald-600 bg-emerald-50",
                          text: "₹450 · Swiggy",
                          sub: "Bengaluru · Just now",
                          badge: "Approved",
                          badgeCls:
                            "text-emerald-700 bg-emerald-50 border-emerald-200",
                          delay: "0s",
                        },
                        {
                          icon: "🚫",
                          iconCls: "text-rose-600 bg-rose-50",
                          text: "$5,000 wire transfer",
                          sub: "Unknown device · Blocked",
                          badge: "Fraud Stopped",
                          badgeCls: "text-rose-700 bg-rose-50 border-rose-200",
                          delay: "0.08s",
                        },
                        {
                          icon: "✓",
                          iconCls: "text-emerald-600 bg-emerald-50",
                          text: "€12 · Café, Amsterdam",
                          sub: "Travel mode · Verified",
                          badge: "Travel OK",
                          badgeCls: "text-sky-700 bg-sky-50 border-sky-200",
                          delay: "0.16s",
                        },
                        {
                          icon: "⚠",
                          iconCls: "text-amber-600 bg-amber-50",
                          text: "₹50,000 · 3 AM transfer",
                          sub: "Unusual timing · Challenged",
                          badge: "Challenged",
                          badgeCls:
                            "text-amber-700 bg-amber-50 border-amber-200",
                          delay: "0.24s",
                        },
                      ].map((row, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0"
                          style={{
                            animation: `heroFadeIn 0.5s ${row.delay} both`,
                          }}
                        >
                          <div className="flex items-center gap-2.5">
                            <div
                              className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${row.iconCls}`}
                            >
                              {row.icon}
                            </div>
                            <div>
                              <p className="text-slate-800 text-xs font-semibold leading-none mb-0.5">
                                {row.text}
                              </p>
                              <p className="text-slate-400 text-[10px]">
                                {row.sub}
                              </p>
                            </div>
                          </div>
                          <span
                            className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${row.badgeCls}`}
                          >
                            {row.badge}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* AI score bottom bar */}
                    <div className="mt-3 bg-slate-50 rounded-xl px-3 py-2.5 flex items-center gap-3">
                      <div className="flex-1">
                        <div className="flex justify-between text-[10px] mb-1">
                          <span className="text-slate-400 font-medium">
                            AI Trust Score
                          </span>
                          <span className="text-emerald-600 font-bold">
                            97 / 100
                          </span>
                        </div>
                        <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"
                            style={{
                              width: "97%",
                              animation:
                                "scoreGrow 1.2s 0.4s cubic-bezier(0.16,1,0.3,1) both",
                            }}
                          />
                        </div>
                      </div>
                      <FiShield size={16} className="text-teal-500 shrink-0" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Keyframes */}
        <style>{`
      @keyframes heroFadeIn {
        from { opacity: 0; transform: translateY(18px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes gridDrift {
        from { background-position: 0 0; }
        to   { background-position: 48px 48px; }
      }
      @keyframes drawLine {
        to { stroke-dashoffset: 0; }
      }
      @keyframes barGrow {
        from { transform: scaleY(0); transform-origin: bottom; opacity: 0; }
        to   { transform: scaleY(1); transform-origin: bottom; opacity: 1; }
      }
      @keyframes scoreGrow {
        from { width: 0; }
        to   { width: 97%; }
      }
    `}</style>
      </section>

      {/* STATS */}
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Faint dot grid background */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(#0f766e 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6">
          {/* Big horizontal rule with label */}
          <div className="flex items-center gap-4 mb-14">
            <div className="h-px flex-1 bg-slate-200" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 shrink-0">
              Trusted by millions
            </p>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          {/* Stats row — full-width horizontal strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {[
              {
                value: 99,
                suffix: ".9%",
                prefix: "",
                label: "Fraud Blocked",
                detail: "Every. Single. Transaction.",
                icon: <FiShield size={20} />,
                color: "teal",
              },
              {
                value: 2,
                suffix: "M+",
                prefix: "",
                label: "Active Users",
                detail: "Across India & abroad",
                icon: <FiUsers size={20} />,
                color: "sky",
              },
              {
                value: 12000,
                suffix: "+",
                prefix: "",
                label: "Txns / Second",
                detail: "Zero-lag processing",
                icon: <FiZap size={20} />,
                color: "violet",
              },
              {
                value: 38,
                suffix: "ms",
                prefix: "",
                label: "Fraud Decision",
                detail: "Faster than a blink",
                icon: <FiActivity size={20} />,
                color: "emerald",
              },
            ].map((s, i) => {
              const colors = {
                teal: {
                  num: "text-teal-600",
                  line: "bg-teal-500",
                  ring: "ring-teal-200",
                  soft: "text-teal-500",
                },
                sky: {
                  num: "text-sky-600",
                  line: "bg-sky-500",
                  ring: "ring-sky-200",
                  soft: "text-sky-500",
                },
                violet: {
                  num: "text-violet-600",
                  line: "bg-violet-500",
                  ring: "ring-violet-200",
                  soft: "text-violet-500",
                },
                emerald: {
                  num: "text-emerald-600",
                  line: "bg-emerald-500",
                  ring: "ring-emerald-200",
                  soft: "text-emerald-500",
                },
              }[s.color];

              return (
                <Reveal key={i} delay={i * 90}>
                  <div
                    className={`group relative px-8 py-8 flex flex-col gap-3 ${i < 3 ? "lg:border-r border-slate-100" : ""} ${i < 2 ? "border-b lg:border-b-0 border-slate-100" : ""}`}
                  >
                    {/* Accent vertical bar */}
                    <div
                      className={`absolute left-0 top-8 w-[3px] h-10 rounded-r-full ${colors.line} opacity-0 group-hover:opacity-100 transition-all duration-300`}
                    />

                    {/* Top row: icon + label */}
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`${colors.soft} transition-transform duration-300 group-hover:scale-110`}
                      >
                        {s.icon}
                      </span>
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                        {s.label}
                      </span>
                    </div>

                    {/* Big number */}
                    <p
                      className={`text-5xl font-black leading-none tracking-tight ${colors.num} tabular-nums`}
                    >
                      <AnimatedCounter
                        target={s.value}
                        suffix={s.suffix}
                        prefix={s.prefix}
                      />
                    </p>

                    {/* Detail line */}
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {s.detail}
                    </p>

                    {/* Thin bottom accent that grows on hover */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-[2px] ${colors.line} scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-full`}
                    />
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Bottom rule */}
          <div className="h-px bg-slate-100 mt-0" />
        </div>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="relative py-28 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #f0fdfa 0%, #f8fafc 40%, #eff6ff 100%)",
        }}
      >
        {/* Large soft blobs */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-teal-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-200/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-sky-200/20 rounded-full blur-2xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6">
          {/* Header */}
          <Reveal className="mb-16 max-w-xl">
            <p className="text-teal-600 text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Everything you need
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight mb-5">
              One bank.{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #0d9488, #0284c7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Two superpowers.
              </span>
            </h2>
            <p className="text-slate-500 text-base leading-relaxed">
              The everyday conveniences of a modern bank — layered with
              enterprise-grade fraud intelligence that runs 24/7.
            </p>
          </Reveal>

          {/* Bento grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-4">
            {/* Card 1 — LARGE HERO CARD (spans 2 cols on lg) */}
            <Reveal delay={0} className="lg:col-span-2">
              <div
                className="group relative rounded-3xl overflow-hidden h-full min-h-[220px] cursor-default p-8 flex flex-col justify-between"
                style={{
                  background:
                    "linear-gradient(135deg, #0f172a 0%, #0d4a45 60%, #134e4a 100%)",
                }}
              >
                {/* Floating grid texture */}
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      "linear-gradient(#5eead4 1px, transparent 1px), linear-gradient(90deg, #5eead4 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />
                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-400/10 rounded-full blur-2xl" />

                <div className="relative z-10">
                  <div className="w-11 h-11 rounded-2xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center mb-5 text-teal-400 transition-transform duration-300 group-hover:scale-110">
                    <RiRobot2Line size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    AI Fraud Detection
                  </h3>
                  <p className="text-teal-100/70 text-sm leading-relaxed max-w-sm">
                    Real-time behavioral analysis flags anomalies before they
                    become losses. Our model learns your unique spending DNA —
                    devices, locations, rhythms.
                  </p>
                </div>

                {/* Live indicator */}
                <div className="relative z-10 mt-6 flex items-center gap-4">
                  <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-3 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-emerald-300 text-xs font-semibold">
                      Running 24/7
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-3 py-1.5 rounded-full">
                    <span className="text-white/70 text-xs">200+ signals</span>
                  </div>
                </div>

                {/* Animated score bars (decoration) */}
                <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2 opacity-30 group-hover:opacity-60 transition-opacity duration-500">
                  {[90, 65, 85, 45, 78].map((w, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div
                        className="h-1.5 bg-teal-400/60 rounded-full"
                        style={{ width: `${w}px` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Card 2 — TALL card (spans 1 col, 1 row) */}
            <Reveal delay={60}>
              <div
                className="group relative rounded-3xl overflow-hidden h-full min-h-[220px] cursor-default p-7 flex flex-col justify-between"
                style={{
                  background:
                    "linear-gradient(145deg, #f0f9ff 0%, #e0f2fe 100%)",
                  border: "1px solid #bae6fd",
                }}
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-sky-500/15 flex items-center justify-center mb-5 text-sky-600 transition-transform duration-300 group-hover:scale-110">
                    <FiGlobe size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Geo-Smart Approvals
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Travel abroad without freezes. Context-aware engine weighs
                    location, amount, and behavior simultaneously.
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-2 text-sky-600 text-xs font-semibold">
                  <FiMapPin size={13} /> Works in 180+ countries
                </div>
              </div>
            </Reveal>

            {/* Card 3 */}
            <Reveal delay={120}>
              <div
                className="group relative rounded-3xl overflow-hidden cursor-default p-7 flex flex-col justify-between min-h-[200px]"
                style={{
                  background:
                    "linear-gradient(145deg, #faf5ff 0%, #ede9fe 100%)",
                  border: "1px solid #ddd6fe",
                }}
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-violet-500/15 flex items-center justify-center mb-5 text-violet-600 transition-transform duration-300 group-hover:scale-110">
                    <HiOutlineFingerPrint size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Device Fingerprinting
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    New device + impossible travel = instant block. Even if the
                    hacker has your password.
                  </p>
                </div>
                <div className="mt-5 text-xs font-semibold text-violet-600 flex items-center gap-1.5">
                  <FiLock size={13} /> Zero-trust every login
                </div>
              </div>
            </Reveal>

            {/* Card 4 */}
            <Reveal delay={180}>
              <div
                className="group relative rounded-3xl overflow-hidden cursor-default p-7 flex flex-col justify-between min-h-[200px]"
                style={{
                  background:
                    "linear-gradient(145deg, #fffbeb 0%, #fef3c7 100%)",
                  border: "1px solid #fde68a",
                }}
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-amber-500/15 flex items-center justify-center mb-5 text-amber-600 transition-transform duration-300 group-hover:scale-110">
                    <MdOutlineAccountBalance size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Instant Account Opening
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    No KYC needed for balances under ₹1 lakh. Open your account
                    in 60 seconds.
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-2">
                  <span className="bg-amber-100 border border-amber-200 text-amber-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                    ⚡ 60-sec setup
                  </span>
                  <span className="bg-amber-100 border border-amber-200 text-amber-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                    No paperwork
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Card 5 — WIDE bottom card */}
            <Reveal delay={240} className="sm:col-span-2 lg:col-span-1">
              <div
                className="group relative rounded-3xl overflow-hidden cursor-default p-7 flex flex-col justify-between min-h-[200px]"
                style={{
                  background:
                    "linear-gradient(145deg, #fff1f2 0%, #ffe4e6 100%)",
                  border: "1px solid #fecdd3",
                }}
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-rose-500/15 flex items-center justify-center mb-5 text-rose-600 transition-transform duration-300 group-hover:scale-110">
                    <FiZap size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Instant Transfers
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Send money in milliseconds via UPI, IMPS & NEFT — each
                    scored for fraud before approval.
                  </p>
                </div>
                <div className="mt-5 text-xs text-rose-500 font-semibold flex items-center gap-1.5">
                  <FiActivity size={13} /> Every txn risk-scored
                </div>
              </div>
            </Reveal>

            {/* Card 6 — WIDE bottom card */}
            <Reveal delay={300} className="sm:col-span-2 lg:col-span-2">
              <div
                className="group relative rounded-3xl overflow-hidden cursor-default p-7 flex flex-col sm:flex-row sm:items-center gap-6 min-h-[160px]"
                style={{
                  background:
                    "linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 50%, #e0f2fe 100%)",
                  border: "1px solid #99f6e4",
                }}
              >
                <div className="flex-1">
                  <div className="w-11 h-11 rounded-2xl bg-teal-500/15 flex items-center justify-center mb-4 text-teal-600 transition-transform duration-300 group-hover:scale-110">
                    <FiBell size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Smart Alerts — Only What Matters
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-md">
                    AI filters hundreds of events so you only hear about the
                    ones that need your attention. No noise. Just signal.
                  </p>
                </div>

                {/* Mini notification mockup */}
                <div className="shrink-0 w-full sm:w-64 space-y-2">
                  {[
                    {
                      t: "🚫 Fraud attempt blocked",
                      s: "Unknown device · Lagos, NG",
                      cls: "border-rose-200 bg-white",
                    },
                    {
                      t: "✓ ₹2,400 received",
                      s: "From Rahul · Just now",
                      cls: "border-emerald-200 bg-white",
                    },
                  ].map((n, i) => (
                    <div
                      key={i}
                      className={`text-xs px-3 py-2.5 rounded-xl border shadow-sm ${n.cls}`}
                      style={{
                        animation: `heroFadeIn 0.5s ${i * 0.15 + 0.3}s both`,
                      }}
                    >
                      <p className="font-semibold text-slate-800">{n.t}</p>
                      <p className="text-slate-400 mt-0.5">{n.s}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section
        id="security"
        className="relative py-28 overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #0f172a 0%, #0d2d2a 50%, #0c1a2e 100%)",
        }}
      >
        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `url('https://media.istockphoto.com/id/2161298305/photo/big-data-technology-background.jpg?s=612x612&w=0&k=20&c=khClhyFXpnxIFpeZl3rHjE_m1mLhP_0YEuZmBE1V7ME=')`,
            backgroundSize: "200px 200px",
          }}
        />
        {/* Glow orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6">
          {/* Header */}
          <Reveal className="text-center mb-16">
            <p className="text-teal-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Side by side
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight mb-5">
              React vs.{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #2dd4bf, #38bdf8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Predict.
              </span>
            </h2>
            <p className="text-slate-400 text-base max-w-lg mx-auto">
              Traditional banks wait for something to go wrong. NeoVault's AI
              sees it coming — in 38ms.
            </p>
          </Reveal>

          {/* Column headers */}
          <Reveal className="grid grid-cols-[1fr_auto_1fr] sm:grid-cols-[2fr_auto_1fr_auto_1fr] gap-4 mb-5 max-w-4xl mx-auto px-2">
            <div className="hidden sm:block" /> {/* scenario spacer */}
            <div className="hidden sm:block w-4" />
            <div className="flex items-center justify-center gap-2 bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-2.5">
              <FiCreditCard size={14} className="text-slate-400" />
              <span className="text-slate-400 text-xs font-semibold uppercase tracking-widest">
                Traditional
              </span>
            </div>
            <div className="hidden sm:block w-4" />
            <div className="flex items-center justify-center gap-2 bg-teal-500/10 border border-teal-500/30 rounded-xl px-4 py-2.5">
              <FiShield size={14} className="text-teal-400" />
              <span className="text-teal-300 text-xs font-semibold uppercase tracking-widest">
                NeoVault AI
              </span>
            </div>
          </Reveal>

          {/* Scenario cards */}
          <div className="space-y-3 max-w-4xl mx-auto">
            {[
              {
                emoji: "✈️",
                scenario: "You travel abroad, buy coffee for $5",
                traditional: {
                  label: "BLOCKED",
                  note: "New location detected",
                  status: "bad",
                },
                hybrid: {
                  label: "APPROVED",
                  note: "Low amount + behavior match",
                  status: "good",
                },
              },
              {
                emoji: "💀",
                scenario: "Hacker with your password sends $5,000",
                traditional: {
                  label: "MIGHT PASS",
                  note: "Password-only check",
                  status: "warn",
                },
                hybrid: {
                  label: "BLOCKED",
                  note: "New device + impossible travel",
                  status: "block",
                },
              },
              {
                emoji: "🛒",
                scenario: "₹200 at your regular grocery store",
                traditional: {
                  label: "APPROVED",
                  note: "Known merchant",
                  status: "good",
                },
                hybrid: {
                  label: "APPROVED",
                  note: "Recurring pattern match",
                  status: "good",
                },
              },
              {
                emoji: "🌙",
                scenario: "Unusual ₹50,000 transfer at 3 AM",
                traditional: {
                  label: "MIGHT PASS",
                  note: "Correct credentials used",
                  status: "warn",
                },
                hybrid: {
                  label: "CHALLENGED",
                  note: "Odd timing + amount spike",
                  status: "block",
                },
              },
            ].map((row, i) => {
              const tStyle = {
                good: {
                  pill: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
                  icon: "✓",
                },
                bad: {
                  pill: "bg-rose-500/15 text-rose-300 border-rose-500/30",
                  icon: "✕",
                },
                warn: {
                  pill: "bg-amber-500/15 text-amber-300 border-amber-500/30",
                  icon: "⚠",
                },
                block: {
                  pill: "bg-teal-500/15 text-teal-300 border-teal-500/30",
                  icon: "🚫",
                },
              };
              const trad = tStyle[row.traditional.status];
              const hyb = tStyle[row.hybrid.status];

              return (
                <Reveal key={i} delay={i * 80}>
                  <div className="group grid grid-cols-1 sm:grid-cols-[2fr_16px_1fr_16px_1fr] items-center gap-3 bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/60 hover:border-slate-600 rounded-2xl px-5 py-5 transition-all duration-300">
                    {/* Scenario */}
                    <div className="flex items-center gap-4">
                      <span className="text-2xl shrink-0">{row.emoji}</span>
                      <p className="text-slate-300 text-sm font-medium leading-snug">
                        {row.scenario}
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="hidden sm:block w-px h-10 bg-slate-700 mx-auto" />

                    {/* Traditional result */}
                    <div className="sm:text-center">
                      <span
                        className={`inline-flex items-center gap-1.5 border text-xs font-bold px-3 py-1.5 rounded-full ${trad.pill}`}
                      >
                        {trad.icon} {row.traditional.label}
                      </span>
                      <p className="text-slate-500 text-[11px] mt-1.5 sm:text-center">
                        {row.traditional.note}
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="hidden sm:block w-px h-10 bg-slate-700 mx-auto" />

                    {/* NeoVault result */}
                    <div className="sm:text-center">
                      <span
                        className={`inline-flex items-center gap-1.5 border text-xs font-bold px-3 py-1.5 rounded-full ${hyb.pill}`}
                      >
                        {hyb.icon} {row.hybrid.label}
                      </span>
                      <p className="text-slate-500 text-[11px] mt-1.5 sm:text-center">
                        {row.hybrid.note}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Bottom CTA nudge */}
          <Reveal className="text-center mt-14">
            <p className="text-slate-500 text-sm mb-5">
              The difference isn't luck — it's{" "}
              <span className="text-teal-400 font-semibold">
                200+ behavioral signals
              </span>{" "}
              evaluated in real time.
            </p>
            <button className="group inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-semibold px-7 py-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-teal-500/25 text-sm">
              See how the AI works
              <FiArrowRight
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </button>
          </Reveal>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="relative py-28 overflow-hidden"
        style={{
          background:
            "linear-gradient(170deg, #f8fafc 0%, #f0fdfa 50%, #f0f9ff 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(#0f766e 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-6">
          <Reveal className="mb-20">
            <p className="text-teal-600 text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Simple by design
            </p>

            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
                From zero to
                <br />
                <span
                  style={{
                    background: "linear-gradient(90deg, #0d9488, #0284c7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  fully protected.
                </span>
              </h2>

              <p className="text-slate-400 text-sm max-w-xs leading-relaxed sm:text-right">
                Under 2 minutes from signup to your first fraud-protected
                transaction.
              </p>
            </div>
          </Reveal>

          <div className="relative">
            <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal-300/0 via-teal-300/50 to-teal-300/0 hidden sm:block lg:-translate-x-px" />

            <div className="space-y-16">
              <Reveal delay={0}>
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                  <div className="relative pl-14 sm:pl-0 lg:text-right lg:order-1 order-2">
                    <div
                      className="hidden lg:flex absolute top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border-2 border-teal-400 shadow-lg items-center justify-center z-10"
                      style={{ right: "calc(-50% - 1.5rem - 0.5px)" }}
                    >
                      <FiSmartphone size={18} className="text-teal-600" />
                    </div>

                    <div className="sm:hidden absolute left-0 top-1 w-10 h-10 rounded-full bg-white border-2 border-teal-400 shadow-md flex items-center justify-center">
                      <FiSmartphone size={16} className="text-teal-600" />
                    </div>

                    <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-600 text-xs font-bold px-3 py-1 rounded-full mb-4 lg:ml-auto">
                      Step 01
                    </div>

                    <h3 className="text-2xl font-extrabold text-slate-900 mb-3">
                      Open your account
                    </h3>

                    <p className="text-slate-500 text-sm leading-relaxed lg:ml-auto max-w-sm lg:max-w-full">
                      Sign up with just your phone number. No paperwork, no
                      branch visit. Balances under ₹1 lakh need zero KYC —
                      you’re live in 60 seconds.
                    </p>

                    <div className="flex items-center gap-2 mt-5 lg:justify-end">
                      <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-medium">
                        📱 Phone only
                      </span>
                      <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-medium">
                        ⚡ 60 seconds
                      </span>
                    </div>
                  </div>

                  <div className="lg:order-2 order-1">
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-lg p-6 max-w-xs mx-auto lg:mx-0">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-5">
                        Create Account
                      </p>

                      <div className="space-y-3 mb-5">
                        {[
                          {
                            label: "Phone Number",
                            value: "+91 98765 43210",
                            done: true,
                          },
                          {
                            label: "Full Name",
                            value: "Priya Sharma",
                            done: true,
                          },
                          { label: "Set PIN", value: "••••••", done: true },
                        ].map((f, i) => (
                          <div key={i}>
                            <p className="text-[10px] text-slate-400 font-medium mb-1">
                              {f.label}
                            </p>
                            <div className="flex items-center justify-between px-3 py-2 rounded-lg border text-sm bg-teal-50 border-teal-200 text-slate-700">
                              <span>{f.value}</span>
                              <FiCheckCircle
                                size={13}
                                className="text-teal-500"
                              />
                            </div>
                          </div>
                        ))}
                      </div>

                      <button className="w-full bg-teal-600 text-white text-sm font-semibold py-2.5 rounded-xl">
                        Open Account Free →
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={80}>
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                  <div>
                    <div className="bg-slate-900 rounded-2xl border border-slate-700 shadow-xl p-6 max-w-xs mx-auto lg:mx-0">
                      <div className="flex items-center justify-between mb-4">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                          Behavior Profile
                        </p>
                        <span className="flex items-center gap-1 text-emerald-400 text-[10px] font-semibold">
                          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                          Learning
                        </span>
                      </div>

                      <div className="space-y-3">
                        {[
                          {
                            label: "Usual locations",
                            value: "Bengaluru, Mumbai",
                            fill: 90,
                          },
                          {
                            label: "Typical hours",
                            value: "9am – 11pm",
                            fill: 75,
                          },
                          {
                            label: "Avg txn size",
                            value: "₹200 – ₹2,000",
                            fill: 60,
                          },
                          {
                            label: "Known devices",
                            value: "2 devices",
                            fill: 85,
                          },
                        ].map((b, i) => (
                          <div key={i}>
                            <div className="flex justify-between text-[10px] mb-1">
                              <span className="text-slate-400">{b.label}</span>
                              <span className="text-slate-300 font-medium">
                                {b.value}
                              </span>
                            </div>
                            <div className="h-1 bg-slate-700 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-teal-500 to-emerald-400 rounded-full"
                                style={{ width: `${b.fill}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="relative pl-14 sm:pl-0 lg:pl-10">
                    <div className="hidden lg:flex absolute -left-6 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-2 border-teal-400 shadow-lg items-center justify-center z-10">
                      <FiCpu size={18} className="text-teal-600" />
                    </div>

                    <div className="sm:hidden absolute left-0 top-1 w-10 h-10 rounded-full bg-white border-2 border-teal-400 shadow-md flex items-center justify-center">
                      <FiCpu size={16} className="text-teal-600" />
                    </div>

                    <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-600 text-xs font-bold px-3 py-1 rounded-full mb-4">
                      Step 02
                    </div>

                    <h3 className="text-2xl font-extrabold text-slate-900 mb-3">
                      AI learns your patterns
                    </h3>

                    <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                      The engine builds a behavioral fingerprint — devices,
                      locations, timings, and spending habits. It learns what
                      you look like, so it can detect anyone who doesn’t.
                    </p>

                    <div className="flex items-center gap-2 mt-5">
                      <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-medium">
                        200+ signals
                      </span>
                      <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-medium">
                        Silent & automatic
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={160}>
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                  <div className="relative pl-14 sm:pl-0 lg:text-right lg:order-1 order-2">
                    <div
                      className="hidden lg:flex absolute top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border-2 border-teal-400 shadow-lg items-center justify-center z-10"
                      style={{ right: "calc(-50% - 1.5rem - 0.5px)" }}
                    >
                      <FiActivity size={18} className="text-teal-600" />
                    </div>

                    <div className="sm:hidden absolute left-0 top-1 w-10 h-10 rounded-full bg-white border-2 border-teal-400 shadow-md flex items-center justify-center">
                      <FiActivity size={16} className="text-teal-600" />
                    </div>

                    <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-600 text-xs font-bold px-3 py-1 rounded-full mb-4 lg:ml-auto">
                      Step 03
                    </div>

                    <h3 className="text-2xl font-extrabold text-slate-900 mb-3">
                      Every transaction is scored
                    </h3>

                    <p className="text-slate-500 text-sm leading-relaxed lg:ml-auto max-w-sm lg:max-w-full">
                      The moment you tap pay, location, device, amount, timing,
                      and behavior are scored together. NeoVault decides in 38ms
                      whether to approve, challenge, or block.
                    </p>

                    <div className="flex items-center gap-2 mt-5 lg:justify-end">
                      <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-medium">
                        ⚡ 38ms decision
                      </span>
                      <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-medium">
                        Every single txn
                      </span>
                    </div>
                  </div>

                  <div className="lg:order-2 order-1">
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-lg p-6 max-w-xs mx-auto lg:mx-0">
                      <div className="flex items-center justify-between mb-4">
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                          Risk Analysis
                        </p>
                        <span className="text-[10px] text-teal-600 font-bold">
                          38ms
                        </span>
                      </div>

                      <div className="space-y-2.5 mb-4">
                        {[
                          {
                            label: "Location Match",
                            score: 96,
                            color: "from-teal-500 to-emerald-400",
                          },
                          {
                            label: "Device Trust",
                            score: 91,
                            color: "from-teal-500 to-emerald-400",
                          },
                          {
                            label: "Behavior Pattern",
                            score: 98,
                            color: "from-teal-500 to-emerald-400",
                          },
                          {
                            label: "Time Anomaly",
                            score: 11,
                            color: "from-rose-500 to-rose-400",
                          },
                        ].map((b, i) => (
                          <div key={i}>
                            <div className="flex justify-between text-[10px] mb-1">
                              <span className="text-slate-500">{b.label}</span>
                              <span className="text-slate-700 font-semibold">
                                {b.score}%
                              </span>
                            </div>
                            <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                              <div
                                className={`h-full bg-gradient-to-r ${b.color} rounded-full`}
                                style={{ width: `${b.score}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-2.5">
                        <span className="text-emerald-700 text-xs font-bold">
                          ✓ APPROVED
                        </span>
                        <span className="text-emerald-600 text-[10px]">
                          Low risk score
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={240}>
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                  <div>
                    <div
                      className="rounded-2xl shadow-xl p-8 max-w-xs mx-auto lg:mx-0 text-center"
                      style={{
                        background:
                          "linear-gradient(135deg, #0f172a 0%, #0d4a45 100%)",
                      }}
                    >
                      <div className="w-16 h-16 rounded-full bg-teal-500/20 border border-teal-400/30 flex items-center justify-center mx-auto mb-5">
                        <FiShield size={28} className="text-teal-400" />
                      </div>

                      <p className="text-white font-extrabold text-xl mb-1">
                        You’re protected.
                      </p>
                      <p className="text-teal-300/70 text-xs mb-6">
                        Always on. Always watching.
                      </p>

                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { v: "99.9%", l: "Fraud stopped" },
                          { v: "0", l: "False charges" },
                          { v: "38ms", l: "Response time" },
                          { v: "24/7", l: "AI watching" },
                        ].map((s, i) => (
                          <div
                            key={i}
                            className="bg-white/5 border border-white/10 rounded-xl p-3"
                          >
                            <p className="text-teal-300 font-extrabold text-lg leading-none">
                              {s.v}
                            </p>
                            <p className="text-slate-500 text-[10px] mt-0.5">
                              {s.l}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="relative pl-14 sm:pl-0 lg:pl-10">
                    <div className="hidden lg:flex absolute -left-6 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-teal-600 border-2 border-teal-400 shadow-lg items-center justify-center z-10">
                      <FiShield size={18} className="text-white" />
                    </div>

                    <div className="sm:hidden absolute left-0 top-1 w-10 h-10 rounded-full bg-teal-600 border-2 border-teal-400 shadow-md flex items-center justify-center">
                      <FiShield size={16} className="text-white" />
                    </div>

                    <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-600 text-xs font-bold px-3 py-1 rounded-full mb-4">
                      Step 04
                    </div>

                    <h3 className="text-2xl font-extrabold text-slate-900 mb-3">
                      Always protected. Always you.
                    </h3>

                    <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                      Legitimate payments go through instantly. Suspicious ones
                      get challenged. Real fraud gets blocked before money
                      leaves your account.
                    </p>

                    <div className="mt-6">
                      <button className="group inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg text-sm">
                        Open Free Account
                        <FiArrowRight
                          size={14}
                          className="transition-transform duration-200 group-hover:translate-x-1"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNAL PANEL */}
      <section className="py-24 bg-slate-900 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <Reveal>
              <p className="text-teal-400 text-sm font-semibold uppercase tracking-widest mb-4">
                Under the hood
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                200+ signals. 38ms decision.
              </h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                Every transaction is run through a multi-layer neural network
                that weighs device health, behavioral biometrics, geolocation,
                transaction velocity, and your historical patterns — all in real
                time.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <FiMapPin size={16} />, label: "Geo-velocity" },
                  { icon: <FiEye size={16} />, label: "Behavioral biometrics" },
                  {
                    icon: <FiSmartphone size={16} />,
                    label: "Device fingerprint",
                  },
                  { icon: <FiClock size={16} />, label: "Temporal patterns" },
                  {
                    icon: <FiActivity size={16} />,
                    label: "Transaction velocity",
                  },
                  { icon: <FiBarChart2 size={16} />, label: "Spending DNA" },
                ].map((sig, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-slate-800 rounded-xl px-4 py-3 border border-slate-700"
                  >
                    <span className="text-teal-400">{sig.icon}</span>
                    <span className="text-slate-300 text-sm font-medium">
                      {sig.label}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={150} className="mt-12 lg:mt-0">
              <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">
                <div className="px-6 py-4 border-b border-slate-700 flex items-center justify-between">
                  <span className="text-slate-300 text-sm font-semibold">
                    Risk Score Engine
                  </span>
                  <span className="flex items-center gap-1.5 text-emerald-400 text-xs">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />{" "}
                    Live
                  </span>
                </div>
                <div className="px-6 py-6 space-y-5">
                  {[
                    {
                      label: "Location Match",
                      score: 94,
                      color: "bg-emerald-500",
                    },
                    {
                      label: "Device Trust",
                      score: 88,
                      color: "bg-emerald-500",
                    },
                    {
                      label: "Behavior Pattern",
                      score: 97,
                      color: "bg-teal-500",
                    },
                    { label: "Time Anomaly", score: 12, color: "bg-rose-500" },
                    {
                      label: "Velocity Check",
                      score: 76,
                      color: "bg-amber-500",
                    },
                  ].map((bar, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-slate-400">{bar.label}</span>
                        <span className="text-slate-300 font-semibold">
                          {bar.score}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${bar.color} rounded-full`}
                          style={{ width: `${bar.score}%` }}
                        />
                      </div>
                    </div>
                  ))}
                  <div className="mt-4 pt-4 border-t border-slate-700 flex items-center justify-between">
                    <span className="text-slate-400 text-xs">Overall Risk</span>
                    <span className="text-emerald-400 font-bold text-sm bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                      LOW RISK — APPROVED ✓
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="text-center mb-14">
            <p className="text-teal-600 text-sm font-semibold uppercase tracking-widest mb-3">
              Real people. Real stories.
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Trusted every day
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow duration-300">
                  <div className="flex gap-0.5 mb-4">
                    {Array(t.stars)
                      .fill(0)
                      .map((_, j) => (
                        <FiStar
                          key={j}
                          size={14}
                          className="text-amber-400 fill-amber-400"
                        />
                      ))}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-teal-100 text-teal-700 font-bold text-sm flex items-center justify-center">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="text-slate-900 font-semibold text-sm">
                        {t.name}
                      </p>
                      <p className="text-slate-400 text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Frequently asked
            </h2>
            <p className="text-slate-500">
              Everything you want to know before you trust us with your money.
            </p>
          </Reveal>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 60}>
                <div
                  className="bg-white rounded-2xl border border-slate-100 overflow-hidden cursor-pointer hover:border-teal-200 transition-colors duration-200"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <div className="flex items-center justify-between px-6 py-4">
                    <span className="font-semibold text-slate-800 text-sm">
                      {faq.q}
                    </span>
                    <FiChevronDown
                      size={18}
                      className="text-slate-400 transition-transform duration-300"
                      style={{
                        transform:
                          openFaq === i ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    />
                  </div>
                  {openFaq === i && (
                    <div className="px-6 pb-4 text-slate-500 text-sm leading-relaxed border-t border-slate-50">
                      <p className="pt-3">{faq.a}</p>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-teal-600 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%,white 1px,transparent 1px),radial-gradient(circle at 80% 20%,white 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-6 border border-white/30">
              <MdOutlineVerified size={14} /> RBI-compliant · Zero fraud
              tolerance
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5 leading-tight">
              Your money deserves a smarter guardian.
            </h2>
            <p className="text-teal-100 text-base mb-8 max-w-xl mx-auto">
              Join over 2 million Indians who bank without fear. Open your
              account in 60 seconds — no KYC, no paperwork, no compromise on
              security.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-slate-50 active:bg-slate-100 text-teal-700 font-bold px-8 py-3.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg text-sm">
                Open Free Account <FiArrowRight size={16} />
              </button>
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 border border-white/40 hover:border-white/70 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 text-sm">
                Learn more
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-teal-600 flex items-center justify-center">
                <FiShield size={14} className="text-white" />
              </div>
              <span className="font-bold text-white">NeoVault</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400 text-sm">
              {["Privacy", "Terms", "Security", "Support", "Careers"].map(
                (l) => (
                  <a
                    key={l}
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    {l}
                  </a>
                ),
              )}
            </div>
            <p className="text-slate-500 text-xs">
              © 2025 NeoVault. RBI-licensed.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
