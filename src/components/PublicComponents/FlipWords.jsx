import React, { useEffect, useState } from 'react';
import './flipwords.css';

export default function FlipWords({ words = [], interval = 2200, className = '' }) {
	const items = Array.isArray(words) && words.length ? words : ['work'];
	const itemsLength = items.length;
	const [index, setIndex] = useState(0);
	const [flipping, setFlipping] = useState(false);

	useEffect(() => {
		let mounted = true;
		const id = setInterval(() => {
			if (!mounted) return;
			setFlipping(true);
			setTimeout(() => {
				if (!mounted) return;
				setIndex(i => (i + 1) % itemsLength);
				setFlipping(false);
			}, 220);
		}, Math.max(800, interval));
		return () => {
			mounted = false;
			clearInterval(id);
		};
	}, []);

	return (
		<span className={`flip-words ${flipping ? 'flipping' : ''} ${className}`} aria-live="polite">
			{items[index]}
		</span>
	);
}
