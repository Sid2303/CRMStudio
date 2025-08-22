import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <div class="footer-left">
                <i class="fa-regular fa-copyright"></i>
                CRM Studio. All rights reserved.
            </div>
            <div class="footer-middle">
                <ul>
                    <li><a href="">Privacy</a></li>
                    <li><a href="">Terms</a></li>
                    <li><a href="">Support</a></li>
                </ul>
            </div>
            <div class="footer-right"><p>support@crmstudios.com</p></div>
        </footer>
    )
}
