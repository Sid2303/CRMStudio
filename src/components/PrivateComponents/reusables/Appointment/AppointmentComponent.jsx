import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot,faUsers,faArrowRight } from '@fortawesome/free-solid-svg-icons';
import PriorityTag from '../PriorityTag/PriorityTag';
import './AppointmentComponent.css'

export default function AppointmentComponent(props) {
    return (
        <div className='appointment-component'>
            <div className="appointment-component-left">
                <p>{props.appointment.time}</p>
            </div>
            <div className="appointment-component-right">
                <div className="appointment-component-right-header">
                    <p className="appointment-component-title">{props.appointment.title}</p>
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
