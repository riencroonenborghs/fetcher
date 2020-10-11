import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import QueueIcon from '@material-ui/icons/Queue';

import DateFormatter from "../../services/DateFormatter";
import './QueuedInfo.css';

class QueuedInfo extends Component {

  render() {
    return (
      <div className="QueuedInfo">        
        <Typography>
          <QueueIcon className="queued" /> Queued by {this.props.item.user.email} <br />
          <QueueIcon className="queued"/> Queued at {new DateFormatter().format(this.props.item.queued_at)}
        </Typography>
      </div>
    )
  }
}

export default QueuedInfo;