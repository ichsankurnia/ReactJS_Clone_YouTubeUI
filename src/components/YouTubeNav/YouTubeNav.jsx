import React from 'react';
import "./YouTubeNav.css";
import youtubeImg from '../../assets/img/yutub.png'
import userImg from '../../assets/img/user.png'

const YouTubeNav = () => {
    return (
        <div className="nav">
            <div className="nav-1">
                <div className="line3">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <div className="yutub-icon">
                    <img src={youtubeImg} alt="" />
                    <p>The ID</p>
                </div>
            </div>
            <div className="nav-2">
                <input type="text" placeholder="Search for..."/>
                <input type="Submit" value="Search"/>
            </div>
            <div className="nav-3">
                <div className="right-icon"></div>
                <div className="right-icon"></div>
                <div className="right-icon"></div>
                <img src={userImg} alt="" />
            </div>
        </div>
    )
}

export default YouTubeNav;