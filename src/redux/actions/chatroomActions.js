import * as actionTypes from '../actions/types';

export const createNewChatroom = (chatroom) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();

    firestore.add('chatrooms', {
      name: chatroom.name,
      description: chatroom.description,
      logo: chatroom.user.photoURL,
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
    const firestore = getFirestore();
    firestore.collection('chatrooms').get().then(data => {
      let chatrooms = [];
      data.forEach(doc => {
        chatrooms.push({id: doc.id, chatroom: doc.data()})
      });
      dispatch({
        type: actionTypes.GET_CHATROOMS,
        payload: {
          chatError: null,
          isLoading: false,
          chatrooms: chatrooms
        }
      });
    }).catch(err => {
      dispatch({
        type: actionTypes.GET_CHATROOMS_ERROR,
        payload: {
          chatError: err.message,
          isLoading: false,
          chatrooms: []
        }
      })
    })
  }
}

export const getChatroom = id => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    firestore.collection('chatrooms').doc(id).get().then(doc => {
      if (doc.exists) {
        const chatroom = {id: doc.id, chatroom: doc.data()};
        dispatch({
          type: actionTypes.GET_CHATROOM,
          payload: {
            currentChatroom: chatroom,
            isLoading: false,
            chatError: null
          }
        })
      } else {
        dispatch({
          type: actionTypes.GET_CHATROOM_ERROR,
          payload: {
            currentChatroom: null,
            isLoading: false,
            chatError: 'Chatroom does not exist'
          }
        })
      }
    }).catch(err => {
      dispatch({
        type: actionTypes.GET_CHATROOM_ERROR,
        payload: {
          currentChatroom: null,
          isLoading: false,
          chatError: err.message
        }
      })
    })
  }
}