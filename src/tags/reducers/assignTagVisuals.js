import _ from 'lodash';

export default function addTagVisual(state, action) {
  let newTagPanelVisuals = _.cloneDeep(state.tagPanelVisuals);
  if (action.tag !== '' && newTagPanelVisuals[action.tag]) {
    newTagPanelVisuals[action.tag] = action.visuals;
    state = Object.assign({}, state, {
      tagPanelVisuals: newTagPanelVisuals
    });
  }

  return state;
}