import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faCheck, faPause, faHourglassStart } from '@fortawesome/free-solid-svg-icons';

function ProgressButton(props) {
	const getButtonStyles = () => {
		switch (props.status) {
			case 'In Progress':
				return 'bg-blue-500 text-white hover:bg-blue-600';
			case 'Completed':
				return 'bg-green-500 text-white hover:bg-green-600';
			case 'On Hold':
				return 'bg-gray-400 text-white hover:bg-gray-500';
			case 'Pending':
				return 'bg-gray-400 text-white hover:bg-gray-500';
			default:
				return 'bg-gray-300 text-gray-700';
		}
	};

	const getIcon = () => {
		switch (props.status) {
			case 'In Progress':
				return faPlay;
			case 'Completed':
				return faCheck;
			case 'On Hold':
				return faPause;
			case 'Pending':
				return faHourglassStart;
			default:
				return null;
		}
	};

	const icon = getIcon();
	const displayText =
		props.status === 'In Progress'
			? 'in-progress'
			: props.status === 'Completed'
			? 'completed'
			: props.status === 'On Hold'
			? 'on-hold'
			: 'not-started';

	return (
		<div className={`progress-button ${getButtonStyles()}`}>
			{icon && <FontAwesomeIcon icon={icon} className="w-3 h-3" />}
			{displayText}
		</div>
	);
}

export default ProgressButton;
