import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import CardLayout from '../../../../../components/PrivateComponents/reusables/CardLayout/CardLayout.jsx';
import projects from '../../../../../assets/data/project-list.js';
import Project from './Project.jsx';

function Projects() {
	return (
		<div className="notes-home-page">
			<CardLayout icon={<FontAwesomeIcon icon={faListCheck} />} title="Projects">
				<div className="notes-list-home-page padding-right-10">
					{projects.map((project, index) => {
						return (
							<Project
								key={index}
								title={project.title}
								time={project.createdDate}
								status={project.currentState}
							/>
						);
					})}
				</div>
			</CardLayout>
		</div>
	);
}

export default Projects;
