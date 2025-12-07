import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import EditButton from '../../../../components/PrivateComponents/reusables/EditButton/EditButton.jsx';
import DeleteButton from '../../../../components/PrivateComponents/reusables/DeleteButton/DeleteButton.jsx';
import './selectedNote.css';

export default function SelectedNote({ selectedNote, onEdit, onDelete }) {
	if (!selectedNote) {
		return (
			<Box sx={{ padding: 4 }}>
				<Typography variant="h5">No note selected</Typography>
			</Box>
		);
	}

	const countWords = text => {
		return text
			.trim()
			.split(/\s+/)
			.filter(word => word.length > 0).length;
	};

	return (
		<Box>
			<div className="note-display-header">
				<div className="note-display-header-info">
					<h1>{selectedNote.title}</h1>
					<div className="note-display-header-minor-info">
						<p>{countWords(selectedNote.note)} words</p>
						<p>{selectedNote.note.length} characters</p>
					</div>
				</div>
				<div className="note-display-header-edit">
					<EditButton onClick={onEdit} />
					<DeleteButton onClick={onDelete} />
				</div>
			</div>
			<div className="note-display-body">
				<div className="note-display-body-content">
					<div className="note-display-content-div">{selectedNote.note}</div>
				</div>
				<div className="note-display-body-footer">
					<p>Created: {selectedNote.date}</p>
					<p>Last modified: {selectedNote.modified}</p>
				</div>
			</div>
		</Box>
	);
}
