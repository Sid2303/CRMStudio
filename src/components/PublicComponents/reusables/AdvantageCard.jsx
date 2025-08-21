import React from 'react'
import './advantageCard.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AdvantageCard(props) {
    return (
        <div className="adv-card">
            <div className="adv-icon">
                {props.icon && <FontAwesomeIcon icon={props.icon} />}
            </div>
            <div className="avd-point">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    )
}
