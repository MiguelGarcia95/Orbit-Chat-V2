import * as actionTypes from '../actions/types';

const initialState = {

}

export const channelReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_NEW_CHANNEL:
      return {
        ...state
      }
    default:
      return state;
  }
}

export default channelReducer;