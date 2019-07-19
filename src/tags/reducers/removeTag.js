export default function removeTag(state, action) {
  let newTags = [...state.selectedTags];
  let newTagPanelVisuals = {...state.tagPanelVisuals};
  let newTagPanelProps = {...state.tagPanelProps};
  let index = newTags.findIndex((t) => {return t === action.payload});
  newTags.splice(index, 1);
  delete newTagPanelVisuals[action.payload];
  delete newTagPanelProps[action.payload];
  state = Object.assign({}, state, {
    selectedTags: newTags,
    tagPanelVisuals: newTagPanelVisuals,
    tagPanelProps: newTagPanelProps
  });

  return state;
}