import React from 'react'
import './Person.css';
import styled from 'styled-components'

const person = (props) => {

    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // }

    const PersonDiv = styled.div`
        width: 60%;
        margin: auto;
        border: 1px solid #eee;
        box-shadow: 0 2px 3px #ccc;
        padding: 16px;
        text-align: center;
    `

return (
    <div className='Person'>
        <h1 onClick={props.click}>Hi, I'm Nurba and I'll get to {props.company} in {props.years} years!</h1>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.company}/>
        
    </div>
    
    );
}

export default person;