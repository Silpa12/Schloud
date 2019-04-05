import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './login/login.js';
import Header from './login/header.js';
import DashBoard from './dashboard';
import Home from './login/home.js';
import About from './login/about.js';
import Stud from './dashboard/studlist.js';


const root = document.getElementById('root');

/*const Login= () => (
  <div>Login </div>
);

const Header= () => (
  <div>User</div>
);*/

const RoutedApp = () => (
  <BrowserRouter classname="content">
    <Switch>   
      <Route path="/header" component={Header} />
      <Route path="/dashboard" component={DashBoard} /> 
      <Route path="/login" component={Login}/>
      <Route path="/about" component={About}/>
      <Route path="/studlist" component={Stud}/>
      <Route exact path="/" component={Home} />                          
    </Switch>
  </BrowserRouter>
);

//ReactDOM.render(<RoutedApp />, root);//
export default RoutedApp;