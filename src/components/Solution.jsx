import {
  FaChartLine,
  FaRobot,
  FaShieldAlt,
} from "react-icons/fa";

/**
 * Example usage:
 * <HoverGifSection />
 *
 * If you keep GIFs locally, import them:
 * import behavioralGif from "../assets/behavioral.gif";
 * then pass gifSrc={behavioralGif}
 */

function HoverGifSection() {
  return (
    <section className="px-10 py-20 bg-[#0f141b]">
      <h2 className="text-3xl font-bold text-center mb-14">
        Our Hybrid AI Detection System
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <HoverGifCard
          icon={<FaChartLine className="text-emerald-400 text-3xl" />}
          title="Behavioral Risk Engine"
          desc="Builds unique user profiles and detects unusual transaction patterns."
          gifSrc="https://cdn.theatlantic.com/thumbor/-w0IV0UxyEd86keI13ii4HOcCPE=/0x0:2000x1125/960x540/media/img/mt/2024/09/Atlantic_AI_1/original.gif"
        />

        <HoverGifCard
          icon={<FaRobot className="text-emerald-400 text-3xl" />}
          title="Machine Learning Model"
          desc="Trained on historical fraud data using ensemble models for accurate predictions."
          gifSrc="https://images.squarespace-cdn.com/content/v1/5feb53185d3dab691b47361b/1609930650139-9NRI63XUJ29Y7E9LEA9G/12eca-machine-learning.gif"
        />

        <HoverGifCard
          icon={<FaShieldAlt className="text-emerald-400 text-3xl" />}
          title="Adaptive Decision Layer"
          desc="Combines behavioral scoring and ML probability to make the final decision."
          gifSrc="https://miro.medium.com/v2/resize:fit:1280/1*RGOu7VVLP79MsEZd2lnmfg.gif"
        />
      </div>
    </section>
  );
}

function HoverGifCard({ icon, title, desc, gifSrc }) {
  return (
    <div
      className="group relative overflow-hidden rounded-xl border border-gray-800 bg-[#121821] p-8 text-center"
      // role and tabIndex make it keyboard-focusable for accessibility
      role="button"
      tabIndex={0}
    >
      {/* GIF overlay - hidden by default, fades in on hover/focus */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100">
        <img
          src={gifSrc}
          alt={`${title} demo`}
          className="max-h-full max-w-full object-contain rounded-lg shadow-lg"
          loading="lazy"
        />
      </div>

      {/* Content - visible by default, fades out on hover/focus */}
      <div className="relative z-10 space-y-3 transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-1 group-focus:opacity-0">
        <div className="flex items-center justify-center mb-2">{icon}</div>
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <p className="text-gray-400">{desc}</p>
      </div>
    </div>
  );
}

export default HoverGifSection;