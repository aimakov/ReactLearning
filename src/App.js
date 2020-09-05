import React, { useState, Component } from 'react';
import './App.css';
import Prs from './Person/Person';
import Radium, { StyleRoot } from 'radium'


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

    const style = {
      backgroundColor: 'green',
      color: 'white',
      width: '100px',
      height: '50px',
      ':hover': {
          backgroundColor: 'lightgreen',
          color: 'black'
      }
    }

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

        style.backgroundColor = 'red'
        style[':hover'] = {
          backgroundColor: 'coral',
          color: 'black'
        }
        

    }

  return (
    <StyleRoot>
    
    <div className='App'>


      <div id='button_wrapper' ><button style={style} onClick={() => this.togglePersons()}>Switch names</button></div>

      <div id='persons_wrapper'>{persons}</div>
        

    </div>
    </StyleRoot>
  );
};
}

export default Radium(App);