import React from 'react';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import './App.css';
import {Userslist} from './component/users'
import { Navbar } from './component/Navbar'
import { About } from './component/About'


function App() {
  return (
    <Router>
    <Navbar></Navbar>
    <div className="App">
    <Switch>
    <Route exact path="/about">
    <About />
  </Route>
  </Switch>
 
    <Route exact path="/">
    <Userslist/>
  </Route>
    
    </div>
    </Router>
  );
}

export default App;
