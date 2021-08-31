import React from 'react';
import "./YouTubeComp.css";
import reactThumb from '../../assets/img/react-thumbnail.png'
import userImg from '../../assets/img/user.png'
import pythonImg from '../../assets/img/python.jpg'

const Components = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src={props.thumbnail} alt="" />
                <p className="time">{props.time}</p>
            </div>
            <div className="main-desc">
                <img className="img-channel" src={props.account} alt="" />
                <div className="desc">
                    <p className="title">{props.title}</p>
                    <p className="channel">{props.channel}</p>
                    <p className="content-desc">{props.desc}</p>
                </div>
            </div>
        </div>
    )
}

Components.defaultProps = {
    thumbnail: reactThumb,
    time: '00.00',
    account: userImg,
    title: 'Title Not Available',
    channel: 'Unknown',
    desc: 'xk x watched . 1 year ago' 
}

const YouTubeComp = () => {
    return (
        <div style={{paddingTop:25}}>
            <Components
                thumbnail={pythonImg}
                time="01.55.25"
                account={userImg}
                title="Programming Essential in Python"
                channel="Python Institute"
                desc="25K x watched . 3 months ago"
            />
            <Components />
            <Components />
            <Components />
            <Components />
            <Components />
            <Components />
            <Components />
        </div>
    )
}

export default YouTubeComp;