import React from 'react';
import "./YouTubePosts.css";
import userImg from '../../assets/img/user.png'
import reactThumb from '../../assets/img/react-thumbnail.png'
import pythonImg from '../../assets/img/python.jpg'

const Components = (props) => {
    return (
        <div className="box">
            <div className="top">
                <img src={props.img_user} alt="" />
                <p>{props.channel}</p>
                <p>{props.time}</p>
            </div>
            <div className="content">
                <p>{props.content}</p>
                <img src={props.thumbnail} alt="" />
            </div>
            <div className="bott">
                <div className="left-bott">
                    <div className="icon"></div>
                    <p>{props.likes}</p>
                    <div className="icon"></div>
                </div>
                <div className="right-bott">
                    <div className="icon"></div>
                    <p>{props.comments}</p>
                    <div style={{marginLeft:5}}>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Components.defaultProps = {
    img_user: userImg,
    channel: 'Unknown',
    time: '. 1 day ago',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    thumbnail: reactThumb,
    likes: '2.5K',
    comments:'115'
}

const YouTubePosts = () => {
    return (
        <div style={{paddingTop:30}}>
            <Components 
                channel="Python Institute"
                time=". 3 years ago"
                content = "Create own model tensorflow using python"
                thumbnail={pythonImg}
                likes="35K"
                comments="517"
                />
            <Components />
            <Components />
        </div>
    )
}

export default YouTubePosts;