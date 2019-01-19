import * as actionTypes from '../actions/types';

const initialState = {
  currentUser: null,
  isLoading: true,
  authError: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_NEW_USER:
      return {
        ...state,
        authError: action.payload.authError
      }
    case actionTypes.CREATE_NEW_USER_ERROR:
      return {
        ...state,
        authError: action.payload.authError
      }
    case actionTypes.LOGIN:
      return {
        ...state
      }
    case actionTypes.LOGIN_ERROR:
      return {
        ...state
      }
    case actionTypes.SET_USER:
      return {
        ...state
      }
    case actionTypes.UNSET_USER:
      return {
        ...state
      }
    case actionTypes.CLEAR_USER:
      return {
        ...state
      }
    default:
      return state
  };
};

export default authReducer;