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
    default:
      return state
  };
};

export default authReducer;