import * as actionTypes from '../actions/types';

import md5 from 'md5';

export const createNewUser = user => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    // console.log('firebase: ', firebase)
    // console.log('firestore: ', firestore)

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

          }
        })
      }).catch(err => {
        dispatch({
          type: actionTypes.CREATE_NEW_USER_ERROR,
          payload: {

          }
        })
      })
  }
}