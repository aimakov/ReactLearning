import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../Components/Persons/Persons'
import Cockpit from '../Components/Cockpit/Cockpit'

// class App extends Component {
class App extends Component {

  state = {
    companies: [
      {id: 'qwe', company: 'Google', years: 2},
      {id: 'asd', company: 'Facebook', years: 3},
      {id: 'zxc', company: 'Amazon', years: 3},
      // {id: 'Hyewon', company: 'Disney', years: 1}
    ],
    showCompanies: false
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
    let doesShow = this.state.showCompanies;
    this.setState({showCompanies: !doesShow})
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

    if (this.state.showCompanies) {
      persons = (
        <div>
        <Persons 
          companies={this.state.companies}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />

      </div>
      )
        

    }

  return (
    
    <div className={classes.App}>


      <Cockpit
        showCompanies = {this.state.showCompanies}
        clicked={this.togglePersons}
      />
      {persons}
        

    </div>
  );
};
}

export default App;