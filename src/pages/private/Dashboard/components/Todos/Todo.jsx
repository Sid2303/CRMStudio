import React from 'react';
import './Todo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

export default function Todo(props) {
	return (
		<div className="todo-component-home border-default">
			<div className="todo-component-home-header">
				<h3 className="todo-component-home-title">{props.title}</h3>
				<div className="todo-component-home-time">
					<FontAwesomeIcon icon={faClock} />
					<p>{props.time}</p>
				</div>
			</div>
			<div className="todo-component-home-footer">
				<div className="todo-component-home-footer-progress">
					<p>{props.status}</p>
				</div>
				<div className="todo-component-home-footer-priority">
					<p>{props.priority}</p>
				</div>
			</div>
		</div>
	);
}
