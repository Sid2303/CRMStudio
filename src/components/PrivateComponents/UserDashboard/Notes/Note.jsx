import React from 'react'
import './Note.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

export default function Note() {
    return (
        <div className='note-component-home-page'>
            <div className="note-component-home-header">
                <h3>Meeting Recap</h3>
                <p><FontAwesomeIcon icon={faCalendar} /> 26-08-2025</p>
            </div>
            <div className="note-component-home-footer">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum nemo nihil accusamus minima optio, sint in natus magni nesciunt tenetur hic 
                    laudantium voluptates consequatur dicta temporibus amet adipisci aliquam deserunt.
                    Officia nihil eius sunt quisquam assumenda. Veniam magnam quae nobis aliquam sint 
                    quas tenetur, nemo eos quam, esse ea, libero numquam necessitatibus. Quas quis 
                    ratione, laudantium ipsum facilis aut nostrum.
                </p>
            </div>
        </div>
    )
}
