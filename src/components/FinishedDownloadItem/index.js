import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import QueueIcon from '@material-ui/icons/Queue';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import DoneIcon from '@material-ui/icons/Done';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import DateFormatter from "../../services/DateFormatter";
import './FinishedDownloadItem.css';

class FinishedDownloadItem extends Component {

  render() {
    return (
      <div className="FinishedDownloadItem">        
        <Typography>
          <QueueIcon className="queued" /> Queued by {this.props.item.user.email} <br />
          <QueueIcon className="queued" /> Queued at {new DateFormatter().format(this.props.item.queued_at)} <br />
          <ArrowDownwardIcon className="started" /> Started at {new DateFormatter().format(this.props.item.started_at)} <br />
          <DoneIcon className="finished" /> Finish at {new DateFormatter().format(this.props.item.finished_at)}
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

export default FinishedDownloadItem;