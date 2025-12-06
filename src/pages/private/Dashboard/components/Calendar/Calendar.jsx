import React from 'react'
import './Calendar.css'
import CalendarHeader from './CalendarHeader.jsx'
import CalendarBody from './CalendarBody.jsx'

export default function Calendar(props) {
    return (
        <div className='calander-container'>
            <CalendarHeader 
                nextMonth={props.nextMonth}
                prevMonth={props.prevMonth} 
                month={props.month} 
                year={props.year}
            />

            <CalendarBody 
                year={props.year} 
                month={props.month} 
                today={props.today} 
                handleDateChange={props.handleDateChange}
                selectedDay={props.selectedDate}
            />
        </div>
    )
}
