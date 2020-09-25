import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from './helpers/PrivateRoute';
import './App.css';
import Toolbar from './components/Toolbar';
import Downloads from './views/Downloads';
import NewDownload from './views/NewDownload';
import SignIn from './views/SignIn';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Toolbar />
        <Switch>
          <PrivateRoute exact path="/">
            <Downloads />
          </PrivateRoute>
          <PrivateRoute exact path="/downloads">
            <Downloads />
          </PrivateRoute>
          <PrivateRoute exact path="/downloads/new">
            <NewDownload />
          </PrivateRoute>
          <Route exact path="/sign-in">
            <SignIn />
          </Route>
          <Route>
            <Redirect to="/" />
          </Route>
       </Switch>
      </div>
    )
  }
}

export default App;
