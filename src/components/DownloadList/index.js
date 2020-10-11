import React, { Component } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import QueuedDownloadItem from '../DownloadItems/QueuedDownloadItem';
import StartedDownloadItem from '../DownloadItems/StartedDownloadItem';
import FinishedDownloadItem from '../DownloadItems/FinishedDownloadItem';
import ErrorDownloadItem from '../DownloadItems/ErrorDownloadItem';
import CancelledDownloadItem from '../DownloadItems/CancelledDownloadItem';
import './DownloadList.css';

class DownloadList extends Component {

  constructor(props) {
    super(props)
    this.renderItem = this.renderItem.bind(this);
  }

  renderItem(item) {
    switch(item.status) {
      case 'queued':
        return <QueuedDownloadItem item={item} />
      case 'started':
        return <StartedDownloadItem item={item} />
      case 'finished':
        return <FinishedDownloadItem item={item} />
      case 'error':
        return <ErrorDownloadItem item={item} />
      case 'cancelled':
        return <CancelledDownloadItem item={item} />
      default:
        return <QueuedDownloadItem item={item} />
    }
  }

  render() {
    if(!this.props.show) { return ""; }
    return (
      <div className="DownloadList">
        {
          this.props.list.map((item, index) => {
            return (
              <Accordion key={index}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography>{item.url}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {this.renderItem(item)}
                </AccordionDetails>
              </Accordion>
            );
          })
        }
      </div>
    )
  }
}

export default DownloadList;