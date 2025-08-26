import React from 'react'
import './CardLayout.css'
import ViewMoreButton from '../ViewMoreButton/ViewMoreButton'

export default function CardLayout({ icon, title, children, className = '' }) {
    return (
        <div className={`card-layout ${className}`}>
            <div className="card-layout-header">
                <div className="card-layout-header-left">
                    <div className="card-layout-header-icon">{icon}</div>
                    <div className="card-layout-header-title">{title}</div>
                </div>
                <div className="card-layout-header-right">
                    <ViewMoreButton />
                </div>
            </div>
            <div className="card-layout-body">
                {children}
            </div>
        </div>
    )
}
