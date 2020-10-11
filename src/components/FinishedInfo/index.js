import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import DoneIcon from '@material-ui/icons/Done';

import DateFormatter from "../../services/DateFormatter";
import './FinishedInfo.css';

class FinishedInfo extends Component {

  render() {
    return (
      <div className="FinishedInfo">        
        <Typography>
          <DoneIcon className="finished" /> Finish at {new DateFormatter().format(this.props.item.finished_at)}
        </Typography>
      </div>
    )
  }
}

export default FinishedInfo;