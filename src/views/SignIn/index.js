import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { setJWTData } from '../../redux/actions';
import Snackbar from '@material-ui/core/Snackbar';

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import ApiAuthenticationService from '../../services/api/ApiAuthenticationService';
import JWTService from '../../services/JWTService';

import './SignIn.css';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "rien@croonenborghs.net",
      password: "",
      error: false,
      errorMessage: null
    }
    this.clear = this.clear.bind(this);
    this.emailChanged = this.emailChanged.bind(this);
    this.passwordChanged = this.passwordChanged.bind(this);
    this.signIn = this.signIn.bind(this);
    this.closeErrorMessage = this.closeErrorMessage.bind(this);
  }

  clear() {
    this.setState({ email: "" })
    this.setState({ password: "" })
    this.setState({ cannotSignIn: true })
  }

  emailChanged(event) {
    this.setState({ email: event.target.value })
  }

  passwordChanged(event) {
    this.setState({ password: event.target.value })
  }

  filledIn() {
    return this.state.email === "" || this.state.password === ""
  }

  signIn() {
    this.setState({ error: false });
    this.setState({ errorMessage: null });
    
    const apiService = new ApiAuthenticationService(this.props.protocol, this.props.hostname, this.props.port);
    apiService.signIn(this.state.email, this.state.password).then(
      (data) => {
        const service = new JWTService();
        service.token = data.token;
        service.expires = data.exp;
        service.save();
        this.props.setJWTData(data);
        this.props.history.push('/downloads');
      }
    ).catch(
      (error) => {
      this.setState({ error: true });
      this.setState({ errorMessage: error });
      }
    )
  }

  closeErrorMessage() {
    this.setState({ error: false });
    this.setState({ errorMessage: null });
  }

  render() {
    return (
      <div className="SignIn">
        {
          this.props.authenticated ?
            <Redirect to="/dashboard" /> :
            <div>
              <Box display="flex" flexWrap="nowrap" justifyContent="center">
                <Paper elevation={5} className="Content">
                  <form noValidate autoComplete="off">
                    <Box display="flex" flexWrap="nowrap" flexDirection="column">
                      <TextField required id="email" label="E-mail" type="email" value={this.state.email} onChange={this.emailChanged} />
                      <TextField required id="password" label="Password" type="password" value={this.state.password} onChange={this.passwordChanged} />
                    </Box>
                    <Box display="flex" flexWrap="nowrap" justifyContent="flex-end" className="Buttons">
                      <Button color="secondary" onClick={this.clear}>Clear</Button>
                      <Button color="primary" disabled={this.filledIn()} onClick={this.signIn}>Sign In</Button>
                    </Box>
                  </form>
                </Paper>
              </Box>

              <Snackbar open={this.state.error}
                        className='error-message'
                        autoHideDuration={6000}
                        message={this.state.errorMessage}
                        onClose={this.closeErrorMessage}
                        action={
                          <React.Fragment>
                            <IconButton size="small" aria-label="close" color="inherit" onClick={this.closeErrorMessage}>
                              <CloseIcon fontSize="small" />
                            </IconButton>
                          </React.Fragment>
                        }
              />
            </div>
        }
      </div>
    )
  }
}

// export default SignIn;
const mapStateToProps = state => {
  const authenticated = state.authentication.authenticated;
  const { protocol, hostname, port } = state.server;
  return { authenticated, protocol, hostname, port }
};
export default connect(
  mapStateToProps,
  { setJWTData }
)(SignIn);
