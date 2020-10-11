import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import QueueIcon from '@material-ui/icons/Queue';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import DateFormatter from "../../services/DateFormatter";
import './QueuedDownloadItem.css';

class QueuedDownloadItem extends Component {

  render() {
    return (
      <div className="QueuedDownloadItem download-item">        
        <Typography>
          <QueueIcon className="queued" /> Queued by {this.props.item.user.email} <br />
          <QueueIcon className="queued"/> Queued at {new DateFormatter().format(this.props.item.queued_at)}
        </Typography>
        <Box display="flex" flexWrap="nowrap" justifyContent="flex-end">
          <Button
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </Box>
      </div>
    )
  }
}

export default QueuedDownloadItem;