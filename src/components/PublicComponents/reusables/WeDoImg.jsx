import React from 'react'
import './WeDoImg.css'

export default function WeDoImg(props) {
    return (
        <div className="we-do-img">
            <img src={props.img} alt="" />
        </div>
    )
}
