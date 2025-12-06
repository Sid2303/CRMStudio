import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import todosList from '../../../../assets/data/todolist.js';

export default function TodoCharts() {
	// Calculate status counts
	const statusCounts = todosList.reduce(
		(acc, todo) => {
			if (todo.status === 'completed') acc.completed++;
			else if (todo.status === 'in-progress') acc.inProgress++;
			else if (todo.status === 'not-started') acc.notStarted++;
			return acc;
		},
		{ completed: 0, inProgress: 0, notStarted: 0 }
	);

	// Calculate priority counts
	const priorityCounts = todosList.reduce(
		(acc, todo) => {
			if (todo.priority === 'High') acc.high++;
			else if (todo.priority === 'Medium') acc.medium++;
			else if (todo.priority === 'Low') acc.low++;
			return acc;
		},
		{ high: 0, medium: 0, low: 0 }
	);

	const statusData = [
		{ id: 0, value: statusCounts.completed, label: 'Completed', color: '#5b983d' },
		{ id: 1, value: statusCounts.inProgress, label: 'In Progress', color: '#007c91' },
		{ id: 2, value: statusCounts.notStarted, label: 'Not Started', color: '#795ca2' },
	];

	const priorityData = [
		{ id: 0, value: priorityCounts.high, label: 'High', color: '#c62828' },
		{ id: 1, value: priorityCounts.medium, label: 'Medium', color: '#e65100' },
		{ id: 2, value: priorityCounts.low, label: 'Low', color: '#2e7d32' },
	];

	return (
		<Stack
			// direction={{ xs: 'column', md: 'row' }}
			spacing={3}
			sx={{
				marginTop: '20px',
				padding: '20px',
				backgroundColor: 'white',
				borderRadius: '12px',
				border: '2px solid #e0e0e0',
			}}
		>
			<Box sx={{ flex: 1 }}>
				<Typography variant="h6" sx={{ marginBottom: 2, fontWeight: 600 }}>
					Todo Status
				</Typography>
				<Box sx={{ display: 'flex', justifyContent: 'center' }}>
					<PieChart
						series={[
							{
								data: statusData,
								highlightScope: { faded: 'global', highlighted: 'item' },
								faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
							},
						]}
					/>
				</Box>
			</Box>

			<Box sx={{ flex: 1 }}>
				<Typography variant="h6" sx={{ marginBottom: 2, fontWeight: 600 }}>
					Priority Distribution
				</Typography>
				<Box sx={{ display: 'flex', justifyContent: 'center' }}>
					<PieChart
						series={[
							{
								data: priorityData,
								highlightScope: { faded: 'global', highlighted: 'item' },
								faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
							},
						]}
					/>
				</Box>
			</Box>
		</Stack>
	);
}
