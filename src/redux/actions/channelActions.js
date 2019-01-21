import * as actionTypes from '../actions/types';
import { dispatch } from 'rxjs/internal/observable/range';

export const createNewChannel = channel => {
  return (dispatch, getState, {getFirestore}) => {
    // structure
    // root/channels/chatroomId/channelId/Channel
    console.log(channel)
  }
}

export const getChannels = chatId => {
  return (dispatch, getState, {getFirestore}) => {
    console.log(chatId)
  }
}