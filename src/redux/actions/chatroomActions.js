import * as actionTypes from '../actions/types';

export const createNewChatroom = (chatroom) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    // console.log(chatroom);
  }
}