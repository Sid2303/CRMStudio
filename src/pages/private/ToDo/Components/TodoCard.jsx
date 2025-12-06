import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import './todoCard.css';

export default function TodoCard({ todo }) {
	const navigate = useNavigate();

	const getStatusClass = status => {
		if (status === 'completed') return 'completed';
		if (status === 'not-started') return 'not-started';
		if (status === 'in-progress') return 'in-progress';
		return '';
	};

	const getPriorityClass = priority => {
		if (priority === 'Low') return 'low';
		if (priority === 'Medium') return 'moderate';
		if (priority === 'High') return 'high';
		return '';
	};

	return (
		<Box
			className="todo"
			id={todo.id}
			sx={{ cursor: 'pointer' }}
			onClick={() => navigate(`/todo/${todo.id}`)}
		>
			<Box className="todo-status">
				<Box className={`status ${getStatusClass(todo.status)}`}></Box>
			</Box>
			<Box className="todo-data">
				<Box className="todo-content">
					<Box className="todo-content-top">
						<Typography variant="h6" component="h3">
							{todo.title}
						</Typography>
						<Typography variant="body2" component="p">
							{todo.description}
						</Typography>
					</Box>
					<Box className="todo-content-bottom">
						<Typography variant="body2" component="p">
							Priority: <span className={getPriorityClass(todo.priority)}>{todo.priority}</span>
						</Typography>
						<Typography variant="body2" component="p">
							Created On: {todo.createdOn}
						</Typography>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
