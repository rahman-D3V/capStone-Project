import { useState } from "react";
import {
  FiHome,
  FiSend,
  FiList,
  FiUsers,
  FiUser,
  FiShield,
  FiCopy,
  FiArrowUpRight,
  FiArrowDownLeft,
  FiPlus,
  FiSearch,
  FiBell,
  FiLogOut,
  FiPhone,
  FiMail,
  FiMapPin,
  FiCalendar,
  FiCheck,
  FiX,
  FiClock,
  FiSmartphone,
  FiChevronRight,
  FiEye,
  FiMenu,
  FiGlobe,
  FiAlertCircle,
  FiTrendingUp,
  FiZap,
  FiLock,
} from "react-icons/fi";
import { MdOutlineAccountBalance } from "react-icons/md";

import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

/* ── MOCK DATA ─────────────────────────────────── */
const mockProfile = {
  user: {
    name: "Raushan",
    email: "raushan@gmail.com",
    phone: "9876543210",
    accountNumber: "ACC12345678",
    balance: 10000,
  },
  profile: {
    dob: "2002-01-01",
    gender: "Male",
    address: { city: "Delhi", state: "Delhi" },
  },
};

const mockTransactions = [
  {
    _id: "txn1",
    type: "DEBIT",
    amount: 500,
    status: "Success",
    otherParty: { name: "Aman", accountNumber: "ACC99999999" },
    location: { city: "Delhi" },
    device: { deviceType: "mobile", browser: "Chrome" },
    createdAt: "2026-04-07T10:00:00Z",
  },
  {
    _id: "txn2",
    type: "CREDIT",
    amount: 1000,
    status: "Success",
    otherParty: { name: "Rahul", accountNumber: "ACC88888888" },
    location: { city: "Mumbai" },
    device: { deviceType: "desktop", browser: "Firefox" },
    createdAt: "2026-04-06T15:30:00Z",
  },
  {
    _id: "txn3",
    type: "DEBIT",
    amount: 250,
    status: "Success",
    otherParty: { name: "Sneha", accountNumber: "ACC77777777" },
    location: { city: "Delhi" },
    device: { deviceType: "mobile", browser: "Safari" },
    createdAt: "2026-04-05T09:15:00Z",
  },
  {
    _id: "txn4",
    type: "CREDIT",
    amount: 5000,
    status: "Success",
    otherParty: { name: "Vikram", accountNumber: "ACC66666666" },
    location: { city: "Bengaluru" },
    device: { deviceType: "desktop", browser: "Chrome" },
    createdAt: "2026-04-04T18:45:00Z",
  },
  {
    _id: "txn5",
    type: "DEBIT",
    amount: 199,
    status: "Failed",
    otherParty: { name: "Netflix", accountNumber: "ACC55555555" },
    location: { city: "Unknown" },
    device: { deviceType: "mobile", browser: "Chrome" },
    createdAt: "2026-04-03T22:00:00Z",
  },
  {
    _id: "txn6",
    type: "DEBIT",
    amount: 850,
    status: "Success",
    otherParty: { name: "Priya", accountNumber: "ACC44444444" },
    location: { city: "Delhi" },
    device: { deviceType: "mobile", browser: "Chrome" },
    createdAt: "2026-04-02T12:00:00Z",
  },
];

const mockBeneficiaries = [
  { id: 1, name: "Aman Kumar", accountNumber: "ACC99999999", initials: "AK" },
  { id: 2, name: "Rahul Singh", accountNumber: "ACC88888888", initials: "RS" },
  { id: 3, name: "Sneha Gupta", accountNumber: "ACC77777777", initials: "SG" },
];

/* ── HELPERS ───────────────────────────────────── */
const fmt = (n) => "₹" + Number(n).toLocaleString("en-IN");
const fmtDate = (d) =>
  new Date(d).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
const fmtTime = (d) =>
  new Date(d).toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });

const colors = [
  "bg-teal-100 text-teal-700",
  "bg-indigo-100 text-indigo-700",
  "bg-rose-100 text-rose-700",
  "bg-amber-100 text-amber-700",
  "bg-violet-100 text-violet-700",
];

/* ── MAIN COMPONENT ────────────────────────────── */
export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [txnFilter, setTxnFilter] = useState("all");
  const [txnSearch, setTxnSearch] = useState("");
  const [copied, setCopied] = useState(false);
  const [beneficiaries, setBeneficiaries] = useState(mockBeneficiaries);
  const [benForm, setBenForm] = useState({ name: "", accountNumber: "" });
  const [benAdded, setBenAdded] = useState(false);
  const [sendForm, setSendForm] = useState({
    receiverAccountNumber: "",
    amount: "",
    note: "",
  });
  const [sendSuccess, setSendSuccess] = useState(false);
  const [balanceVisible, setBalanceVisible] = useState(true);

  const { user, profile } = mockProfile;

  const navItems = [
    { id: "home", icon: FiHome, label: "Overview" },
    { id: "send", icon: FiSend, label: "Send Money" },
    { id: "transactions", icon: FiList, label: "Transactions" },
    { id: "beneficiaries", icon: FiUsers, label: "Beneficiaries" },
    { id: "account", icon: FiUser, label: "My Account" },
  ];

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const handleSendMoney = (e) => {
    e.preventDefault();
    setSendSuccess(true);
    setTimeout(() => {
      setSendSuccess(false);
      setSendForm({ receiverAccountNumber: "", amount: "", note: "" });
    }, 3000);
  };

  const handleAddBeneficiary = (e) => {
    e.preventDefault();
    setBeneficiaries((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: benForm.name,
        accountNumber: benForm.accountNumber,
        initials: benForm.name
          .split(" ")
          .map((w) => w[0])
          .join("")
          .toUpperCase()
          .slice(0, 2),
      },
    ]);
    setBenAdded(true);
    setBenForm({ name: "", accountNumber: "" });
    setTimeout(() => setBenAdded(false), 2500);
  };

  const filteredTxns = mockTransactions.filter((t) => {
    const matchFilter =
      txnFilter === "all" || t.type.toLowerCase() === txnFilter;
    const matchSearch =
      t.otherParty.name.toLowerCase().includes(txnSearch.toLowerCase()) ||
      t.otherParty.accountNumber
        .toLowerCase()
        .includes(txnSearch.toLowerCase());
    return matchFilter && matchSearch;
  });

  /* ── SIDEBAR ─────────────────────────────────── */
  const Sidebar = () => (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      <aside
        className={`fixed top-0 left-0 h-full z-30 flex flex-col bg-slate-900 w-60 transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2.5 px-6 py-5 border-b border-white/10">
          <div className="w-8 h-8 rounded-lg bg-teal-500/20 border border-teal-400/30 flex items-center justify-center">
            <FiShield size={15} className="text-teal-400" />
          </div>
          <span className="text-white font-bold text-lg tracking-tight">
            NeoVault
          </span>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 ${
                activeTab === item.id
                  ? "bg-teal-600 text-white shadow-md shadow-teal-900/30"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <item.icon size={16} />
              {item.label}
            </button>
          ))}
        </nav>

        {/* User + logout */}
        <div className="px-3 pb-4 border-t border-white/10 pt-4">
          <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/5">
            <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
              {user.name[0]}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-white text-xs font-semibold truncate">
                {user.name}
              </p>
              <p className="text-slate-500 text-[10px] truncate">
                {user.email}
              </p>
            </div>
            <button className="text-slate-500 hover:text-rose-400 transition-colors">
              <FiLogOut size={14} />
            </button>
          </div>
        </div>
      </aside>
    </>
  );

  /* ── TOP BAR ─────────────────────────────────── */
  const TopBar = ({ title }) => (
    <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-slate-100 flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-3">
        <button
          className="lg:hidden text-slate-500 hover:text-slate-800 transition-colors"
          onClick={() => setSidebarOpen(true)}
        >
          <FiMenu size={20} />
        </button>
        <h1 className="text-slate-900 font-bold text-base">{title}</h1>
      </div>
      <div className="flex items-center gap-3">
        <button className="relative w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors">
          <FiBell size={16} className="text-slate-600" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-teal-500 rounded-full border-2 border-white" />
        </button>
        <div className="w-9 h-9 rounded-full bg-teal-600 flex items-center justify-center text-white text-sm font-bold">
          {user.name[0]}
        </div>
      </div>
    </div>
  );

  /* ── OVERVIEW ────────────────────────────────── */
  // Add this import at the top of Dashboard.jsx

  // Add this mock data near your other mock data
  const weeklySpending = [
  { day: "Mon", spent: 320, earned: 300 },
  { day: "Tue", spent: 850, earned: 1000 },
  { day: "Wed", spent: 220, earned: 280 },
  { day: "Thu", spent: 500, earned: 450 },
  { day: "Fri", spent: 300, earned: 1800 },
  { day: "Sat", spent: 430, earned: 400 },
  { day: "Sun", spent: 200, earned: 800 },
];

  // ── REPLACE your entire Overview component with this ──

  const Overview = () => {
    const hour = new Date().getHours();
    const greeting =
      hour < 12
        ? "Good morning"
        : hour < 17
          ? "Good afternoon"
          : "Good evening";
    const totalSpentWeek = weeklySpending.reduce((s, d) => s + d.spent, 0);

    const CustomTooltip = ({ active, payload, label }) => {
      if (!active || !payload?.length) return null;
      return (
        <div className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 shadow-xl">
          <p className="text-slate-400 text-[10px] font-medium mb-1">{label}</p>
          {payload.map((p, i) => (
            <p key={i} className="text-white text-xs font-bold">
              <span style={{ color: p.color }}>● </span>
              {p.name === "spent" ? "Spent" : "Earned"}: {fmt(p.value)}
            </p>
          ))}
        </div>
      );
    };

    return (
      <div className="p-5 sm:p-6 space-y-5">
        {/* ── HERO BALANCE CARD ── */}
        <div
  className="relative rounded-2xl overflow-hidden"
  style={{ background: "linear-gradient(145deg, #080f1a 0%, #0a2a28 45%, #0c1830 100%)" }}
>
  {/* ── Fine mesh grid ── */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: `
        linear-gradient(rgba(45,212,191,0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(45,212,191,0.04) 1px, transparent 1px)
      `,
      backgroundSize: "32px 32px",
    }}
  />

  {/* ── Glows ── */}
  <div className="absolute -top-10 -right-10 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
  <div className="absolute bottom-0 left-0 w-52 h-52 bg-indigo-600/8 rounded-full blur-3xl pointer-events-none" />
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-32 bg-teal-600/5 rounded-full blur-2xl pointer-events-none" />

  {/* ── Top accent line ── */}
  <div
    className="absolute top-0 left-0 right-0 h-px"
    style={{ background: "linear-gradient(90deg, transparent, rgba(45,212,191,0.4), transparent)" }}
  />

  <div className="relative z-10 p-6">

    {/* ── TOP ROW: greeting + shield badge ── */}
    <div className="flex items-start justify-between mb-7">
      <div>
        <p className="text-slate-500 text-[11px] font-medium tracking-wide mb-0.5">{greeting}</p>
        <p className="text-white font-extrabold text-xl leading-tight tracking-tight">
          {user.name} <span className="text-teal-400">.</span>
        </p>
      </div>

      {/* Techy shield badge */}
      <div
        className="flex items-center gap-2 px-3 py-2 rounded-xl border"
        style={{
          background: "rgba(16,185,129,0.06)",
          borderColor: "rgba(16,185,129,0.2)",
          boxShadow: "0 0 12px rgba(16,185,129,0.08)",
        }}
      >
        <div className="relative">
          <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
          </div>
          <div className="absolute inset-0 rounded-full bg-emerald-400/20 animate-ping" />
        </div>
        <div>
          <p className="text-emerald-400 text-[10px] font-bold tracking-wide leading-none">AI SHIELD</p>
          <p className="text-emerald-600 text-[9px] font-medium mt-0.5">ACTIVE</p>
        </div>
      </div>
    </div>

    {/* ── BALANCE BLOCK ── */}
    <div className="mb-5">
      <div className="flex items-center gap-2 mb-2">
        <p className="text-slate-600 text-[10px] font-bold uppercase tracking-[0.18em]">Available Balance</p>
        <div className="h-px flex-1 bg-white/5" />
      </div>

      <div className="flex items-end gap-3">
        <div>
          <span
            className="font-extrabold tracking-tight leading-none"
            style={{
              fontSize: "clamp(2rem, 6vw, 2.75rem)",
              background: "linear-gradient(135deg, #ffffff 0%, #94d1c9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {balanceVisible ? fmt(user.balance) : "₹ ••••••"}
          </span>
        </div>
        <button
          onClick={() => setBalanceVisible(v => !v)}
          className="mb-1.5 w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-500 hover:text-slate-200 transition-all duration-200"
        >
          <FiEye size={13} />
        </button>
      </div>

      {/* Account number row */}
      <div className="flex items-center gap-2.5 mt-2.5">
        <div className="flex items-center gap-1.5 bg-white/[0.04] border border-white/[0.07] rounded-lg px-2.5 py-1.5">
          <span className="text-slate-600 text-[9px] font-bold uppercase tracking-widest">ACC</span>
          <span className="text-slate-400 text-[11px] font-mono tracking-widest">
            {user.accountNumber.replace("ACC", "")}
          </span>
          <button onClick={handleCopy} className="text-slate-600 hover:text-teal-400 transition-colors ml-1">
            {copied
              ? <FiCheck size={11} className="text-emerald-400" />
              : <FiCopy size={11} />}
          </button>
        </div>

        {/* Live pulse indicator */}
        <div className="flex items-center gap-1.5">
          <span className="relative flex">
            <span className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
            <span className="absolute inset-0 w-1.5 h-1.5 bg-teal-400 rounded-full animate-ping opacity-50" />
          </span>
          <span className="text-slate-600 text-[10px] font-medium">Live</span>
        </div>
      </div>
    </div>

    {/* ── DIVIDER with label ── */}
    <div className="flex items-center gap-3 mb-5">
      <div className="h-px flex-1"
        style={{ background: "linear-gradient(90deg, rgba(45,212,191,0.15), transparent)" }} />
      <span className="text-slate-700 text-[9px] font-bold uppercase tracking-[0.2em]">Quick Actions</span>
      <div className="h-px flex-1"
        style={{ background: "linear-gradient(270deg, rgba(45,212,191,0.15), transparent)" }} />
    </div>

    {/* ── QUICK ACTIONS ── */}
    <div className="grid grid-cols-3 gap-3">
      {[
        { label: "Send",     sub: "Transfer",  icon: FiSend,  tab: "send",          from: "#0d9488", to: "#0f766e" },
        { label: "History",  sub: "Activity",  icon: FiList,  tab: "transactions",  from: "#4f46e5", to: "#4338ca" },
        { label: "Payees",   sub: "Manage",    icon: FiUsers, tab: "beneficiaries", from: "#7c3aed", to: "#6d28d9" },
      ].map((a) => (
        <button
          key={a.tab}
          onClick={() => setActiveTab(a.tab)}
          className="group relative flex flex-col items-center gap-2 rounded-xl py-4 overflow-hidden transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = "rgba(255,255,255,0.07)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.14)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "rgba(255,255,255,0.04)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
          }}
        >
          {/* Icon with gradient bg */}
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center shadow-lg"
            style={{ background: `linear-gradient(135deg, ${a.from}, ${a.to})` }}
          >
            <a.icon size={16} className="text-white" />
          </div>

          <div className="text-center">
            <p className="text-slate-200 text-[11px] font-bold leading-none">{a.label}</p>
            <p className="text-slate-600 text-[9px] mt-0.5 font-medium">{a.sub}</p>
          </div>

          {/* Bottom glow on hover */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: `linear-gradient(90deg, transparent, ${a.from}, transparent)` }}
          />
        </button>
      ))}
    </div>
  </div>
</div>

        {/* ── STATS ROW ── */}
        <div className="grid grid-cols-3 gap-3">
          {[
            {
              label: "Money In",
              value: fmt(6000),
              icon: FiArrowDownLeft,
              color: "text-emerald-600",
              bg: "bg-emerald-50",
              border: "border-emerald-100",
              trend: "+12%",
            },
            {
              label: "Money Out",
              value: fmt(1799),
              icon: FiArrowUpRight,
              color: "text-rose-500",
              bg: "bg-rose-50",
              border: "border-rose-100",
              trend: "-4%",
            },
            {
              label: "Transactions",
              value: "6",
              icon: FiZap,
              color: "text-teal-600",
              bg: "bg-teal-50",
              border: "border-teal-100",
              trend: "this wk",
            },
          ].map((s, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl border ${s.border} shadow-sm p-4 hover:shadow-md transition-shadow duration-200`}
            >
              <div
                className={`w-8 h-8 rounded-xl ${s.bg} flex items-center justify-center mb-3`}
              >
                <s.icon size={14} className={s.color} />
              </div>
              <p className="text-slate-900 font-extrabold text-sm sm:text-base leading-none">
                {s.value}
              </p>
              <p className="text-slate-400 text-[10px] mt-1">{s.label}</p>
              <p
                className={`text-[10px] font-semibold mt-1 ${i === 1 ? "text-rose-500" : "text-emerald-600"}`}
              >
                {s.trend}
              </p>
            </div>
          ))}
        </div>

        {/* ── WEEKLY SPENDING CHART ── */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
          {/* Header */}
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-slate-900 font-bold text-sm">
                Weekly Spending
              </h3>
              <p className="text-slate-400 text-[11px] mt-0.5">
                Apr 02 – Apr 08, 2026
              </p>
            </div>
            <div className="text-right">
              <p className="text-slate-900 font-extrabold text-base">
                {fmt(totalSpentWeek)}
              </p>
              <p className="text-slate-400 text-[10px] mt-0.5">
                total this week
              </p>
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-rose-400" />
              <span className="text-slate-500 text-[11px] font-medium">
                Spent
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-teal-400" />
              <span className="text-slate-500 text-[11px] font-medium">
                Received
              </span>
            </div>
          </div>

          {/* Chart */}
          <ResponsiveContainer width="100%" height={160}>
            <BarChart data={weeklySpending} barGap={4} barCategoryGap="30%">
              <CartesianGrid
                vertical={false}
                stroke="#f1f5f9"
                strokeDasharray="3 3"
              />
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 11, fill: "#94a3b8", fontWeight: 600 }}
              />
              <YAxis hide />
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ fill: "#f8fafc", radius: 6 }}
              />
              <Bar
                dataKey="spent"
                name="spent"
                fill="#fb7185"
                radius={[6, 6, 0, 0]}
                maxBarSize={32}
              />
              <Bar
                dataKey="earned"
                name="earned"
                fill="#2dd4bf"
                radius={[6, 6, 0, 0]}
                maxBarSize={32}
              />
            </BarChart>
          </ResponsiveContainer>

          {/* Bottom note */}
          <p className="text-slate-400 text-[10px] mt-3 text-center">
            * Chart will update automatically once your spending API is
            connected
          </p>
        </div>

        {/* ── BOTTOM GRID: Recent Txns + Shield ── */}
        <div className="grid lg:grid-cols-2 gap-5">
          {/* Recent transactions */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-50">
              <h3 className="text-slate-900 font-bold text-sm">
                Recent Activity
              </h3>
              <button
                onClick={() => setActiveTab("transactions")}
                className="text-teal-600 text-xs font-semibold hover:text-teal-700 transition-colors flex items-center gap-1"
              >
                See all <FiChevronRight size={12} />
              </button>
            </div>
            <div className="divide-y divide-slate-50">
              {mockTransactions.slice(0, 4).map((txn) => (
                <div
                  key={txn._id}
                  className="flex items-center gap-3 px-5 py-3.5 hover:bg-slate-50/60 transition-colors"
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${txn.type === "CREDIT" ? "bg-emerald-50" : "bg-rose-50"}`}
                  >
                    {txn.type === "CREDIT" ? (
                      <FiArrowDownLeft size={14} className="text-emerald-500" />
                    ) : (
                      <FiArrowUpRight size={14} className="text-rose-500" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-slate-800 text-xs font-semibold truncate">
                      {txn.otherParty.name}
                    </p>
                    <p className="text-slate-400 text-[10px]">
                      {fmtDate(txn.createdAt)}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <p
                      className={`text-xs font-extrabold ${txn.type === "CREDIT" ? "text-emerald-600" : "text-slate-700"}`}
                    >
                      {txn.type === "CREDIT" ? "+" : "-"}
                      {fmt(txn.amount)}
                    </p>
                    <span
                      className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${txn.status === "Success" ? "text-emerald-700 bg-emerald-50" : "text-rose-700 bg-rose-50"}`}
                    >
                      {txn.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Fraud Shield */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-teal-600 flex items-center justify-center shadow-md shadow-teal-500/20">
                  <FiShield size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-slate-900 font-bold text-sm">
                    AI Fraud Shield
                  </p>
                  <p className="text-slate-400 text-[10px]">
                    200+ signals monitored
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-emerald-700 text-[10px] font-bold">
                  LIVE
                </span>
              </div>
            </div>

            {/* Score bar */}
            <div className="mb-4 p-3.5 bg-slate-50 rounded-xl border border-slate-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-500 text-[11px] font-medium">
                  Trust Score
                </span>
                <span className="text-teal-600 text-sm font-extrabold">
                  94 / 100
                </span>
              </div>
              <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full w-[94%] bg-gradient-to-r from-teal-500 to-emerald-400 rounded-full" />
              </div>
            </div>

            {/* Status checks */}
            <div className="grid grid-cols-2 gap-2 flex-1">
              {[
                { label: "Device Verified", ok: true },
                { label: "Location Trusted", ok: true },
                { label: "Behavior Match", ok: true },
                { label: "Unusual Activity", ok: false },
              ].map((r, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-[11px] font-semibold border ${
                    r.ok
                      ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                      : "bg-slate-50 text-slate-400 border-slate-100"
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${r.ok ? "bg-emerald-200" : "bg-slate-200"}`}
                  >
                    {r.ok ? <FiCheck size={9} /> : <FiX size={9} />}
                  </div>
                  {r.label}
                </div>
              ))}
            </div>

            {/* Last scan */}
            <p className="text-slate-300 text-[10px] text-center mt-3">
              Last scan: just now · Next: every transaction
            </p>
          </div>
        </div>
      </div>
    );
  };

  /* ── SEND MONEY ──────────────────────────────── */
  const SendMoney = () => (
    <div className="p-6 max-w-xl mx-auto space-y-5">
      {/* Quick beneficiary select */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
          Quick Send
        </p>
        <div className="flex gap-3 overflow-x-auto pb-1">
          {beneficiaries.map((b, i) => (
            <button
              key={b.id}
              onClick={() =>
                setSendForm((f) => ({
                  ...f,
                  receiverAccountNumber: b.accountNumber,
                }))
              }
              className={`flex flex-col items-center gap-1.5 shrink-0 p-3 rounded-xl border transition-all duration-200 ${
                sendForm.receiverAccountNumber === b.accountNumber
                  ? "border-teal-400 bg-teal-50"
                  : "border-slate-100 hover:border-slate-200 bg-white"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${colors[i % colors.length]}`}
              >
                {b.initials}
              </div>
              <span className="text-slate-700 text-[11px] font-semibold whitespace-nowrap">
                {b.name.split(" ")[0]}
              </span>
            </button>
          ))}
          <button
            onClick={() => setActiveTab("beneficiaries")}
            className="flex flex-col items-center gap-1.5 shrink-0 p-3 rounded-xl border border-dashed border-slate-200 hover:border-teal-300 transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
              <FiPlus size={16} className="text-slate-400" />
            </div>
            <span className="text-slate-400 text-[11px] font-medium">
              Add New
            </span>
          </button>
        </div>
      </div>

      {/* Send form */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
        <h3 className="text-slate-900 font-bold text-sm mb-5">
          Transfer Details
        </h3>

        {sendSuccess && (
          <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3 mb-5">
            <FiCheck size={16} className="text-emerald-600 shrink-0" />
            <div>
              <p className="text-emerald-800 text-sm font-semibold">
                Transfer Successful!
              </p>
              <p className="text-emerald-600 text-xs">
                Money sent and verified by AI Shield.
              </p>
            </div>
          </div>
        )}

        <form onSubmit={handleSendMoney} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5">
              Receiver Account Number <span className="text-rose-400">*</span>
            </label>
            <div className="relative">
              <MdOutlineAccountBalance
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                placeholder="e.g. ACC99999999"
                value={sendForm.receiverAccountNumber}
                onChange={(e) =>
                  setSendForm((f) => ({
                    ...f,
                    receiverAccountNumber: e.target.value,
                  }))
                }
                className="w-full pl-9 pr-4 py-3 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-400/40 focus:border-teal-400 transition-all duration-200 font-mono tracking-wider"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5">
              Amount (₹) <span className="text-rose-400">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm font-bold">
                ₹
              </span>
              <input
                type="number"
                placeholder="0.00"
                value={sendForm.amount}
                onChange={(e) =>
                  setSendForm((f) => ({ ...f, amount: e.target.value }))
                }
                className="w-full pl-7 pr-4 py-3 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-400/40 focus:border-teal-400 transition-all duration-200"
              />
            </div>
            <div className="flex gap-2 mt-2">
              {[100, 500, 1000, 2000].map((a) => (
                <button
                  key={a}
                  type="button"
                  onClick={() =>
                    setSendForm((f) => ({ ...f, amount: String(a) }))
                  }
                  className="flex-1 py-1.5 text-xs font-semibold text-teal-600 border border-teal-200 bg-teal-50 hover:bg-teal-100 rounded-lg transition-colors"
                >
                  {fmt(a)}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5">
              Note (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Dinner split, rent..."
              value={sendForm.note}
              onChange={(e) =>
                setSendForm((f) => ({ ...f, note: e.target.value }))
              }
              className="w-full px-4 py-3 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-400/40 focus:border-teal-400 transition-all duration-200"
            />
          </div>

          <div className="flex items-start gap-2.5 bg-teal-50 border border-teal-100 rounded-xl px-4 py-3">
            <FiShield size={13} className="text-teal-600 mt-0.5 shrink-0" />
            <p className="text-teal-700 text-[11px] leading-relaxed">
              This transfer will be scanned by AI Shield across 200+ signals
              before processing.
            </p>
          </div>

          <button
            type="submit"
            className="group w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-bold py-3.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg text-sm"
          >
            <FiSend size={15} />
            Send Money Securely
          </button>
        </form>
      </div>
    </div>
  );

  /* ── TRANSACTIONS ─────────────────────────────── */
  const Transactions = () => {
  const totalIn  = mockTransactions.filter(t => t.type === "CREDIT").reduce((s, t) => s + t.amount, 0);
  const totalOut = mockTransactions.filter(t => t.type === "DEBIT").reduce((s, t) => s + t.amount, 0);
  const netFlow  = totalIn - totalOut;

  return (
    <div className="p-5 sm:p-6 space-y-5 max-w-2xl mx-auto">

      {/* ── HEADER ── */}
      <div>
        <h2 className="text-slate-900 font-extrabold text-lg tracking-tight">Transaction History</h2>
        <p className="text-slate-400 text-xs mt-0.5">All your money movement in one place</p>
      </div>

      {/* ── STATS ROW ── */}
      <div className="grid grid-cols-3 gap-3">
        {[
          {
            label: "Total Received", value: fmt(totalIn),
            icon: FiArrowDownLeft,
            gradient: "from-emerald-500 to-teal-500",
            glow: "shadow-emerald-100",
            bg: "bg-gradient-to-br from-emerald-50 to-teal-50",
            border: "border-emerald-100",
            text: "text-emerald-700",
            sub: "text-emerald-500",
          },
          {
            label: "Total Spent", value: fmt(totalOut),
            icon: FiArrowUpRight,
            gradient: "from-rose-500 to-pink-500",
            glow: "shadow-rose-100",
            bg: "bg-gradient-to-br from-rose-50 to-pink-50",
            border: "border-rose-100",
            text: "text-rose-700",
            sub: "text-rose-400",
          },
          {
            label: "Net Flow", value: fmt(netFlow),
            icon: FiTrendingUp,
            gradient: "from-teal-500 to-indigo-500",
            glow: "shadow-teal-100",
            bg: "bg-gradient-to-br from-teal-50 to-indigo-50",
            border: "border-teal-100",
            text: "text-teal-700",
            sub: "text-teal-500",
          },
        ].map((s, i) => (
          <div
            key={i}
            className={`relative rounded-2xl border ${s.border} ${s.bg} p-4 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200`}
          >
            {/* icon top-right */}
            <div className={`absolute top-3 right-3 w-7 h-7 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center shadow-sm opacity-90`}>
              <s.icon size={13} className="text-white" />
            </div>
            <p className={`text-lg font-extrabold ${s.text} leading-none mt-1`}>{s.value}</p>
            <p className={`text-[11px] font-semibold mt-1.5 ${s.sub}`}>{s.label}</p>
          </div>
        ))}
      </div>

      {/* ── FILTERS + SEARCH ── */}
      <div className="flex flex-col sm:flex-row gap-3">
        {/* filter pills */}
        <div
          className="flex p-1 gap-1 rounded-xl border border-slate-200"
          style={{ background: "rgba(248,250,252,0.8)" }}
        >
          {[
            { id: "all",    label: "All",    dot: null },
            { id: "credit", label: "Credit", dot: "bg-emerald-400" },
            { id: "debit",  label: "Debit",  dot: "bg-rose-400" },
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setTxnFilter(f.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all duration-200 ${
                txnFilter === f.id
                  ? "bg-slate-900 text-white shadow-md"
                  : "text-slate-500 hover:text-slate-800 hover:bg-white"
              }`}
            >
              {f.dot && <span className={`w-1.5 h-1.5 rounded-full ${txnFilter === f.id ? "bg-white/60" : f.dot}`} />}
              {f.label}
            </button>
          ))}
        </div>

        {/* search */}
        <div className="relative flex-1">
          <FiSearch size={13} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search by name or account..."
            value={txnSearch}
            onChange={e => setTxnSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 text-sm bg-white border border-slate-200 rounded-xl placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-400/30 focus:border-teal-400 transition-all duration-200 shadow-sm"
          />
          {txnSearch && (
            <button
              onClick={() => setTxnSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-slate-200 hover:bg-slate-300 flex items-center justify-center transition-colors"
            >
              <FiX size={9} className="text-slate-600" />
            </button>
          )}
        </div>
      </div>

      {/* ── RESULTS COUNT ── */}
      <div className="flex items-center gap-2">
        <p className="text-slate-400 text-xs font-medium">
          Showing <span className="text-slate-700 font-bold">{filteredTxns.length}</span> transaction{filteredTxns.length !== 1 ? "s" : ""}
        </p>
        <div className="h-px flex-1 bg-slate-100" />
      </div>

      {/* ── LIST ── */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        {filteredTxns.length === 0 ? (
          <div className="flex flex-col items-center py-16 gap-3">
            <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center">
              <FiList size={22} className="text-slate-300" />
            </div>
            <div className="text-center">
              <p className="text-slate-600 font-bold text-sm">No transactions found</p>
              <p className="text-slate-400 text-xs mt-1">Try adjusting your filters or search</p>
            </div>
            <button
              onClick={() => { setTxnFilter("all"); setTxnSearch(""); }}
              className="text-xs font-semibold text-teal-600 hover:text-teal-700 border border-teal-200 bg-teal-50 hover:bg-teal-100 px-4 py-1.5 rounded-lg transition-colors"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div>
            {filteredTxns.map((txn, idx) => (
              <div
                key={txn._id}
                className="group flex items-center gap-4 px-5 py-4 hover:bg-slate-50/80 transition-all duration-150 cursor-default"
                style={{ borderBottom: idx < filteredTxns.length - 1 ? "1px solid #f8fafc" : "none" }}
              >
                {/* Avatar circle */}
                <div className="relative shrink-0">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-sm shadow-sm ${
                      txn.type === "CREDIT"
                        ? "bg-gradient-to-br from-emerald-400 to-teal-500 text-white"
                        : "bg-gradient-to-br from-slate-100 to-slate-200 text-slate-500"
                    }`}
                  >
                    {txn.otherParty.name[0]}
                  </div>
                  {/* Credit/debit indicator dot */}
                  <div
                    className={`absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-white flex items-center justify-center ${
                      txn.type === "CREDIT" ? "bg-emerald-400" : "bg-rose-400"
                    }`}
                  >
                    {txn.type === "CREDIT"
                      ? <FiArrowDownLeft size={8} className="text-white" />
                      : <FiArrowUpRight  size={8} className="text-white" />}
                  </div>
                </div>

                {/* Middle info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-slate-800 text-sm font-bold truncate">{txn.otherParty.name}</p>
                    <span
                      className={`text-[9px] font-extrabold px-2 py-0.5 rounded-full shrink-0 tracking-wide ${
                        txn.status === "Success"
                          ? "text-emerald-700 bg-emerald-50 border border-emerald-200"
                          : "text-rose-700 bg-rose-50 border border-rose-200"
                      }`}
                    >
                      {txn.status === "Success" ? "✓ Success" : "✕ Failed"}
                    </span>
                  </div>

                  {/* Sub-row */}
                  <div className="flex items-center gap-2.5 mt-1 flex-wrap">
                    <span className="text-slate-400 text-[10px] font-mono tracking-wider bg-slate-50 border border-slate-100 px-1.5 py-0.5 rounded-md">
                      {txn.otherParty.accountNumber}
                    </span>
                    {txn.location?.city && (
                      <span className="flex items-center gap-1 text-slate-400 text-[10px] font-medium">
                        <FiMapPin size={9} className="text-slate-300" />
                        {txn.location.city}
                      </span>
                    )}
                    {txn.device?.browser && (
                      <span className="flex items-center gap-1 text-slate-400 text-[10px] font-medium">
                        <FiSmartphone size={9} className="text-slate-300" />
                        {txn.device.browser}
                      </span>
                    )}
                  </div>
                </div>

                {/* Right: amount + date */}
                <div className="text-right shrink-0">
                  <p
                    className={`text-sm font-extrabold tracking-tight ${
                      txn.type === "CREDIT" ? "text-emerald-600" : "text-slate-800"
                    }`}
                  >
                    {txn.type === "CREDIT" ? "+" : "−"}{fmt(txn.amount)}
                  </p>
                  <p className="text-slate-400 text-[10px] font-medium mt-0.5">{fmtDate(txn.createdAt)}</p>
                  <p className="text-slate-300 text-[10px]">{fmtTime(txn.createdAt)}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ── FOOTER ── */}
      {filteredTxns.length > 0 && (
        <p className="text-center text-slate-400 text-[11px] pb-2">
          Showing all {filteredTxns.length} transactions · <span className="text-teal-500 font-semibold cursor-pointer hover:text-teal-600">Load more</span>
        </p>
      )}
    </div>
  );
};

  /* ── BENEFICIARIES ───────────────────────────── */
  const Beneficiaries = () => (
    <div className="p-6 max-w-xl mx-auto space-y-5">
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
        <h3 className="text-slate-900 font-bold text-sm mb-5 flex items-center gap-2">
          <FiPlus size={15} className="text-teal-600" /> Add New Beneficiary
        </h3>

        {benAdded && (
          <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3 mb-4">
            <FiCheck size={15} className="text-emerald-600 shrink-0" />
            <p className="text-emerald-800 text-sm font-semibold">
              Beneficiary added successfully!
            </p>
          </div>
        )}

        <form onSubmit={handleAddBeneficiary} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5">
              Full Name <span className="text-rose-400">*</span>
            </label>
            <div className="relative">
              <FiUser
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                placeholder="e.g. Aman Kumar"
                value={benForm.name}
                onChange={(e) =>
                  setBenForm((f) => ({ ...f, name: e.target.value }))
                }
                className="w-full pl-9 pr-4 py-3 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-400/40 focus:border-teal-400 transition-all duration-200"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5">
              Account Number <span className="text-rose-400">*</span>
            </label>
            <div className="relative">
              <MdOutlineAccountBalance
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                placeholder="e.g. ACC99999999"
                value={benForm.accountNumber}
                onChange={(e) =>
                  setBenForm((f) => ({ ...f, accountNumber: e.target.value }))
                }
                className="w-full pl-9 pr-4 py-3 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-400/40 focus:border-teal-400 transition-all duration-200 font-mono tracking-wider"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 rounded-xl transition-all duration-200 shadow-md text-sm"
          >
            <FiUsers size={15} /> Add Beneficiary
          </button>
        </form>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-50">
          <h3 className="text-slate-900 font-bold text-sm">
            Saved Beneficiaries ({beneficiaries.length})
          </h3>
        </div>
        {beneficiaries.length === 0 ? (
          <div className="flex flex-col items-center py-12 text-slate-400">
            <FiUsers size={28} className="mb-3 text-slate-200" />
            <p className="text-sm font-semibold">No beneficiaries yet</p>
          </div>
        ) : (
          <div className="divide-y divide-slate-50">
            {beneficiaries.map((b, i) => (
              <div
                key={b.id}
                className="flex items-center gap-4 px-5 py-4 hover:bg-slate-50/60 transition-colors"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${colors[i % colors.length]}`}
                >
                  {b.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-slate-800 text-sm font-semibold">
                    {b.name}
                  </p>
                  <p className="text-slate-400 text-[11px] font-mono">
                    {b.accountNumber}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setActiveTab("send");
                    setSendForm((f) => ({
                      ...f,
                      receiverAccountNumber: b.accountNumber,
                    }));
                  }}
                  className="flex items-center gap-1.5 text-xs font-semibold text-teal-600 hover:text-teal-800 bg-teal-50 hover:bg-teal-100 border border-teal-200 px-3 py-1.5 rounded-lg transition-colors"
                >
                  <FiSend size={11} /> Send
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  /* ── ACCOUNT DETAILS ─────────────────────────── */
  const Account = () => (
  <div className="p-5 sm:p-6 space-y-5 max-w-xl mx-auto">

    {/* ── PROFILE HERO CARD ── */}
    <div
      className="relative rounded-2xl overflow-hidden"
      style={{ background: "linear-gradient(145deg, #080f1a 0%, #0a2a28 50%, #0c1830 100%)" }}
    >
      {/* mesh grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(45,212,191,0.04) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(45,212,191,0.04) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />
      {/* top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(45,212,191,0.5), transparent)" }}
      />
      {/* glows */}
      <div className="absolute -top-8 -right-8 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-36 h-36 bg-indigo-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 p-6">
        {/* Avatar + name row */}
        <div className="flex items-center gap-5 mb-6">
          {/* Avatar with ring */}
          <div className="relative shrink-0">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl font-extrabold"
              style={{ background: "linear-gradient(135deg, #0d9488, #0f766e)" }}
            >
              {user.name[0]}
            </div>
            <div
              className="absolute -inset-1 rounded-[18px] -z-10 opacity-40"
              style={{ background: "linear-gradient(135deg, #2dd4bf, #6366f1)" }}
            />
            {/* online dot */}
            <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2"
              style={{ borderColor: "#080f1a" }} />
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-white font-extrabold text-xl tracking-tight leading-none">{user.name}</p>
            <p className="text-slate-500 text-sm mt-1 truncate">{user.email}</p>
            <div className="flex items-center gap-1.5 mt-2">
              <span className="relative flex">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                <span className="absolute inset-0 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping opacity-50" />
              </span>
              <span className="text-emerald-400 text-[11px] font-bold tracking-wide">ACCOUNT ACTIVE</span>
            </div>
          </div>

          {/* KYC badge */}
          <div
            className="shrink-0 px-3 py-1.5 rounded-xl border text-center"
            style={{ background: "rgba(45,212,191,0.08)", borderColor: "rgba(45,212,191,0.2)" }}
          >
            <FiShield size={14} className="text-teal-400 mx-auto mb-0.5" />
            <p className="text-teal-400 text-[9px] font-extrabold tracking-widest">KYC FREE</p>
          </div>
        </div>

        {/* Balance strip */}
        <div
          className="rounded-xl px-4 py-3.5 flex items-center justify-between"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div>
            <p className="text-slate-600 text-[10px] font-bold uppercase tracking-[0.16em] mb-1">Available Balance</p>
            <p
              className="text-2xl font-extrabold tracking-tight leading-none"
              style={{
                background: "linear-gradient(135deg, #fff 0%, #94d1c9 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {fmt(user.balance)}
            </p>
          </div>
          <div className="text-right">
            <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest mb-1">Account</p>
            <div className="flex items-center gap-1.5">
              <span className="text-slate-400 text-[11px] font-mono tracking-widest">{user.accountNumber}</span>
              <button onClick={handleCopy} className="text-slate-600 hover:text-teal-400 transition-colors">
                {copied ? <FiCheck size={11} className="text-emerald-400" /> : <FiCopy size={11} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* ── ACCOUNT DETAILS ── */}
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      {/* section header */}
      <div className="flex items-center gap-2.5 px-5 py-4 border-b border-slate-50">
        <div className="w-6 h-6 rounded-lg bg-teal-50 flex items-center justify-center">
          <MdOutlineAccountBalance size={12} className="text-teal-600" />
        </div>
        <p className="text-xs font-extrabold text-slate-700 uppercase tracking-widest">Account Details</p>
      </div>

      <div className="divide-y divide-slate-50/80">
        {[
          {
            icon: MdOutlineAccountBalance,
            label: "Account Number",
            value: user.accountNumber,
            mono: true, copy: true,
            iconBg: "bg-teal-50", iconColor: "text-teal-600",
          },
          {
            icon: FiTrendingUp,
            label: "Available Balance",
            value: fmt(user.balance),
            highlight: true,
            iconBg: "bg-emerald-50", iconColor: "text-emerald-600",
          },
          {
            icon: FiPhone,
            label: "Phone Number",
            value: user.phone,
            iconBg: "bg-indigo-50", iconColor: "text-indigo-600",
          },
          {
            icon: FiMail,
            label: "Email Address",
            value: user.email,
            iconBg: "bg-violet-50", iconColor: "text-violet-600",
          },
        ].map((row, i) => (
          <div key={i} className="flex items-center gap-4 px-5 py-4 hover:bg-slate-50/40 transition-colors">
            <div className={`w-9 h-9 rounded-xl ${row.iconBg} flex items-center justify-center shrink-0`}>
              <row.icon size={15} className={row.iconColor} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-slate-400 text-[10px] font-semibold uppercase tracking-widest">{row.label}</p>
              <p className={`mt-0.5 truncate font-bold ${
                row.highlight
                  ? "text-emerald-600 text-lg"
                  : row.mono
                    ? "text-slate-800 text-sm font-mono tracking-widest"
                    : "text-slate-800 text-sm"
              }`}>
                {row.value}
              </p>
            </div>
            {row.copy && (
              <button
                onClick={handleCopy}
                className="w-8 h-8 rounded-xl bg-slate-50 hover:bg-teal-50 border border-slate-100 hover:border-teal-200 flex items-center justify-center text-slate-400 hover:text-teal-600 transition-all duration-200"
              >
                {copied ? <FiCheck size={12} className="text-emerald-500" /> : <FiCopy size={12} />}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>

    {/* ── PERSONAL INFO ── */}
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      <div className="flex items-center gap-2.5 px-5 py-4 border-b border-slate-50">
        <div className="w-6 h-6 rounded-lg bg-indigo-50 flex items-center justify-center">
          <FiUser size={12} className="text-indigo-600" />
        </div>
        <p className="text-xs font-extrabold text-slate-700 uppercase tracking-widest">Personal Info</p>
      </div>

      {/* 2-col grid layout */}
      <div className="grid grid-cols-2 divide-x divide-slate-50">
        {[
          { icon: FiCalendar, label: "Date of Birth",  value: fmtDate(profile.dob),                          iconBg: "bg-amber-50",   iconColor: "text-amber-600" },
          { icon: FiUser,     label: "Gender",          value: profile.gender,                                  iconBg: "bg-violet-50",  iconColor: "text-violet-600" },
        ].map((row, i) => (
          <div key={i} className="flex items-center gap-3 px-5 py-4">
            <div className={`w-8 h-8 rounded-xl ${row.iconBg} flex items-center justify-center shrink-0`}>
              <row.icon size={13} className={row.iconColor} />
            </div>
            <div className="min-w-0">
              <p className="text-slate-400 text-[10px] font-semibold uppercase tracking-widest">{row.label}</p>
              <p className="text-slate-800 text-sm font-bold mt-0.5 truncate">{row.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-50">
        <div className="flex items-center gap-3 px-5 py-4">
          <div className="w-8 h-8 rounded-xl bg-rose-50 flex items-center justify-center shrink-0">
            <FiMapPin size={13} className="text-rose-500" />
          </div>
          <div>
            <p className="text-slate-400 text-[10px] font-semibold uppercase tracking-widest">Location</p>
            <p className="text-slate-800 text-sm font-bold mt-0.5">{profile.address.city}, {profile.address.state}</p>
          </div>
          <div className="ml-auto px-2.5 py-1 bg-emerald-50 border border-emerald-100 rounded-full">
            <p className="text-emerald-600 text-[10px] font-bold">Verified ✓</p>
          </div>
        </div>
      </div>
    </div>

    {/* ── SECURITY ── */}
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-50">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-lg bg-rose-50 flex items-center justify-center">
            <FiShield size={12} className="text-rose-500" />
          </div>
          <p className="text-xs font-extrabold text-slate-700 uppercase tracking-widest">Security</p>
        </div>
        <div className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-emerald-700 text-[10px] font-bold">Protected</span>
        </div>
      </div>

      <div className="divide-y divide-slate-50/80">
        {[
          {
            icon: FiLock,
            label: "Change Password",
            desc: "Last changed 30 days ago",
            iconBg: "bg-rose-50",    iconColor: "text-rose-500",
            tag: null,
          },
          {
            icon: FiSmartphone,
            label: "Trusted Devices",
            desc: "2 devices registered",
            iconBg: "bg-indigo-50",  iconColor: "text-indigo-600",
            tag: "2",
          },
          {
            icon: FiGlobe,
            label: "Login Activity",
            desc: "Last login: Delhi · Chrome",
            iconBg: "bg-teal-50",    iconColor: "text-teal-600",
            tag: null,
          },
        ].map((row, i) => (
          <button
            key={i}
            className="w-full flex items-center gap-4 px-5 py-4 hover:bg-slate-50/60 transition-all duration-150 text-left group"
          >
            <div className={`w-9 h-9 rounded-xl ${row.iconBg} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200`}>
              <row.icon size={15} className={row.iconColor} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-slate-800 text-sm font-bold">{row.label}</p>
              <p className="text-slate-400 text-[11px] mt-0.5">{row.desc}</p>
            </div>
            {row.tag && (
              <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 text-[10px] font-extrabold flex items-center justify-center">
                {row.tag}
              </span>
            )}
            <div className="w-7 h-7 rounded-lg bg-slate-50 group-hover:bg-slate-100 border border-slate-100 flex items-center justify-center transition-colors">
              <FiChevronRight size={12} className="text-slate-400 group-hover:text-slate-600 transition-colors" />
            </div>
          </button>
        ))}
      </div>
    </div>

    {/* ── DANGER ZONE ── */}
    <div
      className="rounded-2xl border p-5"
      style={{ background: "rgba(254,242,242,0.5)", borderColor: "rgba(252,165,165,0.3)" }}
    >
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-xl bg-rose-100 flex items-center justify-center shrink-0 mt-0.5">
          <FiAlertCircle size={14} className="text-rose-500" />
        </div>
        <div className="flex-1">
          <p className="text-rose-700 text-sm font-bold">Close Account</p>
          <p className="text-rose-400 text-[11px] mt-0.5 leading-relaxed">
            Permanently delete your NeoVault account and all associated data. This action is irreversible.
          </p>
        </div>
        <button className="shrink-0 px-3 py-1.5 text-[11px] font-bold text-rose-600 border border-rose-200 bg-white hover:bg-rose-50 rounded-lg transition-colors">
          Close
        </button>
      </div>
    </div>

  </div>
);

  /* ── RENDER ──────────────────────────────────── */
  const tabTitles = {
    home: "Overview",
    send: "Send Money",
    transactions: "Transaction History",
    beneficiaries: "Beneficiaries",
    account: "My Account",
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 lg:ml-60">
        <TopBar title={tabTitles[activeTab]} />

        <main className="flex-1 overflow-y-auto pb-24 lg:pb-6">
          {activeTab === "home" && <Overview />}
          {activeTab === "send" && <SendMoney />}
          {activeTab === "transactions" && <Transactions />}
          {activeTab === "beneficiaries" && <Beneficiaries />}
          {activeTab === "account" && <Account />}
        </main>
      </div>

      {/* Mobile bottom nav */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-20 bg-white border-t border-slate-100 flex">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex-1 flex flex-col items-center gap-1 py-3 transition-colors ${
              activeTab === item.id
                ? "text-teal-600"
                : "text-slate-400 hover:text-slate-600"
            }`}
          >
            <item.icon size={18} />
            <span className="text-[10px] font-semibold">
              {item.label.split(" ")[0]}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
