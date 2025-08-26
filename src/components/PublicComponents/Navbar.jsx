import React, { useState,useRef,useEffect } from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faXmark } from '@fortawesome/free-solid-svg-icons'
import companyLogo from '../../assets/photos/companylogo.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [dropdownState,setDropdownState] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setDropdownState(!dropdownState);
        console.log(dropdownState)
    }

    useEffect(() => {
        const headerEl = dropdownRef.current;
        const onScroll = () => {
            if (!headerEl) return;
            if (window.scrollY > 300) {
                headerEl.classList.add('active');
            } else {
                headerEl.classList.remove('active');
            }
        };
        window.addEventListener('scroll', onScroll);
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (<header id="header-home" className="home-header" ref={dropdownRef}>
        <div className={`overlay ${dropdownState ? 'active' : ''}`} onClick={toggleDropdown}></div>
            <ul>
                <div className="header-left">
                    <div className="dropdown">
                    <div className="dropdown-trigger" onClick={toggleDropdown}>
                        <FontAwesomeIcon icon={faBars}/>
                    </div>
                    <div className={`dropdown-options ${dropdownState ? 'show' : ''}`}>
                        <div className="dropdown-options-top">
                            <div className="close-dropdown" onClick={toggleDropdown}>
                                <FontAwesomeIcon icon={faXmark} />
                            </div>
                            <ul className="nav-links">
                                <li><a href="#testimonials">Testimonials</a></li>
                                <li><a href="#what-we-do">What We Do</a></li>
                                <li><a href="#advantages">Advantages</a></li>
                                <li><a href="#talk-to-crm-expert">Talk to CRM Expert</a></li>
                                <li><a href="">Contact Sales</a></li>
                            </ul>
                        </div>
                        <div className="dropdown-options-bottom">
                            <div className="mobile-login"><Link to="/login">Log In</Link></div>
                            <div className="mobile-sign-up"><Link to="/signup">Sign Up</Link></div>
                        </div>
                    </div>
                </div>
                    <li className="company-logo">
                        <a href=""><img src={companyLogo} alt="" /></a>
                    </li>
                </div>
                <li>
                    <nav>
                        <div className="nav-links">
                            <li><a href="#testimonials">Testimonials</a></li>
                            <li><a href="#what-we-do">What We Do</a></li>
                            <li><a href="#advantages">Advantages</a></li>
                            <li><a href="#talk-to-crm-expert">Talk to CRM Expert</a>
                            </li>
                        </div>
                        <div className="contact-sales">
                            <a href="">Contact Sales</a>
                        </div>
                        <div className="create-acc">
                            <div className="login"><Link to="/login">Log In</Link></div>
                            <div className="sign-up"><a href="signup.html">Sign Up</a></div>
                        </div>
                    </nav>
                </li>
            </ul>
        </header>
    )
}
