import React from 'react'
import './forgotPassword.css';
import { Link } from 'react-router-dom';
import InputBox from '../../../components/PublicComponents/reusables/InputBox.jsx';
import SubmitButton from '../../../components/PublicComponents/reusables/SubmitButton.jsx';
import OtherLogins from '../../../components/PublicComponents/reusables/OtherLogins.jsx';
import companyLogo from '../../../assets/companylogo.png';
import pageRight from '../../../assets/photos/forgot-password.svg';
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
    const navigate = useNavigate();
    
    function goToOtp(){
        let path = `/verifyotp`; 
        navigate(path);
    }

    return (
        <div>
            <a className="logo-section" href="home.html">
                <img src={companyLogo} alt="" height="100px" width="100px" />
            </a>
            <div className="forgot-password-page">
                <div className="forgot-password-left">
                    <form action="">
                        <Link to="/login" id="back-to-login">
                            <i className="fa-solid fa-angle-left"></i>
                            <p>Back To Login</p>
                        </Link>
                        <h1>Forgot your password?</h1>
                        <p id="login-line">Don’t worry, happens to all of us. Enter your email below to recover your password.</p>
                        <InputBox label="Email" type="email" id="email" name="email"  />
                        <div className="login-goto-sign" onClick={goToOtp}>
                            <SubmitButton name="Submit"/>
                        </div>

                        <div className="or-divider">
                            <span>or login with</span>
                        </div>

                        <OtherLogins />
                    </form>
                </div>
                <div className="forgot-password-right">
                    <div className="forgot-password-right-image-container">
                        <img src={pageRight} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
