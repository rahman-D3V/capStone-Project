import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./Pages/Register";
import OTP from "./Pages/Otp";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/otp" element={<OTP />} />
    </Routes>
  );
};

export default App;
