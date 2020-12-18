// REDUX primary location --This is the startup location

import React from 'react';
import ReactDom from 'react-dom';
import { Provider} from 'react-redux';
import {createStore , applyMiddleware} from 'redux';

import App from './components/App';
import reducers from './reducers';

//all the data is in store -redux
const store = createStore( reducers, {}, applyMiddleware());


ReactDom.render(
  //Provider component that makes the store accessible to every component in the app
  //provider tells to all her children if there is a update to store and available for all the comps
<Provider store={store}><App/></Provider>, 
document.querySelector('#root')
);