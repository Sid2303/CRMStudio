import React from 'react';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProgressButton from '../../../../../components/PrivateComponents/reusables/ProgressButton/ProgressButton.jsx';

function Project(props) {
	return (
		<div className="project-dashboard border-default	">
			<div className="todo-component-home-header">
				<h3 className="todo-component-home-title">{props.title}</h3>
				<div className="todo-component-home-time">
					<FontAwesomeIcon icon={faClock} />
					<p>{props.time}</p>
				</div>
			</div>
			<div>
				<ProgressButton status={props.status} />
			</div>
		</div>
	);
}
export default Project;
