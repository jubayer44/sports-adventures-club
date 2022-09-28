import React from 'react';
import './SingleCard.css'

const SingleCard = ({ sport }) => {
    const { name, img, description, followers, time } = sport;
    return (
        <div className='single-card'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{description}</p>
            <p><strong>Followers : {followers}</strong></p>
            <p><strong>Time required : {time}</strong></p>
            <button>Add to list</button>
        </div>
    );
};

export default SingleCard;