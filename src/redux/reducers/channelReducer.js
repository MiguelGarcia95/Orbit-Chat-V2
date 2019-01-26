import * as actionTypes from '../actions/types';

const initialState = {
  channels: [],
  categories: [],
  channelError: null,
  currentChannel: null,
  isChannelLoading: true
}

export const channelReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_NEW_CATEGORY:
      return {
        ...state,
        channelError: action.payload.channelError
      }
    case actionTypes.CREATE_NEW_CATEGORY_ERROR:
      return {
        ...state,
        channelError: action.payload.channelError
      }
    case actionTypes.GET_CATEGORIES:
      return {
        ...state,
        channelError: action.payload.channelError,
        categories: action.payload.categories
      }
    case actionTypes.GET_CATEGORIES_ERROR:
      return {
        ...state,
        channelError: action.payload.channelError,
        categories: action.payload.categories
      }
    case actionTypes.GET_CHANNELS:
      return {
        ...state,
        channelError: action.payload.channelError,
        channels: action.payload.channels
      }
    case actionTypes.GET_CHANNELS_ERROR:
      return {
        ...state,
        channelError: action.payload.channelError,
        channels: action.payload.channels
      }
    case actionTypes.GET_CHANNEL:
      return {
        ...state,
        channelError: action.payload.channelError,
        currentChannel: action.payload.currentChannel,
        isChannelLoading: action.payload.isChannelLoading
      }
    case actionTypes.GET_CHANNEL_COMMENTS:
      return {
        ...state,
        channelError: action.payload.channelError,
        comments: action.payload.comments,
        isChannelLoading: action.payload.isChannelLoading
      }
    case actionTypes.GET_CHANNEL_COMMENTS_ERROR:
      return {
        ...state,
        channelError: action.payload.channelError,
        comments: action.payload.comments,
        isChannelLoading: action.payload.isChannelLoading
      }
    default:
      return state;
  }
}

export default channelReducer;