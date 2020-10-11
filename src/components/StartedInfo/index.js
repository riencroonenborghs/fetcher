import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import DateFormatter from "../../services/DateFormatter";
import './StartedInfo.css';

class StartedInfo extends Component {

  render() {
    return (
      <div className="StartedInfo">        
        <Typography>
          <ArrowDownwardIcon className="started" /> Started at {new DateFormatter().format(this.props.item.started_at)}
        </Typography>
      </div>
    )
  }
}

export default StartedInfo;