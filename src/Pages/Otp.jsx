import { useRef, useState } from "react";

export default function OTP() {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const inputs = useRef([]);

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // move forward
    if (value && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // backspace
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        inputs.current[index - 1].focus();
      }
    }
  };

  const handleVerify = () => {
    const code = otp.join("");
    console.log("OTP:", code);
  };

  return (
    <div className="min-h-screen bg-[#f7f9fb] flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
        {/* Title */}
        <h1 className="text-2xl font-bold text-[#00113a] mb-2 text-center">
          Verify OTP
        </h1>

        {/* Subtitle */}
        <p className="text-sm text-slate-500 text-center mb-6">
          OTP sent to your email
        </p>

        {/* OTP Inputs */}
        <div className="flex justify-between gap-2 mb-6">
          {otp.map((digit, i) => (
            <input
              key={i}
              ref={(el) => (inputs.current[i] = el)}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              className="w-12 h-12 text-center text-lg font-bold border border-slate-300 rounded-lg focus:outline-none focus:border-[#00113a] focus:ring-2 focus:ring-[#00113a]/20"
            />
          ))}
        </div>

        {/* Verify Button */}
        <button
  onClick={handleVerify}
  className="w-full py-3 rounded-full bg-gradient-to-r from-black to-blue-900 text-white font-bold hover:opacity-90 transition mb-4"
>
  Verify
</button>

        {/* Resend */}
        <div className="text-center text-sm text-slate-500">
          Didn’t receive OTP?{" "}
          <button className="text-[#002366] font-semibold hover:underline">
            Resend OTP
          </button>
        </div>
      </div>
    </div>
  );
}



