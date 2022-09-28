import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';
import './Card.css'

const Card = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    // let foundData = {};





    return (
        <div className='cards-container'>
            {
                cards.map(sport => 
                <SingleCard sport={sport} key={sport.id}
                />)
            };
        </div>
    );
};

export default Card;