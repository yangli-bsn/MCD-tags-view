import _ from 'lodash';

export default function addTagVisual(state, action) {
  let newTagPanelVisuals = _.cloneDeep(state.tagPanelVisuals);
  if (action.tag !== '' && 
      !newTagPanelVisuals[action.tag].includes(action.visual)) {
    newTagPanelVisuals[action.tag].push(action.visual);
    state = Object.assign({}, state, {
      tagPanelVisuals: newTagPanelVisuals
    });
  }

  return state;
}