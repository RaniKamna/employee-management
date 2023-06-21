import React from 'react';
import './style.css';

export const InfoBanner = ({text}) => {
    return (
        <div className='infobanner'>
            <p className='banner-text'>{text}</p>
        </div>
    )
}