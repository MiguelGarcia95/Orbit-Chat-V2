import * as actionTypes from '../actions/types';

const initialState = {
  currentUser: null,
  isLoading: true,
  authError: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  };
};

export default authReducer;