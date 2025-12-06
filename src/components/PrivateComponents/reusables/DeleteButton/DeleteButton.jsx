import React from 'react';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './deleteButton.css';

export default function DeleteButton({ onClick }) {
	return (
		<Button className="delete-button" onClick={onClick}>
			<FontAwesomeIcon icon={faTrashCan} />
			<span>Delete</span>
		</Button>
	);
}
