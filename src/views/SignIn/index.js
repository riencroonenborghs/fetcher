import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import AuthenticationService from '../../services/api/AuthenticationService';

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
    this.setState({ error: null })
    const service = new AuthenticationService();
    service.signIn(this.state.email, this.state.password).then(
      (result) => {
        console.log('result')
        console.log(result)
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

export default SignIn;
