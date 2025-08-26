import React from 'react'
import './Todo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

export default function Todo() {
    return (
        <div className='todo-component-home'>
            <div className="todo-component-home-header">
                <h3 className="todo-component-home-title">
                    Sample Todo Item
                </h3>
                <div className="todo-component-home-time">
                    <FontAwesomeIcon icon={faClock} />
                    <p>10:30 am </p>
                </div>
            </div>
            <div className="todo-component-home-footer">
                <div className="todo-component-home-footer-progress">
                    <p>Completed</p>
                </div>
                <div className="todo-component-home-footer-priority">
                    <p>Moderate</p>
                </div>
            </div>
        </div>
    )
}
