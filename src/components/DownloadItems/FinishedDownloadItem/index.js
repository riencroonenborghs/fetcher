import React, { Component } from 'react';

import QueuedInfo from "../../DownloadInfo/QueuedInfo";
import StartedInfo from "../../DownloadInfo/StartedInfo";
import FinishedInfo from "../../DownloadInfo/FinishedInfo";
import DeleteAndRequeue from "../../DeleteAndRequeue";

import './FinishedDownloadItem.css';

class FinishedDownloadItem extends Component {

  render() {
    return (
      <div className="FinishedDownloadItem download-item">
        <QueuedInfo item={this.props.item} />
        <StartedInfo item={this.props.item} />
        <FinishedInfo item={this.props.item} />
        <DeleteAndRequeue item={this.props.item} />
      </div>
    )
  }
}

export default FinishedDownloadItem;