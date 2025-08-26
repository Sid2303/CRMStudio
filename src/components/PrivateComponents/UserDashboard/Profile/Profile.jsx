import React from 'react'
import profilepic from '../../../../assets/profilepic.jpg'
import './profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone,faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Profile() {
    return (
        <div className='profile-card'>
            <div className="profile-card-pic">
                <img src={profilepic} alt="" />
            </div>
            <div className="profile-card-info">
                <h2 className="profile-card-info-username">Bruce Wayne</h2>
                <p className="profile-card-info-role">Bussiness Man</p>
                <p className="profile-card-info-employment-type">Full Time</p>
            </div>
            <div className="profile-card-contact-info">
                <div className="profile-card-contact-info-section">
                    <FontAwesomeIcon icon={faEnvelope} className='icon'/>
                    <p>siddhantrawat.web@gmail.com</p>
                </div>
                <div className="profile-card-contact-info-section">
                    <FontAwesomeIcon icon={faPhone} className='icon'/>
                    <p>8792526541</p>
                </div>
                <div className="profile-card-contact-info-section">
                    <FontAwesomeIcon icon={faLocationDot} className='icon'/>
                    <p>Dehradun, India</p>
                </div>
            </div>
        </div>
    )
}
