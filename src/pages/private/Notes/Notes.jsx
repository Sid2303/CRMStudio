import React, { useState } from 'react';
import './Notes.css';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import AddButton from '../../../components/PrivateComponents/reusables/AddButton/AddButton';
import SelectedNote from './Components/SelectedNote';
import Note from './Components/Note';
import notes from '../../../assets/data/notes.js';

export default function Notes() {
	const [searchQuery, setSearchQuery] = useState('');
	const [selectedNoteId, setSelectedNoteId] = useState(null);

	const filteredNotes = notes.filter(
		note =>
			note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			note.note.toLowerCase().includes(searchQuery.toLowerCase())
	);

	const selectedNote = notes.find(note => note.id === selectedNoteId);

	const handleSelectNote = noteId => {
		setSelectedNoteId(noteId);
	};

	return (
		<Box className="notes-page">
			<Stack spacing={2} className="notes-page-stack">
				<Stack spacing={2} sx={{ padding: '10px' }}>
					<TextField
						fullWidth
						variant="outlined"
						placeholder="Search notes..."
						value={searchQuery}
						onChange={e => setSearchQuery(e.target.value)}
						sx={{
							'.MuiInputBase-input': {
								padding: '8px 14px',
							},
						}}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<SearchIcon />
								</InputAdornment>
							),
						}}
					/>
					<AddButton name="Note" />
				</Stack>
				<Box className="notes-listing">
					{filteredNotes.length > 0 ? (
						filteredNotes.map(note => (
							<Note
								key={note.id}
								note={note}
								onSelect={handleSelectNote}
								isSelected={note.id === selectedNoteId}
							/>
						))
					) : (
						<p>Add notes to continue</p>
					)}
				</Box>
			</Stack>
			<Box component={'div'}>
				<SelectedNote selectedNote={selectedNote} />
			</Box>
		</Box>
	);
}
