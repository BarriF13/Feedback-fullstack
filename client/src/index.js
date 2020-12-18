// REDUX primary location --This is the startup location

import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider} from 'react-redux';
import {createStore , applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk'; 


import App from './components/App';
import reducers from './reducers';

//Making action creator 


//all the data is in store -redux
const store = createStore( reducers, {}, applyMiddleware(reduxThunk));


ReactDom.render(
  //Provider component that makes the store accessible to every component in the app
  //provider tells to all her children if there is a update to store and available for all the comps
<Provider store={store}><App/></Provider>, 
document.querySelector('#root')
);