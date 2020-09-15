import React, { useEffect } from 'react'
import classes from './Cockpit.css'

const cockpit = (props) => {

    useEffect(() => {
        console.log('[Cockpit.js] useEffect')
        setTimeout(() => {
            alert('Saved data to cloud')
        }, 1000)

        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
    }, []);

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