import React from 'react'
import './submitButton.css';

export default function SubmitButton(props) {
    return (
        <button type="submit" id="submit-btn">{props.name}</button>
    )
}
