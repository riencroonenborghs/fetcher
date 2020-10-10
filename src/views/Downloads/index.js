import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import QueueIcon from '@material-ui/icons/Queue';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import DoneIcon from '@material-ui/icons/Done';
import ErrorIcon from '@material-ui/icons/Error';
import CancelIcon from '@material-ui/icons/Cancel';

import './Downloads.css';
import DownloadList from '../../components/DownloadList';
import ApiDownloadsService from '../../services/api/ApiDownloadsService';

class Downloads extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      list: []
    };
    this.downloadTypes = ['queued', 'started', 'finished', 'error', 'cancelled'];
    this.tabChanged = this.tabChanged.bind(this);
  }

  load() {
    const service = new ApiDownloadsService(this.props.token);
    service.get().then(
      (list) => this.setState({ list: list })
    )
  }

  componentDidMount() {
    this.load();
  }

  tabChanged(event, value) {
    this.setState({ value: value });
  }

  filteredList(type) {
    return this.state.list.filter((item) => item.status === type)
  }

  render() {
    return (
      <div className="Downloads">
        <Tabs
          onChange={this.tabChanged}
          value={this.state.value}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Queued" icon={<QueueIcon />} />
          <Tab label="Started" icon={<ArrowDownwardIcon />}/>
          <Tab label="Finished" icon={<DoneIcon />} />
          <Tab label="Failed" icon={<ErrorIcon />} />
          <Tab label="Cancelled" icon={<CancelIcon />} />
        </Tabs>
        {
          this.downloadTypes.map((item, index) => {
            return (
              <DownloadList key={index} show={this.state.value === index} type={item} list={this.filteredList(item)} />
            )
          })
        }
      </div>
    )
  }
}

// export default Downloads;
const mapStateToProps = state => {
  const { token } = state.authentication;
  return { token }
};
export default connect(
  mapStateToProps
)(Downloads);

