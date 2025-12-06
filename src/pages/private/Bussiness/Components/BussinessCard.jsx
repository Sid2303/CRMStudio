import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function BussinessCard({ name, value, added, bgColor, fontColor, icon }) {
	return (
		<Stack
			sx={{
				border: '1px solid #e0e0e0',
				padding: 2,
				borderRadius: 2,
				backgroundColor: bgColor,
				gap: 2,
				flex: 1,
				height: '220px',
			}}
		>
			<Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
				<Box>
					<Box
						sx={{
							width: 48,
							height: 48,
							borderRadius: '8px',
							backgroundColor: fontColor,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<FontAwesomeIcon icon={icon} style={{ color: bgColor, fontSize: '24px' }} />
					</Box>
				</Box>
				<Box>
					<Typography
						variant="body1"
						sx={{
							color: fontColor,
							fontWeight: 600,
						}}
					>
						{added}
					</Typography>
				</Box>
			</Stack>
			<Stack component={'div'}>
				<Typography
					variant="body1"
					sx={{
						color: fontColor,
						fontWeight: 600,
					}}
				>
					{name}
				</Typography>
				<Typography
					variant="h4"
					sx={{
						color: fontColor,
						fontWeight: 700,
					}}
				>
					{value}
				</Typography>
			</Stack>
		</Stack>
	);
}
