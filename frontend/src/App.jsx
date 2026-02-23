import { Route, Routes } from "react-router-dom";
import "./App.css";
import ForgetPassowrd from "./auth/ForgetPassowrd";
import Login from "./auth/Login";
import Register from "./auth/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/forgetpassowrd" element={<ForgetPassowrd />} />
      </Routes>
    </>
  );
}

export default App;
