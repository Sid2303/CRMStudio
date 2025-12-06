import React from 'react';
import './WeDoImg.css';

export default function WeDoImg({ img, title }) {
	return (
		<div className="we-do-img">
			<img src={img} alt="" loading="lazy" decoding="async" />
			<p className="we-do-img-title">{title}</p>
		</div>
	);
}
