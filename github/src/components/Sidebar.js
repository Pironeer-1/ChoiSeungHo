import React from "react";
import './Sidebar.css';
import notificationImage from '../card.png';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="profile">
                <img src={notificationImage} alt="Notification Image"/>
                <h3>chltmdgh522</h3>
            </div>
            <div className="repos">
                <h4>Top repositories</h4>
                <ul>
                    <li>FeelBuddy</li>
                    <li>AutoMakeCardNews</li>
                    <li>BaekJoon</li>
                    <li>Spring_Study</li>
                    <li>LearningLectures</li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
