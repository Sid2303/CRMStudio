import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../pages/private/Dashboard/Dashboard.jsx';
import PvtLayout from '../layouts/PvtLayout.jsx';
import ToDo from '../pages/private/ToDo/ToDo.jsx';
import SelectedTodo from '../pages/private/ToDo/Components/SelectedTodo.jsx';
import Notes from '../pages/private/Notes/Notes.jsx';
import Projects from '../pages/private/Projects/Projects.jsx';
import Bussiness from '../pages/private/Bussiness/Bussiness.jsx';

export default function ProtectedRoutes() {
	return (
		<Routes>
			<Route
				path="/dashboard"
				element={
					<PvtLayout pageTitle="Dashboard">
						<Dashboard />
					</PvtLayout>
				}
			/>

			{/* <Route
				path="/companydashboard"
				element={
					<PvtLayout>
						<CompanyDashboard />
					</PvtLayout>
				}
			/> */}

			<Route
				path="/todo"
				element={
					<PvtLayout pageTitle="To-Do List">
						<ToDo />
					</PvtLayout>
				}
			/>

			<Route
				path="/todo/:id"
				element={
					<PvtLayout pageTitle="Todo Details">
						<SelectedTodo />
					</PvtLayout>
				}
			/>

			<Route
				path="/notes"
				element={
					<PvtLayout pageTitle="Notes">
						<Notes />
					</PvtLayout>
				}
			/>

			<Route
				path="/projects"
				element={
					<PvtLayout pageTitle="Projects">
						<Projects />
					</PvtLayout>
				}
			/>

			<Route
				path="/bussiness"
				element={
					<PvtLayout pageTitle="Business">
						<Bussiness />
					</PvtLayout>
				}
			/>
		</Routes>
	);
}
