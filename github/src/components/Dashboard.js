
import React from "react";
import Sidebar from "./Sidebar";
import HomeFeed from "./HomeFeed";
import Trending from "./Trending";
import Notification from "./Notification";

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <Sidebar />
            <div className="main-content">
                <HomeFeed />
            </div>
            <div className="right-panel">
                <Notification />
                <Trending />
            </div>
        </div>
    );
};

export default Dashboard;
