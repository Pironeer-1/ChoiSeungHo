import React from "react";
import {FaBars, FaGithub, FaPlus, FaBell, FaUserCircle} from "react-icons/fa";
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
                <button className="menu-btn">
                    <FaBars size={20}/> {}
                </button>
                <FaGithub size={30} className="github-logo"/> {}
                <span className="dashboard-title">Dashboard</span>
            </div>

            <div className="header-search">
                <input type="text" placeholder="Type / to search"/>
            </div>

            <div className="header-right">
                <button className="icon-btn">
                    <FaPlus size={20}/>
                </button>
                <button className="icon-btn">
                    <FaBell size={20}/>
                </button>
                <button className="icon-btn">
                    <FaUserCircle size={24}/>
                </button>
            </div>
        </header>
    );
};

export default Header;
