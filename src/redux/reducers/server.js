import { SET_SERVER_DATA, SET_SERVER_PROTOCOL, SET_SERVER_HOSTNAME, SET_SERVER_PORT } from '../actionTypes';

const initialState = {
  protocol: null,
  hostname: null,
  port: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SERVER_DATA: {
      const { protocol, hostname, port } = action.payload;
      return {
        ...state,
        protocol: protocol,
        hostname: hostname,
        port: port
      };
    }
    case SET_SERVER_PROTOCOL: {
      const protocol = action.payload;
      return {
        ...state,
        protocol: protocol
      };
    }
    case SET_SERVER_HOSTNAME: {
      const hostname = action.payload;
      return {
        ...state,
        hostname: hostname
      };
    }
    case SET_SERVER_PORT: {
      const port = action.payload;
      return {
        ...state,
        port: port
      };
    }
    default:
      return state;
  }
}
