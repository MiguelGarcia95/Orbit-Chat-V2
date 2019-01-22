import * as actionTypes from '../actions/types';

export const createNewChannel = channel => {
  return (dispatch, getState, {getFirestore}) => {
    // structure
    // root/channels/chatroomId/channels/
    const firestore = getFirestore();
    // firestore.add(`channel/${channel.chatroom.id}/channels`, {
    //   name: channel.channelName,
    //   description: channel.channelDescription,
    //   createdByUsername: channel.user.displayName,
    //   createdByUid: channel.user.uid,
    //   createdDate: firestore.FieldValue.serverTimestamp()
    // })
    console.log(channel)
  }
}

export const createNewCategory = category => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    firestore.add(`category/${category.chatroom.id}/categories`, {
      name: category.categoryName,
      createdByUsername: category.user.displayName,
      createdByUid: category.user.uid,
      createdDate: firestore.FieldValue.serverTimestamp()
    }).then(() => {
      dispatch({
        type: actionTypes.CREATE_NEW_CATEGORY,
        payload: {channelError: null}
      })
    }).catch(err => {
      dispatch({
        type: actionTypes.CREATE_NEW_CATEGORY_ERROR,
        payload: {channelError: err.message}
      })
    })
  }
}

export const getChannels = chatId => {
  return (dispatch, getState, {getFirestore}) => {
    console.log(chatId)
  }
}

export const getCategories = chatId => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    firestore.collection(`category/${chatId}/categories`).get().then(data => {
      let categories = [];
      data.forEach(doc => {
        categories.push({id: doc.id, category: doc.data()})
      });
      dispatch({
        type: actionTypes.GET_CATEGORIES,
        payload: {
          channelError: null,
          categories: categories
        }
      })
    }).catch(err => {
      dispatch({
        type: actionTypes.GET_CATEGORIES_ERROR,
        payload: {
          channelError: err.message,
          categories: []
        }
      })
    })
  }
}