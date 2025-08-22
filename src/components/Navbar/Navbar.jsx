import React from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import companyLogo from '../../assets/photos/companylogo.png';

export default function Navbar(props) {
    return (
        <header className="information">
            <div className="header-left">
                <div className="mobile-section">
                    <FontAwesomeIcon icon={faBars} id='menu-button'onClick={props.toggleSidebar}/>
                    <img src={companyLogo} alt="company-logo" id="conpany-logo" />
                </div>
            </div>
        </header>
    )
}
