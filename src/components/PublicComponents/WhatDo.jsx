import React from 'react'
import './whatdo.css'
import WeDoInfo from './reusables/WeDoInfo.jsx'
import WeDoImg from './reusables/WeDoImg.jsx'


import managementImg from '../../assets/photos/pexels-fauxels-3184418.jpg';
import analyticsImg from '../../assets/photos/analysis.jpg';
import supportImg from '../../assets/photos/customer.jpg';
import salesImg from '../../assets/photos/sales.jpg';


export default function WhatDo() {
    const management = {
        title: "Management",
        name: "Manage People",
        description: "CRM studio helps you manage your team and customers in one place. Assign tasks, track progress, and collaborate seamlessly. Keep everyone aligned with clear roles and responsibilities, ensuring no detail is overlooked."
    };
    const analytics = {
        title: "Analytics",
        name: "Gain Actionable Insights",
        description: "Use powerful analytics and dashboards to understand customer behavior and business performance. CRM reporting helps you spot trends, forecast revenue, and make data-driven decisions. Turn raw data into clear insights that guide smarter strategies across sales, marketing, and support."
    };
    const support = {
        title: "Support",
        name: "Enhance Customer Service",
        description: "Deliver exceptional customer experiences by managing all support tickets in one place. Empower your team with instant access to customer history for faster resolutions. Build loyalty through personalized communication and efficient problem-solving."
    };
    const sales = {
        title: "Sales",
        name: "Track Sales Performance",
        description: "Monitor your sales pipeline in real-time with detailed insights and reports. CRM helps sales teams prioritize leads, track customer interactions, and close deals faster. Identify high-performing strategies and replicate success across your team."
    };

    return (
        <div className="what-we-do" id="what-we-do">
            <div className="what-we-do-container">
                <h1>CRM studio brings all your teams on the same page at every step in the customer journey</h1>
                <div className="we-do-section straight">
                    <WeDoImg img={managementImg} />
                    <WeDoInfo {...management}/>
                </div>
                <div className="we-do-section opposite">
                    <WeDoInfo {...analytics}/>
                    <WeDoImg img={analyticsImg} />
                </div>
                <div className="we-do-section straight">
                    <WeDoImg img={supportImg} />
                    <WeDoInfo {...support}/>
                </div>
                <div className="we-do-section opposite">
                    <WeDoInfo {...sales}/>
                    <WeDoImg img={salesImg} />
                </div>
            </div>
        </div>
    )
}
