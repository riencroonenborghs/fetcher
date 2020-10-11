import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import QueueIcon from '@material-ui/icons/Queue';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import DoneIcon from '@material-ui/icons/Done';
import ErrorIcon from '@material-ui/icons/Error';
import CancelIcon from '@material-ui/icons/Cancel';
import Badge from '@material-ui/core/Badge';

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
    this.tabLabel = this.tabLabel.bind(this);
  }

  load() {
    const service = new ApiDownloadsService(this.props.protocol, this.props.hostname, this.props.port, this.props.token);
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

  tabLabel(type, label) {
    const count = this.filteredList(type).length;
    return <Badge badgeContent={count} color="primary">{label}</Badge>;
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
          <Tab label={this.tabLabel('queued', 'Queued')} icon={<QueueIcon className='queued' />} />
          <Tab label={this.tabLabel('started', 'Started')} icon={<ArrowDownwardIcon className='started' />}/>
          <Tab label={this.tabLabel('finished', 'Finished')} icon={<DoneIcon className='finished' />} />
          <Tab label={this.tabLabel('error', 'Error')} icon={<ErrorIcon className='error' />} />
          <Tab label={this.tabLabel('cancelled', 'Cancelled')} icon={<CancelIcon className='cancelled' />} />
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
  const { protocol, hostname, port } = state.server;
  return { token, protocol, hostname, port }
};
export default connect(
  mapStateToProps
)(Downloads);

