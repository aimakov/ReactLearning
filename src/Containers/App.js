import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../Components/Persons/Persons'
import Cockpit from '../Components/Cockpit/Cockpit'

// class App extends Component {
class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    companies: [
      {id: 'qwe', company: 'Google', years: 2},
      {id: 'asd', company: 'Facebook', years: 3},
      {id: 'zxc', company: 'Amazon', years: 3},
      // {id: 'Hyewon', company: 'Disney', years: 1}
    ],
    showCompanies: false,
    showCockpit: true
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

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

  deleteCockpit = () => {
    let tempCockpit = this.state.showCockpit;
    this.setState({showCockpit: !tempCockpit})
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount')
  }

  componentWillUnmount() {
    console.log('[App.js] componentWillUnmount')
  }

  render() {

    console.log('[App.js] render')

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

    let cockpit = null;

    if(this.state.showCockpit) {
      cockpit = (
        <div>
          <Cockpit
            showCompanies = {this.state.showCompanies}
            clicked={this.togglePersons}
            // companies={this.state.companies}
      />
        </div>
        
      )
    }

  return (
    
    <div className={classes.App}>

      <button style={{marginTop:'10px'}} onClick={this.deleteCockpit}>Remove Cockpit</button>
      {cockpit}
      {persons}
        

    </div>
  );
};
}

export default App;