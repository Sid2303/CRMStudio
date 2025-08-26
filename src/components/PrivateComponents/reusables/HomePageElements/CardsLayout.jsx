import React from 'react'
import './CardsLayout.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import ViewMoreButton from '../ViewMoreButton/ViewMoreButton'

export default function CardsLayout() {
    return (
        <div className='home-cards-layout'>
            <div className="home-card-layout-header">
                <div className="home-card-layout-header-left">
                    <div className="home-card-layout-header-icon">
                        <FontAwesomeIcon icon={faUsers} />
                    </div>
                    <div className="home-card-layout-header-title">Title</div>
                </div>
                <div className="home-card-layout-header-right">
                    <ViewMoreButton />
                </div>
            </div>
            <div className="home-card-layout-body">asd</div>
        </div>
    )
}
