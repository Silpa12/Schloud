import React, { Component } from 'react';
//yimport logo from './logo.svg';
//import './App.css';

class Stud extends Component {
  constructor(){
      super();
      this.state={
          list: []
      }
  }
  componentDidMount(){
      fetch('/api/studlist')
      .then(res => res.json()) 
      .then(list => this.setState({list}, () => console.log('fetched successfully',list)));
  }
  render(){
    return (
      <div>
        <h1>student list</h1>
      </div>
    );
  }
}

export default Stud;
