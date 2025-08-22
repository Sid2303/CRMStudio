import React from 'react';
import './WeDoInfo.css';

export default function WeDoInfo({ title, name, description }) {
    return (
        <div className="we-do-info">
            <p className='we-do-info-title'>{title}</p>
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    );
}
