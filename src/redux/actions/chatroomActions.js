import * as actionTypes from '../actions/types';

export const createNewChatroom = (chatroom) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    console.log(chatroom);
  }
}