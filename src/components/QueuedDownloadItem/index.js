import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

import DateFormatter from "../../services/DateFormatter";
import './QueuedDownloadItem.css';

class QueuedDownloadItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="QueuedDownloadItem">        
        <Typography>
          Queued by {this.props.item.user.email} <br />
          Queued on {new DateFormatter().format(this.props.item.queued_at)}
        </Typography>
      </div>
    )
  }
}

export default QueuedDownloadItem;