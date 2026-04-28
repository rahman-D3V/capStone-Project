import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiZap } from "react-icons/fi";

const Splash = () => {
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        navigate("/home");
      }, 800);
    }, 3500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="w-full h-screen bg-gradient-to-br from-cyan-100 via-teal-50 to-cyan-100 flex items-center justify-center overflow-hidden relative">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDuration: "4s" }}></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDuration: "5s", animationDelay: "0.5s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" style={{ animationDuration: "6s", animationDelay: "1s" }}></div>
      </motion.div>

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isExiting ? { opacity: 0, scale: 0.5 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Logo container */}
        <motion.div
          className="mb-8 flex justify-center"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <motion.div
            className="flex items-center justify-center w-32 h-32 bg-gradient-to-br from-cyan-400 via-teal-400 to-cyan-500 rounded-3xl shadow-lg shadow-cyan-400/40 border-2 border-cyan-300/70"
            animate={{ rotate: isExiting ? 360 : 0, scale: [1, 1.1, 1] }}
            transition={{ duration: 0.8, scale: { duration: 2, repeat: Infinity } }}
            whileHover={{ scale: 1.15, boxShadow: "0 0 25px rgba(34, 211, 238, 0.6)" }}
          >
            <FiZap className="w-16 h-16 text-white" strokeWidth={1.5} />
          </motion.div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isExiting ? { opacity: 0 } : { opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="text-7xl font-black bg-gradient-to-r from-cyan-600 via-teal-600 to-cyan-700 bg-clip-text text-transparent mb-3">
            NeoVault
          </h1>
          <p className="text-xl text-teal-700 font-semibold tracking-widest">
            🔐 FINANCIAL EXCELLENCE REDEFINED 🔐
          </p>
        </motion.div>
      </motion.div>

      {/* Bottom text */}
      <motion.div
        className="absolute bottom-8 left-0 right-0 text-center"
        initial={{ opacity: 0 }}
        animate={isExiting ? { opacity: 0 } : { opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <p className="text-sm text-teal-700 font-semibold tracking-widest">
          STARTING YOUR FINANCIAL DASHBOARD
        </p>
      </motion.div>
    </div>
  );
};

export default Splash;
