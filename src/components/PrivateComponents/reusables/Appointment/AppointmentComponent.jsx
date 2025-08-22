import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot,faUsers,faArrowRight } from '@fortawesome/free-solid-svg-icons';
import PriorityTag from '../PriorityTag/PriorityTag';
import './AppointmentComponent.css'

export default function AppointmentComponent() {
    return (
        <div className='appointment-component'>
            <div className="appointment-component-left">
                <p>12:36pm</p>
            </div>
            <div className="appointment-component-right">
                <div className="appointment-component-right-header">
                    <h4 className="appointment-component-title">Spend left here voice</h4>
                    <FontAwesomeIcon icon={faArrowRight} />
                </div>
                <div className="appointment-component-right-body">
                    <p>Whole song science traditional. Parent matter short knowledge action risk rich. 
                        Black painting wonder which once social. Beautiful individual it industry in. 
                        Eat likely senior skin before carry religious. Strong kitchen mean series the 
                        choice generation.
                    </p>
                    <div className="appointment-component-details">
                        <div className="appointment-component-details-info">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <p>Online (Teams)</p>
                        </div>
                        <div className="appointment-component-details-info">
                            <FontAwesomeIcon icon={faUsers} />
                            <p>10</p>
                        </div>
                    </div>
                    <PriorityTag />
                </div>
            </div>
        </div>
    )
}
