import React from 'react';
import "./Stateless.css";

const Stateless = (props) => {
    return (
        <div className="main">
            <p>{props.title}</p>
        </div>
    )
}

export default Stateless;