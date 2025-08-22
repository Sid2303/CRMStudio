import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CompanyDashboard from '../pages/private/CompanyDashboard.jsx';
import PvtLayout from '../layouts/PvtLayout.jsx';
import ToDo from '../pages/private/ToDo/ToDo.jsx';
import Notes from '../pages/private/Notes/Notes.jsx';


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

            <Route path='/todo' element={
                <PvtLayout>
                    <ToDo />
                </PvtLayout>
            } />

            <Route path='/notes' element={
                <PvtLayout>
                    <Notes />
                </PvtLayout>
            } />

		</Routes>
	);
}
