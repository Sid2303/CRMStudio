import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar.jsx';
import Navbar from '../components/Navbar/Navbar.jsx';
import Footer from '../components/Footer/Footer.jsx';
import './PvtLayout.css';
import { useState } from 'react';
import profilePic from '../assets/profilepic.jpg';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function PvtLayout({ children, pageTitle = 'Dashboard' }) {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	return (
		<div className="pvt-layout">
			<Sidebar isSidebarOpen={isSidebarOpen} />
			<Box component={'div'} className="employee-header-global">
				<Box component={'div'} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
					<Navbar toggleSidebar={toggleSidebar} />
					<Typography variant="h4" color="initial" fontWeight={600}>
						{pageTitle}
					</Typography>
				</Box>
				<Box
					component={'img'}
					src={profilePic}
					alt="Profile Picture"
					sx={{
						height: '55px',
						width: '55px',
						borderRadius: '50%',
						border: '2px solid #ccc',
						objectFit: 'cover',
						cursor: 'pointer',
					}}
				/>
			</Box>
			<main onClick={() => isSidebarOpen && setIsSidebarOpen(false)}>
				<div className="max-w-[1600px]">{children}</div>
			</main>
			<Footer />
		</div>
	);
}
