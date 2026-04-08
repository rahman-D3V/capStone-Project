import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./Pages/Register";
import OTP from "./Pages/Otp";
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import LandingPage from "./Pages/LandingPage";
import Landing from "./Pages/LandingPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/otp" element={<OTP />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />


      <Route path="/lan" element={<Landing />} />
    </Routes>
  );
};

export default App;
