import { FETCH_USER } from '../actions/types';
 // eslint-disable-next-line
export default function (state = null, action) {

  console.log(action);
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false; //to get false if we our logout
    default:
      return state;
  }

}