import React, {Fragment} from 'react';
import  './style.css'

const GrayImg = (props) => {
    return (
        <img className="gray-img" src={props.img_url}></img>
    );
}

export default GrayImg;