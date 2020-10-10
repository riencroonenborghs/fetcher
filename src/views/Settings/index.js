import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setServerProtocol, setServerHostname, setServerPort } from '../../redux/actions';
import Snackbar from '@material-ui/core/Snackbar';

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import StorageService from '../../services/StorageService';

import './Settings.css';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      protocol: 'http',
      hostname: '',
      port: 80,
      error: null,
      success: false
    }
    this.protocolChanged = this.protocolChanged.bind(this);
    this.hostnameChanged = this.hostnameChanged.bind(this);
    this.portChanged = this.portChanged.bind(this);
    this.save = this.save.bind(this);
    this.closeSuccessMessage = this.closeSuccessMessage.bind(this);
  }

  componentDidUpdate(prevProps) {
    if(prevProps.protocol !== this.props.protocol ||
        prevProps.hostname !== this.props.hostname ||
        prevProps.port !== this.props.port) {
      this.updateAndNotify();
    }
  }

  updateAndNotify() {
    this.setState({ protocol: this.props.protocol || 'http' });
    this.setState({ hostname: this.props.hostname || ''});
    this.setState({ port: this.props.port || 80 });
  }

  protocolChanged(event) {
    this.props.setServerProtocol({ protocol: event.target.value });
    this.setState({ protocol: event.target.value });
  }

  hostnameChanged(event) {
    this.props.setServerHostname({ hostname: event.target.value });
    this.setState({ hostname: event.target.value });
  }

  portChanged(event) {
    const port = parseInt(event.target.value) || 80;
    this.props.setServerPort({ port: port });
    this.setState({ port: port });
  }

  notFilledIn() {
    return this.state.protocol === '' || this.state.hostname === ''  || this.state.port === null
  }

  save() {
    const service = new StorageService();
    service.serverData = {
      protocol: this.state.protocol,
      hostname: this.state.hostname,
      port: this.state.port
    }
    service.save();
    this.setState({ success: true });
  }

  closeSuccessMessage() {
    this.setState({ success: false });
  }

  render() {
    return (
      <div className="Settings">
        <Box display="flex" flexWrap="nowrap" justifyContent="center">
          <Paper elevation={5} className="Content">
            <form noValidate autoComplete="off">
              <Box display="flex" flexWrap="nowrap" flexDirection="row">
                <Select
                  labelId="protocol"
                  id="protocol"
                  value={this.state.protocol}
                  onChange={this.protocolChanged}
                >
                  <MenuItem value="http">http://</MenuItem>
                  <MenuItem value="https">https://</MenuItem>
                </Select>
                <TextField required id="hostname" label="Hostname" value={this.state.hostname || ""} onChange={this.hostnameChanged}  className="Hostname" />
                <TextField required id="port" type="number" label="Port" value={this.state.port} onChange={this.portChanged}  className="Port" />
              </Box>
              {
                this.state.error ?
                  <Typography color="error">
                    {this.state.error}
                  </Typography> : ""
              }
              <Box display="flex" flexWrap="nowrap" justifyContent="flex-end" className="Buttons">
                <Button color="primary" disabled={this.notFilledIn()} onClick={this.save}>Save</Button>
              </Box>
            </form>
          </Paper>
        </Box>

        <Snackbar open={this.state.success}
                  className='success-message'
                  autoHideDuration={6000}
                  message="Saved!"
                  onClose={this.closeSuccessMessage}
                  action={
                    <React.Fragment>
                      <IconButton size="small" aria-label="close" color="inherit" onClick={this.closeSuccessMessage}>
                        <CloseIcon fontSize="small" />
                      </IconButton>
                    </React.Fragment>
                  }
        />
      </div>
    )
  }
}

// export default Settings;
const mapStateToProps = state => {
  const { protocol, hostname, port } = state.server;
  return { protocol, hostname, port }
};
export default connect(
  mapStateToProps,
  { setServerProtocol, setServerHostname, setServerPort }
)(Settings);
