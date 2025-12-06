import React from 'react';
import './Notes.css';
import CardLayout from '../../../../../components/PrivateComponents/reusables/CardLayout/CardLayout.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import NotesList from './NotesList';

export default function Notes() {
	return (
		<div className="notes-home-page">
			<CardLayout icon={<FontAwesomeIcon icon={faListCheck} />} title="Notes">
				<NotesList />
			</CardLayout>
		</div>
	);
}
