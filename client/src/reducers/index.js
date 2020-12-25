//by convention we need to call this index.js

import { combineReducers } from 'redux';
import { reducer as reduxForm} from 'redux-form'; //{reducer} is name of the fn that redux-form passed so we change the name 
import authReducer from './authReducer';

export default combineReducers({
  //key here will represent key in store
  auth: authReducer,
  form: reduxForm
});