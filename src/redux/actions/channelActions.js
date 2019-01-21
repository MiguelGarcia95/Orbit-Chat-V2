import * as actionTypes from '../actions/types';

export const createNewChannel = channel => {
  return (dispatch, getState, {getFirestore}) => {
    // structure
    // root/channels/chatroomId/channelId/Channel
    console.log(channel)
  }
}

export const createNewCategory = category => {
  return (dispatch, getState, {getFirestore}) => {
     // structure
    //root/category/chatroomId/categoryId/category
    console.log(category)
  }
}

export const getChannels = chatId => {
  return (dispatch, getState, {getFirestore}) => {
    console.log(chatId)
  }
}