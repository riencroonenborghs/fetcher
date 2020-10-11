import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import QueueIcon from '@material-ui/icons/Queue';
import CancelIcon from '@material-ui/icons/Cancel';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import QueuedInfo from "../QueuedInfo";
import StartedInfo from "../StartedInfo";
import FinishedInfo from "../FinishedInfo";


import DateFormatter from "../../services/DateFormatter";
import './CancelledDownloadItem.css';

class CancelledDownloadItem extends Component {

  render() {
    return (
      <div className="CancelledDownloadItem download-item">
        <QueuedInfo item={this.props.item} />
        <StartedInfo item={this.props.item} />
        <FinishedInfo item={this.props.item} />
        <Typography>
          <CancelIcon className="cancelled" /> Finish at {new DateFormatter().format(this.props.item.finished_at)}
        </Typography>

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

export default CancelledDownloadItem;