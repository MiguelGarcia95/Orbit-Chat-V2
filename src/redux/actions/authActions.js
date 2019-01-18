import * as actionTypes from './types';
import { dispatch } from 'rxjs/internal/observable/pairs';

export const createNewUser = user => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    console.log('firebase: ', firebase)
    console.log('firestore: ', firestore)
  }
}