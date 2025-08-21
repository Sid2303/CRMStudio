import React from 'react'
import './advantages.css'
import AdvantageCard from './reusables/AdvantageCard.jsx'
import { faMessage, faPaperPlane, faInbox } from '@fortawesome/free-solid-svg-icons';

export default function Advantages() {

    const Message = {
        title: "Message your contacts",
        description: "View and receive messages from within the app.",
        icon: faMessage
    };

    const Navigate = {
        title: "Navigate to meetings",
        description: "View meeting details and get navigation details from within the app.",
        icon: faPaperPlane
    };

    const ManageProjects = {
        title: "Manage your projects",
        description: "View and manage all the details of the project.",
        icon: faInbox
    };

    return (
        <div className="advantages" id="advantages">
            <div className="advantages-header">
                <h1>Work from where you are</h1>
                <p>Manage your work and customer relationships on the go with our mobile applications for both Android and iOS</p>
            </div>
            <div className="advantages-content">
                <div className="adv-cards">
                    <AdvantageCard {...Message} />
                    <AdvantageCard {...Navigate} />
                    <AdvantageCard {...ManageProjects} />
                </div>
                <div className="adv-image">
                    <img src="https://vtiger-website.cdn.prismic.io/vtiger-website/106f6a24-abc3-4c59-9741-a9f486ab0cb2_Mobile+screensmobile+%281%29.svg" alt="" />
                </div>
            </div>
        </div>
    )
}
