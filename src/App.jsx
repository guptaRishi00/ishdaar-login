import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/Login";
import LoginWrapper from "./components/LoginWrapper";
import RegisterWrapper from "./components/RegisterWrapper";
import PasswordRecovery from "./pages/PasswordRecovery";
import Continue from "./pages/Continue";
import ResetPassword from "./pages/ResetPassword";
import VerifyMail from "./pages/VerifyMail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginWrapper />} />
        <Route path="/register" element={<RegisterWrapper />} />
        <Route path="/password-recovery" element={<PasswordRecovery />} />
        <Route path="/check-mail" element={<Continue />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verify-mail" element={<VerifyMail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
