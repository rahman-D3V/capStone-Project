// import { useState, useEffect } from "react";

// // ─── Google Fonts injected at runtime ───────────────────────────────────────
// const fontLink = document.createElement("link");
// fontLink.rel = "stylesheet";
// fontLink.href =
//   "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap";
// document.head.appendChild(fontLink);

// const style = document.createElement("style");
// style.textContent = `
//   .material-symbols-outlined {
//     font-family: 'Material Symbols Outlined';
//     font-weight: normal;
//     font-style: normal;
//     font-size: 24px;
//     line-height: 1;
//     letter-spacing: normal;
//     text-transform: none;
//     display: inline-block;
//     white-space: nowrap;
//     word-wrap: normal;
//     direction: ltr;
//     vertical-align: middle;
//   }
//   * { box-sizing: border-box; margin: 0; padding: 0; }
//   body { font-family: 'Inter', sans-serif; background: #f7f9fb; color: #191c1e; }
//   @keyframes fadeUp {
//     from { opacity: 0; transform: translateY(24px); }
//     to   { opacity: 1; transform: translateY(0); }
//   }
//   @keyframes pulse-ring {
//     0%   { transform: scale(1);   opacity: 0.6; }
//     100% { transform: scale(1.6); opacity: 0; }
//   }
//   .fade-up { animation: fadeUp 0.6s ease both; }
//   .delay-1 { animation-delay: 0.1s; }
//   .delay-2 { animation-delay: 0.2s; }
//   .delay-3 { animation-delay: 0.3s; }
//   .delay-4 { animation-delay: 0.45s; }
//   .delay-5 { animation-delay: 0.6s; }
//   .pulse-ring::after {
//     content: '';
//     position: absolute;
//     inset: -4px;
//     border-radius: 50%;
//     border: 2px solid #ef4444;
//     animation: pulse-ring 1.4s ease-out infinite;
//   }
// `;
// document.head.appendChild(style);

// // ─── Colour tokens matching original design ──────────────────────────────────
// const C = {
//   primary: "#00113a",
//   primaryContainer: "#002366",
//   primaryFixed: "#dbe1ff",
//   onPrimaryContainer: "#758dd5",
//   surface: "#f7f9fb",
//   surfaceContainerLowest: "#ffffff",
//   surfaceContainerLow: "#f2f4f6",
//   surfaceContainer: "#eceef0",
//   surfaceContainerHigh: "#e6e8ea",
//   outlineVariant: "#c5c6d2",
//   onSurface: "#191c1e",
//   onSurfaceVariant: "#444650",
// };

// // ─── Sub-components ──────────────────────────────────────────────────────────

// function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   useEffect(() => {
//     const fn = () => setScrolled(window.scrollY > 8);
//     window.addEventListener("scroll", fn);
//     return () => window.removeEventListener("scroll", fn);
//   }, []);

//   return (
//     <>
//       {/* Top utility bar */}
//       <div
//         style={{
//           background: C.primary,
//           color: "#fff",
//           fontSize: 10,
//           padding: "4px 24px",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           letterSpacing: "0.1em",
//           textTransform: "uppercase",
//           fontWeight: 500,
//         }}
//       >
//         <div style={{ display: "flex", gap: 16 }}>
//           <a href="#" style={{ color: C.primaryFixed, textDecoration: "none" }}>Screen Reader Access</a>
//           <a href="#" style={{ color: C.primaryFixed, textDecoration: "none" }}>Skip to Main</a>
//         </div>
//         <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
//           <span className="material-symbols-outlined" style={{ fontSize: 14 }}>support_agent</span>
//           <a href="#" style={{ color: "#fff", textDecoration: "none" }}>Customer Care</a>
//         </div>
//       </div>

//       {/* Main nav */}
//       <header
//         style={{
//           background: scrolled ? "rgba(247,249,251,0.95)" : C.surface,
//           backdropFilter: "blur(12px)",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           padding: "12px 24px",
//           position: "sticky",
//           top: 0,
//           zIndex: 50,
//           boxShadow: scrolled ? "0 2px 16px rgba(0,17,58,0.08)" : "none",
//           transition: "box-shadow 0.3s",
//         }}
//       >
//         <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
//           <div
//             style={{
//               fontFamily: "Manrope, sans-serif",
//               fontWeight: 900,
//               fontSize: 22,
//               color: C.primary,
//               letterSpacing: "-0.04em",
//               textTransform: "uppercase",
//             }}
//           >
//             Sovereign Bank
//           </div>
//           <nav style={{ display: "flex", gap: 24 }}>
//             {["Personal", "Corporate", "Wealth", "NRI"].map((item, i) => (
//               <a
//                 key={item}
//                 href="#"
//                 style={{
//                   fontFamily: "Manrope, sans-serif",
//                   fontWeight: 700,
//                   fontSize: 14,
//                   color: i === 0 ? C.primaryContainer : "#64748b",
//                   textDecoration: "none",
//                   borderBottom: i === 0 ? `2px solid ${C.primaryContainer}` : "none",
//                   paddingBottom: 4,
//                   letterSpacing: "-0.02em",
//                 }}
//               >
//                 {item}
//               </a>
//             ))}
//           </nav>
//         </div>
//         <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
//           <button
//             style={{
//               padding: "8px 24px",
//               borderRadius: 9999,
//               border: `1.5px solid ${C.primary}`,
//               background: "transparent",
//               color: C.primary,
//               fontWeight: 700,
//               fontSize: 13,
//               cursor: "pointer",
//               fontFamily: "Manrope, sans-serif",
//             }}
//           >
//             Open Account
//           </button>
//           <button
//             style={{
//               padding: "8px 28px",
//               borderRadius: 9999,
//               border: "none",
//               background: C.primary,
//               color: "#fff",
//               fontWeight: 700,
//               fontSize: 13,
//               cursor: "pointer",
//               fontFamily: "Manrope, sans-serif",
//             }}
//           >
//             Login
//           </button>
//         </div>
//       </header>
//     </>
//   );
// }

// function Hero() {
//   return (
//     <section
//       style={{
//         background: C.primaryContainer,
//         minHeight: 540,
//         display: "flex",
//         alignItems: "center",
//         overflow: "hidden",
//         position: "relative",
//       }}
//     >
//       {/* Decorative circles */}
//       <div
//         style={{
//           position: "absolute",
//           right: -80,
//           top: -80,
//           width: 480,
//           height: 480,
//           borderRadius: "50%",
//           background: "rgba(255,255,255,0.04)",
//         }}
//       />
//       <div
//         style={{
//           position: "absolute",
//           right: 60,
//           bottom: -120,
//           width: 320,
//           height: 320,
//           borderRadius: "50%",
//           background: "rgba(255,255,255,0.03)",
//         }}
//       />
//       <div
//         style={{
//           background: "linear-gradient(135deg, rgba(0,17,58,0.9) 0%, rgba(0,35,102,0.7) 100%)",
//           position: "absolute",
//           inset: 0,
//         }}
//       />

//       <div
//         style={{
//           maxWidth: 1200,
//           margin: "0 auto",
//           padding: "80px 24px",
//           display: "grid",
//           gridTemplateColumns: "1fr 420px",
//           gap: 64,
//           alignItems: "center",
//           position: "relative",
//           zIndex: 1,
//           width: "100%",
//         }}
//       >
//         {/* Left: copy */}
//         <div>
//           <span
//             className="fade-up delay-1"
//             style={{
//               display: "inline-block",
//               color: C.onPrimaryContainer,
//               fontFamily: "Manrope, sans-serif",
//               fontWeight: 700,
//               fontSize: 12,
//               letterSpacing: "0.18em",
//               textTransform: "uppercase",
//               marginBottom: 20,
//             }}
//           >
//             AI-Powered Banking
//           </span>
//           <h1
//             className="fade-up delay-2"
//             style={{
//               fontFamily: "Manrope, sans-serif",
//               fontWeight: 900,
//               fontSize: "clamp(36px, 5vw, 58px)",
//               color: "#fff",
//               lineHeight: 1.1,
//               letterSpacing: "-0.03em",
//               marginBottom: 24,
//             }}
//           >
//             Secure Banking,<br />
//             Smarter Fraud<br />
//             Protection.
//           </h1>
//           <p
//             className="fade-up delay-3"
//             style={{
//               color: C.primaryFixed,
//               fontSize: 17,
//               fontWeight: 400,
//               lineHeight: 1.7,
//               maxWidth: 480,
//               marginBottom: 36,
//             }}
//           >
//             Manage your money, transfer funds, and stay protected with
//             AI-assisted fraud detection that works silently in the background —
//             every transaction, every time.
//           </p>

//           <div className="fade-up delay-4" style={{ display: "flex", gap: 16, marginBottom: 28 }}>
//             <button
//               style={{
//                 padding: "14px 36px",
//                 borderRadius: 9999,
//                 background: "#fff",
//                 color: C.primary,
//                 fontFamily: "Manrope, sans-serif",
//                 fontWeight: 800,
//                 fontSize: 14,
//                 border: "none",
//                 cursor: "pointer",
//                 letterSpacing: "-0.01em",
//               }}
//             >
//               Open Account
//             </button>
//             <button
//               style={{
//                 padding: "14px 36px",
//                 borderRadius: 9999,
//                 background: "rgba(255,255,255,0.12)",
//                 color: "#fff",
//                 fontFamily: "Manrope, sans-serif",
//                 fontWeight: 700,
//                 fontSize: 14,
//                 border: "1.5px solid rgba(255,255,255,0.3)",
//                 cursor: "pointer",
//                 letterSpacing: "-0.01em",
//               }}
//             >
//               Login
//             </button>
//           </div>

//           <p
//             className="fade-up delay-5"
//             style={{ color: "rgba(219,225,255,0.6)", fontSize: 12, letterSpacing: "0.04em" }}
//           >
//             Fast transfers&nbsp;&nbsp;•&nbsp;&nbsp;Secure login&nbsp;&nbsp;•&nbsp;&nbsp;Smart risk checks
//           </p>
//         </div>

//         {/* Right: quick-access card */}
//         <div className="fade-up delay-3">
//           <div
//             style={{
//               background: C.surfaceContainerLowest,
//               borderRadius: 20,
//               padding: 32,
//               boxShadow: "0 24px 64px rgba(0,17,58,0.35)",
//               border: `1px solid rgba(197,198,210,0.3)`,
//             }}
//           >
//             <h2
//               style={{
//                 fontFamily: "Manrope, sans-serif",
//                 fontWeight: 900,
//                 fontSize: 20,
//                 color: C.primary,
//                 marginBottom: 24,
//                 letterSpacing: "-0.02em",
//               }}
//             >
//               Secure Portal
//             </h2>
//             <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
//               {[
//                 { icon: "person", label: "Personal Banking", sub: "Savings, Transfers, History" },
//                 { icon: "business_center", label: "Corporate Banking", sub: "CMS, Trade, MSME" },
//               ].map((item, i) => (
//                 <button
//                   key={item.label}
//                   style={{
//                     width: "100%",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "space-between",
//                     padding: "16px 20px",
//                     borderRadius: 14,
//                     border: "none",
//                     background: i === 0 ? C.primary : C.surfaceContainerLow,
//                     color: i === 0 ? "#fff" : C.onSurface,
//                     cursor: "pointer",
//                     fontFamily: "Manrope, sans-serif",
//                   }}
//                 >
//                   <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
//                     <div
//                       style={{
//                         background: i === 0 ? "rgba(255,255,255,0.12)" : "rgba(0,17,58,0.06)",
//                         borderRadius: 10,
//                         padding: 8,
//                         display: "flex",
//                       }}
//                     >
//                       <span className="material-symbols-outlined" style={{ fontSize: 20 }}>
//                         {item.icon}
//                       </span>
//                     </div>
//                     <div style={{ textAlign: "left" }}>
//                       <div style={{ fontWeight: 700, fontSize: 14 }}>{item.label}</div>
//                       <div
//                         style={{
//                           fontSize: 11,
//                           opacity: 0.65,
//                           marginTop: 2,
//                           color: i === 0 ? C.primaryFixed : C.onSurfaceVariant,
//                         }}
//                       >
//                         {item.sub}
//                       </div>
//                     </div>
//                   </div>
//                   <span className="material-symbols-outlined" style={{ fontSize: 18, opacity: 0.7 }}>
//                     arrow_forward
//                   </span>
//                 </button>
//               ))}
//             </div>
//             <div
//               style={{
//                 marginTop: 20,
//                 paddingTop: 20,
//                 borderTop: `1px solid ${C.outlineVariant}`,
//                 display: "flex",
//                 gap: 24,
//               }}
//             >
//               {["New Registration", "Forgot Password?", "Security Tips"].map((l) => (
//                 <a
//                   key={l}
//                   href="#"
//                   style={{
//                     fontSize: 11,
//                     fontWeight: 700,
//                     color: C.primary,
//                     textDecoration: "none",
//                     textTransform: "uppercase",
//                     letterSpacing: "0.04em",
//                   }}
//                 >
//                   {l}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function TrustStrip() {
//   const items = [
//     { icon: "flash_on", label: "Instant Account Setup", desc: "Go live in under 3 minutes" },
//     { icon: "verified_user", label: "OTP-Based Verification", desc: "Every login & transaction secured" },
//     { icon: "shield", label: "Fraud Detection", desc: "Checked before every risky transfer" },
//   ];
//   return (
//     <section
//       style={{
//         background: "#fff",
//         borderBottom: `1px solid ${C.outlineVariant}`,
//         padding: "24px 24px",
//       }}
//     >
//       <div
//         style={{
//           maxWidth: 1200,
//           margin: "0 auto",
//           display: "grid",
//           gridTemplateColumns: "repeat(3, 1fr)",
//           gap: 0,
//         }}
//       >
//         {items.map((item, i) => (
//           <div
//             key={item.label}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: 16,
//               padding: "12px 32px",
//               borderRight: i < 2 ? `1px solid ${C.outlineVariant}` : "none",
//             }}
//           >
//             <div
//               style={{
//                 background: C.surfaceContainerLow,
//                 borderRadius: 10,
//                 padding: "10px",
//                 display: "flex",
//               }}
//             >
//               <span className="material-symbols-outlined" style={{ color: C.primaryContainer, fontSize: 22 }}>
//                 {item.icon}
//               </span>
//             </div>
//             <div>
//               <div
//                 style={{
//                   fontFamily: "Manrope, sans-serif",
//                   fontWeight: 800,
//                   fontSize: 13,
//                   color: C.primary,
//                   letterSpacing: "-0.01em",
//                 }}
//               >
//                 {item.label}
//               </div>
//               <div style={{ fontSize: 12, color: C.onSurfaceVariant, marginTop: 2 }}>{item.desc}</div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// function BankingFeatures() {
//   const cards = [
//     {
//       icon: "account_balance_wallet",
//       title: "Open Account",
//       desc: "Start banking in minutes with instant digital KYC.",
//       cta: "Get Started",
//     },
//     {
//       icon: "swap_horiz",
//       title: "Send & Receive Money",
//       desc: "Instant transfers via UPI, IMPS, NEFT — with fraud checks.",
//       cta: "Transfer Now",
//     },
//     {
//       icon: "account_balance",
//       title: "Check Balance",
//       desc: "Real-time account balance and available credit at a glance.",
//       cta: "View Balance",
//     },
//     {
//       icon: "receipt_long",
//       title: "View Transactions",
//       desc: "Full transaction history with smart filters and export.",
//       cta: "See History",
//     },
//   ];

//   return (
//     <section style={{ padding: "80px 24px", maxWidth: 1200, margin: "0 auto" }}>
//       <div style={{ marginBottom: 48 }}>
//         <h2
//           style={{
//             fontFamily: "Manrope, sans-serif",
//             fontWeight: 900,
//             fontSize: 36,
//             color: C.primary,
//             letterSpacing: "-0.03em",
//             marginBottom: 8,
//           }}
//         >
//           Core Banking Services
//         </h2>
//         <p style={{ color: C.onSurfaceVariant, fontSize: 15, fontWeight: 500 }}>
//           Everything you need to manage your money — in one place.
//         </p>
//       </div>

//       <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
//         {cards.map((card) => (
//           <div
//             key={card.title}
//             style={{
//               background: C.surfaceContainerLowest,
//               borderRadius: 20,
//               padding: 28,
//               border: `1px solid ${C.outlineVariant}30`,
//               display: "flex",
//               flexDirection: "column",
//               gap: 16,
//               transition: "box-shadow 0.2s, transform 0.2s",
//               cursor: "pointer",
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,17,58,0.12)";
//               e.currentTarget.style.transform = "translateY(-4px)";
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.boxShadow = "none";
//               e.currentTarget.style.transform = "translateY(0)";
//             }}
//           >
//             <div
//               style={{
//                 width: 52,
//                 height: 52,
//                 borderRadius: 14,
//                 background: C.surfaceContainerLow,
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <span className="material-symbols-outlined" style={{ color: C.primaryContainer, fontSize: 28 }}>
//                 {card.icon}
//               </span>
//             </div>
//             <div>
//               <div
//                 style={{
//                   fontFamily: "Manrope, sans-serif",
//                   fontWeight: 800,
//                   fontSize: 18,
//                   color: C.primary,
//                   marginBottom: 6,
//                   letterSpacing: "-0.02em",
//                 }}
//               >
//                 {card.title}
//               </div>
//               <div style={{ fontSize: 13, color: C.onSurfaceVariant, lineHeight: 1.6 }}>{card.desc}</div>
//             </div>
//             <a
//               href="#"
//               style={{
//                 marginTop: "auto",
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 6,
//                 color: C.primaryContainer,
//                 fontWeight: 700,
//                 fontSize: 12,
//                 textDecoration: "none",
//                 textTransform: "uppercase",
//                 letterSpacing: "0.08em",
//               }}
//             >
//               {card.cta}
//               <span className="material-symbols-outlined" style={{ fontSize: 14 }}>arrow_forward</span>
//             </a>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// function FraudScore() {
//   const [score] = useState(23);
//   const items = [
//     { label: "Unusual Spending", ok: true },
//     { label: "Location Mismatch", ok: true },
//     { label: "Impossible Travel", ok: false, alert: true },
//     { label: "ML Risk Score", ok: true },
//   ];

//   return (
//     <div
//       style={{
//         background: C.surfaceContainerLowest,
//         borderRadius: 20,
//         padding: 28,
//         boxShadow: "0 12px 40px rgba(0,17,58,0.1)",
//         border: `1px solid ${C.outlineVariant}50`,
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           marginBottom: 20,
//         }}
//       >
//         <span
//           style={{
//             fontFamily: "Manrope, sans-serif",
//             fontWeight: 800,
//             fontSize: 14,
//             color: C.primary,
//             textTransform: "uppercase",
//             letterSpacing: "0.06em",
//           }}
//         >
//           Risk Dashboard
//         </span>
//         <span
//           style={{
//             background: "#dcfce7",
//             color: "#166534",
//             fontSize: 11,
//             fontWeight: 700,
//             padding: "4px 12px",
//             borderRadius: 9999,
//             textTransform: "uppercase",
//             letterSpacing: "0.06em",
//           }}
//         >
//           Live
//         </span>
//       </div>

//       {/* Score gauge */}
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           gap: 20,
//           marginBottom: 24,
//           padding: "16px 20px",
//           background: C.surfaceContainerLow,
//           borderRadius: 14,
//         }}
//       >
//         <div style={{ position: "relative", width: 56, height: 56 }}>
//           <svg viewBox="0 0 56 56" width="56" height="56">
//             <circle cx="28" cy="28" r="22" fill="none" stroke="#e5e7eb" strokeWidth="5" />
//             <circle
//               cx="28"
//               cy="28"
//               r="22"
//               fill="none"
//               stroke="#22c55e"
//               strokeWidth="5"
//               strokeDasharray={`${(score / 100) * 138} 138`}
//               strokeLinecap="round"
//               transform="rotate(-90 28 28)"
//             />
//           </svg>
//           <span
//             style={{
//               position: "absolute",
//               inset: 0,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               fontFamily: "Manrope, sans-serif",
//               fontWeight: 900,
//               fontSize: 13,
//               color: "#166534",
//             }}
//           >
//             {score}
//           </span>
//         </div>
//         <div>
//           <div
//             style={{
//               fontFamily: "Manrope, sans-serif",
//               fontWeight: 800,
//               fontSize: 16,
//               color: "#166534",
//             }}
//           >
//             Low Risk
//           </div>
//           <div style={{ fontSize: 12, color: C.onSurfaceVariant }}>Fraud score out of 100</div>
//         </div>
//       </div>

//       {/* Check list */}
//       <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
//         {items.map((item) => (
//           <div
//             key={item.label}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//               padding: "10px 14px",
//               borderRadius: 10,
//               background: item.alert ? "#fef2f2" : C.surfaceContainerLow,
//               border: item.alert ? "1px solid #fecaca" : "1px solid transparent",
//             }}
//           >
//             <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
//               {item.alert && (
//                 <div style={{ position: "relative" }} className="pulse-ring">
//                   <div
//                     style={{
//                       width: 8,
//                       height: 8,
//                       borderRadius: "50%",
//                       background: "#ef4444",
//                     }}
//                   />
//                 </div>
//               )}
//               <span style={{ fontSize: 13, color: item.alert ? "#b91c1c" : C.onSurface, fontWeight: item.alert ? 700 : 500 }}>
//                 {item.label}
//               </span>
//             </div>
//             <span
//               className="material-symbols-outlined"
//               style={{ fontSize: 18, color: item.alert ? "#ef4444" : "#22c55e" }}
//             >
//               {item.alert ? "warning" : "check_circle"}
//             </span>
//           </div>
//         ))}
//       </div>

//       {/* Alert */}
//       <div
//         style={{
//           marginTop: 16,
//           padding: "12px 16px",
//           background: "#fef2f2",
//           borderRadius: 12,
//           border: "1px solid #fecaca",
//           display: "flex",
//           gap: 10,
//           alignItems: "flex-start",
//         }}
//       >
//         <span className="material-symbols-outlined" style={{ color: "#ef4444", fontSize: 18, marginTop: 1 }}>
//           error
//         </span>
//         <div>
//           <div style={{ fontSize: 12, fontWeight: 700, color: "#991b1b", marginBottom: 2 }}>Suspicious Pattern Detected</div>
//           <div style={{ fontSize: 11, color: "#b91c1c" }}>
//             Login from Delhi, transfer requested from London — flagged for admin review.
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function FraudSection() {
//   const points = [
//     {
//       icon: "trending_up",
//       title: "Unusual Spending Detection",
//       desc: "Flags transactions that deviate significantly from your spending patterns.",
//     },
//     {
//       icon: "location_off",
//       title: "Transaction Location Mismatch",
//       desc: "Alerts when a transaction originates from an unexpected geographic location.",
//     },
//     {
//       icon: "flight",
//       title: "Impossible Travel Patterns",
//       desc: "Catches simultaneous activity from geographically impossible locations.",
//     },
//     {
//       icon: "smart_toy",
//       title: "Rule-based + ML Engine",
//       desc: "Combines deterministic rule checks with a trained machine learning risk model.",
//     },
//   ];

//   return (
//     <section style={{ background: C.surfaceContainerLow, padding: "80px 24px" }}>
//       <div
//         style={{
//           maxWidth: 1200,
//           margin: "0 auto",
//           display: "grid",
//           gridTemplateColumns: "1fr 420px",
//           gap: 64,
//           alignItems: "center",
//         }}
//       >
//         {/* Left */}
//         <div>
//           <span
//             style={{
//               display: "inline-block",
//               background: "#fef2f2",
//               color: "#b91c1c",
//               fontSize: 11,
//               fontWeight: 700,
//               padding: "4px 14px",
//               borderRadius: 9999,
//               textTransform: "uppercase",
//               letterSpacing: "0.08em",
//               marginBottom: 20,
//             }}
//           >
//             Fraud Intelligence
//           </span>
//           <h2
//             style={{
//               fontFamily: "Manrope, sans-serif",
//               fontWeight: 900,
//               fontSize: 36,
//               color: C.primary,
//               letterSpacing: "-0.03em",
//               lineHeight: 1.15,
//               marginBottom: 16,
//             }}
//           >
//             Built-in Fraud Detection<br />for Safer Banking.
//           </h2>
//           <p style={{ color: C.onSurfaceVariant, fontSize: 15, lineHeight: 1.7, marginBottom: 36 }}>
//             Every transaction goes through a multi-layer security check before it clears.
//             Our system works in real time so you don't have to worry.
//           </p>
//           <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
//             {points.map((p) => (
//               <div key={p.title} style={{ display: "flex", gap: 16 }}>
//                 <div
//                   style={{
//                     width: 44,
//                     height: 44,
//                     minWidth: 44,
//                     borderRadius: 12,
//                     background: "#fff",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     boxShadow: "0 2px 8px rgba(0,17,58,0.08)",
//                   }}
//                 >
//                   <span className="material-symbols-outlined" style={{ color: C.primaryContainer, fontSize: 22 }}>
//                     {p.icon}
//                   </span>
//                 </div>
//                 <div>
//                   <div
//                     style={{
//                       fontFamily: "Manrope, sans-serif",
//                       fontWeight: 800,
//                       fontSize: 15,
//                       color: C.primary,
//                       marginBottom: 4,
//                     }}
//                   >
//                     {p.title}
//                   </div>
//                   <div style={{ fontSize: 13, color: C.onSurfaceVariant, lineHeight: 1.6 }}>{p.desc}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right: visual */}
//         <FraudScore />
//       </div>
//     </section>
//   );
// }

// function HowItWorks() {
//   const steps = [
//     {
//       num: "01",
//       icon: "person_add",
//       title: "Open Your Account",
//       desc: "Complete digital KYC in minutes. Verify your identity with OTP and get your account instantly.",
//     },
//     {
//       num: "02",
//       icon: "send",
//       title: "Make Secure Transactions",
//       desc: "Transfer money, pay bills, or receive funds — every action is encrypted end-to-end.",
//     },
//     {
//       num: "03",
//       icon: "security",
//       title: "Get Protected by Fraud Checks",
//       desc: "Our AI engine scores every transaction in real time and blocks suspicious activity before it happens.",
//     },
//   ];

//   return (
//     <section style={{ padding: "80px 24px" }}>
//       <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//         <div style={{ textAlign: "center", marginBottom: 56 }}>
//           <h2
//             style={{
//               fontFamily: "Manrope, sans-serif",
//               fontWeight: 900,
//               fontSize: 36,
//               color: C.primary,
//               letterSpacing: "-0.03em",
//               marginBottom: 10,
//             }}
//           >
//             How It Works
//           </h2>
//           <p style={{ color: C.onSurfaceVariant, fontSize: 15 }}>Three simple steps to smarter, safer banking.</p>
//         </div>

//         <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, position: "relative" }}>
//           {/* connector line */}
//           <div
//             style={{
//               position: "absolute",
//               top: 40,
//               left: "16.67%",
//               right: "16.67%",
//               height: 2,
//               background: `linear-gradient(90deg, ${C.outlineVariant}, ${C.outlineVariant})`,
//               zIndex: 0,
//             }}
//           />

//           {steps.map((step, i) => (
//             <div
//               key={step.num}
//               style={{
//                 background: C.surfaceContainerLowest,
//                 borderRadius: 20,
//                 padding: 32,
//                 border: `1px solid ${C.outlineVariant}40`,
//                 textAlign: "center",
//                 position: "relative",
//                 zIndex: 1,
//               }}
//             >
//               <div
//                 style={{
//                   width: 56,
//                   height: 56,
//                   borderRadius: "50%",
//                   background: i === 2 ? C.primary : C.surfaceContainerLow,
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   margin: "0 auto 20px",
//                   border: `3px solid ${C.surfaceContainerLowest}`,
//                   boxShadow: "0 0 0 2px " + C.outlineVariant,
//                 }}
//               >
//                 <span
//                   className="material-symbols-outlined"
//                   style={{ color: i === 2 ? "#fff" : C.primaryContainer, fontSize: 26 }}
//                 >
//                   {step.icon}
//                 </span>
//               </div>
//               <span
//                 style={{
//                   fontFamily: "Manrope, sans-serif",
//                   fontWeight: 900,
//                   fontSize: 11,
//                   color: C.onPrimaryContainer,
//                   letterSpacing: "0.12em",
//                   textTransform: "uppercase",
//                 }}
//               >
//                 Step {step.num}
//               </span>
//               <h3
//                 style={{
//                   fontFamily: "Manrope, sans-serif",
//                   fontWeight: 800,
//                   fontSize: 18,
//                   color: C.primary,
//                   margin: "8px 0 12px",
//                   letterSpacing: "-0.02em",
//                 }}
//               >
//                 {step.title}
//               </h3>
//               <p style={{ fontSize: 13, color: C.onSurfaceVariant, lineHeight: 1.7 }}>{step.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function SecuritySection() {
//   const items = [
//     { icon: "mark_email_read", title: "Email OTP Verification", desc: "Every login is verified with a one-time password sent to your registered email." },
//     { icon: "monitor_heart", title: "Fraud Risk Scoring", desc: "Each transaction receives a real-time risk score before it is processed." },
//     { icon: "lock", title: "Secure Transaction Flow", desc: "End-to-end encryption and multi-factor authentication on every transfer." },
//     { icon: "admin_panel_settings", title: "Admin Review for Suspicious Activity", desc: "High-risk transactions are escalated to our security team for manual review." },
//   ];

//   return (
//     <section style={{ background: C.primary, padding: "80px 24px" }}>
//       <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//         <div style={{ textAlign: "center", marginBottom: 56 }}>
//           <h2
//             style={{
//               fontFamily: "Manrope, sans-serif",
//               fontWeight: 900,
//               fontSize: 36,
//               color: "#fff",
//               letterSpacing: "-0.03em",
//               marginBottom: 10,
//             }}
//           >
//             Security at Every Step
//           </h2>
//           <p style={{ color: C.primaryFixed, fontSize: 15, opacity: 0.8 }}>
//             Your money is protected by multiple layers of defence — always.
//           </p>
//         </div>
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
//           {items.map((item) => (
//             <div
//               key={item.title}
//               style={{
//                 background: "rgba(255,255,255,0.06)",
//                 border: "1px solid rgba(255,255,255,0.1)",
//                 borderRadius: 16,
//                 padding: 28,
//                 display: "flex",
//                 gap: 20,
//                 alignItems: "flex-start",
//               }}
//             >
//               <div
//                 style={{
//                   width: 48,
//                   height: 48,
//                   minWidth: 48,
//                   borderRadius: 12,
//                   background: "rgba(255,255,255,0.1)",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 <span className="material-symbols-outlined" style={{ color: C.primaryFixed, fontSize: 24 }}>
//                   {item.icon}
//                 </span>
//               </div>
//               <div>
//                 <div
//                   style={{
//                     fontFamily: "Manrope, sans-serif",
//                     fontWeight: 800,
//                     fontSize: 15,
//                     color: "#fff",
//                     marginBottom: 6,
//                     letterSpacing: "-0.01em",
//                   }}
//                 >
//                   {item.title}
//                 </div>
//                 <div style={{ fontSize: 13, color: C.primaryFixed, opacity: 0.75, lineHeight: 1.6 }}>
//                   {item.desc}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function CTASection() {
//   return (
//     <section
//       style={{
//         background: C.surfaceContainerLow,
//         padding: "96px 24px",
//         textAlign: "center",
//       }}
//     >
//       <div style={{ maxWidth: 600, margin: "0 auto" }}>
//         <span
//           style={{
//             display: "inline-block",
//             background: "#dbeafe",
//             color: "#1e40af",
//             fontSize: 11,
//             fontWeight: 700,
//             padding: "4px 14px",
//             borderRadius: 9999,
//             textTransform: "uppercase",
//             letterSpacing: "0.08em",
//             marginBottom: 20,
//           }}
//         >
//           Get Started Today
//         </span>
//         <h2
//           style={{
//             fontFamily: "Manrope, sans-serif",
//             fontWeight: 900,
//             fontSize: 40,
//             color: C.primary,
//             letterSpacing: "-0.03em",
//             lineHeight: 1.15,
//             marginBottom: 16,
//           }}
//         >
//           Ready to experience<br />smarter banking?
//         </h2>
//         <p style={{ color: C.onSurfaceVariant, fontSize: 15, marginBottom: 40, lineHeight: 1.7 }}>
//           Join thousands of customers who trust Sovereign Bank for secure, intelligent financial management.
//         </p>
//         <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
//           <button
//             style={{
//               padding: "14px 40px",
//               borderRadius: 9999,
//               background: C.primary,
//               color: "#fff",
//               fontFamily: "Manrope, sans-serif",
//               fontWeight: 800,
//               fontSize: 14,
//               border: "none",
//               cursor: "pointer",
//               letterSpacing: "-0.01em",
//             }}
//           >
//             Open Account
//           </button>
//           <button
//             style={{
//               padding: "14px 40px",
//               borderRadius: 9999,
//               background: "transparent",
//               color: C.primary,
//               fontFamily: "Manrope, sans-serif",
//               fontWeight: 700,
//               fontSize: 14,
//               border: `1.5px solid ${C.primary}`,
//               cursor: "pointer",
//             }}
//           >
//             Login
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Footer() {
//   const links = [
//     { heading: "About", items: ["Our Story", "Team", "Careers"] },
//     { heading: "Contact", items: ["Support", "Branches", "Helpline"] },
//     { heading: "Legal", items: ["Privacy Policy", "Terms of Service", "Regulatory Disclosure"] },
//   ];

//   return (
//     <footer style={{ background: C.primary, color: "#fff", padding: "64px 24px 0" }}>
//       <div
//         style={{
//           maxWidth: 1200,
//           margin: "0 auto",
//           display: "grid",
//           gridTemplateColumns: "2fr 1fr 1fr 1fr",
//           gap: 48,
//           paddingBottom: 48,
//         }}
//       >
//         {/* Brand */}
//         <div>
//           <div
//             style={{
//               fontFamily: "Manrope, sans-serif",
//               fontWeight: 900,
//               fontSize: 20,
//               letterSpacing: "-0.03em",
//               marginBottom: 16,
//             }}
//           >
//             SOVEREIGN BANK
//           </div>
//           <p style={{ color: "#94a3b8", fontSize: 13, lineHeight: 1.7, maxWidth: 260 }}>
//             Secure, AI-powered banking for the modern world. Your money, protected every step.
//           </p>
//           <div style={{ marginTop: 24, display: "flex", gap: 12 }}>
//             {["email", "phone_in_talk"].map((icon) => (
//               <div
//                 key={icon}
//                 style={{
//                   width: 36,
//                   height: 36,
//                   borderRadius: "50%",
//                   background: "rgba(255,255,255,0.08)",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   cursor: "pointer",
//                 }}
//               >
//                 <span className="material-symbols-outlined" style={{ fontSize: 18, color: "#94a3b8" }}>{icon}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {links.map((col) => (
//           <div key={col.heading}>
//             <h5
//               style={{
//                 fontFamily: "Manrope, sans-serif",
//                 fontWeight: 800,
//                 fontSize: 11,
//                 textTransform: "uppercase",
//                 letterSpacing: "0.12em",
//                 color: C.primaryFixed,
//                 marginBottom: 20,
//               }}
//             >
//               {col.heading}
//             </h5>
//             <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
//               {col.items.map((item) => (
//                 <a
//                   key={item}
//                   href="#"
//                   style={{
//                     color: "#94a3b8",
//                     textDecoration: "none",
//                     fontSize: 13,
//                     transition: "color 0.2s",
//                   }}
//                   onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
//                   onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
//                 >
//                   {item}
//                 </a>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       <div
//         style={{
//           borderTop: "1px solid rgba(255,255,255,0.08)",
//           padding: "20px 0",
//           maxWidth: 1200,
//           margin: "0 auto",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         <span style={{ color: "#475569", fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase" }}>
//           © 2024 Sovereign Bank. All rights reserved.
//         </span>
//         <div style={{ display: "flex", gap: 20 }}>
//           {["Privacy", "Terms", "Sitemap"].map((l) => (
//             <a
//               key={l}
//               href="#"
//               style={{
//                 color: "#475569",
//                 textDecoration: "none",
//                 fontSize: 11,
//                 textTransform: "uppercase",
//                 letterSpacing: "0.06em",
//               }}
//             >
//               {l}
//             </a>
//           ))}
//         </div>
//       </div>
//     </footer>
//   );
// }

// // ─── Root ────────────────────────────────────────────────────────────────────
// export default function Home() {
//   return (
//     <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
//       <Navbar />
//       <main style={{ flex: 1 }}>
//         <Hero />
//         <TrustStrip />
//         <BankingFeatures />
//         <FraudSection />
//         <HowItWorks />
//         <SecuritySection />
//         <CTASection />
//       </main>
//       <Footer />
//     </div>
//   );
// }

import { useState, useEffect } from "react";

// ─── Global Animation Styles ───────────────────────────────────────────────────
const animationStyles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-40px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(40px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @keyframes pulse-glow {
    0%, 100% {
      box-shadow: 0 0 20px rgba(0, 17, 58, 0.3);
    }
    50% {
      box-shadow: 0 0 40px rgba(0, 17, 58, 0.5);
    }
  }

  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }

  .animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
  }

  .animate-slide-in-left {
    animation: slideInLeft 0.8s ease-out forwards;
  }

  .animate-slide-in-right {
    animation: slideInRight 0.8s ease-out forwards;
  }

  .animate-scale-in {
    animation: scaleIn 0.6s ease-out forwards;
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }

  .animate-pulse-glow {
    animation: pulse-glow 2s ease-in-out infinite;
  }

  .delay-1 { animation-delay: 0.1s; }
  .delay-2 { animation-delay: 0.2s; }
  .delay-3 { animation-delay: 0.3s; }
  .delay-4 { animation-delay: 0.4s; }
  .delay-5 { animation-delay: 0.5s; }

  /* Smooth transitions */
  * {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  button {
    position: relative;
    overflow: hidden;
  }

  button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
    transition: left 0.5s ease;
  }

  button:hover::before {
    left: 100%;
  }
`;

// Inject animation styles
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = animationStyles;
  document.head.appendChild(style);
}

export default function Home() {
  return (
    <div className="font-[Inter] bg-[#f7f9fb] text-[#191c1e] min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <BankingFeatures />
        <StatisticsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

/* ================= NAVBAR ================= */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      {/* Premium top bar */}
      <div className="bg-gradient-to-r from-[#00113a] to-[#002366] text-white text-[10px] px-6 py-2 flex justify-between items-center uppercase tracking-[0.12em] font-medium">
        <div className="flex gap-8">
          <a href="#" className="text-[#dbe1ff] hover:text-white transition duration-300">Screen Reader Access</a>
          <a href="#" className="text-[#dbe1ff] hover:text-white transition duration-300">Skip to Main</a>
        </div>
        <div className="flex items-center gap-3 hover:scale-105 transition duration-300 cursor-pointer">
          <span className="material-symbols-outlined text-[14px]">support_agent</span>
          <span>Customer Care</span>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 px-8 py-4 flex justify-between items-center backdrop-blur-2xl transition-all duration-500 ${
          scrolled
            ? "bg-[rgba(247,249,251,0.92)] shadow-[0_8px_32px_rgba(0,17,58,0.12)] border-b border-[rgba(0,17,58,0.05)]"
            : "bg-[rgba(247,249,251,0.5)] border-b border-[rgba(0,17,58,0.02)]"
        }`}
      >
        <div className="flex items-center gap-12">
          <div className="font-black text-[24px] text-[#00113a] uppercase tracking-[-0.04em] hover:scale-105 transition duration-300 cursor-pointer">
            Sovereign Bank
          </div>

          <nav className="flex gap-12">
            {[{ name: "Personal", active: true }, { name: "Corporate" }, { name: "Wealth" }, { name: "NRI" }].map((item) => (
              <a
                key={item.name}
                href="#"
                onMouseEnter={() => setHoveredNav(item.name)}
                onMouseLeave={() => setHoveredNav(null)}
                className={`relative font-bold text-[14px] transition duration-300 ${
                  item.active
                    ? "text-[#002366]"
                    : hoveredNav === item.name
                    ? "text-[#00113a]"
                    : "text-[#666]"
                }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#002366] to-[#758dd5] transition-all duration-300 ${
                    item.active || hoveredNav === item.name ? "w-full" : "w-0"
                  }`}
                />
              </a>
            ))}
          </nav>
        </div>

        <div className="flex gap-4 items-center">
          <button className="px-6 py-2.5 rounded-full border-2 border-[#00113a] text-[#00113a] font-bold text-[13px] hover:bg-[#00113a] hover:text-white hover:scale-105 transition-all duration-300 shadow-[0_4px_12px_rgba(0,17,58,0.1)]">
            Open Account
          </button>
          <button className="px-7 py-2.5 rounded-full bg-gradient-to-r from-[#00113a] to-[#002366] text-white font-bold text-[13px] hover:shadow-[0_8px_24px_rgba(0,17,58,0.3)] hover:scale-105 transition-all duration-300">
            Login
          </button>
        </div>
      </header>
    </>
  );
}

/* ================= HERO SECTION ================= */

function Hero() {
  const [isHoveredCard, setIsHoveredCard] = useState(false);

  return (
    <section className="relative bg-gradient-to-br from-[#002366] via-[#00113a] to-[#001a4d] min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#002366] rounded-full blur-3xl opacity-20 animate-float" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-[#758dd5] rounded-full blur-3xl opacity-15 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(118,141,213,0.1),rgba(0,17,58,0.2))]" />

      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 gap-20 items-center relative z-10 w-full">
        {/* Left content */}
        <div className="space-y-8">
          <div className="animate-fade-in-up">
            <span className="inline-block text-[#758dd5] text-[12px] uppercase tracking-[0.18em] font-bold mb-6 px-4 py-2 bg-[rgba(118,141,213,0.1)] rounded-full border border-[rgba(118,141,213,0.2)]">
              ✨ AI-Powered Banking
            </span>
          </div>

          <h1 className="text-white font-black text-[64px] leading-[1.15] mb-6 animate-fade-in-up delay-1">
            Secure Banking,<br />
            <span className="bg-gradient-to-r from-[#dbe1ff] to-[#758dd5] bg-clip-text text-transparent">Smarter Fraud</span><br />
            Protection.
          </h1>

          <p className="text-[#dbe1ff] text-[18px] leading-[1.8] max-w-[520px] mb-10 animate-fade-in-up delay-2 opacity-90">
            Manage your money, transfer funds, and stay protected with AI-assisted fraud detection that works silently in the background.
          </p>

          <div className="flex gap-6 mb-10 animate-fade-in-up delay-3">
            <button className="group px-10 py-4 rounded-full bg-white text-[#00113a] font-extrabold text-[15px] shadow-[0_12px_32px_rgba(255,255,255,0.2)] hover:shadow-[0_20px_48px_rgba(255,255,255,0.3)] hover:scale-110 transition-all duration-300">
              Open Account
              <span className="material-symbols-outlined text-[16px] ml-2 group-hover:translate-x-1 transition duration-300">arrow_forward</span>
            </button>
            <button className="px-10 py-4 rounded-full border-2 border-white text-white font-bold text-[15px] hover:bg-white hover:text-[#00113a] hover:scale-105 transition-all duration-300 backdrop-blur-sm">
              Login
            </button>
          </div>

          <div className="flex gap-8 pt-6 animate-fade-in-up delay-4 text-[14px] text-[#dbe1ff]">
            <div className="flex items-center gap-2 hover:translate-x-1 transition duration-300">
              <span className="material-symbols-outlined text-[18px] text-[#758dd5]">flash_on</span>
              <span>Fast Transfers</span>
            </div>
            <div className="flex items-center gap-2 hover:translate-x-1 transition duration-300">
              <span className="material-symbols-outlined text-[18px] text-[#758dd5]">verified_user</span>
              <span>Secure Login</span>
            </div>
            <div className="flex items-center gap-2 hover:translate-x-1 transition duration-300">
              <span className="material-symbols-outlined text-[18px] text-[#758dd5]">shield</span>
              <span>Smart Checks</span>
            </div>
          </div>
        </div>

        {/* Right card */}
        <div className="animate-slide-in-right delay-1">
          <div
            onMouseEnter={() => setIsHoveredCard(true)}
            onMouseLeave={() => setIsHoveredCard(false)}
            className={`relative group rounded-[28px] overflow-hidden backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 ${
              isHoveredCard
                ? "shadow-[0_32px_64px_rgba(0,17,58,0.4)]"
                : "shadow-[0_16px_48px_rgba(0,17,58,0.3)]"
            }`}
          >
            {/* Glass effect background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-white/5 opacity-50" />
            
            {/* Content */}
            <div className="relative p-10 bg-gradient-to-br from-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0.05)]">
              <h2 className="font-black text-[28px] text-white mb-8 flex items-center gap-3">
                <span className="material-symbols-outlined text-[32px] text-[#dbe1ff]">verified</span>
                Secure Portal
              </h2>

              <div className="space-y-4">
                {[
                  { icon: "person", label: "Personal Banking", desc: "Manage savings & transfers" },
                  { icon: "business_center", label: "Corporate Banking", desc: "CMS, Trade, MSME services" },
                ].map((item, idx) => (
                  <button
                    key={item.label}
                    className={`w-full group/btn p-5 rounded-[16px] border transition-all duration-300 flex items-center justify-between ${
                      idx === 0
                        ? "bg-[#00113a] border-[#758dd5] hover:border-white hover:shadow-[0_12px_32px_rgba(118,141,213,0.3)]"
                        : "bg-white/10 border-white/10 hover:bg-white/20 hover:border-white/30 hover:shadow-[0_12px_32px_rgba(255,255,255,0.1)]"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        idx === 0
                          ? "bg-[#758dd5] group-hover/btn:scale-110"
                          : "bg-white/20 group-hover/btn:bg-white/40 group-hover/btn:scale-110"
                      }`}>
                        <span className={`material-symbols-outlined text-[20px] ${idx === 0 ? "text-white" : "text-white"}`}>
                          {item.icon}
                        </span>
                      </div>
                      <div className="text-left">
                        <div className={`font-bold text-[15px] ${idx === 0 ? "text-white" : "text-white"}`}>
                          {item.label}
                        </div>
                        <div className={`text-[12px] mt-1 ${idx === 0 ? "text-[#dbe1ff]" : "text-white/70"}`}>
                          {item.desc}
                        </div>
                      </div>
                    </div>
                    <span className={`material-symbols-outlined text-[20px] group-hover/btn:translate-x-1 transition-all duration-300 ${idx === 0 ? "text-[#dbe1ff]" : "text-white"}`}>
                      arrow_forward
                    </span>
                  </button>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-white/10 flex gap-3 flex-wrap">
                {["New Registration", "Forgot Password", "Security Tips"].map((link) => (
                  <a key={link} href="#" className="text-[11px] text-[#dbe1ff] font-bold uppercase tracking-[0.06em] hover:text-white transition duration-300">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= TRUST STRIP ================= */

function TrustStrip() {
  const items = [
    { icon: "flash_on", label: "Instant Setup", desc: "Go live in under 3 minutes" },
    { icon: "verified_user", label: "OTP Verified", desc: "Every login secured" },
    { icon: "shield", label: "Fraud Protection", desc: "AI-powered checks" },
  ];

  return (
    <section className="bg-gradient-to-r from-[rgba(247,249,251,0.8)] to-[rgba(247,249,251,0.95)] backdrop-blur-md border-b border-[#c5c6d2]/20 px-6 py-16">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-3 gap-12">
          {items.map((item, i) => (
            <div
              key={i}
              className="group flex items-center gap-6 p-6 rounded-[20px] hover:bg-white/60 hover:shadow-[0_8px_24px_rgba(0,17,58,0.1)] transition-all duration-300 cursor-pointer"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#758dd5]/20 to-[#002366]/10 rounded-[14px] flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_8px_20px_rgba(118,141,213,0.3)] transition-all duration-300">
                <span className="material-symbols-outlined text-[24px] text-[#002366]">
                  {item.icon}
                </span>
              </div>
              <div>
                <div className="font-bold text-[#00113a] text-[16px] mb-1">
                  {item.label}
                </div>
                <div className="text-[13px] text-[#666] group-hover:text-[#333] transition duration-300">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= BANKING FEATURES ================= */

function BankingFeatures() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    { icon: "account_balance_wallet", title: "Open Account", desc: "Start banking in minutes with instant digital KYC verification." },
    { icon: "swap_horiz", title: "Send & Receive", desc: "Instant transfers via UPI, IMPS, NEFT with fraud checks." },
    { icon: "account_balance", title: "Check Balance", desc: "Real-time balance and available credit at a glance." },
    { icon: "receipt_long", title: "Transaction History", desc: "Full transaction history with smart filters and export." },
  ];

  return (
    <section className="px-6 py-24 bg-gradient-to-b from-[#f7f9fb] to-white">
      <div className="max-w-[1200px] mx-auto">
        {/* Section header */}
        <div className="mb-16 text-center animate-fade-in-up">
          <h2 className="text-[48px] font-black text-[#00113a] mb-4">
            Core Banking Services
          </h2>
          <p className="text-[18px] text-[#666] max-w-[600px] mx-auto">
            Everything you need to manage your money — all in one intuitive place
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div
              key={card.title}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div
                className={`h-full bg-white rounded-[24px] p-8 border-2 transition-all duration-300 cursor-pointer ${
                  hoveredCard === idx
                    ? "border-[#758dd5] shadow-[0_20px_48px_rgba(118,141,213,0.2)] transform -translate-y-2"
                    : "border-[#c5c6d2]/20 shadow-[0_8px_24px_rgba(0,17,58,0.05)]"
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-[16px] flex items-center justify-center mb-6 transition-all duration-300 ${
                    hoveredCard === idx
                      ? "bg-gradient-to-br from-[#758dd5] to-[#002366] scale-110 shadow-[0_12px_32px_rgba(118,141,213,0.3)]"
                      : "bg-gradient-to-br from-[#758dd5]/10 to-[#002366]/10 group-hover:scale-105"
                  }`}
                >
                  <span
                    className={`material-symbols-outlined text-[28px] transition-all duration-300 ${
                      hoveredCard === idx ? "text-white scale-110" : "text-[#002366]"
                    }`}
                  >
                    {card.icon}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-bold text-[#00113a] text-[20px] mb-3">
                  {card.title}
                </h3>
                <p className="text-[14px] text-[#666] leading-[1.6] mb-6">
                  {card.desc}
                </p>

                {/* CTA */}
                <button className="inline-flex items-center gap-2 text-[13px] font-bold text-[#002366] uppercase tracking-[0.06em] group-hover/btn:text-[#00113a] transition-all duration-300">
                  Explore
                  <span className="material-symbols-outlined text-[16px] group-hover/btn:translate-x-1 transition-all duration-300">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= STATISTICS SECTION ================= */

function StatisticsSection() {
  const stats = [
    { label: "Active Users", value: "10,000+", icon: "people" },
    { label: "Transactions", value: "5M+", icon: "swap_horiz" },
    { label: "Security Score", value: "99.9%", icon: "shield" },
    { label: "Uptime", value: "100%", icon: "check_circle" },
  ];

  return (
    <section className="px-6 py-24 bg-gradient-to-b from-white via-[#f7f9fb] to-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="group text-center p-8 rounded-[20px] bg-gradient-to-br from-white to-[#f7f9fb] border border-[#c5c6d2]/20 hover:border-[#758dd5]/50 hover:shadow-[0_16px_40px_rgba(118,141,213,0.15)] transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#758dd5]/20 to-[#002366]/10 mb-6 group-hover:scale-110 group-hover:shadow-[0_12px_24px_rgba(118,141,213,0.2)] transition-all duration-300">
                <span className="material-symbols-outlined text-[24px] text-[#002366]">
                  {stat.icon}
                </span>
              </div>
              <h3 className="text-[32px] font-black text-[#00113a] mb-2 group-hover:scale-110 transition-all duration-300">
                {stat.value}
              </h3>
              <p className="text-[14px] text-[#666] font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= CTA SECTION ================= */

function CTASection() {
  return (
    <section className="relative px-6 py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#002366] via-[#00113a] to-[#001a4d]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#758dd5] rounded-full blur-3xl opacity-15 animate-float" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#002366] rounded-full blur-3xl opacity-20" />

      <div className="max-w-[800px] mx-auto relative z-10 text-center animate-fade-in-up">
        <span className="inline-block px-4 py-2 rounded-full bg-[rgba(118,141,213,0.2)] border border-[rgba(118,141,213,0.3)] text-[#dbe1ff] text-[12px] font-bold uppercase tracking-[0.12em] mb-8">
          ✨ Join Today
        </span>

        <h2 className="text-white font-black text-[56px] leading-[1.2] mb-6">
          Ready to experience<br />
          <span className="bg-gradient-to-r from-[#dbe1ff] to-[#758dd5] bg-clip-text text-transparent">smarter banking?</span>
        </h2>

        <p className="text-[#dbe1ff] text-[18px] leading-[1.8] max-w-[600px] mx-auto mb-12 opacity-90">
          Join thousands of customers who trust Sovereign Bank for secure, intelligent financial management. Open your account in minutes.
        </p>

        <div className="flex gap-6 justify-center flex-wrap animate-fade-in-up delay-1">
          <button className="group px-10 py-4 rounded-full bg-white text-[#00113a] font-bold text-[16px] shadow-[0_12px_32px_rgba(255,255,255,0.2)] hover:shadow-[0_20px_48px_rgba(255,255,255,0.3)] hover:scale-110 transition-all duration-300 flex items-center gap-2">
            Open Account Now
            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-all duration-300">arrow_forward</span>
          </button>
          <button className="px-10 py-4 rounded-full border-2 border-white text-white font-bold text-[16px] hover:bg-white hover:text-[#00113a] hover:scale-105 transition-all duration-300 backdrop-blur-sm">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

/* ================= FOOTER ================= */

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { heading: "Company", items: ["About Us", "Careers", "Press"] },
    { heading: "Support", items: ["Help Center", "Contact Us", "Status"] },
    { heading: "Legal", items: ["Privacy Policy", "Terms of Service", "Security"] },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#00113a] to-[#001a4d] text-white px-6 pt-24 pb-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#758dd5] rounded-full blur-3xl opacity-10" />
      
      <div className="relative z-10">
        {/* Main footer content */}
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-16 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="font-black text-[24px] mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[28px]">verified</span>
              SOVEREIGN BANK
            </div>
            <p className="text-[#dbe1ff] text-[14px] leading-[1.7] mb-6">
              Secure, AI-powered banking for the modern world. Your money, protected every step.
            </p>
            <div className="flex gap-4">
              {[{ icon: "mail", label: "Email" }, { icon: "phone", label: "Phone" }].map((contact) => (
                <button
                  key={contact.label}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  title={contact.label}
                >
                  <span className="material-symbols-outlined text-[18px] text-[#dbe1ff]">{contact.icon}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.heading}>
              <h5 className="font-bold text-[14px] text-white mb-6 uppercase tracking-[0.08em]">
                {section.heading}
              </h5>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[#dbe1ff] hover:text-white text-[14px] transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="max-w-[1200px] mx-auto border-t border-white/10 mb-8" />

        {/* Bottom bar */}
        <div className="max-w-[1200px] mx-auto flex justify-between items-center flex-wrap gap-6">
          <p className="text-[#94a3b8] text-[12px] uppercase tracking-[0.08em]">
            © {currentYear} Sovereign Bank. All rights reserved.
          </p>
          <div className="flex gap-8">
            {["Privacy", "Terms", "Compliance"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-[#dbe1ff] hover:text-white text-[12px] uppercase tracking-[0.08em] transition-all duration-300 hover:translate-x-1 inline-block"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}