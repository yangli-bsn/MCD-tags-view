import { createAction } from 'redux-actions';
import { ADD_TAG, 
        REMOVE_TAG, 
        ADD_TAG_VISUAL, 
        REMOVE_TAG_VISUAL, 
        ASSIGN_TAG_VISUAL,
        ASSIGN_TAG_PANEL_PROPS,
        INITIALIZE_DATA } from '../constants';

export const addTag = createAction(ADD_TAG);
export const removeTag = createAction(REMOVE_TAG);

export function addTagVisual(tag, visual) {
  return { type: ADD_TAG_VISUAL, tag: tag, visual: visual };
}

export function removeTagVisual(tag, visual) {
  return { type: REMOVE_TAG_VISUAL, tag: tag, visual: visual };
}

export function assignTagVisuals(tag, visuals) {
  return { type: ASSIGN_TAG_VISUAL, tag: tag, visuals: visuals};
}

export function assignTagPanelProps(tag, props) {
  return { type: ASSIGN_TAG_PANEL_PROPS, tag: tag, props: props};
}

export const initializeData = createAction(INITIALIZE_DATA);