import { combineReducers } from 'redux';
import authentication from './authentication';
import server from './server';

export default combineReducers({ authentication, server });
