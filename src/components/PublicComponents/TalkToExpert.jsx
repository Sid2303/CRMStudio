import React from 'react'
import './talkToExpert.css';

export default function TalkToExpert() {
    return (
        <div className="talk-to-crm-expert" id="talk-to-crm-expert">
            <h1>Talk to CRM expert</h1>
            <form action="">
                <div className="name">
                    <div className="part-name">
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" placeholder="" id="first-name" />
                    </div>
                    <div className="part-name">
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" placeholder="" id="last-name" />
                    </div>
                </div>
                <div className="work">
                    <div className="part-work">
                        <label htmlFor="work-email">Work Email</label>
                        <input type="email" placeholder="" id="work-email" />
                    </div>
                    <div className="part-work">
                        <label htmlFor="job-title">Job Title</label>
                        <input type="text" placeholder="" id="job-title" />
                    </div>
                </div>
                <div className="phone-no">
                    <div className="part-phone">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="text" placeholder="" id="phone" />
                    </div>
                </div>
                <div className="company-details">
                    <div className="part-company">
                        <label htmlFor="company-name">Company Name</label>
                        <input type="text" placeholder="" id="company-name" />
                    </div>
                    <div className="part-company">
                        <label htmlFor="company-size">Company Size</label>
                        <input type="text" placeholder="" id="company-size" />
                    </div>
                </div>
                <div className="about-help">
                    <label htmlFor="help">How can our team help you</label>
                    <textarea name="" id="help"></textarea>
                </div>
                <p>By clicking submit, I acknowledge CRM studio's <a href="">Privacy Policy</a></p>
                <button className="submit-btn">Submit</button>
            </form>
        </div>
    )
}
