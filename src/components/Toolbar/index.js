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
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import AddIcon from '@material-ui/icons/Add';
import SettingsIcon from '@material-ui/icons/Settings';

import JWTService from '../../services/JWTService';

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
    const service = new JWTService();
    service.clear();
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="Toolbar">
        <AppBar position="static">
          <MaterialToolbar>
            <Link to="/settings">
              <IconButton edge="start" color="inherit" aria-label="Settings">
                <SettingsIcon />
              </IconButton>
            </Link>
            <Typography variant="h6" className="title">
              Fetcher
            </Typography>
            {
              this.props.authenticated ?
                <div>
                  <Link to="/downloads/new">
                    <IconButton edge="start" color="inherit" aria-label="New Download">
                      <AddIcon />
                    </IconButton>                    
                  </Link>
                  <Link to="/downloads">
                    <IconButton edge="start" color="inherit" aria-label="Downloads">
                      <CloudDownloadIcon />
                    </IconButton>                    
                  </Link>
                  <IconButton edge="start" color="inherit" aria-label="Sign Out" onClick={this.signOut}>
                    <LockOpen />
                  </IconButton>
                </div>:
                <IconButton edge="start" color="inherit" aria-label="Sign In" onClick={this.signIn}>
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