import React from 'react'
import classes from './Cockpit.css'

const cockpit = (props) => {

    let btnClass = '';

    if (props.showCompanies) {
        btnClass = classes.Red;
    };

    return (
        <div className={classes.Cockpit}>
            <button className={btnClass} onClick={() => props.clicked()}>Switch names</button>
        </div>
        
    );
};

export default cockpit;