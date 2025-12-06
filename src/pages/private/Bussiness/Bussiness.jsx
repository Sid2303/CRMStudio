import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { faProjectDiagram, faCheckCircle, faUsers } from '@fortawesome/free-solid-svg-icons';
import BussinessCard from './Components/BussinessCard.jsx';

export default function Bussiness() {
	const data = [
		{
			name: 'Active Projects',
			value: 24,
			added: '+8',
			bgColor: 'var(--success-bg-color)',
			fontColor: 'var(--success-font-color)',
			icon: faProjectDiagram,
		},
		{
			name: 'Completed Projects',
			value: 58,
			added: '+12',
			bgColor: 'var(--success-bg-color)',
			fontColor: 'var(--success-font-color)',
			icon: faCheckCircle,
		},
		{
			name: 'Total Clients',
			value: 34,
			added: '+4',
			bgColor: 'var(--warning-bg-color)',
			fontColor: 'var(--warning-font-color)',
			icon: faUsers,
		},
	];
	return (
		<Stack sx={{ width: '100%', gap: 2 }}>
			<Stack sx={{ width: '100%' }} spacing={2}>
				<Typography variant="h5" sx={{ fontWeight: '600' }} color="initial">
					Dashboard Overview
				</Typography>
				<Typography component={'p'} sx={{ fontSize: '16px' }} color="initial">
					Welcome to your company-wide CRM dashboard. Monitor key metrics and manage your business
					relationships.
				</Typography>
				<Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
					{data.map((item, index) => (
						<BussinessCard key={index} {...item} />
					))}
				</Stack>
			</Stack>
		</Stack>
	);
}
