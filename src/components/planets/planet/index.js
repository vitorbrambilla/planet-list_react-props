import React from 'react';
import GrayImg from '../../shared/gray_img';
import DescriptionWithLink from '../../shared/description_with_link';

const Planet = (props) => {
    return (   
        <div>
            <h4>{props.name}</h4>
            <DescriptionWithLink description={props.description} link={props.link}/>
            <GrayImg img_url={props.img_url}/>
            <hr/>
        </div>
    );
}

export default Planet;