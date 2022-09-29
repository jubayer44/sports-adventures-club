import './Calculate.css'

const Calculate = ({sportsData}) => {
    let time = 0;
    for(const data of sportsData){
        
        time = time + data.time;
    }

    const handleBreak = (e) => {
        console.log(e.target.value);
    }

    return (
        <div>
            <div style={{marginTop: '40px'}}>
            <h3>Add A Break</h3>
            <div className='break-min'>
                <p onClick={handleBreak}>10m</p>
                <p>20m</p>
                <p>30m</p>
                <p>40m</p>
                <p>50m</p>
            </div>
            <div style={{marginTop: '40px'}}>
                <h3>Sport Details</h3>
                <div className='sport-time'>
                    <h4>Sport Time</h4>
                    <p>{time} minutes</p>
                </div>
                <div style={{marginTop: '20px'}} className='break-time'>
                    <h4>Break Time</h4>
                    <p>200 minutes</p>
                </div>
                <button className='activity-btn'>Activity Completed</button>
            </div>
            </div>
        </div>
    );
};

export default Calculate;