import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import './selectedNote.css';
import Typography from '@mui/material/Typography';

export default function Note({ note, onSelect, isSelected }) {
	return (
		<div className={`note ${isSelected ? 'selected-note' : ''}`} onClick={() => onSelect(note.id)}>
			<div className="note-heading m-0">
				<Typography variant="h1" fontWeight={'600'} color="initial">
					{note.title}
				</Typography>
			</div>
			<div className="note-brief">
				<p>{note.note}</p>
			</div>
			<div className="note-date">
				<FontAwesomeIcon icon={faClock} />
				<p>{note.date}</p>
			</div>
		</div>
	);
}
