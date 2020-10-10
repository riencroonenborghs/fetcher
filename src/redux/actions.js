import { SET_JWT_DATA, SET_SERVER_DATA, SET_SERVER_PROTOCOL, SET_SERVER_HOSTNAME, SET_SERVER_PORT, SIGN_OUT } from "./actionTypes";

export const setJWTData = content => ({
  type: SET_JWT_DATA,
  payload: {
    token: content.token,
    expires: content.exp || content.expires
  }
});

export const setServerData = content => ({
  type: SET_SERVER_DATA,
  payload: {
    protocol: content.protocol,
    hostname: content.hostname,
    port: content.port
  }
});

export const setServerProtocol = content => ({
  type: SET_SERVER_PROTOCOL,
  payload: content.protocol
});

export const setServerHostname = content => ({
  type: SET_SERVER_HOSTNAME,
  payload: content.hostname
});

export const setServerPort = content => ({
  type: SET_SERVER_PORT,
  payload: content.port
});

export const signOut = () => ({
  type: SIGN_OUT
});