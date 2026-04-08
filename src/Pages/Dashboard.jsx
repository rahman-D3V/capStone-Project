import { useState } from "react";
import {
  FiHome, FiCreditCard, FiSend, FiPieChart, FiSettings,
  FiLogOut, FiBell, FiSearch, FiArrowUpRight, FiArrowDownLeft,
  FiEye, FiEyeOff, FiChevronRight, FiTrendingUp, FiUsers,
  FiShield, FiRefreshCw, FiDownload, FiSmartphone, FiWifi,
  FiZap, FiCheck, FiPlus,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, PieChart, Pie, Cell,
} from "recharts";

// ─── MOCK DATA ────────────────────────────────────────────────────────────────
const user = {
  name: "Raushan Kumar",
  email: "raushan@gmail.com",
  phone: "+91 98765 43210",
  accountNumber: "ACC12345678",
  ifsc: "SVRN0001234",
  balance: 10000,
  profile: { dob: "2002-01-01", gender: "Male", address: { city: "Delhi", state: "Delhi" } },
};

const transactions = [
  { _id: "txn1", type: "DEBIT",  amount: 500,  otherParty: { name: "Aman Sharma"   }, category: "Transfer",  createdAt: "2026-03-19T10:00:00Z" },
  { _id: "txn2", type: "CREDIT", amount: 1000, otherParty: { name: "Rahul Verma"   }, category: "Received",  createdAt: "2026-03-18T14:30:00Z" },
  { _id: "txn3", type: "DEBIT",  amount: 2500, otherParty: { name: "Priya Singh"   }, category: "Shopping",  createdAt: "2026-03-17T09:15:00Z" },
  { _id: "txn4", type: "CREDIT", amount: 5000, otherParty: { name: "Arjun Mehta"   }, category: "Salary",    createdAt: "2026-03-15T17:00:00Z" },
  { _id: "txn5", type: "DEBIT",  amount: 300,  otherParty: { name: "Sneha Reddy"   }, category: "Food",      createdAt: "2026-03-14T12:45:00Z" },
  { _id: "txn6", type: "DEBIT",  amount: 800,  otherParty: { name: "Netflix India" }, category: "Bills",     createdAt: "2026-03-13T08:00:00Z" },
];

const spendingData = [
  { month: "Oct", income: 8000,  expense: 5200 },
  { month: "Nov", income: 9500,  expense: 6100 },
  { month: "Dec", income: 7800,  expense: 7300 },
  { month: "Jan", income: 11000, expense: 5800 },
  { month: "Feb", income: 9200,  expense: 4900 },
  { month: "Mar", income: 10000, expense: 4100 },
];

const balanceTrend = [
  { day: "14", bal: 6200 }, { day: "15", bal: 8700 }, { day: "16", bal: 7900 },
  { day: "17", bal: 5400 }, { day: "18", bal: 6400 }, { day: "19", bal: 9900 },
  { day: "20", bal: 10000 },
];

const pieData = [
  { name: "Shopping", value: 35, color: "#2563eb" },
  { name: "Food",     value: 20, color: "#60a5fa" },
  { name: "Bills",    value: 25, color: "#93c5fd" },
  { name: "Transfer", value: 20, color: "#bfdbfe" },
];

const quickSendList = [
  { name: "Aman",  initial: "A",  color: "#1e40af" },
  { name: "Rahul", initial: "R",  color: "#1d4ed8" },
  { name: "Priya", initial: "P",  color: "#2563eb" },
  { name: "Arjun", initial: "Ar", color: "#3b82f6" },
];

const navItems = [
  { icon: FiHome,       label: "Dashboard",     active: true  },
  { icon: FiCreditCard, label: "Cards",         active: false },
  { icon: FiSend,       label: "Payments",      active: false },
  { icon: FiPieChart,   label: "Analytics",     active: false },
  { icon: FiUsers,      label: "Beneficiaries", active: false },
  { icon: FiSettings,   label: "Settings",      active: false },
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────
const inr  = (n) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
const shortInr = (n) => `₹${n >= 1000 ? (n / 1000).toFixed(0) + "k" : n}`;
const fmtDate  = (iso) => new Date(iso).toLocaleDateString("en-IN", { day: "2-digit", month: "short" });
const initials = (n) => n.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2);

const catMeta = {
  Transfer: { bg: "#dbeafe", color: "#1d4ed8", Icon: FiSend         },
  Received: { bg: "#dcfce7", color: "#15803d", Icon: FiArrowDownLeft },
  Shopping: { bg: "#ede9fe", color: "#7c3aed", Icon: FiCreditCard    },
  Salary:   { bg: "#dcfce7", color: "#15803d", Icon: FiTrendingUp    },
  Food:     { bg: "#ffedd5", color: "#c2410c", Icon: FiZap           },
  Bills:    { bg: "#e0f2fe", color: "#0369a1", Icon: FiWifi          },
};

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 10, padding: "10px 14px", boxShadow: "0 8px 24px rgba(37,99,235,0.14)" }}>
      <p style={{ color: "#64748b", fontSize: 11, marginBottom: 4 }}>{label}</p>
      {payload.map((p, i) => (
        <p key={i} style={{ color: p.color, fontWeight: 700, fontSize: 13 }}>{p.name}: {shortInr(p.value)}</p>
      ))}
    </div>
  );
};

// ─── SIDEBAR ─────────────────────────────────────────────────────────────────
function Sidebar({ active, setActive }) {
  return (
    <aside style={{
      width: 230, minHeight: "100vh", background: "linear-gradient(180deg,#1e3a8a 0%,#1e40af 100%)",
      display: "flex", flexDirection: "column", padding: "24px 0",
      position: "fixed", left: 0, top: 0, zIndex: 100,
      boxShadow: "4px 0 32px rgba(30,64,175,0.22)",
    }}>
      {/* Logo */}
      <div style={{ padding: "0 20px 28px", borderBottom: "1px solid rgba(255,255,255,0.10)", marginBottom: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <FiShield size={18} color="#fff" />
          </div>
          <div>
            <div style={{ color: "#fff", fontWeight: 900, fontSize: 13, letterSpacing: "0.06em" }}>SOVEREIGN</div>
            <div style={{ color: "#93c5fd", fontSize: 9.5, letterSpacing: "0.18em" }}>BANK</div>
          </div>
        </div>
      </div>

      {/* Nav links */}
      <nav style={{ flex: 1, padding: "0 10px", display: "flex", flexDirection: "column", gap: 3 }}>
        {navItems.map((item) => {
          const isActive = active === item.label;
          return (
            <button key={item.label} onClick={() => setActive(item.label)}
              style={{
                display: "flex", alignItems: "center", gap: 11, padding: "10px 13px",
                borderRadius: 10, border: "none", cursor: "pointer", width: "100%", textAlign: "left",
                background: isActive ? "rgba(255,255,255,0.16)" : "transparent",
                color: isActive ? "#fff" : "#93c5fd",
                fontWeight: isActive ? 700 : 500, fontSize: 13,
                transition: "all 0.16s",
                boxShadow: isActive ? "inset 0 0 0 1px rgba(255,255,255,0.1)" : "none",
              }}
              onMouseEnter={e => { if (!isActive) { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "#fff"; }}}
              onMouseLeave={e => { if (!isActive) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#93c5fd"; }}}
            >
              <item.icon size={16} />
              <span style={{ flex: 1 }}>{item.label}</span>
              {isActive && <FiChevronRight size={13} />}
            </button>
          );
        })}
      </nav>

      {/* User chip */}
      <div style={{ padding: "0 12px", marginTop: 20 }}>
        <div style={{ background: "rgba(255,255,255,0.10)", borderRadius: 12, padding: "12px", display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 34, height: 34, borderRadius: "50%", background: "rgba(255,255,255,0.22)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 900, fontSize: 12 }}>
            {initials(user.name)}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ color: "#fff", fontWeight: 700, fontSize: 12, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{user.name.split(" ")[0]}</div>
            <div style={{ color: "#93c5fd", fontSize: 10 }}>Personal</div>
          </div>
          <FiLogOut size={14} color="#93c5fd" style={{ cursor: "pointer", flexShrink: 0 }} />
        </div>
      </div>
    </aside>
  );
}

// ─── TOPBAR ──────────────────────────────────────────────────────────────────
function Topbar() {
  const day = new Date().toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  const hour = new Date().getHours();
  const greet = hour < 12 ? "Good Morning" : hour < 17 ? "Good Afternoon" : "Good Evening";

  return (
    <header style={{
      height: 66, background: "#fff", borderBottom: "1px solid #e2e8f0",
      display: "flex", alignItems: "center", padding: "0 28px", gap: 16,
      position: "sticky", top: 0, zIndex: 50,
      boxShadow: "0 2px 12px rgba(37,99,235,0.06)",
    }}>
      <div>
        <p style={{ color: "#1e293b", fontWeight: 800, fontSize: 16, margin: 0 }}>
          {greet}, {user.name.split(" ")[0]} 👋
        </p>
        <p style={{ color: "#94a3b8", fontSize: 11, margin: 0 }}>{day}</p>
      </div>

      <div style={{ flex: 1, maxWidth: 300, marginLeft: "auto", display: "flex", alignItems: "center", gap: 8, background: "#f1f5f9", borderRadius: 10, padding: "8px 14px" }}>
        <FiSearch size={13} color="#94a3b8" />
        <input placeholder="Search transactions…" style={{ border: "none", background: "transparent", outline: "none", fontSize: 13, color: "#334155", flex: 1, width: "100%" }} />
      </div>

      <button style={{ width: 38, height: 38, borderRadius: 10, border: "1.5px solid #e2e8f0", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", position: "relative" }}>
        <FiBell size={15} color="#1e40af" />
        <span style={{ position: "absolute", top: 8, right: 8, width: 6, height: 6, borderRadius: "50%", background: "#ef4444", border: "1.5px solid #fff" }} />
      </button>

      <Link to={"/profile"} style={{ display: "flex", alignItems: "center", gap: 9, paddingLeft: 12, borderLeft: "1px solid #e2e8f0" }}>
        <div style={{ width: 34, height: 34, borderRadius: "50%", background: "linear-gradient(135deg,#1e40af,#3b82f6)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: 12 }}>
          {initials(user.name)}
        </div>
        <Link to={"/profile"}>
          <p style={{ color: "#1e293b", fontWeight: 700, fontSize: 12, margin: 0 }}>{user.name.split(" ")[0]}</p>
          <p style={{ color: "#94a3b8", fontSize: 10, margin: 0 }}>Personal</p>
        </Link>
      </Link>
    </header>
  );
}

// ─── BALANCE CARD ────────────────────────────────────────────────────────────
function BalanceCard() {
  const [hidden, setHidden] = useState(false);
  return (
    <div style={{
      background: "linear-gradient(135deg,#1e3a8a 0%,#1e40af 45%,#2563eb 100%)",
      borderRadius: 20, padding: "26px 26px 22px", position: "relative", overflow: "hidden",
      boxShadow: "0 20px 60px rgba(30,64,175,0.32)",
    }}>
      <div style={{ position: "absolute", top: -50, right: -50, width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,0.05)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: 20, right: 20, width: 120, height: 120, borderRadius: "50%", background: "rgba(255,255,255,0.05)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -30, left: 100, width: 140, height: 140, borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 22, position: "relative" }}>
        <div>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", margin: "0 0 3px" }}>Savings Account</p>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 10, margin: 0, fontFamily: "monospace" }}>{user.accountNumber} · IFSC {user.ifsc}</p>
        </div>
        <div style={{ background: "rgba(74,222,128,0.2)", border: "1px solid rgba(74,222,128,0.4)", borderRadius: 20, padding: "4px 12px", display: "flex", alignItems: "center", gap: 5 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
          <span style={{ color: "#4ade80", fontSize: 11, fontWeight: 600 }}>Active</span>
        </div>
      </div>

      <div style={{ marginBottom: 24, position: "relative" }}>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 10.5, textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 6px" }}>Available Balance</p>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{ color: "#fff", fontWeight: 900, fontSize: 36, letterSpacing: "-1.5px", lineHeight: 1, fontFamily: "'Playfair Display', Georgia, serif" }}>
            {hidden ? "₹ ••••••" : inr(user.balance)}
          </span>
          <button onClick={() => setHidden(!hidden)}
            style={{ background: "rgba(255,255,255,0.14)", border: "none", borderRadius: 8, padding: "6px 10px", cursor: "pointer", color: "#fff", display: "flex", alignItems: "center" }}>
            {hidden ? <FiEyeOff size={14} /> : <FiEye size={14} />}
          </button>
        </div>
      </div>

      <div style={{ display: "flex", gap: 24, paddingTop: 18, borderTop: "1px solid rgba(255,255,255,0.12)", position: "relative" }}>
        {[
          { label: "Income",       val: "+₹6,000", color: "#4ade80" },
          { label: "Spent",        val: "−₹4,100", color: "#fca5a5" },
          { label: "Savings",      val: "59%",      color: "#93c5fd" },
        ].map(s => (
          <div key={s.label}>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 9.5, textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 3px" }}>{s.label}</p>
            <p style={{ color: s.color, fontWeight: 800, fontSize: 14, margin: 0 }}>{s.val}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── STAT CARD ───────────────────────────────────────────────────────────────
function StatCard({ Icon, label, value, sub, iconColor, iconBg, trend }) {
  return (
    <div style={{ background: "#fff", borderRadius: 16, padding: "20px", boxShadow: "0 2px 16px rgba(37,99,235,0.07)", border: "1px solid #e2e8f0" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
        <div style={{ width: 40, height: 40, borderRadius: 11, background: iconBg, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon size={18} color={iconColor} />
        </div>
        {trend && (
          <div style={{ background: trend > 0 ? "#dcfce7" : "#fee2e2", borderRadius: 8, padding: "3px 8px", fontSize: 11, fontWeight: 700, color: trend > 0 ? "#15803d" : "#dc2626" }}>
            {trend > 0 ? "↑" : "↓"} {Math.abs(trend)}%
          </div>
        )}
      </div>
      <p style={{ color: "#1e293b", fontWeight: 800, fontSize: 20, margin: "0 0 3px", letterSpacing: "-0.5px" }}>{value}</p>
      <p style={{ color: "#94a3b8", fontSize: 12, margin: 0 }}>{label}</p>
      {sub && <p style={{ color: "#cbd5e1", fontSize: 10, margin: "3px 0 0" }}>{sub}</p>}
    </div>
  );
}

// ─── QUICK ACTIONS ───────────────────────────────────────────────────────────
function QuickActions() {
  const [active, setActive] = useState(null);
  const actions = [
    { Icon: FiSend,       label: "Send",     color: "#1d4ed8", bg: "#dbeafe" },
    { Icon: FiDownload,   label: "Request",  color: "#0369a1", bg: "#e0f2fe" },
    { Icon: FiRefreshCw,  label: "Recharge", color: "#7c3aed", bg: "#ede9fe" },
    { Icon: FiSmartphone, label: "Pay Bills",color: "#0f766e", bg: "#ccfbf1" },
    { Icon: FiPlus,       label: "Add Money",color: "#15803d", bg: "#dcfce7" },
  ];
  return (
    <div style={{ background: "#fff", borderRadius: 16, padding: "20px 22px", boxShadow: "0 2px 16px rgba(37,99,235,0.07)", border: "1px solid #e2e8f0" }}>
      <p style={{ color: "#1e293b", fontWeight: 700, fontSize: 14, margin: "0 0 16px" }}>Quick Actions</p>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        {actions.map((a) => (
          <button key={a.label} onClick={() => setActive(a.label)}
            style={{
              display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
              background: active === a.label ? a.bg : "#f8fafc",
              border: `1.5px solid ${active === a.label ? a.color : "#e2e8f0"}`,
              borderRadius: 12, padding: "13px 16px", cursor: "pointer",
              transition: "all 0.18s", flex: "1 0 auto",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(37,99,235,0.12)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
          >
            <div style={{ width: 38, height: 38, borderRadius: 10, background: a.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <a.Icon size={17} color={a.color} />
            </div>
            <span style={{ color: "#475569", fontSize: 11, fontWeight: 600, whiteSpace: "nowrap" }}>{a.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── QUICK SEND ──────────────────────────────────────────────────────────────
function QuickSend() {
  return (
    <div style={{ background: "#fff", borderRadius: 16, padding: "20px 22px", boxShadow: "0 2px 16px rgba(37,99,235,0.07)", border: "1px solid #e2e8f0" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <p style={{ color: "#1e293b", fontWeight: 700, fontSize: 14, margin: 0 }}>Quick Send</p>
        <button style={{ color: "#2563eb", fontSize: 12, fontWeight: 600, border: "none", background: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 3 }}>
          <FiPlus size={12} /> Add
        </button>
      </div>
      <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
        {quickSendList.map((p) => (
          <div key={p.name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 7, cursor: "pointer" }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.08)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            >
            <div style={{
              width: 48, height: 48, borderRadius: "50%", background: p.color,
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#fff", fontWeight: 900, fontSize: 13,
              boxShadow: `0 6px 18px ${p.color}66`, transition: "transform 0.16s",
            }}>{p.initial}</div>
            <span style={{ color: "#64748b", fontSize: 11, fontWeight: 600 }}>{p.name}</span>
          </div>
        ))}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 7, cursor: "pointer" }}>
          <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#f1f5f9", border: "2px dashed #cbd5e1", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <FiPlus size={18} color="#94a3b8" />
          </div>
          <span style={{ color: "#94a3b8", fontSize: 11, fontWeight: 600 }}>New</span>
        </div>
      </div>
    </div>
  );
}

// ─── TRANSACTIONS ────────────────────────────────────────────────────────────
function Transactions() {
  const [all, setAll] = useState(false);
  const list = all ? transactions : transactions.slice(0, 5);
  return (
    <div style={{ background: "#fff", borderRadius: 16, padding: "20px 22px", boxShadow: "0 2px 16px rgba(37,99,235,0.07)", border: "1px solid #e2e8f0" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <p style={{ color: "#1e293b", fontWeight: 700, fontSize: 14, margin: 0 }}>Recent Transactions</p>
        <button onClick={() => setAll(!all)} style={{ color: "#2563eb", fontSize: 12, fontWeight: 600, border: "none", background: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 3 }}>
          {all ? "Show less" : "View all"} <FiChevronRight size={12} />
        </button>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {list.map((txn, i) => {
          const isCredit = txn.type === "CREDIT";
          const meta = catMeta[txn.category] || { bg: "#f1f5f9", color: "#64748b", Icon: FiRefreshCw };
          return (
            <div key={txn._id}
              style={{ display: "flex", alignItems: "center", gap: 12, padding: "11px 8px", borderRadius: 10, cursor: "pointer", transition: "background 0.15s", animationDelay: `${i * 0.05}s` }}
              onMouseEnter={e => e.currentTarget.style.background = "#f8fafc"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              <div style={{ width: 40, height: 40, borderRadius: 11, background: meta.bg, display: "flex", alignItems: "center", justifyContent: "center", color: meta.color, flexShrink: 0, fontSize: 16 }}>
                <meta.Icon size={17} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ color: "#1e293b", fontWeight: 700, fontSize: 13, margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{txn.otherParty.name}</p>
                <p style={{ color: "#94a3b8", fontSize: 11, margin: "2px 0 0" }}>{txn.category} · {fmtDate(txn.createdAt)}</p>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <p style={{ color: isCredit ? "#16a34a" : "#dc2626", fontWeight: 800, fontSize: 14, margin: 0 }}>
                  {isCredit ? "+" : "−"}{inr(txn.amount)}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 3, justifyContent: "flex-end", marginTop: 2 }}>
                  <FiCheck size={10} color="#22c55e" />
                  <span style={{ color: "#94a3b8", fontSize: 10 }}>Success</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── BALANCE TREND CHART ─────────────────────────────────────────────────────
function BalanceChart() {
  return (
    <div style={{ background: "#fff", borderRadius: 16, padding: "20px 22px", boxShadow: "0 2px 16px rgba(37,99,235,0.07)", border: "1px solid #e2e8f0", height: "100%" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
        <div>
          <p style={{ color: "#1e293b", fontWeight: 700, fontSize: 14, margin: 0 }}>Balance Trend</p>
          <p style={{ color: "#94a3b8", fontSize: 11, margin: "2px 0 0" }}>Last 7 days</p>
        </div>
        <div style={{ background: "#dbeafe", color: "#1d4ed8", borderRadius: 8, padding: "4px 10px", fontSize: 11, fontWeight: 700, display: "flex", alignItems: "center", gap: 4 }}>
          <FiTrendingUp size={12} /> +61%
        </div>
      </div>
      <ResponsiveContainer width="100%" height={155}>
        <AreaChart data={balanceTrend} margin={{ top: 4, right: 4, left: -22, bottom: 0 }}>
          <defs>
            <linearGradient id="balGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor="#2563eb" stopOpacity={0.18} />
              <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
          <XAxis dataKey="day" tick={{ fontSize: 10, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 10, fill: "#94a3b8" }} axisLine={false} tickLine={false} tickFormatter={shortInr} />
          <Tooltip content={<CustomTooltip />} />
          <Area type="monotone" dataKey="bal" name="Balance" stroke="#2563eb" strokeWidth={2.5} fill="url(#balGrad)" dot={{ fill: "#2563eb", r: 3, strokeWidth: 0 }} activeDot={{ r: 5, strokeWidth: 0 }} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

// ─── SPENDING CHART ──────────────────────────────────────────────────────────
function SpendingChart() {
  return (
    <div style={{ background: "#fff", borderRadius: 16, padding: "20px 22px", boxShadow: "0 2px 16px rgba(37,99,235,0.07)", border: "1px solid #e2e8f0" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
        <div>
          <p style={{ color: "#1e293b", fontWeight: 700, fontSize: 14, margin: 0 }}>Income vs Spending</p>
          <p style={{ color: "#94a3b8", fontSize: 11, margin: "2px 0 0" }}>Last 6 months</p>
        </div>
        <div style={{ display: "flex", gap: 14 }}>
          {[{ color: "#2563eb", label: "Income" }, { color: "#bfdbfe", label: "Expense" }].map(l => (
            <div key={l.label} style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <span style={{ width: 9, height: 9, borderRadius: 3, background: l.color, display: "inline-block" }} />
              <span style={{ color: "#94a3b8", fontSize: 11 }}>{l.label}</span>
            </div>
          ))}
        </div>
      </div>
      <ResponsiveContainer width="100%" height={175}>
        <BarChart data={spendingData} margin={{ top: 0, right: 0, left: -22, bottom: 0 }} barCategoryGap="35%">
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
          <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 10, fill: "#94a3b8" }} axisLine={false} tickLine={false} tickFormatter={shortInr} />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="income"  name="Income"  fill="#2563eb" radius={[5,5,0,0]} />
          <Bar dataKey="expense" name="Expense" fill="#bfdbfe" radius={[5,5,0,0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// ─── SPEND BREAKDOWN ─────────────────────────────────────────────────────────
function SpendingPie() {
  return (
    <div style={{ background: "#fff", borderRadius: 16, padding: "20px 22px", boxShadow: "0 2px 16px rgba(37,99,235,0.07)", border: "1px solid #e2e8f0", height: "100%" }}>
      <p style={{ color: "#1e293b", fontWeight: 700, fontSize: 14, margin: "0 0 2px" }}>Spend Breakdown</p>
      <p style={{ color: "#94a3b8", fontSize: 11, margin: "0 0 10px" }}>This month</p>
      <ResponsiveContainer width="100%" height={155}>
        <PieChart>
          <Pie data={pieData} cx="50%" cy="50%" innerRadius={44} outerRadius={66} paddingAngle={4} dataKey="value" strokeWidth={0}>
            {pieData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
          </Pie>
          <Tooltip formatter={(v) => `${v}%`} contentStyle={{ borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 12 }} />
        </PieChart>
      </ResponsiveContainer>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {pieData.map((d) => (
          <div key={d.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
              <span style={{ width: 9, height: 9, borderRadius: 2, background: d.color, display: "inline-block" }} />
              <span style={{ color: "#64748b", fontSize: 12 }}>{d.name}</span>
            </div>
            <span style={{ color: "#1e293b", fontWeight: 700, fontSize: 12 }}>{d.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── DEBIT CARD ──────────────────────────────────────────────────────────────
function DebitCard() {
  const [flipped, setFlipped] = useState(false);
  return (
    <div style={{ background: "#fff", borderRadius: 16, padding: "20px 22px", boxShadow: "0 2px 16px rgba(37,99,235,0.07)", border: "1px solid #e2e8f0" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <p style={{ color: "#1e293b", fontWeight: 700, fontSize: 14, margin: 0 }}>My Card</p>
        <button onClick={() => setFlipped(!flipped)} style={{ color: "#2563eb", fontSize: 11, fontWeight: 600, border: "none", background: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}>
          <FiRefreshCw size={11} /> Flip
        </button>
      </div>

      {!flipped ? (
        <div style={{ background: "linear-gradient(135deg,#1e3a8a,#2563eb)", borderRadius: 14, padding: "20px", color: "#fff", position: "relative", overflow: "hidden", minHeight: 138 }}>
          <div style={{ position: "absolute", top: -25, right: -25, width: 110, height: 110, borderRadius: "50%", background: "rgba(255,255,255,0.07)" }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div style={{ width: 30, height: 20, borderRadius: 4, background: "#fbbf24" }} />
            <FiWifi size={16} color="rgba(255,255,255,0.4)" style={{ transform: "rotate(90deg)" }} />
          </div>
          <p style={{ fontFamily: "monospace", letterSpacing: "0.15em", fontSize: 13, margin: "16px 0 5px", color: "rgba(255,255,255,0.9)" }}>•••• •••• •••• 5678</p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 9, margin: 0 }}>CARD HOLDER</p>
              <p style={{ color: "#fff", fontWeight: 700, fontSize: 11, margin: "2px 0 0" }}>{user.name.toUpperCase()}</p>
            </div>
            <div style={{ textAlign: "right" }}>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 9, margin: 0 }}>EXPIRES</p>
              <p style={{ color: "#fff", fontWeight: 700, fontSize: 11, margin: "2px 0 0" }}>12/28</p>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ background: "#1e293b", borderRadius: 14, padding: "20px", minHeight: 138, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ height: 26, background: "#374151", margin: "-20px -20px 14px", borderRadius: "14px 14px 0 0" }} />
          <div style={{ background: "#374151", borderRadius: 4, padding: "8px 12px", display: "flex", justifyContent: "flex-end" }}>
            <p style={{ color: "#fff", fontFamily: "monospace", fontSize: 13, margin: 0 }}>•••</p>
          </div>
          <p style={{ color: "#64748b", fontSize: 10, marginTop: 12, textAlign: "center" }}>Never share CVV with anyone.</p>
        </div>
      )}

      <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
        {[{ label: "Freeze Card", c: "#1d4ed8", bg: "#dbeafe" }, { label: "Block Card", c: "#dc2626", bg: "#fee2e2" }].map((a) => (
          <button key={a.label} style={{ flex: 1, padding: "8px", borderRadius: 8, fontSize: 11, fontWeight: 700, cursor: "pointer", background: a.bg, color: a.c, border: "none", transition: "opacity 0.15s" }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.8"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
            {a.label}
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── PROFILE CARD ────────────────────────────────────────────────────────────
function ProfileCard() {
  return (
    <div style={{ background: "#fff", borderRadius: 16, padding: "20px 22px", boxShadow: "0 2px 16px rgba(37,99,235,0.07)", border: "1px solid #e2e8f0" }}>
      <p style={{ color: "#1e293b", fontWeight: 700, fontSize: 14, margin: "0 0 16px" }}>Account Details</p>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, paddingBottom: 16, borderBottom: "1px solid #f1f5f9" }}>
        <div style={{ width: 48, height: 48, borderRadius: "50%", background: "linear-gradient(135deg,#1e40af,#3b82f6)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 900, fontSize: 16, boxShadow: "0 4px 14px rgba(37,99,235,0.35)" }}>
          {initials(user.name)}
        </div>
        <div>
          <p style={{ color: "#1e293b", fontWeight: 800, fontSize: 14, margin: 0 }}>{user.name}</p>
          <p style={{ color: "#94a3b8", fontSize: 11, margin: "2px 0 0" }}>{user.email}</p>
          <div style={{ marginTop: 5, display: "inline-flex", alignItems: "center", gap: 4, background: "#dcfce7", borderRadius: 20, padding: "2px 9px" }}>
            <FiCheck size={10} color="#15803d" />
            <span style={{ color: "#15803d", fontSize: 10, fontWeight: 700 }}>KYC Verified</span>
          </div>
        </div>
      </div>
      {[
        { label: "Phone",  value: user.phone },
        { label: "City",   value: user.profile.address.city },
        { label: "IFSC",   value: user.ifsc },
        { label: "Gender", value: user.profile.gender },
      ].map(({ label, value }) => (
        <div key={label} style={{ display: "flex", justifyContent: "space-between", padding: "9px 0", borderBottom: "1px solid #f8fafc" }}>
          <span style={{ color: "#94a3b8", fontSize: 12 }}>{label}</span>
          <span style={{ color: "#334155", fontSize: 12, fontWeight: 600 }}>{value}</span>
        </div>
      ))}
    </div>
  );
}

// ─── MAIN ────────────────────────────────────────────────────────────────────
export default function Dashboard() {
  const [activeNav, setActiveNav] = useState("Dashboard");

  return (
    <div style={{ background: "#f1f5f9", minHeight: "100vh", display: "flex" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Playfair+Display:wght@700;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #f1f5f9; font-family: 'Plus Jakarta Sans', sans-serif; }
        button, input { font-family: 'Plus Jakarta Sans', sans-serif; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .row { animation: fadeUp 0.42s ease both; }
        .row-1 { animation-delay: 0s; }
        .row-2 { animation-delay: 0.08s; }
        .row-3 { animation-delay: 0.16s; }
        .row-4 { animation-delay: 0.22s; }
        .row-5 { animation-delay: 0.28s; }
      `}</style>

      <Sidebar active={activeNav} setActive={setActiveNav} />

      <div style={{ marginLeft: 230, flex: 1, display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Topbar />

        <main style={{ flex: 1, padding: "26px 28px 40px" }}>

          {/* Row 1: Balance + 2 stat cards */}
          <div className="row row-1" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 18, marginBottom: 18 }}>
            <BalanceCard />
            <StatCard Icon={FiArrowDownLeft} label="Total Received" value="₹6,000" sub="March 2026" iconColor="#15803d" iconBg="#dcfce7" trend={12} />
            <StatCard Icon={FiArrowUpRight}  label="Total Spent"    value="₹4,100" sub="March 2026" iconColor="#dc2626" iconBg="#fee2e2" trend={-8} />
          </div>

          {/* Row 2: Quick actions + Quick send */}
          <div className="row row-2" style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: 18, marginBottom: 18 }}>
            <QuickActions />
            <QuickSend />
          </div>

          {/* Row 3: Balance trend + Pie */}
          <div className="row row-3" style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: 18, marginBottom: 18 }}>
            <BalanceChart />
            <SpendingPie />
          </div>

          {/* Row 4: Bar chart + Debit card + Profile */}
          <div className="row row-4" style={{ display: "grid", gridTemplateColumns: "2fr 1.2fr 1.2fr", gap: 18, marginBottom: 18 }}>
            <SpendingChart />
            <DebitCard />
            <ProfileCard />
          </div>

          {/* Row 5: Transactions */}
          <div className="row row-5">
            <Transactions />
          </div>

        </main>
      </div>
    </div>
  );
}