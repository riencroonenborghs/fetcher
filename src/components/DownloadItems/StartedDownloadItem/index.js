import React, { Component } from 'react';

import QueuedInfo from "../../DownloadInfo/QueuedInfo";
import StartedInfo from "../../DownloadInfo/StartedInfo";

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