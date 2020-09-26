import React, { Component } from 'react';
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { signOut } from '../../redux/actions';

import './Toolbar.css';
import AppBar from '@material-ui/core/AppBar';
import MaterialToolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Lock from '@material-ui/icons/Lock';
import LockOpen from '@material-ui/icons/LockOpen';

class Toolbar extends Component {
  constructor (props) {
    super(props);
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  signIn () {
    this.props.history.push('/sign-in');
  }

  signOut () {
    this.props.signOut();
    
    this.props.history.push('/');
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
              this.props.authenticated ?
                <div>
                  <Link to='/downloads'>D</Link>
                  <IconButton edge="start" color="inherit" aria-label="sign in needed" onClick={this.signOut}>
                    <LockOpen />
                  </IconButton>
                </div>:
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

// export default Toolbar;

const mapStateToProps = state => {
  const authenticated = state.authentication.authenticated;
  return { authenticated }
};
export default connect(
  mapStateToProps,
  { signOut }
)(withRouter(Toolbar));