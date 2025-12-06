import React from 'react';
import './TodoList.css';
import ToDo from './Todo.jsx';

export default function TodoList() {
	const todos = [
		{
			title: 'Complete project report',
			time: '09:00 am',
			progress: 'In Progress',
			priority: 'High',
		},
		{
			title: 'Review code changes',
			time: '10:30 am',
			progress: 'Completed',
			priority: 'Moderate',
		},
		{
			title: 'Update documentation',
			time: '11:00 am',
			progress: 'Pending',
			priority: 'Low',
		},
		{
			title: 'Team meeting',
			time: '02:00 pm',
			progress: 'Pending',
			priority: 'High',
		},
		{
			title: 'Fix bug in login form',
			time: '03:30 pm',
			progress: 'In Progress',
			priority: 'High',
		},
		{
			title: 'Database backup',
			time: '04:00 pm',
			progress: 'Completed',
			priority: 'Moderate',
		},
		{
			title: 'Deploy to production',
			time: '05:00 pm',
			progress: 'Pending',
			priority: 'High',
		},
		{
			title: 'Client feedback review',
			time: '06:30 pm',
			progress: 'In Progress',
			priority: 'Moderate',
		},
		{
			title: 'Update dependencies',
			time: '07:00 pm',
			progress: 'Pending',
			priority: 'Low',
		},
		{
			title: 'Write unit tests',
			time: '08:30 am',
			progress: 'Completed',
			priority: 'Moderate',
		},
	];

	return (
		<div className="todo-list-home-page">
			<div className="todo-list-home-container">
				{todos.map((todo, index) => (
					<ToDo
						key={index}
						title={todo.title}
						time={todo.time}
						status={todo.progress}
						priority={todo.priority}
					/>
				))}
			</div>
		</div>
	);
}
