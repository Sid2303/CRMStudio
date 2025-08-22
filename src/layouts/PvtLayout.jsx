import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar.jsx';
import Navbar from '../components/Navbar/Navbar.jsx';
import Footer from '../components/Footer/Footer.jsx';
import './PvtLayout.css';
import { useState } from 'react';

export default function PvtLayout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    return (
        <div className="pvt-layout">
            <Sidebar isSidebarOpen={isSidebarOpen}/>
            <main onClick={() => isSidebarOpen && setIsSidebarOpen(false) }>
                <Navbar toggleSidebar={toggleSidebar}/>
                {children}
            </main>
            <Footer />
        </div>
    );
}
