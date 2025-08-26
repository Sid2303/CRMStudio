import React from 'react'
import './ScheduleHeader.css'
import AddButton from '../../reusables/AddButton/AddButton'

export default function ScheduleHeader() {
    return (
        <header className="schedule-header">
            <div className="schedule-header-top">
                <h4>Todays Appointments</h4>
                <div className="add-appointment-button-container">
                    <AddButton 
                        name={"Appointment"}
                    />
                </div>
            </div>
            <div className="schedule-header-bottom">
                <p>17</p>
            </div>
        </header>
    )
}
