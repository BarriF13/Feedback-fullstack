import{FETCH_SURVEYS  }from '../actions/types';

// eslint-disable-next-line
export default function (state = [] , action) {

  // console.log(action);
   switch (action.type) {
     case FETCH_SURVEYS:
       return action.payload ; //to get false if we our logout
     default:
       return state;
   }
 
 }