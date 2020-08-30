import React, { useState, Component } from 'react';
import './App.css';
import Prs from './Person/Person';


// class App extends Component {
class App extends Component {

  state = {
    companies: [
      {company: 'Google', years: 2},
      {company: 'Facebook', years: 3},
      {company: 'Amazon', years: 3}
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

  deletePersonHandler = () => {

  }

  togglePersons = () => {
    let doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  nameChangedHandler = (event) => {
    this.setState( {
      companies: [
        {company: 'Google', years: 2},
        {company: event.target.value, years: 3},
        {company: 'Amazon', years: 3}
      ]
    } )
  }
  
  render() {


    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>

        {this.state.companies.map((person, index) => {
          return <Prs 
          company={person.company} 
          years={person.years}
          click={this.deletePersonHandler}
          changed={this.nameChangedHandler} 
          />
        })}

        {/* <Prs 
        company={this.state.companies[0].company} 
        years={this.state.companies[0].years} />

        <Prs 
        company={this.state.companies[1].company} 
        years={this.state.companies[1].years}
        click={this.switchNameHandler.bind(this, "Netflix")}
        changed={this.nameChangedHandler}
        >My job title: Front-End Developer</Prs>
        
        <Prs 
        company={this.state.companies[2].company} 
        years={this.state.companies[2].years}/> */}
      </div>
      )
    }

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-lo go" alt="logo" />
    //     <h1 className="App-title">Welcome to React, Nurba</h1> 
    //   </header>
    // </div>
    
    <div className='App'>


      <div id='button_wrapper'><button onClick={() => this.togglePersons()}>Switch names</button></div>

      <div id='persons_wrapper'>{persons}</div>
        

    </div>
    
  );
  // return React.createElement('div',{className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
};
}

export default App;


// state = {
//   companies: [
//     {company: 'Google', years: 2},
//     {company: 'Facebook', years: 3},
//     {company: 'Amazon', years: 3}
//   ]
// };

// switchNameHandler = () => {
//   // console.log("Was clicked!")
//   this.setState({
//     companies: [
//       {company: 'Google', years: 2},
//       {company: 'Facebook', years: 3},
//       {company: 'Amazon', years: 10}
//     ]
//   })
// };