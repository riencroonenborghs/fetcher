import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import ErrorIcon from '@material-ui/icons/Error';

import QueuedInfo from "../QueuedInfo";
import StartedInfo from "../StartedInfo";
import FinishedInfo from "../FinishedInfo";
import DeleteAndRequeue from "../DeleteAndRequeue";

import './ErrorDownloadItem.css';

class ErrorDownloadItem extends Component {

  render() {
    return (
      <div className="ErrorDownloadItem download-item">
        <QueuedInfo item={this.props.item} />
        <StartedInfo item={this.props.item} />
        <FinishedInfo item={this.props.item} />
        <Typography>
          <div className="error">
            <ErrorIcon />
            {this.props.item.error}
          </div>
        </Typography>
        <DeleteAndRequeue item={this.props.item} />
      </div>
    )
  }
}

export default ErrorDownloadItem;