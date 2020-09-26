import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setJWTData } from '../../redux/actions';

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import ApiAuthenticationService from '../../services/api/ApiAuthenticationService';
import AuthenticationService from '../../services/AuthenticationService';

import './SignIn.css';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "rien@croonenborghs.net",
      password: "",
      error: null
    }
    this.clear = this.clear.bind(this);
    this.emailChanged = this.emailChanged.bind(this);
    this.passwordChanged = this.passwordChanged.bind(this);
    this.signIn = this.signIn.bind(this);
  }

  componentDidMount() {
    const service = new AuthenticationService();
    service.load();
    if(service.valid) {
      this.props.setJWTData(service.data);
      this.props.history.push('/downloads');
    } else {
      service.clear();
    }
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
    this.setState({ error: null });
    
    const apiService = new ApiAuthenticationService();
    apiService.signIn(this.state.email, this.state.password).then(
      (data) => {
        const service = new AuthenticationService();
        service.save(data.token, data.exp);
        this.props.setJWTData(data);
        this.props.history.push('/downloads');
      }
    ).catch(
      (error) => {
        this.setState({ error: error })
      }
    )
  }

  render() {
    return (
      <div className="SignIn">
        <Box display="flex" flexWrap="nowrap" justifyContent="center">
          <Paper elevation={5} className="Content">
            <form noValidate autoComplete="off">
              <Box display="flex" flexWrap="nowrap" flexDirection="column">
                <TextField required id="email" label="E-mail" type="email" value={this.state.email} onChange={this.emailChanged} />
                <TextField required id="password" label="Password" type="password" value={this.state.password} onChange={this.passwordChanged} />
              </Box>
              {
                this.state.error ?
                  <Typography color="error">
                    {this.state.error}
                  </Typography> : ""
              }
              <Box display="flex" flexWrap="nowrap" justifyContent="flex-end" className="Buttons">
                <Button color="secondary" onClick={this.clear}>Clear</Button>
                <Button color="primary" disabled={this.filledIn()} onClick={this.signIn}>Sign In</Button>
              </Box>
            </form>
          </Paper>
        </Box>
      </div>
    )
  }
}

// export default SignIn;
export default connect(
  null,
  { setJWTData }
)(SignIn);
