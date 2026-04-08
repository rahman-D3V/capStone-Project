import { useState } from "react";
import {
  FiHome, FiCreditCard, FiSend, FiPieChart, FiSettings,
  FiLogOut, FiBell, FiSearch, FiShield, FiChevronRight,
  FiUsers, FiEdit2, FiCamera, FiCheck, FiLock, FiPhone,
  FiMail, FiMapPin, FiCalendar, FiUser, FiAlertCircle,
  FiDownload, FiEye, FiEyeOff, FiChevronDown, FiKey,
  FiSmartphone, FiToggleLeft, FiToggleRight,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";



// ── Mock Data from API ────────────────────────────────────────────────────────
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
    address: {
      city: "Delhi",
      state: "Delhi",
    },
  },
};

// ── Helpers ───────────────────────────────────────────────────────────────────
const initials = (n) =>
  n.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2);

const formatDob = (dob) =>
  new Date(dob).toLocaleDateString("en-IN", {
    day: "2-digit", month: "long", year: "numeric",
  });

const navItems = [
  { icon: FiHome,       label: "Dashboard",     active: false },
  { icon: FiCreditCard, label: "Cards",         active: false },
  { icon: FiSend,       label: "Payments",      active: false },
  { icon: FiPieChart,   label: "Analytics",     active: false },
  { icon: FiUsers,      label: "Beneficiaries", active: false },
  { icon: FiSettings,   label: "Settings",      active: true  },
];

// ── Sidebar ───────────────────────────────────────────────────────────────────
function Sidebar({ active, setActive }) {
    const navigate = useNavigate()
  return (
    <aside className="fixed left-0 top-0 z-50 flex h-screen w-[230px] flex-col bg-gradient-to-b from-blue-900 to-blue-800 shadow-[4px_0_32px_rgba(30,64,175,0.22)]">
      {/* Logo */}
      <div className="border-b border-white/10 px-5 py-6 mb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15">
            <FiShield size={18} className="text-white" />
          </div>
          <div>
            <p className="text-[13px] font-black tracking-widest text-white">SOVEREIGN</p>
            <p className="text-[9px] tracking-[0.18em] text-blue-300">BANK</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex flex-1 flex-col gap-1 px-2.5">
        {navItems.map((item) => {
          const isActive = active === item.label;
          return (
            <button
              key={item.label}
              onClick={() => navigate("/dashboard")}
              
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[13px] font-medium transition-all duration-150
                ${isActive
                  ? "bg-white/15 font-bold text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]"
                  : "text-blue-300 hover:bg-white/8 hover:text-white"
                }`}
            >
              <item.icon size={16} />
              <span className="flex-1">{item.label}</span>
              {isActive && <FiChevronRight size={13} />}
            </button>
          );
        })}
      </nav>

      {/* User chip */}
      <div className="p-3">
        <div className="flex items-center gap-2.5 rounded-xl bg-white/10 p-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20 text-xs font-black text-white">
            {initials(mockProfile.user.name)}
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[12px] font-bold text-white">{mockProfile.user.name}</p>
            <p className="text-[10px] text-blue-300">Personal</p>
          </div>
          <FiLogOut size={14} className="shrink-0 cursor-pointer text-blue-300 hover:text-white" />
        </div>
      </div>
    </aside>
  );
}

// ── Topbar ────────────────────────────────────────────────────────────────────
function Topbar() {
  return (
    <header className="sticky top-0 z-40 flex h-[66px] items-center gap-4 border-b border-slate-200 bg-white px-7 shadow-[0_2px_12px_rgba(37,99,235,0.06)]">
      <div>
        <p className="text-[16px] font-extrabold text-slate-800">My Profile</p>
        <p className="text-[11px] text-slate-400">Manage your personal information & security</p>
      </div>

      <div className="ml-auto flex max-w-[280px] flex-1 items-center gap-2 rounded-xl bg-slate-100 px-3.5 py-2">
        <FiSearch size={13} className="text-slate-400" />
        <input
          placeholder="Search…"
          className="flex-1 bg-transparent text-[13px] text-slate-700 outline-none placeholder:text-slate-400"
        />
      </div>

      <button className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white hover:bg-slate-50">
        <FiBell size={15} className="text-blue-800" />
        <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full border-[1.5px] border-white bg-red-500" />
      </button>

      <div className="flex items-center gap-2.5 border-l border-slate-200 pl-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-800 to-blue-500 text-[12px] font-black text-white shadow-[0_4px_10px_rgba(37,99,235,0.3)]">
          {initials(mockProfile.user.name)}
        </div>
        <div>
          <p className="text-[12px] font-bold text-slate-800">{mockProfile.user.name}</p>
          <p className="text-[10px] text-slate-400">Personal</p>
        </div>
      </div>
    </header>
  );
}

// ── Profile Hero Card ─────────────────────────────────────────────────────────
function ProfileHero({ editing, setEditing }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 shadow-[0_20px_60px_rgba(30,64,175,0.32)]">
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-52 w-52 rounded-full bg-white/5" />
      <div className="pointer-events-none absolute right-8 top-8 h-28 w-28 rounded-full bg-white/5" />
      <div className="pointer-events-none absolute -bottom-10 left-32 h-40 w-40 rounded-full bg-white/4" />

      <div className="relative flex flex-col items-start gap-6 p-8 sm:flex-row sm:items-center">
        {/* Avatar */}
        <div className="relative shrink-0">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/20 text-3xl font-black text-white shadow-[0_0_0_4px_rgba(255,255,255,0.15)]">
            {initials(mockProfile.user.name)}
          </div>
          <button className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-md hover:scale-105 transition-transform">
            <FiCamera size={13} className="text-blue-800" />
          </button>
        </div>

        {/* Info */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-2xl font-black text-white tracking-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              {mockProfile.user.name}
            </h1>
            <span className="flex items-center gap-1 rounded-full bg-green-400/20 border border-green-400/40 px-3 py-0.5 text-[10px] font-bold text-green-300">
              <FiCheck size={9} /> KYC Verified
            </span>
          </div>
          <p className="text-blue-200 text-sm mb-4">{mockProfile.user.email}</p>
          <div className="flex flex-wrap gap-4">
            {[
              { icon: FiPhone,   val: `+91 ${mockProfile.user.phone}` },
              { icon: FiMapPin,  val: `${mockProfile.profile.address.city}, ${mockProfile.profile.address.state}` },
              { icon: FiCalendar,val: formatDob(mockProfile.profile.dob) },
            ].map(({ icon: Icon, val }) => (
              <div key={val} className="flex items-center gap-1.5 text-blue-200 text-xs">
                <Icon size={12} className="text-blue-300" />
                {val}
              </div>
            ))}
          </div>
        </div>

        {/* Edit button */}
        <button
          onClick={() => setEditing(!editing)}
          className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold transition-all
            ${editing
              ? "bg-green-400 text-green-900 hover:bg-green-300"
              : "bg-white/15 text-white hover:bg-white/25 border border-white/20"
            }`}
        >
          {editing ? <><FiCheck size={14} /> Save Changes</> : <><FiEdit2 size={14} /> Edit Profile</>}
        </button>
      </div>

      {/* Account badge strip */}
      <div className="border-t border-white/10 px-8 py-3 flex gap-8">
        {[
          { label: "Account No.",  val: mockProfile.user.accountNumber },
          { label: "Account Type", val: "Savings" },
          { label: "Member Since", val: "Jan 2024" },
        ].map(({ label, val }) => (
          <div key={label}>
            <p className="text-[9px] text-blue-300/70 uppercase tracking-widest mb-0.5">{label}</p>
            <p className="text-white text-xs font-bold font-mono">{val}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Section Card wrapper ──────────────────────────────────────────────────────
function SectionCard({ title, subtitle, icon: Icon, children, className = "" }) {
  return (
    <div className={`rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(37,99,235,0.07)] ${className}`}>
      <div className="flex items-center gap-3 border-b border-slate-100 px-6 py-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50">
          <Icon size={15} className="text-blue-700" />
        </div>
        <div>
          <p className="text-[13.5px] font-bold text-slate-800">{title}</p>
          {subtitle && <p className="text-[11px] text-slate-400">{subtitle}</p>}
        </div>
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}

// ── Field Row ─────────────────────────────────────────────────────────────────
function FieldRow({ label, value, editing, type = "text", options }) {
  return (
    <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-0">
      <p className="min-w-[140px] text-[11px] font-semibold uppercase tracking-wider text-slate-400">{label}</p>
      {editing ? (
        options ? (
          <div className="relative flex-1">
            <select className="w-full appearance-none rounded-xl border border-blue-200 bg-blue-50/40 px-4 py-2.5 text-[13px] font-medium text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all">
              {options.map(o => <option key={o}>{o}</option>)}
            </select>
            <FiChevronDown size={13} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
          </div>
        ) : (
          <input
            type={type}
            defaultValue={value}
            className="flex-1 rounded-xl border border-blue-200 bg-blue-50/40 px-4 py-2.5 text-[13px] font-medium text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
          />
        )
      ) : (
        <p className="flex-1 text-[13px] font-semibold text-slate-700">{value}</p>
      )}
    </div>
  );
}

// ── Personal Info ─────────────────────────────────────────────────────────────
function PersonalInfo({ editing }) {
  const { user, profile } = mockProfile;
  return (
    <SectionCard title="Personal Information" subtitle="Your basic profile details" icon={FiUser}>
      <div className="flex flex-col gap-5">
        <FieldRow label="Full Name"   value={user.name}                           editing={editing} />
        <div className="border-t border-slate-50" />
        <FieldRow label="Email"       value={user.email}                          editing={editing} type="email" />
        <div className="border-t border-slate-50" />
        <FieldRow label="Phone"       value={`+91 ${user.phone}`}                 editing={editing} type="tel" />
        <div className="border-t border-slate-50" />
        <FieldRow label="Date of Birth" value={formatDob(profile.dob)}           editing={editing} type="date" />
        <div className="border-t border-slate-50" />
        <FieldRow label="Gender"      value={profile.gender}                      editing={editing} options={["Male", "Female", "Other"]} />
      </div>
    </SectionCard>
  );
}

// ── Address Info ──────────────────────────────────────────────────────────────
function AddressInfo({ editing }) {
  const { address } = mockProfile.profile;
  return (
    <SectionCard title="Address Details" subtitle="Your registered address" icon={FiMapPin}>
      <div className="flex flex-col gap-5">
        <FieldRow label="City"   value={address.city}  editing={editing} />
        <div className="border-t border-slate-50" />
        <FieldRow label="State"  value={address.state} editing={editing} />
        <div className="border-t border-slate-50" />
        <FieldRow label="Country" value="India"        editing={editing} options={["India"]} />
        <div className="border-t border-slate-50" />
        <FieldRow label="Pin Code" value="110001"      editing={editing} />
      </div>
    </SectionCard>
  );
}

// ── Account Info ──────────────────────────────────────────────────────────────
function AccountInfo() {
  const { user } = mockProfile;
  const rows = [
    { label: "Account Number", value: user.accountNumber, mono: true },
    { label: "Account Type",   value: "Savings Account" },
    { label: "IFSC Code",      value: "SVRN0001234", mono: true },
    { label: "Branch",         value: "Connaught Place, Delhi" },
    { label: "Balance",        value: `₹${user.balance.toLocaleString("en-IN")}` },
    { label: "Status",         value: "Active", badge: "green" },
  ];
  return (
    <SectionCard title="Bank Account" subtitle="Account & banking details" icon={FiCreditCard}>
      <div className="flex flex-col gap-4">
        {rows.map(({ label, value, mono, badge }) => (
          <div key={label} className="flex items-center justify-between border-b border-slate-50 pb-4 last:border-0 last:pb-0">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">{label}</p>
            {badge ? (
              <span className="flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-0.5 text-[11px] font-bold text-green-700">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                {value}
              </span>
            ) : (
              <p className={`text-[13px] font-bold text-slate-700 ${mono ? "font-mono" : ""}`}>{value}</p>
            )}
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

// ── Security Section ──────────────────────────────────────────────────────────
function Security() {
  const [showPass, setShowPass] = useState(false);
  const [twoFA, setTwoFA] = useState(true);
  const [smsAlert, setSmsAlert] = useState(true);
  const [emailAlert, setEmailAlert] = useState(false);

  const Toggle = ({ val, set }) => (
    <button onClick={() => set(!val)} className="transition-transform hover:scale-105">
      {val
        ? <FiToggleRight size={28} className="text-blue-600" />
        : <FiToggleLeft  size={28} className="text-slate-300" />
      }
    </button>
  );

  return (
    <SectionCard title="Security & Privacy" subtitle="Manage your account security" icon={FiLock}>
      <div className="flex flex-col gap-5">

        {/* Change password */}
        <div className="rounded-xl bg-slate-50 border border-slate-100 p-4">
          <p className="text-[12px] font-bold text-slate-600 mb-3 flex items-center gap-2">
            <FiKey size={13} className="text-blue-600" /> Change Password
          </p>
          <div className="flex flex-col gap-3">
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                placeholder="New password"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-[13px] text-slate-700 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 pr-10 transition-all"
              />
              <button onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-600">
                {showPass ? <FiEyeOff size={14} /> : <FiEye size={14} />}
              </button>
            </div>
            <input
              type="password"
              placeholder="Confirm new password"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-[13px] text-slate-700 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all"
            />
            <button className="self-start rounded-xl bg-blue-700 px-5 py-2 text-[12px] font-bold text-white hover:bg-blue-800 transition-colors">
              Update Password
            </button>
          </div>
        </div>

        {/* Toggles */}
        {[
          { icon: FiSmartphone, label: "Two-Factor Authentication", desc: "Secure login with OTP", val: twoFA,      set: setTwoFA      },
          { icon: FiPhone,      label: "SMS Alerts",               desc: "Get notified via SMS",  val: smsAlert,   set: setSmsAlert   },
          { icon: FiMail,       label: "Email Notifications",      desc: "Activity emails",       val: emailAlert, set: setEmailAlert },
        ].map(({ icon: Icon, label, desc, val, set }) => (
          <div key={label} className="flex items-center justify-between rounded-xl border border-slate-100 px-4 py-3 hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50">
                <Icon size={14} className="text-blue-600" />
              </div>
              <div>
                <p className="text-[13px] font-bold text-slate-700">{label}</p>
                <p className="text-[11px] text-slate-400">{desc}</p>
              </div>
            </div>
            <Toggle val={val} set={set} />
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

// ── KYC Status ───────────────────────────────────────────────────────────────
function KycStatus() {
  const steps = [
    { label: "Identity Verification", done: true,  sub: "Aadhaar linked"         },
    { label: "PAN Card Linked",        done: true,  sub: "ABCDE1234F"             },
    { label: "Address Proof",          done: true,  sub: "Verified"               },
    { label: "Video KYC",              done: false, sub: "Pending — Schedule now" },
  ];
  return (
    <SectionCard title="KYC Status" subtitle="Know Your Customer verification" icon={FiShield}>
      <div className="flex flex-col gap-3">
        {steps.map(({ label, done, sub }, i) => (
          <div key={label} className="flex items-center gap-3">
            <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-bold
              ${done ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-600"}`}>
              {done ? <FiCheck size={13} /> : <FiAlertCircle size={13} />}
            </div>
            <div className="flex-1">
              <p className={`text-[13px] font-semibold ${done ? "text-slate-700" : "text-amber-700"}`}>{label}</p>
              <p className="text-[11px] text-slate-400">{sub}</p>
            </div>
            {!done && (
              <button className="rounded-lg bg-amber-50 border border-amber-200 px-3 py-1 text-[11px] font-bold text-amber-700 hover:bg-amber-100 transition-colors">
                Complete
              </button>
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-xl bg-blue-50 border border-blue-100 px-4 py-3 flex items-center justify-between">
        <div>
          <p className="text-[12px] font-bold text-blue-800">KYC Score</p>
          <p className="text-[11px] text-blue-500">3 of 4 steps complete</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-32 rounded-full bg-blue-100 overflow-hidden">
            <div className="h-full w-3/4 rounded-full bg-blue-600" />
          </div>
          <span className="text-[12px] font-black text-blue-700">75%</span>
        </div>
      </div>
    </SectionCard>
  );
}

// ── Linked Devices ────────────────────────────────────────────────────────────
function LinkedDevices() {
  const devices = [
    { name: "Chrome on Mobile",  loc: "Delhi, India",   current: true,  icon: FiSmartphone },
    { name: "Chrome on Desktop", loc: "Delhi, India",   current: false, icon: FiSettings   },
  ];
  return (
    <SectionCard title="Linked Devices" subtitle="Sessions & trusted devices" icon={FiSmartphone}>
      <div className="flex flex-col gap-3">
        {devices.map(({ name, loc, current, icon: Icon }) => (
          <div key={name} className="flex items-center gap-3 rounded-xl border border-slate-100 px-4 py-3 hover:bg-slate-50 transition-colors">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50">
              <Icon size={16} className="text-blue-700" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <p className="text-[13px] font-bold text-slate-700">{name}</p>
                {current && <span className="rounded-full bg-green-100 px-2 py-0.5 text-[9px] font-bold text-green-700">Current</span>}
              </div>
              <p className="text-[11px] text-slate-400">{loc}</p>
            </div>
            {!current && (
              <button className="text-[11px] font-bold text-red-500 hover:text-red-700 transition-colors">Remove</button>
            )}
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

// ── Download Statement ────────────────────────────────────────────────────────
function StatementDownload() {
  return (
    <SectionCard title="Account Statement" subtitle="Download your transaction history" icon={FiDownload}>
      <div className="flex flex-col gap-3">
        {[
          { label: "Last 1 Month",  size: "~120 KB" },
          { label: "Last 3 Months", size: "~340 KB" },
          { label: "Last 6 Months", size: "~680 KB" },
        ].map(({ label, size }) => (
          <button key={label}
            className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 text-left hover:border-blue-300 hover:bg-blue-50/50 transition-all group">
            <div>
              <p className="text-[13px] font-semibold text-slate-700 group-hover:text-blue-700">{label}</p>
              <p className="text-[11px] text-slate-400">PDF · {size}</p>
            </div>
            <FiDownload size={15} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
          </button>
        ))}
      </div>
    </SectionCard>
  );
}

// ── Main Profile Page ─────────────────────────────────────────────────────────
export default function Profile() {
  const [activeNav, setActiveNav] = useState("Settings");
  const [editing, setEditing] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-100" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Playfair+Display:wght@700;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-1 { animation: fadeUp 0.4s ease both 0s; }
        .fade-2 { animation: fadeUp 0.4s ease both 0.08s; }
        .fade-3 { animation: fadeUp 0.4s ease both 0.16s; }
        .fade-4 { animation: fadeUp 0.4s ease both 0.22s; }
        .fade-5 { animation: fadeUp 0.4s ease both 0.28s; }
      `}</style>

      {/* Sidebar */}
      <Sidebar active={activeNav} setActive={setActiveNav} />

      {/* Main Content */}
      <div className="ml-[230px] flex flex-1 flex-col">
        <Topbar />

        <main className="flex-1 p-7 pb-12">

          {/* Hero */}
          <div className="fade-1 mb-6">
            <ProfileHero editing={editing} setEditing={setEditing} />
          </div>

          {/* Row 1: Personal Info + Address */}
          <div className="fade-2 mb-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
            <PersonalInfo editing={editing} />
            <AddressInfo  editing={editing} />
          </div>

          {/* Row 2: Account Info + KYC */}
          <div className="fade-3 mb-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
            <AccountInfo />
            <KycStatus />
          </div>

          {/* Row 3: Security full width */}
          <div className="fade-4 mb-5">
            <Security />
          </div>

          {/* Row 4: Devices + Statement */}
          <div className="fade-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
            <LinkedDevices />
            <StatementDownload />
          </div>

        </main>
      </div>
    </div>
  );
}