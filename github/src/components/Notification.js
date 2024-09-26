
import React from "react";
import './Notification.css';
import notificationImage from '../card.png';
const Notification = () => {
    return (
        <div className="notifications">
            <img src={notificationImage} alt="Notification Image" className="notification-img-full" />
        </div>
    );
};
export default Notification;
