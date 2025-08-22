import React from 'react';
import './Sidebar.css';
import companyLogo from '../../assets/companylogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faTableCells, faListCheck } from '@fortawesome/free-solid-svg-icons';
import { faNoteSticky, faFolder, faComment } from '@fortawesome/free-regular-svg-icons';
import { NavLink } from 'react-router-dom';

export default function Sidebar(props) {
    return (
        <aside className={`sidebar ${props.isSidebarOpen ? 'active' : 'inactive'}`} id="sidebar">
            <NavLink to="/" className="logo-link">
                <img src={companyLogo} alt="" className="logo" title="Company Logo" />
            </NavLink>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/companydashboard" className={({ isActive }) => isActive ? 'selected-page' : ''}>
                            <FontAwesomeIcon icon={faBriefcase} />
                            <p>Bussiness</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'selected-page' : ''}>
                            <FontAwesomeIcon icon={faTableCells} />
                            <p>Dashboard</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/todo" className={({ isActive }) => isActive ? 'selected-page' : ''}>
                            <FontAwesomeIcon icon={faListCheck} />
                            <p>To Do</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/notes" className={({ isActive }) => isActive ? 'selected-page' : ''}>
                            <FontAwesomeIcon icon={faNoteSticky} />
                            <p>Notes</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" className={({ isActive }) => isActive ? 'selected-page' : ''}>
                            <FontAwesomeIcon icon={faFolder} />
                            <p>Projects</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/chats" className={({ isActive }) => isActive ? 'selected-page' : ''}>
                            <FontAwesomeIcon icon={faComment} />
                            <p>Chats</p>
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className="sidebar-footer">
                <div className="sidebar-dropdown-trigger">
                    <div className="profile-img">
                        <img src="https://avatar.iran.liara.run/public/boy?username=Ash" alt="" />
                    </div>
                    <div className="sidebar-dropdown">
                        <div className="sidebar-dropdown-header">
                            <h3>Siddhant Rawat</h3>
                            <p>siddhantrawat.web@gmail.com</p>
                            <p>2025-2025</p>
                        </div>
                        <div className="sidebar-nav">
                            <NavLink to="/profile">Profile</NavLink>
                            <NavLink to="/help">Help</NavLink>
                        </div>
                        <div className="sidebar-logout-row">
                            <button className="sidebar-logout" type="button">Logout</button>
                        </div>
                    </div>
                </div>
                <div className="profile-details">
                    <p className="user-name">Siddhant Rawat</p>
                    <p className="usermail">siddhantrawat.web@gmail.com</p>
                </div>
            </div>
        </aside>
    );
}
