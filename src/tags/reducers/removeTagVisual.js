import _ from 'lodash';

export default function addTagVisual(state, action) {
  let newTagPanelVisuals = _.cloneDeep(state.tagPanelVisuals);

  if (action.tag !== '' && 
      newTagPanelVisuals[action.tag].includes(action.visual)) {

    let newTagPanelVisualsArr = _.cloneDeep(newTagPanelVisuals[action.tag]);
    let index = newTagPanelVisualsArr.findIndex((t) => {return t === action.visual});
    newTagPanelVisualsArr.splice(index, 1);

    newTagPanelVisuals[action.tag] = newTagPanelVisualsArr;

    state = Object.assign({}, state, {
      tagPanelVisuals: newTagPanelVisuals
    });
  }

  return state;
}