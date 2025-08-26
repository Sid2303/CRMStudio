import React from 'react'
import './ViewMoreButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export default function ViewMoreButton() {
    return (
        <button className='view-more-button'>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            <p>View More</p>
        </button>
    )
}
