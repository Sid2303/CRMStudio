import React, { useEffect } from 'react'
import './Schedule.css'
import ScheduleHeader from './ScheduleHeader.jsx'
import { useState } from 'react'
import appointments from '../../../../assets/appointmentsList.js'
import AppointmentComponent from '../../reusables/Appointment/AppointmentComponent.jsx'

export default function Schedule(props) {
    const [todayAppointments, setTodayAppointments] = useState([]);
    const { selectedDate, month, year } = props;

    useEffect(() => {
        if (selectedDate == null || month == null || year == null) {
            setTodayAppointments([]);
            return;
        }
        const isoDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(selectedDate).padStart(2, '0')}`;
        const filtered = appointments.filter(a => a.date === isoDate);
        setTodayAppointments(filtered);
    }, [selectedDate, month, year]);
    return (
        <div className='schedule-component'>
            <ScheduleHeader />
            <div className="schedule-body">
                <div className="appointments-container">
                    {todayAppointments.length > 0 ? todayAppointments.map((appointment, index) => (
                        <AppointmentComponent 
                            key={index}
                            appointment={appointment}
                        />
                    )): 'No appointments for today'}
                </div>
            </div>
        </div>
    )
}
