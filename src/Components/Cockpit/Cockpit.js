import React, { useEffect } from 'react'
import classes from './Cockpit.css'

const cockpit = (props) => {

    useEffect(() => {
        console.log('[Cockpit.js] useEffect')
        const timer = setTimeout(() => {
            alert('Saved data to cloud')
        }, 1000)

        return () => {
            clearTimeout(timer);
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');

        return () => {
            console.log('[Cockpit.js] 2nd useEffect cleanup');
        };
    });

    let btnClass = '';

    if (props.showCompanies) {
        btnClass = classes.Red;
    };

    return (


        <div className={classes.Cockpit}>
            <h1>Hello Nurba</h1>
            <button className={btnClass} onClick={() => props.clicked()}>Switch names</button>
        </div>
        
    );
};

export default React.memo(cockpit);