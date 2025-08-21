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
                        <NavLink to="/company" className={({ isActive }) => isActive ? 'selected-page' : ''}>
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
                        <NavLink to="/tasks" className={({ isActive }) => isActive ? 'selected-page' : ''}>
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
        </aside>
    );
}
