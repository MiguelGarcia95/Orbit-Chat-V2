import * as actionTypes from '../actions/types';

const initialState = {
  currentChatroom: null,
  currentChatroomId: '',
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
        currentChatroomId: action.payload.currentChatroomId
      }
    case actionTypes.CREATE_NEW_CHATROOM_ERROR: 
      return {
        ...state,
        chatError: action.payload.chatError,
        isLoading: action.payload.isLoading,
        currentChatroomId: action.payload.currentChatroomId
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
    case actionTypes.GET_CHATROOM: 
      return {
        ...state,
        currentChatroom: action.payload.currentChatroom,
        isLoading: action.payload.isLoading,
        chatError: action.payload.chatError
      }
    case actionTypes.GET_CHATROOM_ERROR: 
      return {
        ...state,
        currentChatroom: action.payload.currentChatroom,
        isLoading: action.payload.isLoading,
        chatError: action.payload.chatError
      }
    default:
      return state
  }
}

export default chatroomReducer;