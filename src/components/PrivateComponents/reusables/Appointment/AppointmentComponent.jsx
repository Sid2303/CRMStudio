import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot,faUsers,faArrowRight } from '@fortawesome/free-solid-svg-icons';
import PriorityTag from '../PriorityTag/PriorityTag';
import './AppointmentComponent.css'

export default function AppointmentComponent(props) {
    return (
        <div className='appointment-component'>
            <div className="appointment-component-left">
                <p>12:36pm</p>
            </div>
            <div className="appointment-component-right">
                <div className="appointment-component-right-header">
                    <h4 className="appointment-component-title">{props.appointment.title}</h4>
                    <FontAwesomeIcon icon={faArrowRight} />
                </div>
                <div className="appointment-component-right-body">
                    <p>{props.appointment.description}</p>
                    <div className="appointment-component-details">
                        <div className="appointment-component-details-info">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <p>{props.appointment.location}</p>
                        </div>
                        <div className="appointment-component-details-info">
                            <FontAwesomeIcon icon={faUsers} />
                            <p>{props.appointment.attendees}</p>
                        </div>
                    </div>
                    <PriorityTag priority={props.appointment.priority}/>
                </div>
            </div>
        </div>
    )
}
