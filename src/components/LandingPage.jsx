import {
  FaShieldAlt,
  FaRobot,
  FaChartLine,
  FaMapMarkerAlt,
  FaClock,
  FaMobileAlt,
  FaDatabase,
} from "react-icons/fa";
import HoverGifSection from "./Solution";

export default function FraudShieldLanding() {
  return (
    <div className="bg-[#0b0f14] text-gray-200 min-h-screen">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-emerald-400">FraudShield AI</h1>
        <button className="bg-emerald-500 hover:bg-emerald-600 px-5 py-2 rounded-lg font-medium">
          Try Demo
        </button>
      </nav>

      {/* HERO */}
      <section className="px-10 py-24 text-center max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold leading-tight mb-6">
          Detect Payment Fraud{" "}
          <span className="text-emerald-400">In Real Time</span>
        </h1>

        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          FraudShield AI analyzes user behavior and machine learning predictions
          to detect suspicious financial transactions instantly while keeping
          legitimate payments smooth.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-lg font-semibold">
            Explore System
          </button>

          <button className="border border-gray-600 px-6 py-3 rounded-lg hover:border-emerald-400">
            View Architecture
          </button>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="px-10 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-14 text-center">
          The Growing Problem of Financial Fraud
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div
            className="group bg-[#11161d] p-6 rounded-xl border border-gray-800
      transition-all duration-300 hover:border-emerald-400
      hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]"
          >
            <h3
              className="text-xl font-semibold mb-3 text-emerald-400
        transition-transform duration-300 group-hover:translate-x-1"
            >
              High False Positives
            </h3>

            <p className="text-gray-400 transition duration-300 group-hover:text-gray-300">
              Many systems block legitimate transactions causing frustration and
              lost business revenue.
            </p>
          </div>

          <div
            className="group bg-[#11161d] p-6 rounded-xl border border-gray-800
      transition-all duration-300 hover:border-emerald-400
      hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]"
          >
            <h3
              className="text-xl font-semibold mb-3 text-emerald-400
        transition-transform duration-300 group-hover:translate-x-1"
            >
              Evolving Fraud
            </h3>

            <p className="text-gray-400 transition duration-300 group-hover:text-gray-300">
              Fraud techniques evolve quickly making traditional rule based
              systems ineffective.
            </p>
          </div>

          <div
            className="group bg-[#11161d] p-6 rounded-xl border border-gray-800
      transition-all duration-300 hover:border-emerald-400
      hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]"
          >
            <h3
              className="text-xl font-semibold mb-3 text-emerald-400
        transition-transform duration-300 group-hover:translate-x-1"
            >
              Data Imbalance
            </h3>

            <p className="text-gray-400 transition duration-300 group-hover:text-gray-300">
              Fraud transactions represent less than 1% of data making them
              harder to detect.
            </p>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <HoverGifSection />

      {/* FEATURES */}
      <section className="px-10 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-14">
          Transaction Signals We Analyze
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <Feature icon={<FaDatabase />} title="Transaction Amount" />
          <Feature icon={<FaClock />} title="Timestamp Patterns" />
          <Feature icon={<FaMapMarkerAlt />} title="Location Analysis" />
          <Feature icon={<FaMobileAlt />} title="Device Tracking" />
          <Feature icon={<FaChartLine />} title="Transaction Frequency" />
          <Feature icon={<FaShieldAlt />} title="Merchant Consistency" />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-10 py-20 bg-[#0f141b] text-center">
        <h2 className="text-3xl font-bold mb-12">How FraudShield AI Works</h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Step number="01" text="User initiates payment transaction" />
          <Step number="02" text="Feature extraction from transaction data" />
          <Step number="03" text="Behavior engine + ML model analyze risk" />
          <Step number="04" text="System returns fraud probability score" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Test FraudShield AI?
        </h2>

        <p className="text-gray-400 mb-8">
          Simulate a transaction and see fraud probability in real time.
        </p>

        <button className="bg-emerald-500 hover:bg-emerald-600 px-8 py-3 rounded-lg font-semibold">
          Launch Demo
        </button>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500">
        FraudShield AI • Real-Time Financial Fraud Detection System
      </footer>
    </div>
  );
}

function Feature({ icon, title }) {
  return (
    <div className="bg-[#121821] p-6 rounded-xl border border-gray-800 flex items-center gap-4">
      <div className="text-emerald-400 text-xl">{icon}</div>
      <h3 className="font-semibold">{title}</h3>
    </div>
  );
}

function Step({ number, text }) {
  return (
    <div className="bg-[#121821] p-6 rounded-xl border border-gray-800">
      <h3 className="text-emerald-400 text-xl font-bold mb-2">{number}</h3>
      <p className="text-gray-400">{text}</p>
    </div>
  );
}
