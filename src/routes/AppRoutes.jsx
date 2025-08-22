import { Routes, Route } from "react-router-dom";
import Home from "../pages/public/Home.jsx";
// Auth pages
import Login from "../pages/public/auth/Login.jsx";
import SignUp from "../pages/public/auth/SignUp.jsx";
import ForgotPassword from "../pages/public/auth/ForgotPassword.jsx";
import VerifyOtp from "../pages/public/auth/VerifyOtp.jsx";
import SetNewPassword from "../pages/public/auth/SetNewPassword.jsx";

import ProtectedRoutes from "./ProtectedRoutes.jsx";

export default function AppRoutes() {
    return (
        <Routes>
            <Route>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/forgotpassword" element={<ForgotPassword />} />
                <Route path="/verifyotp" element={<VerifyOtp />} />
                <Route path="/setnewpassword" element={<SetNewPassword />} />
            </Route>

            <Route path="/*" element={<ProtectedRoutes />} />
        </Routes>
    );
}
