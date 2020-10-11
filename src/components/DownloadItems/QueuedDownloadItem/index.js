import React, { Component } from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import QueuedInfo from "../../DownloadInfo/QueuedInfo";
import './QueuedDownloadItem.css';

class QueuedDownloadItem extends Component {

  render() {
    return (
      <div className="QueuedDownloadItem download-item">        
        <QueuedInfo item={this.props.item} />
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