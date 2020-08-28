import React from 'react'
import './Person.css';

const person = (props) => {
return (
    <div className="Person">
        <h1 onClick={props.click}>Hi, I'm Nurba and I'll get to {props.company} in {props.years} years!</h1>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.company}/>
    </div>
    
    );
}

export default person;