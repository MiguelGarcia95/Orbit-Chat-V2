import * as actionTypes from '../actions/types';
import md5 from 'md5';

export const createNewUser = user => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase.auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(createdUser => {
        //Update Firebase User
        createdUser.user.updateProfile({
          displayName: user.username,
          photoURL: `http://gravatar.com/avatar/${md5(user.email)}?d=identicon`
        })

        //Create Firestore user
        firestore.add('users', {
          username: user.username,
          avatar: `http://gravatar.com/avatar/${md5(user.email)}?d=identicon`,
          uid: createdUser.user.uid,
          emai: user.email
        });
      }).then(() => {
        dispatch({
          type: actionTypes.CREATE_NEW_USER,
          payload: {
            authError: null
          }
        })
      }).catch(err => {
        dispatch({
          type: actionTypes.CREATE_NEW_USER_ERROR,
          payload: {
            authError: err.message
          }
        })
      })
  }
}

export const login = user => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {

  }
}

export const setUser = user => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SET_USER,
      payload: {
        currentUser: user,
        isLoading: false
      }
    })
  }
}

export const clearUser = () => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {

  }
}

export const unsetUser = () => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {

  }
}