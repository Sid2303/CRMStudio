import React from 'react';
import './Todos.css';
import CardLayout from '../../../../../components/PrivateComponents/reusables/CardLayout/CardLayout.jsx';
import ViewMoreButton from '../../../../../components/PrivateComponents/reusables/ViewMoreButton/ViewMoreButton.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import TodoList from './TodoList.jsx';

export default function Todos() {
	return (
		<div className="todos-home-page">
			<CardLayout icon={<FontAwesomeIcon icon={faListCheck} />} title="Todos">
				<TodoList />
			</CardLayout>
		</div>
	);
}
