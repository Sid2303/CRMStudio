import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFileLines,
	faUser,
	faCalendar,
	faClock,
	faFolder,
} from '@fortawesome/free-solid-svg-icons';
import todosList from '../../../../assets/data/todolist.js';
import PriorityTag from '../../../../components/PrivateComponents/reusables/PriorityTag/PriorityTag.jsx';
import DeleteButton from '../../../../components/PrivateComponents/reusables/DeleteButton/DeleteButton.jsx';
import EditButton from '../../../../components/PrivateComponents/reusables/EditButton/EditButton.jsx';
import './selectedTodo.css';

export default function SelectedTodo() {
	const { id } = useParams();
	const navigate = useNavigate();

	const selectedTodo = todosList.find(todo => todo.id === parseInt(id));

	if (!selectedTodo) {
		return (
			<Box sx={{ padding: 4 }}>
				<Typography variant="h5">Todo not found</Typography>
				<Button onClick={() => navigate('/todo')} sx={{ marginTop: 2 }}>
					Back to Todo List
				</Button>
			</Box>
		);
	}

	// Mock data for assignedTo and assignedFrom users (you can replace with actual data)
	const assignedToUser = { name: 'User ' + selectedTodo.assignedTo };
	const assignedFromUser = { name: 'User ' + selectedTodo.assignedFrom };
	const project = { title: selectedTodo.projectId ? 'Project ' + selectedTodo.projectId : null };

	// Calculate due status
	const deadline = new Date(selectedTodo.deadline);
	const now = new Date();
	const duesStatus = deadline < now ? 'Overdue' : 'On Time';

	const getStatusClass = status => {
		if (status === 'completed') return 'completed';
		if (status === 'in-progress') return 'in-progress';
		if (status === 'not-started') return 'not-started';
		return '';
	};

	const handleDelete = () => {
		// Add your delete logic here
		const confirmDelete = window.confirm('Are you sure you want to delete this todo?');
		if (confirmDelete) {
			// Delete logic would go here
			console.log('Deleting todo:', selectedTodo.id);
			navigate('/todo');
		}
	};

	const handleEdit = () => {
		// Add your edit logic here
		console.log('Editing todo:', selectedTodo.id);
		// Navigate to edit page or open edit modal
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
							Todo Details
						</Typography>
						<Typography variant="body2">View and manage your task</Typography>
					</Box>
				</Box>
				<Box className="todo-header-options">
					<EditButton onClick={handleEdit} />
					<DeleteButton onClick={handleDelete} />
				</Box>
			</Box>

			{/* Todo Body */}
			<Box className="todo-body">
				<Box className="todo-body-header">
					<Typography variant="h6" component="h3">
						{selectedTodo.title}
					</Typography>
					<Box className="todo-tags">
						<PriorityTag priority={selectedTodo.priority} />
						<Box className={`progress ${getStatusClass(selectedTodo.status)}`}>
							{selectedTodo.status}
						</Box>
						{duesStatus === 'Overdue' ? (
							<Box className="due overdue">Overdue</Box>
						) : (
							<Box className="due on-time">On Time</Box>
						)}
					</Box>
				</Box>

				<Box className="todo-description-box">
					<Typography variant="h6" component="h3">
						Description
					</Typography>
					<Box className="todo-description">
						<Typography component="p">{selectedTodo.description}</Typography>
					</Box>
				</Box>

				<Box className="assign-timeline">
					<Box className="assignment">
						<Typography variant="h6" component="h3">
							Assignment
						</Typography>
						<Box className="assignment-members">
							<Box className="member">
								<FontAwesomeIcon icon={faUser} />
								<Typography component="p">
									<span className="identifier">To:</span>
									{assignedToUser?.name || 'Unavailable User'}
								</Typography>
							</Box>
							<Box className="member">
								<FontAwesomeIcon icon={faUser} />
								<Typography component="p">
									<span className="identifier">From:</span>
									{assignedFromUser?.name || 'Unavailable User'}
								</Typography>
							</Box>
						</Box>
					</Box>
					<Box className="timeline">
						<Typography variant="h6" component="h3">
							Timeline
						</Typography>
						<Box className="timeline-times">
							<Box className="timeline-time">
								<FontAwesomeIcon icon={faCalendar} />
								<Typography component="p">
									<span>Start: </span>
									{selectedTodo.startDate}
								</Typography>
							</Box>
							<Box
								className={`timeline-time ${
									duesStatus === 'On Time' ? 'deadline-ontime' : 'deadline-overdue'
								}`}
							>
								<FontAwesomeIcon icon={faClock} />
								<Typography component="p">
									<span>Deadline: </span>
									{selectedTodo.deadline.split('T').join(' ')}
								</Typography>
							</Box>
						</Box>
					</Box>
				</Box>

				<Box className="todo-project bottom-margin">
					<Typography variant="h6" component="h3">
						Project
					</Typography>
					<Box className="project-name">
						<FontAwesomeIcon icon={faFolder} />
						<Typography component="p">{project?.title || 'No Project Associated'}</Typography>
					</Box>
				</Box>

				<Box className="notes">
					<Typography variant="h6" component="h3">
						Notes
					</Typography>
					<Box className="notes-section">
						<Typography component="p">{selectedTodo.notes}</Typography>
					</Box>
				</Box>

				<Box className="todo-footer">
					<FontAwesomeIcon icon={faCalendar} />
					<Typography component="p">Created {selectedTodo.createdOn}</Typography>
				</Box>
			</Box>
		</Box>
	);
}
