import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import CancelIcon from '@material-ui/icons/Cancel';

import QueuedInfo from "../../DownloadInfo/QueuedInfo";
import StartedInfo from "../../DownloadInfo/StartedInfo";
import FinishedInfo from "../../DownloadInfo/FinishedInfo";
import DeleteAndRequeue from "../../DeleteAndRequeue";

import DateFormatter from "../../../services/DateFormatter";
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
        <DeleteAndRequeue item={this.props.item} />
      </div>
    )
  }
}

export default CancelledDownloadItem;