import React from 'react';
import './ProgressBar.css';
import { motion as Motion, useMotionValueEvent, useScroll } from 'framer-motion';

export default function ProgressBar() {
	const { scrollYProgress } = useScroll();
	useMotionValueEvent(scrollYProgress, 'change', latest => {
		console.log(latest);
	});
	return <Motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />;
}
