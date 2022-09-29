import { useEffect, useState } from 'react';
import './Calculate.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Calculate = ({ sportsData }) => {

    const notify = () => toast("Congratulation Good Job", { position: 'top-center' });

    let time = 0;
    for (const data of sportsData) {

        time = time + data.time;
    }

    const [breakTime, setBreakTime] = useState(0);
    const handleBreak = (e) => {
        setBreakTime(parseFloat(e.target.innerText));
        localStorage.setItem('break-time', JSON.stringify((+e.target.innerText)))
    }

    console.log(breakTime);

    useEffect(() => {
        const getBreakData = JSON.parse(localStorage.getItem('break-time'));
        if (getBreakData) {
            setBreakTime(getBreakData)
        }
        else {
            return;
        }
    }, []);

    return (
        <div>
            <div style={{ marginTop: '40px' }}>
                <h3>Add A Break in Minutes</h3>
                <div className='break-min'>
                    <p onClick={handleBreak}>10</p>
                    <p onClick={handleBreak}>20</p>
                    <p onClick={handleBreak}>30</p>
                    <p onClick={handleBreak}>40</p>
                    <p onClick={handleBreak}>50</p>
                </div>
                <div style={{ marginTop: '40px' }}>
                    <h3>Sport Details</h3>
                    <div className='sport-time'>
                        <h4>Sport Time</h4>
                        <p>{time} minutes</p>
                    </div>
                    <div style={{ marginTop: '20px' }} className='break-time'>
                        <h4>Break Time</h4>
                        <p>{breakTime} minutes</p>
                    </div>
                    <button onClick={notify} className='activity-btn'>Activity Completed</button>
                    <ToastContainer />

                </div>
            </div>
        </div>
    );
};

export default Calculate;