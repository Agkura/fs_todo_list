import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/error_actions';

const errorReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ERRORS:
    debugger;
      return state.concat(action.error);
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
}

export default errorReducer;
