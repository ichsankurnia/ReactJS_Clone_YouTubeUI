import React from 'react';
import "./YouTubeHead.css";
import reactThumb from '../../assets/img/react-thumbnail.png'

const YouTubeHead = () => {
    return (
        <div className="head">
            <div className="left-head">
                <img src={reactThumb} alt="" />
            </div>
            <div className="right-head">
                <img className="banner" src={reactThumb} alt="" />
                <div className="bot-banner">
                    <div className="logo"></div>
                    <div>
                        <p >Tomorrow Top Promo 12:12!</p>
                        <div className="mid">
                            <p className="btn-ads">Advertisement</p>
                            <p>SHOPEE Indonesia</p>
                        </div>
                        <p className="btn-promos">CHECK PROMOS NOW</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YouTubeHead;