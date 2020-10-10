import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import { connect } from 'react-redux';
import { setJWTData, setServerData } from './redux/actions';

import './App.css';

import Toolbar from './components/Toolbar';
import Downloads from './views/Downloads';
import NewDownload from './views/NewDownload';
import SignIn from './views/SignIn';
import Settings from './views/Settings';

import StorageService from './services/StorageService';


class App extends Component {
  componentDidMount() {
    console.log('App componentDidMount')
    const service = new StorageService();
    console.log('App componentDidMount 1')
    service.load(); 
    console.log('App componentDidMount 2')
    this.props.setJWTData(service.jwtData);
    console.log('App componentDidMount 3')
    this.props.setServerData(service.serverData);
  }

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
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/settings" component={Settings} />
          <Route>
            <Redirect to="/" />
          </Route>
       </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const authenticated = state.authentication.authenticated;
  return { authenticated }
};
export default connect(
  mapStateToProps,
  { setJWTData, setServerData }
)(App);
