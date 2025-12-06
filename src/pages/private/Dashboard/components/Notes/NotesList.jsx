import React from 'react'
import './NotesList.css'
import Note from './Note.jsx'

export default function NotesList() {
    return (
        <div className='notes-list-home-page'>
            <div className="notes-list-home-container">
                <Note />
                <Note />
                <Note />
                <Note />
            </div>
        </div>
    )
}
