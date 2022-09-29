import { useState } from 'react';
import './Calculate.css'

const Calculate = ({sportsData}) => {
    const [breakTime, setBreakTime] = useState(0)
    
    let time = 0;
    for(const data of sportsData){
        
        time = time + data.time;
    }
    const handleBreak = (e) => {
        setBreakTime((breakTime) => breakTime + parseFloat(e.target.innerText))
        
    }
    console.log(breakTime);
    return (
        <div>
            <div style={{marginTop: '40px'}}>
            <h3>Add A Break</h3>
            <div className='break-min'>
            <p><span onClick={handleBreak}>10</span> m</p>
                <p><span onClick={handleBreak}>20</span> m</p>
                <p><span onClick={handleBreak}>30</span> m</p>
                <p><span onClick={handleBreak}>40</span> m</p>
                <p><span onClick={handleBreak}>50</span> m</p>
            </div>
            <div style={{marginTop: '40px'}}>
                <h3>Sport Details</h3>
                <div className='sport-time'>
                    <h4>Sport Time</h4>
                    <p>{time} minutes</p>
                </div>
                <div style={{marginTop: '20px'}} className='break-time'>
                    <h4>Break Time</h4>
                    <p>{breakTime} minutes</p>
                </div>
                <button className='activity-btn'>Activity Completed</button>
            </div>
            </div>
        </div>
    );
};

export default Calculate;