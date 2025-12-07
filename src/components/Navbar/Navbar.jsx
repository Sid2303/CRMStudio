import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar(props) {
	return (
		<header className="information">
			<div className="header-left">
				<div className="mobile-section">
					<FontAwesomeIcon icon={faBars} id="menu-button" onClick={props.toggleSidebar} />
				</div>
			</div>
		</header>
	);
}
