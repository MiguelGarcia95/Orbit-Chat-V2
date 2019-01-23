import * as actionTypes from '../actions/types';

const initialState = {
  channels: [],
  categories: [],
  channelError: null
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
    default:
      return state;
  }
}

export default channelReducer;