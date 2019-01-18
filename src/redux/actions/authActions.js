import * as actionTypes from './types';
import { dispatch } from 'rxjs/internal/observable/pairs';

export const createNewUser = user => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    console.log(user)
  }
}