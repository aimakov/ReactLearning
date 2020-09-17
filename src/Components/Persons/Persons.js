import React, { Component } from 'react'
import Prs from './Person/Person'

class Persons extends Component {

    componentWillUnmount() {
      console.log('[Persons.js] componentWillUnmount');
    }

    shouldComponentUpdate(nextProps, nextState) {
      if (nextProps.companies !== this.props.companies) {
        console.log('[Persons.js] should be updated');
        return true;
        
      }
      else{
        return false;
      }
    }


    render(){
      console.log('[Persons.js] rendering...');
      return(this.props.companies.map((companies) => {
        return <Prs 
        company={companies.company} 
        years={companies.years}
        click={() => this.props.clicked(companies.id)}
        changed={(event) => this.props.changed(event,companies.id)}
        key={companies.id}
        />  
      })
      );
    }
    
    
    };

export default Persons;