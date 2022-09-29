import React from 'react';

const Question = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Question and Answer</h1>
            <div>
                <h2>How does React work?</h2>
                <p>React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram. Its aim is to allow developers to easily create fast user interfaces for websites and applications alike. The main concept of React.js is virtual DOM. It is a tree based on JavaScript components created with React that mimics a DOM tree. It does the least amount of DOM manipulation possible in order to keep your React components up to date.</p>
            </div>

            <div>
                <h2>What is difference between state and props in React?</h2>
                <p>State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. <br />
                    Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.</p>
            </div>

            <div>
                <h2>What can be done other than loading data with useEffect?</h2>
                <p>Whenever we need to make use of side effects in our application, useEffect is the way to go. This hook doesn't present many complications, except for non-primitive data types, due to how JavaScript handles them.</p>
                <h4>useEffect use cases</h4>
                <ul>
                    <li>Running once on mount: fetch API data</li>
                    <li>Running on state change: validating input field</li>
                    <li>Running on state change: live filtering</li>
                    <li>Running on state change: trigger animation on new array value</li>
                    <li>Running on props change: update paragraph list on fetched API data update</li>
                    <li>Running on props change: updating fetched API data to get BTC updated price</li>
                </ul>
            </div>

        </div>
    );
};

export default Question;