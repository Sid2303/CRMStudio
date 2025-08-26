import React from 'react'
import './Todos.css'
import CardLayout from '../../reusables/CardLayout/CardLayout'
import ViewMoreButton from '../../reusables/ViewMoreButton/ViewMoreButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListCheck } from '@fortawesome/free-solid-svg-icons'
import TodoList from './TodoList.jsx'

export default function Todos() {
    return (
        <div className='todos-home-page'>
            <CardLayout
                icon={<FontAwesomeIcon icon={faListCheck} />}
                title="Todos"
            >
                <TodoList />
            </CardLayout>
        </div>
    )
}
