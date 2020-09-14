import React from 'react'
import Prs from './Person/Person'

const persons = (props) => {

    console.log('[Persons.js] rendering...');
    return(
    props.companies.map((companies) => {
        return <Prs 
        company={companies.company} 
        years={companies.years}
        click={() => props.clicked(companies.id)}
        changed={(event) => props.changed(event,companies.id)}
        key={companies.id}
        />  
      })
      );
    };

export default persons;