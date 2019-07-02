import { createAction } from 'redux-actions';
import { ADD_TAG, REMOVE_TAG } from '../constants';

export const addTag = createAction(ADD_TAG);
export const removeTag = createAction(REMOVE_TAG);