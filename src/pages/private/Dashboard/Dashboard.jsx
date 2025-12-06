import React, { useState } from 'react';
import './Dashboard.css';
import Calendar from './components/Calendar/Calendar.jsx';
import Schedule from './components/Schedule/Schedule.jsx';
import Profile from './components/Profile/Profile.jsx';
import Notes from './components/Notes/Notes.jsx';
import ToDo from './components/Todos/Todos.jsx';
import Projects from './components/Projects/Projects.jsx';

export default function Dashboard() {
	const date = new Date();
	const today = date.getDate();
	const [selectedDate, setSelectedDate] = useState(today);
	const [month, setMonth] = useState(date.getMonth()); // 0-based
	const [year, setYear] = useState(date.getFullYear());

	const handleDateChange = newDate => {
		setSelectedDate(newDate);
		console.log(newDate);
	};

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
		<div className="dashboard">
			<div className="dashboard-heading">
				<h2>Welcome back! Here's your workspace</h2>
			</div>
			<div className="dashboard-contents">
				<div className="calendar-component-holder">
					<div className="calendar-component-left">
						<div className="profile-section">
							<Profile />
						</div>
						<div className="calendar-section">
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
					<div className="calendar-component-right">
						<Schedule selectedDate={selectedDate} month={month} year={year} />
					</div>
				</div>
				<div className="personal-dashboard-contents-holder">
					<div className="dashboard-component-holder">
						<ToDo />
					</div>
					<div className="dashboard-component-holder">
						<Notes />
					</div>
				</div>

				<div className="personal-dashboard-contents-holder">
					<div className="dashboard-component-holder">
						<Projects />
					</div>
				</div>
			</div>
		</div>
	);
}
