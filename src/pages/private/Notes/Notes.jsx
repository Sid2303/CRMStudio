import React, { useState, useEffect } from 'react';
import './Notes.css';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Drawer from '@mui/material/Drawer';
import Fab from '@mui/material/Fab';
import MenuIcon from '@mui/icons-material/Menu';
import AddButton from '../../../components/PrivateComponents/reusables/AddButton/AddButton';
import SelectedNote from './Components/SelectedNote';
import Note from './Components/Note';
import notes from '../../../assets/data/notes.js';

export default function Notes() {
	const [searchQuery, setSearchQuery] = useState('');
	const [selectedNoteId, setSelectedNoteId] = useState(null);
	const [drawerOpen, setDrawerOpen] = useState(false);

	useEffect(() => {
		if (notes.length > 0 && !selectedNoteId) {
			setSelectedNoteId(notes[0].id);
		}
	}, []);

	const filteredNotes = notes.filter(
		note =>
			note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			note.note.toLowerCase().includes(searchQuery.toLowerCase())
	);

	const selectedNote = notes.find(note => note.id === selectedNoteId);

	const handleSelectNote = noteId => {
		setSelectedNoteId(noteId);
		setDrawerOpen(false);
	};

	const toggleDrawer = open => event => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}
		setDrawerOpen(open);
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

			<Fab
				sx={{
					position: 'fixed',
					bottom: 20,
					right: 20,
					backgroundColor: '#514ef3',
					color: 'white',
					display: 'none',
					'&:hover': {
						backgroundColor: '#3d3bc9',
					},
					'@media (max-width: 950px)': {
						display: 'flex',
					},
				}}
				onClick={toggleDrawer(true)}
			>
				<MenuIcon />
			</Fab>

			<Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
				<Box
					sx={{
						width: 300,
						height: '100%',
						display: 'flex',
						flexDirection: 'column',
						padding: '10px',
					}}
				>
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
							marginBottom: '10px',
						}}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<SearchIcon />
								</InputAdornment>
							),
						}}
					/>
					<Box sx={{ marginBottom: '10px' }}>
						<AddButton name="Note" />
					</Box>
					<Box className="notes-listing" sx={{ flex: 1, overflowY: 'auto' }}>
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
				</Box>
			</Drawer>
		</Box>
	);
}
