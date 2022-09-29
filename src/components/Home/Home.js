import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import './Home.css';
import img from '../Images/Logo.png';
import myPic from '../Images/myPic.jpg'
import Calculate from '../Calculate/Calculate';
import SingleCard from '../SingleCard/SingleCard';
import Question from '../Question/Question';

const Home = () => {
    const element = <FontAwesomeIcon icon={faLocationDot} />
    const [sportsData, setSportsData] = useState([]);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, []);

    let newCart = [];

    const handleAddToCart = (sport) => {
        const storedCart = JSON.parse(localStorage.getItem('cart'));
        setSportsData(newCart)
        if (storedCart) {
            newCart = [...storedCart, sport]
        }

        else {
            newCart.push(sport)
        }

        setSportsData(newCart)
        localStorage.setItem('cart', JSON.stringify(newCart))
    }

    useEffect(() => {
        const cardsInLocal = JSON.parse(localStorage.getItem('cart'))
        if (cardsInLocal) {
            setSportsData(cardsInLocal)
        }
        else {
            return;
        }
    }, []);

    return (
        <div className='home'>
            <div style={{ backgroundColor: 'rgb(219, 219, 219)' }}>
                <div className='card-container'>
                    <div className='card-header'>
                        <img src={img} alt="" />
                        <h1>SPORTS-ADVENTURES-CLUB</h1>
                    </div>
                    <h2>Select Today's Game...</h2>
                    <div className='cards-container'>
                        {
                            cards.map(sports => <SingleCard sport={sports}
                                key={sports.id}
                                handleAddToCart={handleAddToCart}
                            />)
                        }
                    </div>
                    <div className='question'>
                        <Question />
                    </div>
                </div>
            </div>
            <div style={{ padding: '20px' }}>
                <div className='person'>
                    <img src={myPic} alt="" />
                    <div>
                        <h3>Jubayer Ahmed</h3>
                        <p>{element} Sylhet, Bangladesh</p>
                    </div>
                </div>
                <div className='person-info'>
                    <div className='kg'>
                        <p><span>65</span> kg</p>
                        <h4>Weight</h4>
                    </div>
                    <div className='kg'>
                        <p><span>5.8</span> inc</p>
                        <h4>Height</h4>
                    </div>
                    <div className='kg'>
                        <p><span>22</span>yrs</p>
                        <h4>Age</h4>
                    </div>
                </div>
                <div>
                    <Calculate sportsData={sportsData} cards={cards} />
                </div>
            </div>
        </div>
    );
};

export default Home;
