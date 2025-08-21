import React from 'react'
import './getcrm.css'
import managing from '../../assets/videos/managing.mp4'

export default function GetCrm() {
    return (
        <div className="get-crm">
            <div className="get-crm-left">
                <h1>Pick the Best CRM for Small Businesses</h1>
                <p>A CRM can help your small business grow faster.
                    Figuring out the best CRM for small businesses can be tricky,
                    read on to discover what a CRM can help your business do, which features
                    are most important for each department, and how you can make the most of this
                    fast-growing software.
                </p>
                <div className="get-crm-buttons">
                    <button className="get-free">Get Free CRM</button>
                    <button className="get-demo">Get a Demo</button>
                </div>
            </div>
            <div className="get-crm-right" >
                <video src={managing} autoPlay loop muted></video>
            </div>
        </div>
    )
}
