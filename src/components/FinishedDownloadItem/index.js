import React, { Component } from 'react';
import QueueIcon from '@material-ui/icons/Queue';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import QueuedInfo from "../QueuedInfo";
import StartedInfo from "../StartedInfo";
import FinishedInfo from "../FinishedInfo";

import './FinishedDownloadItem.css';

class FinishedDownloadItem extends Component {

  render() {
    return (
      <div className="FinishedDownloadItem download-item">
        <QueuedInfo item={this.props.item} />
        <StartedInfo item={this.props.item} />
        <FinishedInfo item={this.props.item} />

        <Box display="flex" flexWrap="nowrap" justifyContent="flex-end">
          <Button
            variant="contained"
            color="secondary"
            className="delete-button"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
          <Button
            variant="contained"
            color="primary"
            startIcon={<QueueIcon />}
          >
            Re-Queue
          </Button>
        </Box>
      </div>
    )
  }
}

export default FinishedDownloadItem;