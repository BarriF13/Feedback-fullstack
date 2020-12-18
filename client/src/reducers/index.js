//by convention we need to call this index.js

import { combineReducers } from 'redux';
import authReducer from './authReducer';

export default combineReducers({
  //key here will represent key in store
  auth: authReducer
});