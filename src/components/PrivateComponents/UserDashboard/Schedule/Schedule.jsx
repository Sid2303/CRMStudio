import React from 'react'
import './Schedule.css'
import ScheduleHeader from './ScheduleHeader.jsx'
import AppointmentComponent from '../../reusables/Appointment/AppointmentComponent.jsx'

export default function Schedule() {
    return (
        <div className='schedule-component'>
            <ScheduleHeader />
            <div className="schedule-body">
                <AppointmentComponent />
            </div>
        </div>
    )
}
