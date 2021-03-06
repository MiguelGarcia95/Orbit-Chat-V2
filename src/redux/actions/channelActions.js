import * as actionTypes from '../actions/types';

export const createNewChannel = channel => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    firestore.add(`channel/${channel.chatroom.id}/channels`, {
      name: channel.channelName,
      categoryId: channel.category.id,
      description: channel.channelDescription,
      createdByUsername: channel.user.displayName,
      createdByUid: channel.user.uid,
      createdDate: firestore.FieldValue.serverTimestamp()
    }).then(() => {
      dispatch({
        type:actionTypes.CREATE_NEW_CHANNEL,
        payload: {
          channelError: null
        }        
      })
    }).catch(err => {
      dispatch({
        type:actionTypes.CREATE_NEW_CHANNEL_ERROR,
        payload: {
          channelError: err.message
        }
      })
    })
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

export const getChannel = channel => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.GET_CHANNEL,
      payload: {
        channelError: null,
        currentChannel: channel,
        isChannelLoading: true
      }
    })
  }
}

export const getChannels = chatId => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    firestore.collection(`channel/${chatId}/channels`).get().then(data => {
      let channels = [];
      data.forEach(doc => {
        channels.push({id: doc.id, channel: doc.data()})
      });
      dispatch({
        type: actionTypes.GET_CHANNELS,
        payload: {
          channelError: null,
          channels: channels
        }
      });
    }).catch(err => {
      dispatch({
        type: actionTypes.GET_CHANNELS_ERROR,
        payload: {
          channelError: err.message,
          channels: []
        }
      })
    })
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

export const getChannelComments = (channelId) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();

    firestore.collection(`comment/${channelId}/comments`).get().then(data => {
      let comments = [];
      data.forEach(doc => {
        comments.push({id: doc.id, comment: doc.data()})
      });
      dispatch({
        type: actionTypes.GET_CHANNEL_COMMENTS,
        payload: {
          channelError: null,
          comments: comments,
          isChannelLoading: false
        }
      })
    }).catch(err => {
      dispatch({
        type: actionTypes.GET_CHANNEL_COMMENTS_ERROR,
        payload: {
          channelError: err.message,
          comments: [],
          isChannelLoading: false
        }
      })
    })
  }
}

export const createChannelComment = comment => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();

    firestore.add(`comment/${comment.currentChannel.id}/comments`, {
      message: comment.message,
      username: comment.user.displayName,
      avatar: comment.user.photoURL,
      channelId: comment.currentChannel.id,
      chatroomId: comment.chatroom.id,
      createdDate: firestore.FieldValue.serverTimestamp()
    }).then(() => {
      dispatch({
        type: actionTypes.CREATE_NEW_CHANNEL,
        payload: {
          channelError: null
        }
      })
    }).catch(err => {
      dispatch({
        type: actionTypes.CREATE_NEW_CHANNEL_ERROR,
        payload: {
          channelError: err.message
        }
      })
    })
  }
}