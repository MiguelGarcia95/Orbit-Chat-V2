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
        ...state,
        chatError: action.payload.chatError,
        isLoading: action.payload.isLoading,
        currentChatroom: action.payload.currentChatroom
      }
    case actionTypes.CREATE_NEW_CHATROOM_ERROR: 
      return {
        ...state,
        chatError: action.payload.chatError,
        isLoading: action.payload.isLoading,
        currentChatroom: action.payload.currentChatroom
      }
    case actionTypes.GET_CHATROOMS: 
      return {
        ...state,
        chatError: action.payload.chatError,
        isLoading: action.payload.isLoading,
        chatrooms: action.payload.chatrooms
      }
    case actionTypes.GET_CHATROOMS_ERROR: 
      return {
        ...state,
        chatError: action.payload.chatError,
        isLoading: action.payload.isLoading,
        chatrooms: action.payload.chatrooms
      }
    default:
      return state
  }
}

export default chatroomReducer;