import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import './CalendarHeader.css'

export default function CalendarHeader(props) {
	const months = [
		'January', 'February', 'March', 'April', 'May', 'June',
		'July', 'August', 'September', 'October', 'November', 'December'
	];

	return (
		<div className="calendar-header">
			<div className="change-current">
				<div id="prev-month" onClick={props.prevMonth}>
					<FontAwesomeIcon icon={faAngleLeft} />
				</div>
				<h1>{`${months[props.month]} ${props.year}`}</h1>
				<div id="next-month" onClick={props.nextMonth}>
					<FontAwesomeIcon icon={faAngleRight} />
				</div>
			</div>
			<div className="week-days">
				<div className="day">Sun</div>
				<div className="day">Mon</div>
				<div className="day">Tue</div>
				<div className="day">Wed</div>
				<div className="day">Thu</div>
				<div className="day">Fri</div>
				<div className="day">Sat</div>
			</div>
		</div>
	)
}
