import React, { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Override body background for this page
    document.body.style.background = "transparent";
    document.documentElement.style.background =
      "linear-gradient(to bottom right, #f1f5f9 0%, #eff6ff 50%, #f1f5f9 100%)";

    return () => {
      // Reset on unmount
      document.body.style.background = "";
      document.documentElement.style.background = "";
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log({ email, password });
    // Add registration logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      {/* CARD */}
      <div className="w-full max-w-md backdrop-blur-xl bg-white/70 border border-white/40 shadow-2xl rounded-3xl p-8">
        {/* HEADER */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            Create Account
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Join us and secure your vault
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          {/* EMAIL */}
          <div>
            <label className="text-xs font-semibold text-gray-500 mb-1 block">
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              placeholder="alex@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/80 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
              required
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="text-xs font-semibold text-gray-500 mb-1 block">
              PASSWORD
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a strong password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 pr-12 rounded-xl bg-white/80 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* CONFIRM PASSWORD */}
          <div>
            <label className="text-xs font-semibold text-gray-500 mb-1 block">
              CONFIRM PASSWORD
            </label>

            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 pr-12 rounded-xl bg-white/80 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                required
              />

              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-700 to-indigo-700 text-white font-medium shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition"
          >
            Create Account →
          </button>
        </form>

        {/* FOOTER */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">Already have an account?</p>
          <button
            onClick={() => navigate("/login")}
            className="mt-3 px-5 py-2 rounded-full bg-white shadow hover:shadow-md border border-gray-200 text-sm transition"
          >
            Login here
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
