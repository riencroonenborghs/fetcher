import React, { Component } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './DownloadList.css';

class DownloadList extends Component {

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
                  <Typography>
                    {item.created_at}
                  </Typography>
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