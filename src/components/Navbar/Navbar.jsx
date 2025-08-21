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
                <div className="page-name">
                    <h1>Dashboard</h1>
                </div>
            </div>
            <div className="user-info">
                <div className="dropdown-trigger">
                    <img src="user.svg" alt="" />
                    <div className="dropdown">
                        <div className="dropdown-header">
                            <h3>Siddhant Rawat</h3>
                            <p>siddhantrawat.web@gmail.com</p>
                            <p>2025-2025</p>
                        </div>
                        <div className="nav-div">
                            <a href="settings.html">
                                <i className="fa-regular fa-user"></i>
                                Profile
                            </a>
                            <a href="">
                                <i className="fa-regular fa-circle-question"></i>
                                Help
                            </a>
                        </div>
                        <div className="logout">
                            <button>
                                <i className="fa-solid fa-right-to-bracket"></i>
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
