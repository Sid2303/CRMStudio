import React from 'react'
import './CalendarBody.css'

export default function CalendarBody(props) {

    function getDaysInMonth(month, year) {
        return new Date(year, month + 1, 0).getDate();
    }

    function getFirstDayOfMonth(month, year) {
        return new Date(year, month, 1).getDay();
    }

    let days = getDaysInMonth(props.month, props.year)
    let firstDay = getFirstDayOfMonth(props.month, props.year);

    const daysArray = [];
    for (let i = 1; i <= days; i++) {
        daysArray.push(i);
    }

    const emptyDays = [];
    for (let i = 0; i < firstDay; i++) {
        emptyDays.push((i));
    }

    return (
        <div className='calendar-body'>
            {emptyDays.map((_, index) => (
                <div key={index} className='empty-day'></div>
            ))}
            {daysArray.map((day, index) => (
                <div
                    key={index}
                    className={`day date ${props.today === day ? 'today' : ''} ${props.selectedDay === day ? 'selected-date' : ''}`}
                    onClick={() => props.handleDateChange(day)}
                >
                    <span>{day}</span>
                </div>
            ))}
        </div>
    )
}
