import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import QueueIcon from '@material-ui/icons/Queue';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import DateFormatter from "../../services/DateFormatter";
import './StartedDownloadItem.css';

class StartedDownloadItem extends Component {

  render() {
    return (
      <div className="StartedDownloadItem download-item">        
        <Typography>
          <QueueIcon className="queued" /> Queued by {this.props.item.user.email} <br />
          <QueueIcon className="queued" /> Queued at {new DateFormatter().format(this.props.item.queued_at)} <br />
          <ArrowDownwardIcon className="started" /> Started at {new DateFormatter().format(this.props.item.started_at)}
        </Typography>
      </div>
    )
  }
}

export default StartedDownloadItem;