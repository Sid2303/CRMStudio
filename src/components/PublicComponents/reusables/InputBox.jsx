import React from 'react'
import './inputBox.css'

export default function InputBox({ label, type, id, name, ...rest }) {
    return (
        <div className="input-container">
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} name={name} {...rest} />
        </div>
    );
}
