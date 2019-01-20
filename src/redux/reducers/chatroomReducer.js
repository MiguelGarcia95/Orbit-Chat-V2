import * as actionTypes from '../actions/types';

const initialState = {
  currentChatroom: null,
  isloading: true,
  chatError: null,
  chatrooms: []
}

const chatroomReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.CREATE_NEW_CHATROOM: 
      return {
        
      }
    default:
      return state
  }
}

export default chatroomReducer;