import React from 'react'
import './setNewPassword.css';
import OtherLogins from '../../../components/PublicComponents/reusables/OtherLogins';
import InputBox from '../../../components/PublicComponents/reusables/InputBox';
import SubmitButton from '../../../components/PublicComponents/reusables/SubmitButton';
import companyLogo from '../../../assets/companylogo.png';
import forgotPasswordIcon from '../../../assets/photos/forgot-password.svg';

export default function SetNewPassword() {
    return (
        <div>
            <a className="logo-section" href="home.html">
                <img src={companyLogo} alt="" height="100px" width="100px" />
            </a>
            <div className="set-new-password-page">
                <div className="set-new-password-page-left">
                    <form action="">
                        <div className="verify-form-heading">
                            <h1>Set a password</h1>
                            <p id="set-email-line">Your previous password has been reseted. Please set a new password for your account.</p>
                        </div>
                        <InputBox label="New Password" type="password" id="new-password" name="new-password" required />
                        <InputBox label="Confirm Password" type="password" id="confirm-password" name="confirm-password" required />
                        <div className="set-new-password-page-finish">
                            <SubmitButton name="Finish" />
                        </div>
                        <div className="or-divider">
                            <span>or login with</span>
                        </div>
                        <OtherLogins />
                    </form>
                </div>
                <div className="set-new-password-page-right">
                    <div className="set-new-password-page-right-image-container">
                        <img src={forgotPasswordIcon} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
