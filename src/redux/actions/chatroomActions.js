import * as actionTypes from '../actions/types';

export const createNewChatroom = (chatroom) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();

    firestore.add('chatroom', {
      name: chatroom.name,
      description: chatroom.description,
      createdByUsername: chatroom.user.displayName,
      createdByUid: chatroom.user.uid,
      createdDate: firestore.FieldValue.serverTimestamp()
    }).then(createdChatroom => {
      dispatch({
        type: actionTypes.CREATE_NEW_CHATROOM,
        payload: {
          chatError: null,
          isLoading: false,
          currentChatroom: createdChatroom._key.path.segments[1]
        }
      })
    }).catch(err => {
      dispatch({
        type: actionTypes.CREATE_NEW_CHATROOM_ERROR,
        payload: {
          chatError: err.message,
          isLoading: false,
          currentChatroom: null
        }
      })
    });
  }
}

export const getChatrooms = () => {
  return (dispatch, getState, {getFirestore}) => {
    
  }
}

export const getChatroom = id => {
  return (dispatch, getState, {getFirestore}) => {
    
  }
}