import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react';
import AddButton from '../../../components/PrivateComponents/reusables/AddButton/AddButton';
import projects from '../../../assets/data/project-list.js';

export default function Projects() {
	const [searchQuery, setSearchQuery] = useState('');

	const columns = [
		{ field: 'title', headerName: 'Name', flex: 1, minWidth: 200 },
		{ field: 'currentState', headerName: 'Status', width: 150 },
		{ field: 'description', headerName: 'Summary', flex: 2, minWidth: 300 },
		{
			field: 'memberCount',
			headerName: 'Member Count',
			width: 150,
			valueGetter: (value, row) => row.members?.length || 0,
		},
	];

	const filteredProjects = projects.filter(
		project =>
			project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
			project.currentState.toLowerCase().includes(searchQuery.toLowerCase())
	);

	return (
		<Stack sx={{ height: '100%' }}>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					gap: 2,
					padding: 2,
				}}
			>
				<TextField
					variant="outlined"
					placeholder="Search projects..."
					value={searchQuery}
					onChange={e => setSearchQuery(e.target.value)}
					sx={{
						flex: 1,
						maxWidth: '400px',
						'.MuiInputBase-input': {
							padding: '8px 6px',
						},
					}}
					InputProps={{
						startAdornment: (
							<InputAdornment position="start" sx={{ margin: 0 }}>
								<SearchIcon />
							</InputAdornment>
						),
					}}
				/>
				<Box>
					<AddButton name="Project" />
				</Box>
			</Box>
			<Box sx={{ flexGrow: 1, padding: 2 }}>
				<DataGrid
					rows={filteredProjects}
					columns={columns}
					// checkboxSelection
					disableRowSelectionOnClick
				/>
			</Box>
		</Stack>
	);
}
