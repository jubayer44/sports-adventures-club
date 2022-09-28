import React from 'react';
import './Home.css';
import img from '../Images/Logo.png';
import myPic from '../Images/myPic.jpg'
import Card from '../Card/Card';

const Home = () => {
    return (
        <div className='home'>
            <div style={{ backgroundColor: 'rgb(219, 219, 219)' }}>
                <div className='card-container'>
                    <div className='card-header'>
                        <img src={img} alt="" />
                        <h1>SPORTS-ADVENTURES-CLUB</h1>
                    </div>
                    <h2>Select Today's Game...</h2>
                    <Card />
                </div>
            </div>
            <div style={{padding: '20px'}}>
            <div className='person'>
                <img src={myPic} alt="" />
                <div>
                    <h3>Jubayer Ahmed</h3>
                    <p>Sylhet, Bangladesh</p>
                </div>
            </div>
            <div className='person-info'>
                    <div>
                        <p><span>65</span> kg</p>
                        <h4>Weight</h4>
                    </div>
                    <div>
                        <p><span>5.8</span> inc</p>
                        <h4>Height</h4>
                    </div>
                    <div>
                        <p><span>22</span>yrs</p>
                        <h4>Age</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;