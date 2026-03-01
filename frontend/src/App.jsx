import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./auth/Login";
import Register from "./auth/Register";
import ForgetPassowrd from "./auth/ForgetPassowrd";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgetpassowrd" element={<ForgetPassowrd />} />
    </Routes>
  );
}

export default App;