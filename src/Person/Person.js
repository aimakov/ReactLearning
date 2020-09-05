import React from 'react'
import './Person.css';
import Radium from 'radium'

const person = (props) => {

    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }

return (
    <div className="Person" style={style}>
        <h1 onClick={props.click}>Hi, I'm Nurba and I'll get to {props.company} in {props.years} years!</h1>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.company}/>
    </div>
    
    );
}

export default Radium(person);