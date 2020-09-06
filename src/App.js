import React, { useState, Component } from 'react';
import classes from './App.css';
import Prs from './Person/Person';


// class App extends Component {
class App extends Component {

  state = {
    companies: [
      {id: 'qwe', company: 'Google', years: 2},
      {id: 'asd', company: 'Facebook', years: 3},
      {id: 'zxc', company: 'Amazon', years: 3},
      {id: 'Hyewon', company: 'Disney', years: 1}
    ],
    showPersons: false
  };

  deletePersonHandler = (companyId) => {

    const companyIndex = this.state.companies.findIndex(c => {
      return c.id === companyId;
    })



    const companies = [...this.state.companies];
    companies.splice(companyIndex,1);
    this.setState({companies: companies});
  }

  togglePersons = () => {
    let doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  nameChangedHandler = (event, id) => {

    const companyIndex = this.state.companies.findIndex(c => {
      return c.id === id;
    });

    const company = {...this.state.companies[companyIndex]};    

    // const company = Object.assign({},this.state.companies[companyIndex]);

    company.company = event.target.value;

    const companies = [...this.state.companies];
    
    companies[companyIndex].company = company.company;

    this.setState( {
      companies: companies
    } )
  }
  
  render() {


    let btnClass = '';

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>

        {this.state.companies.map((companies) => {
          return <Prs 
          company={companies.company} 
          years={companies.years}
          click={() => this.deletePersonHandler(companies.id)}
          changed={(event) => this.nameChangedHandler(event,companies.id)}
          key={companies.id}
          />  
        })}
      </div>
      )
        
      btnClass = classes.Red;

    }

  return (
    
    <div className={classes.App}>


      <button className={btnClass} onClick={() => this.togglePersons()}>Switch names</button>

      {persons}
        

    </div>
  );
};
}

export default App;