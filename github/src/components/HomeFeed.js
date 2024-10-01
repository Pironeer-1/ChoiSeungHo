import React from "react";
import './HomeFeed.css';

const HomeFeed = () => {
    return (
        <div className="home-feed">
            <h2>Home</h2>
            <div className="feed-item">
                <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="BeigeJun" className="feed-profile-img"/>
                <p><strong>BeigeJun</strong> followed 2 users</p>
            </div>
            <div className="feed-item">
                <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="Jay Lee" className="feed-profile-img"/>
                <p><strong>Jay Lee</strong> digitaldna01 (13 repositories)</p>
            </div>
            <div className="feed-item">
                <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="Minseok Chu"
                     className="feed-profile-img"/>
                <p><strong>Minseok Chu</strong> mchu7797 (8 repositories)</p>
            </div>
            <div className="feed-item">
                <img src="https://randomuser.me/api/portraits/men/4.jpg" alt="SeungHo Choi"
                     className="feed-profile-img"/>
                <p><strong>SeungHo Choi</strong> choiseungho (5 repositories)</p>
            </div>
            <div className="feed-item">
                <img src="https://randomuser.me/api/portraits/women/5.jpg" alt="Jiyou Jang"
                     className="feed-profile-img"/>
                <p><strong>Jiyou Jang</strong> jiyou_jang (4 repositories)</p>
            </div>
            <div className="feed-item">
                <img src="https://randomuser.me/api/portraits/men/6.jpg" alt="Michael An" className="feed-profile-img"/>
                <p><strong>Michael An</strong> m_an (12 repositories)</p>
            </div>
            <div className="feed-item">
                <img src="https://randomuser.me/api/portraits/women/7.jpg" alt="Sarah Kim"
                     className="feed-profile-img"/>
                <p><strong>Sarah Kim</strong> sarah_kim (7 repositories)</p>
            </div>
            <div className="feed-item">
                <img src="https://randomuser.me/api/portraits/men/8.jpg" alt="John Doe" className="feed-profile-img"/>
                <p><strong>John Doe</strong> johndoe (10 repositories)</p>
            </div>
            <div className="feed-item">
                <img src="https://randomuser.me/api/portraits/women/9.jpg" alt="Emily Park"
                     className="feed-profile-img"/>
                <p><strong>Emily Park</strong> e_park (9 repositories)</p>
            </div>


        </div>
    );
};

export default HomeFeed;
