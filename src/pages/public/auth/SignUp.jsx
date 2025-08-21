import React from 'react';
import './signUp.css';
import InputBox from '../../../components/PublicComponents/reusables/InputBox.jsx';
import companyLogo from '../../../assets/companylogo.png';
import { Link } from 'react-router-dom';
import loginImg from '../../../assets/photos/login-right-better.png';
import SubmitButton from '../../../components/PublicComponents/reusables/SubmitButton.jsx';
import OtherLogins from '../../../components/PublicComponents/reusables/OtherLogins.jsx';

export default function SignUp() {
    return (
        <div>
            <a className="logo-section" href="home.html">
                <img src={companyLogo} alt="" height="100px" width="100px" />
            </a>
            <div className="signup-page">
                <div className="signup-left">
                    <div className="signup-left-image-container">
                        <img src={loginImg} alt="" />
                    </div>
                </div>
                <div className="signup-right">
                    <form>
                        <h1>Sign Up</h1>
                        <p id="login-line">Let’s get you all set up so you can access your personal account.</p>
                        <div className="inputs-container">
                            <div className="input-container-part">
                                <InputBox label="First Name" type="text" id="first-name" name="first-name" required />
                            </div>
                            <div className="input-container-part">
                                <InputBox label="Last Name" type="text" id="last-name" name="last-name" required />
                            </div>
                        </div>
                        <div className="inputs-container">
                            <div className="input-container-part">
                                <InputBox label="Email" type="email" id="email" name="email" required />
                            </div>
                            <div className="input-container-part">
                                <InputBox label="Phone" type="tel" id="phone" name="phone" required />
                            </div>
                        </div>
                        <div className="inputs-container password-container">
                            <div className="input-container-part">
                                <InputBox label="Password" type="password" id="new-password" name="password" required />
                            </div>
                            <div className="input-container-part">
                                <InputBox label="Confirm Password" type="password" id="confirm-password" name="confirm-password" required />
                            </div>
                        </div>
                        <div>
                            <div className="remember-me">
                                <input type="checkbox" id="remember-me" name="remember-me" />
                                <label htmlFor="remember-me">I agree to all the Terms and Privacy Policies</label>
                            </div>
                        </div>
                        <div className="login-goto-sign">
                            <SubmitButton name="Sign Up" />
                            <p className="go-to-signup">Already have an account? <Link to="/login">Log In</Link></p>
                        </div>
                        <div className="or-divider">
                            <span>or</span>
                        </div>
                        
                        <OtherLogins />
                    </form>
                </div>
            </div>
        </div>
    );
}
