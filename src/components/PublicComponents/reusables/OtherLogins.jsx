import React from 'react'
import './otherLogins.css';
import googleIcon from '../../../assets/photos/google-icon.png';
import facebookIcon from '../../../assets/photos/facebook-icon.png';
import appleIcon from '../../../assets/photos/apple-icon.png';

export default function OtherLogins() {
    return (
        <div className="other-login-methods">
            <div className="company-div">
                <img src={facebookIcon} alt="" />
            </div>
            <div className="company-div">
                <img src={googleIcon} alt="" />
            </div>
            <div className="company-div">
                <img src={appleIcon} alt="" />
            </div>
        </div>
    )
}
