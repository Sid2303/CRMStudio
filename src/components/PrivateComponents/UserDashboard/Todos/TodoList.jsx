import React from 'react'
import './TodoList.css'
import ToDo from './Todo.jsx'

export default function TodoList() {
    return (
        <div className='todo-list-home-page'>
            <div className="todo-list-home-container">
                <ToDo />
                <ToDo />
                <ToDo />
                <ToDo />
                <ToDo />
                <ToDo />
            </div>
        </div>
    )
}
