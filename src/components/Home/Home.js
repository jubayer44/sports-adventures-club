import React from 'react';
import './Home.css';
import img from '../Images/Logo.png'
import Card from '../Card/Card';

const Home = () => {
    return (
        <div className='home'>
            <div style={{backgroundColor: 'rgb(219, 219, 219)'}}>
                <div className='card-container'>
                    <div className='card-header'>
                    <img src={img} alt="" />
                    <h1>SPORTS-ADVENTURES-CLUB</h1>
                    </div>
                    <h2>Select Today's Game...</h2>
                    <Card/>
                </div>
            </div>
            <div>
                <h1>Person section</h1>
            </div>
        </div>
    );
};

export default Home;