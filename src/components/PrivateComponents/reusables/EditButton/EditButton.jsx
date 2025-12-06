import React from 'react';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import './editButton.css';

export default function EditButton({ onClick }) {
	return (
		<Button className="edit-button" onClick={onClick}>
			<FontAwesomeIcon icon={faPencil} />
			<span>Edit</span>
		</Button>
	);
}
