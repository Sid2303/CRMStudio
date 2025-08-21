import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CompanyDashboard from '../pages/private/CompanyDashboard.jsx';
import PvtLayout from '../layouts/PvtLayout.jsx';


export default function ProtectedRoutes() {
	return (
		<Routes>
			<Route
				path="/dashboard"
				element={
						<PvtLayout>
							<CompanyDashboard />
						</PvtLayout>
				}
			/>
		</Routes>
	);
}
