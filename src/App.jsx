import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { Route, Routes, useLocation } from "react-router-dom";
import Register from "./Pages/Register";
import OTP from "./Pages/Otp";
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import LandingPage from "./Pages/LandingPage";
import Landing from "./Pages/LandingPage";
import SignupPage from "./Pages/Register";
import SigninPage from "./Pages/Login";
import Splash from "./Pages/Splash";
import PageLoader from "./components/PageLoader";
import { useState, useEffect } from "react";

const App = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Don't show loader on splash page
    if (location.pathname === '/') {
      setLoading(false);
      return;
    }
    
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && <PageLoader />}
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<Landing />} />
        <Route path="/login" element={<SigninPage />} />
        <Route path="/register" element={<SignupPage />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default App;
