import React, { Component } from 'react';

import QueuedInfo from "../QueuedInfo";
import StartedInfo from "../StartedInfo";

import './StartedDownloadItem.css';

class StartedDownloadItem extends Component {

  render() {
    return (
      <div className="StartedDownloadItem download-item">      
        <QueuedInfo item={this.props.item} />
        <StartedInfo item={this.props.item} />
      </div>
    )
  }
}

export default StartedDownloadItem;