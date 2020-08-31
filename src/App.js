import React, { useState, Component } from 'react';
import './App.css';
import Prs from './Person/Person';
import person from './Person/Person';


// class App extends Component {
class App extends Component {

  state = {
    companies: [
      {id: '1', company: 'Google', years: 2},
      {id: '2', company: 'Facebook', years: 3},
      {id: '3', company: 'Amazon', years: 3}
    ],
    showPersons: false
  };

  switchNameHandler = (newName) => {
    // console.log("Was clicked!")
    this.setState( {
      companies: [
        {company: newName, years: 2},
        {company: 'Facebook', years: 3},
        {company: 'Amazon', years: 10}
      ]
    } )
  }

  deletePersonHandler = (companyIndex) => {
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
    
    companies[companyIndex] = company;

    this.setState( {
      companies: companies
    } )
  }
  
  render() {


    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>

        {this.state.companies.map((companies, index) => {
          return <Prs 
          company={companies.company} 
          years={companies.years}
          click={() => this.deletePersonHandler(index)}
          changed={(event) => this.nameChangedHandler(event,companies.id)}
          key={companies.id}
          />  
        })}
      </div>
      )
    }

  return (

    
    <div className='App'>


      <div id='button_wrapper'><button onClick={() => this.togglePersons()}>Switch names</button></div>

      <div id='persons_wrapper'>{persons}</div>
        

    </div>
    
  );
  // return React.createElement('div',{className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
};
}

export default App;