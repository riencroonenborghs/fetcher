import React, { Component } from 'react';
import './Toolbar.css';
import AppBar from '@material-ui/core/AppBar';
import MaterialToolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Lock from '@material-ui/icons/Lock';
import LockOpen from '@material-ui/icons/LockOpen';

class Toolbar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      authenticated: false
    }
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  signIn () {
    this.setState({ authenticated: true })
  }

  signOut () {
    this.setState({ authenticated: false })
  }

  render() {
    return (
      <div className="Toolbar">
        <AppBar position="static">
          <MaterialToolbar>
            <Typography variant="h6" className="title">
              Fetcher
            </Typography>
            {
              this.state.authenticated ?
                <IconButton edge="start" color="inherit" aria-label="sign in needed" onClick={this.signOut}>
                  <LockOpen />
                </IconButton> :
                <IconButton edge="start" color="inherit" aria-label="sign in needed" onClick={this.signIn}>
                  <Lock />
                </IconButton>
            }
          </MaterialToolbar>
        </AppBar>
      </div>
    )
  }
}

export default Toolbar;
