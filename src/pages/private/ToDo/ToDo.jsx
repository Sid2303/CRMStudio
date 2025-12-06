import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddButton from '../../../components/PrivateComponents/reusables/AddButton/AddButton';
import todosList from '../../../assets/data/todolist.js';
import TodoCard from './Components/TodoCard.jsx';
import './Components/todoCard.css';
import Todo from '../Dashboard/components/Todos/Todo.jsx';
import TodoCharts from './Components/TodoCharts.jsx';

export default function ToDo() {
	const [sortBy, setSortBy] = React.useState('all');

	const sortOptions = [
		{ value: 'all', label: 'All' },
		{ value: 'newest', label: 'Newest' },
		{ value: 'oldest', label: 'Oldest' },
		{ value: 'started', label: 'Started' },
		{ value: 'finished', label: 'Finished' },
		{ value: 'pending', label: 'Pending' },
		{ value: 'in-progress', label: 'In Progress' },
	];

	const handleChange = event => {
		setSortBy(event.target.value);
	};

	return (
		<Stack marginTop={'20px'}>
			<Stack direction={{ xs: 'column', md: 'row' }} spacing={2} justifyContent={'space-between'}>
				<Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
					<FormControl
						sx={{
							minWidth: 200,
							'@media (max-width: 550px)': {
								width: '100%',
							},
						}}
					>
						<InputLabel id="demo-simple-select-label">Sort By</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={sortBy}
							label="Sort By"
							onChange={handleChange}
							sx={{
								'.MuiSelect-select': {
									padding: '12px 15px',
								},
							}}
						>
							{sortOptions.map(option => (
								<MenuItem key={option.value} value={option.value}>
									{option.label}
								</MenuItem>
							))}
						</Select>
					</FormControl>
					<TextField
						id="outlined-basic"
						label="Search"
						variant="outlined"
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#666' }} />
								</InputAdornment>
							),
						}}
						sx={{
							'& .MuiInputBase-input': {
								padding: '12px 15px',
							},
							'& .MuiInputLabel-root': {
								top: '-4px',
							},
							'& .MuiInputLabel-shrink': {
								top: '0',
							},
							'@media (max-width: 550px)': {
								width: '100%',
							},
						}}
					/>
				</Box>
				<Box>
					<AddButton name="New ToDo" />
				</Box>
			</Stack>
			<Stack
				direction={{ xs: 'column-reverse', md: 'row' }}
				spacing={3}
				sx={{
					marginTop: '20px',
					'@media (max-width: 900px)': {
						flexDirection: 'column-reverse',
					},
				}}
			>
				<Stack
					spacing={2}
					sx={{
						width: { xs: '100%', md: '50%' },
						'@media (max-width: 900px)': {
							width: '100%',
						},
					}}
				>
					{todosList.map(todo => (
						<TodoCard key={todo.id} todo={todo} />
					))}
				</Stack>
				<Box
					sx={{
						width: { xs: '100%', md: '50%' },
						'@media (max-width: 900px)': {
							width: '100%',
						},
					}}
				>
					<TodoCharts />
				</Box>
			</Stack>
		</Stack>
	);
}
