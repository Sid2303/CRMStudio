import React, { useState } from 'react';
import companyLogo from '../../../assets/companylogo.png';
import './login.css';
import InputBox from '../../../components/PublicComponents/reusables/InputBox.jsx';
import { Link } from 'react-router-dom';
import loginImg from '../../../assets/photos/login-right-better.png';
import SubmitButton from '../../../components/PublicComponents/reusables/SubmitButton.jsx';
import OtherLogins from '../../../components/PublicComponents/reusables/OtherLogins.jsx';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            setEmail(e.target.value);
        } else if (e.target.name === 'password') {
            setPassword(e.target.value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login data:', email, password);
    };

    return (
        <>
            <a className="logo-section" href="home.html">
                <img src={companyLogo} alt="" height="100px" width="100px" />
            </a>
            <div className="login-page">
                <div className="login-left">
                    <form onSubmit={handleSubmit}>
                        <h1>Login</h1>
                        <p id="login-line">Welcome back! Please login to your account.</p>
                        <InputBox label="Email" type="email" id="email" name="email" required  onChange={handleChange} />
                        <InputBox label="Password" type="password" id="password" name="password" required  onChange={handleChange} />
                        <div className="options">
                            <div className="remember-me">
                                <input type="checkbox" id="remember-me" name="remember-me" />
                                <label htmlFor="remember-me">Remember me</label>
                            </div>
                            <Link to='/forgotpassword'>Forgot Password?</Link>
                        </div>
                        <div className="login-goto-sign">
                            <SubmitButton name="Log In" />
                            <p className="go-to-signup">Don't have an account? <Link to="/signup">Sign Up</Link></p>
                        </div>

                        <div className="or-divider">
                            <span>or</span>
                        </div>

                        <OtherLogins />
                    </form>
                </div>
                <div className="login-right">
                    <div className="login-right-image-container">
                        <img src={loginImg} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}
