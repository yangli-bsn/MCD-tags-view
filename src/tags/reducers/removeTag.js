export default function removeTag(state, action) {
  let newTags = [...state.selectedTags];
  let newTagPanelVisuals = {...state.tagPanelVisuals};
  let index = newTags.findIndex((t) => {return t === action.payload});
  newTags.splice(index, 1);
  delete newTagPanelVisuals[action.payload];
  state = Object.assign({}, state, {
    selectedTags: newTags,
    tagPanelVisuals: newTagPanelVisuals
  });

  return state;
}