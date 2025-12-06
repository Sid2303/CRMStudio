import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFileLines,
	faUser,
	faCalendar,
	faClock,
	faFolder,
} from '@fortawesome/free-solid-svg-icons';
import './selectedTodo.css';

export default function AddTodo() {
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		title: '',
		description: '',
		priority: 'Medium',
		status: 'not-started',
		startDate: '',
		deadline: '',
		assignedTo: '',
		assignedFrom: '',
		projectId: '',
		notes: '',
	});

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = () => {
		// Add your create logic here
		console.log('Creating todo:', formData);
		// Navigate back to todo list after creation
		navigate('/todo');
	};

	const handleCancel = () => {
		navigate('/todo');
	};

	return (
		<Box>
			{/* Todo Header */}
			<Box className="todo-header">
				<Box className="todo-header-title">
					<Box className="todo-icon">
						<FontAwesomeIcon icon={faFileLines} />
					</Box>
					<Box className="todo-heading">
						<Typography variant="h5" component="h2">
							Create New Todo
						</Typography>
						<Typography variant="body2">Add a new task to your list</Typography>
					</Box>
				</Box>
				<Box className="todo-header-options">
					<Button
						onClick={handleCancel}
						sx={{
							borderRadius: '12px',
							padding: '10px 20px',
							textTransform: 'none',
							border: '2px solid #ccc',
							color: '#666',
						}}
					>
						Cancel
					</Button>
					<Button
						onClick={handleSubmit}
						sx={{
							borderRadius: '12px',
							padding: '10px 20px',
							textTransform: 'none',
							backgroundColor: '#155dfc',
							color: 'white',
							'&:hover': {
								backgroundColor: '#3575ff',
							},
						}}
					>
						Create Todo
					</Button>
				</Box>
			</Box>

			{/* Todo Body */}
			<Box className="todo-body">
				<Box className="todo-body-header">
					<TextField
						fullWidth
						label="Title"
						name="title"
						value={formData.title}
						onChange={handleChange}
						variant="outlined"
						sx={{ marginBottom: 2 }}
					/>
					<Box className="todo-tags" sx={{ gap: 2, display: 'flex' }}>
						<FormControl sx={{ minWidth: 120 }}>
							<InputLabel>Priority</InputLabel>
							<Select
								name="priority"
								value={formData.priority}
								onChange={handleChange}
								label="Priority"
							>
								<MenuItem value="High">High</MenuItem>
								<MenuItem value="Medium">Medium</MenuItem>
								<MenuItem value="Low">Low</MenuItem>
							</Select>
						</FormControl>
						<FormControl sx={{ minWidth: 120 }}>
							<InputLabel>Status</InputLabel>
							<Select name="status" value={formData.status} onChange={handleChange} label="Status">
								<MenuItem value="not-started">Not Started</MenuItem>
								<MenuItem value="in-progress">In Progress</MenuItem>
								<MenuItem value="completed">Completed</MenuItem>
							</Select>
						</FormControl>
					</Box>
				</Box>

				<Box className="todo-description-box">
					<Typography variant="h6" component="h3">
						Description
					</Typography>
					<TextField
						fullWidth
						multiline
						rows={4}
						name="description"
						value={formData.description}
						onChange={handleChange}
						variant="outlined"
						placeholder="Enter todo description..."
					/>
				</Box>

				<Box className="assign-timeline">
					<Box className="assignment">
						<Typography variant="h6" component="h3">
							Assignment
						</Typography>
						<Box className="assignment-members">
							<Box className="member" sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
								<FontAwesomeIcon icon={faUser} />
								<TextField
									label="Assigned To"
									name="assignedTo"
									value={formData.assignedTo}
									onChange={handleChange}
									variant="outlined"
									size="small"
									fullWidth
								/>
							</Box>
							<Box
								className="member"
								sx={{ display: 'flex', gap: 1, alignItems: 'center', marginTop: 1 }}
							>
								<FontAwesomeIcon icon={faUser} />
								<TextField
									label="Assigned From"
									name="assignedFrom"
									value={formData.assignedFrom}
									onChange={handleChange}
									variant="outlined"
									size="small"
									fullWidth
								/>
							</Box>
						</Box>
					</Box>
					<Box className="timeline">
						<Typography variant="h6" component="h3">
							Timeline
						</Typography>
						<Box className="timeline-times">
							<Box className="timeline-time" sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
								<FontAwesomeIcon icon={faCalendar} />
								<TextField
									label="Start Date"
									type="date"
									name="startDate"
									value={formData.startDate}
									onChange={handleChange}
									variant="outlined"
									size="small"
									InputLabelProps={{ shrink: true }}
									fullWidth
								/>
							</Box>
							<Box
								className="timeline-time"
								sx={{ display: 'flex', gap: 1, alignItems: 'center', marginTop: 1 }}
							>
								<FontAwesomeIcon icon={faClock} />
								<TextField
									label="Deadline"
									type="datetime-local"
									name="deadline"
									value={formData.deadline}
									onChange={handleChange}
									variant="outlined"
									size="small"
									InputLabelProps={{ shrink: true }}
									fullWidth
								/>
							</Box>
						</Box>
					</Box>
				</Box>

				<Box className="todo-project bottom-margin">
					<Typography variant="h6" component="h3">
						Project
					</Typography>
					<Box className="project-name" sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
						<FontAwesomeIcon icon={faFolder} />
						<TextField
							label="Project ID"
							name="projectId"
							value={formData.projectId}
							onChange={handleChange}
							variant="outlined"
							size="small"
							fullWidth
						/>
					</Box>
				</Box>

				<Box className="notes">
					<Typography variant="h6" component="h3">
						Notes
					</Typography>
					<TextField
						fullWidth
						multiline
						rows={3}
						name="notes"
						value={formData.notes}
						onChange={handleChange}
						variant="outlined"
						placeholder="Add any additional notes..."
					/>
				</Box>
			</Box>
		</Box>
	);
}
