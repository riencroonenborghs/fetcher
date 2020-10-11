import React, { Component } from 'react';
import QueueIcon from '@material-ui/icons/Queue';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import './DeleteAndRequeue.css';

class DeleteAndRequeue extends Component {

  render() {
    return (
      <div className="DeleteAndRequeue">
        <Box display="flex" flexWrap="nowrap" justifyContent="flex-end">
          <Button
            variant="contained"
            color="secondary"
            className="delete-button"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
          <Button
            variant="contained"
            color="primary"
            startIcon={<QueueIcon />}
          >
            Re-Queue
          </Button>
        </Box>
      </div>
    )
  }
}

export default DeleteAndRequeue;