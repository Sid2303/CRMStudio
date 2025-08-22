import React from 'react'
import './priorityTag.css'

export default function PriorityTag(props) {
    return (
        <div className='priority-tag-coponent'>
            <p className={props.priority === 'Low' ? 'low-priority' :
                props.priority === 'Medium' ? 'medium-priority' :
                props.priority === 'High' ? 'high-priority' : ''
            }>{props.priority}</p>
            </div>
    )
}
