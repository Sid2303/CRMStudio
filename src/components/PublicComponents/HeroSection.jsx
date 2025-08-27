import React from 'react';
import './herosection.css';
import FlipWords from './FlipWords';
import { motion } from 'framer-motion';

export default function HeroSection() {
	return (
		<motion.div
			className="hero-section"
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3, ease: 'easeOut' }}
			viewport={{ margin: '-100px' }}
		>
			<h1>
				The everything app, for <FlipWords words={['work', 'teams', 'sales']} />
			</h1>
			<h3>
				<span>Get everyone working in a single platform</span> designed to manage any type of work.
			</h3>
			<button>Get Started. For Free</button>
			<p>Free Demo. No Credit Card.</p>
		</motion.div>
	);
}
