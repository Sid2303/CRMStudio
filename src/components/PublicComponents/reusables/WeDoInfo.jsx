import React from 'react'
import './WeDoInfo.css'

export default function WeDoInfo(props) {
    return (
        <div className="we-do-info">
            <p>{props.title}</p>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
        </div>
    )
}
