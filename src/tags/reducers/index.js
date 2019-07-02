import { ADD_TAG, REMOVE_TAG } from '../constants';

import addTag from './addTag';
import removeTag from './removeTag';

const initialState = {
  selectedTags: []
};

export default function tagsReducer(state: State = initialState, action: Object) {

  switch (action.type) {
    case ADD_TAG: {
      return addTag(state, action);
    }
    case REMOVE_TAG: {
      return removeTag(state, action);
    }
    default: {
      return state;
    }
  }
}
