import React, { useEffect } from 'react'
import classes from './Person.css';

const person = (props) => {

    useEffect(() => {
        console.log('[Person.js] useEffect test');

        return () => {
            console.log('[Person.js] cleanup work in useEffect');
        };
    }, []);

console.log('[Person.js] rendering...')

return (
    <div className={classes.Person}>
        <h1 onClick={props.click}>Hi, I'm Hyewon and I'll get to {props.company} in {props.years} years!</h1>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.company}/>
        
    </div>
    
    );
};

export default person;