import React, { useState, Component } from 'react';
import './App.css';
import Prs from './Person/Person';
import styled from 'styled-components'


// class App extends Component {
class App extends Component {

  state = {
    companies: [
      {id: 'qwe', company: 'Google', years: 2},
      {id: 'asd', company: 'Facebook', years: 3},
      {id: 'zxc', company: 'Amazon', years: 3}
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

        style.backgroundColor = 'red'
        style[':hover'] = {
          backgroundColor: 'coral',
          color: 'black'
        }
        

    }

    const StyledButton = styled.button`
      background-color: ${props => props.alt ? 'red' : 'green'};
      color: white;
      width: 100px;
      height: 50px;

      &:hover {
          background-color: ${props => props.alt ? 'coral' : 'lightgreen'};
          color: black;
    }
    `

  return (
    
    <div className='App'>


      <div id='button_wrapper' ><StyledButton alt={this.state.showPersons } onClick={() => this.togglePersons()}>Switch names</StyledButton></div>

      <div id='persons_wrapper'>{persons}</div>
        

    </div>
  );
};
}

export default App;