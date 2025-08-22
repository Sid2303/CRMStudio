import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'

export default function Footer() {
    return (
        <footer>
            <div className="footer-left">
                <FontAwesomeIcon icon={faCopyright} />
                CRM Studio. All rights reserved.
            </div>
            <div className="footer-middle">
                <ul>
                    <li><a href="">Privacy</a></li>
                    <li><a href="">Terms</a></li>
                    <li><a href="">Support</a></li>
                </ul>
            </div>
            <div className="footer-right"><p>support@crmstudios.com</p></div>
        </footer>
    )
}
