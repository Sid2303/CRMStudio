import React from 'react'
import { useState } from 'react';
import './Dashboard.css'
import Calendar from '../../../components/PrivateComponents/UserDashboard/Calendar/Calendar.jsx'

export default function Dashboard() {
    const date = new Date();
    const today = date.getDate();
    const [selectedDate, setSelectedDate] = useState(today);
    const [month, setMonth] = useState(date.getMonth()); // 0-based
    const [year, setYear] = useState(date.getFullYear());

    const handleDateChange = (newDate) => {
        setSelectedDate(newDate);
        console.log(newDate);
    }

    const handleNextMonth = () => {
        setMonth(prev => {
            const next = (prev + 1) % 12;
            if (next === 0) setYear(y => y + 1);
            return next;
        });
    };

    const handlePrevMonth = () => {
        setMonth(prev => {
            if (prev === 0) {
                setYear(y => y - 1);
                return 11;
            }
            return prev - 1;
        });
    };


    return (
        <>
            <div className="dashboard-heading">
                <h2>Welcome back! Here's your workspace</h2>
            </div>
            <div className="dashboard-contents">
                <div className="calendar-component">
                    <Calendar 
                        month={month}
                        year={year}
                        nextMonth={handleNextMonth}
                        prevMonth={handlePrevMonth}
                        today={today}
                        handleDateChange={handleDateChange}
                        selectedDate={selectedDate}
                    />
                </div>
            </div>
        </>
    )
}
