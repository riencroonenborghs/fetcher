import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import PrivateRoute from './helpers/PrivateRoute';
import './App.css';
import Toolbar from './components/Toolbar';
import Dashboard from './views/Dashboard';
import SignIn from './views/SignIn';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Toolbar />
        <Switch>
          <PrivateRoute exact path="/">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route exact path="/sign-in">
            <SignIn />
          </Route>
        </Switch>
      </div>
    )
  }
}

export default App;
