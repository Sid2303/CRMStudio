import React from 'react'
import './verifyOtp.css';
import companyLogo from '../../../assets/companylogo.png';
import OtherLogins from '../../../components/PublicComponents/reusables/OtherLogins';
import InputBox from '../../../components/PublicComponents/reusables/InputBox';
import otpPageImage from '../../../assets/photos/otp-upscale.png';
import SubmitButton from '../../../components/PublicComponents/reusables/SubmitButton';
import { useNavigate } from "react-router-dom";

export default function VerifyOtp() {
    const navigate = useNavigate();

    function goToSetNewPassword() {
        let path = `/setnewpassword`; 
        navigate(path);
    }

    return (
        <div>
            <a className="logo-section" href="home.html" >
            <img src={companyLogo} alt="" height="100px" width="100px" />
            </a>
            <div className="verify-top-page">
                <div className="verify-top-left">
                    <form action="">
                        <a href="login.html" id="back-to-login">
                            <i className="fa-solid fa-angle-left"></i>
                            <p>Back To Login</p>
                        </a>
                        <div className="verify-form-heading">
                            <h1>Verify Code</h1>
                            <p id="login-line">An authentication code has been sent to your email.</p>
                        </div>
                        <InputBox label="Enter OTP" type="text" id="otp" name="otp" />
                        <div className="login-goto-sign" onClick={goToSetNewPassword}>
                            <SubmitButton name="Verify" />
                        </div>

                        <div className="or-divider">
                            <span>or login with</span>
                        </div>

                        <OtherLogins />
                    </form>
                </div>
                <div className="verify-otp-right">
                    <div className="verify-otp-right-image-container">
                        <img src={otpPageImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
