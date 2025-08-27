import React from 'react';
import './Cookies.css';
import { useRef } from 'react';

export default function Cookies() {
	const cookiesRef = useRef(null);

	const handleAccept = () => {
		if (cookiesRef.current) {
			cookiesRef.current.style.display = 'none';
		}
	};
	return (
		<section
			className="cpn-cookies-banner"
			role="dialog"
			aria-live="polite"
			aria-label="Cookie notice"
			ref={cookiesRef}
		>
			<h2 className="cpn-cookies-title">🍪 Cookie Notice</h2>

			<p className="cpn-cookies-desc">
				We use cookies to ensure that we give you the best experience on our website.
				<a href="#" className="cpn-cookies-link">
					Read cookies policies
				</a>
				.
			</p>

			<div className="cpn-cookies-actions">
				<button className="cpn-cookies-manage" type="button">
					Manage your preferences
				</button>

				<button className="cpn-cookies-accept" type="button" onClick={handleAccept}>
					Accept
				</button>
			</div>
		</section>
	);
}
