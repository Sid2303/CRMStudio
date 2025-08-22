import React from 'react'
import './Schedule.css'
import ScheduleHeader from './ScheduleHeader.jsx'
import AppointMentComponent from '../../resables/AppointMentComponent.jsx'

export default function Schedule() {
    return (
        <div className='schedule-component'>
            <ScheduleHeader />
            <div className="schedule-body">
                <AppointMentComponent />
            </div>
        </div>
    )
}
