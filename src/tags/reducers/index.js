import { ADD_TAG, REMOVE_TAG, ADD_TAG_VISUAL, REMOVE_TAG_VISUAL, ASSIGN_TAG_VISUAL } from '../constants';

import addTag from './addTag';
import removeTag from './removeTag';
import addTagVisual from './addTagVisual';
import removeTagVisual from './removeTagVisual';
import assignTagVisuals from './assignTagVisuals';

const initialState = {
  selectedTags: [],
  tagPanelVisuals: {}
};

export default function tagsReducer(state: State = initialState, action: Object) {

  switch (action.type) {
    case ADD_TAG: {
      return addTag(state, action);
    }
    case REMOVE_TAG: {
      return removeTag(state, action);
    }
    case ADD_TAG_VISUAL: {
      return addTagVisual(state, action);
    }
    case REMOVE_TAG_VISUAL: {
      return removeTagVisual(state, action);
    }
    case ASSIGN_TAG_VISUAL: {
      return assignTagVisuals(state, action);
    }
    default: {
      return state;
    }
  }
}
