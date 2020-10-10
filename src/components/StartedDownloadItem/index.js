import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

import './StartedDownloadItem.css';

class StartedDownloadItem extends Component {

  render() {
    return (
      <div className="StartedDownloadItem">        
        <Typography>
          Queued by {this.props.item.user.email}
          <br />
          Started on {this.props.item.created_at}
        </Typography>
      </div>
    )
  }
}

export default StartedDownloadItem;