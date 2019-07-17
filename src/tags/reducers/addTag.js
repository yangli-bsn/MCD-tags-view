export default function addTag(state, action) {
  let newTags = [...state.selectedTags];
  let newTagPanelVisuals = {...state.tagPanelVisuals};
  if (!newTags.includes(action.payload)) {
    newTags.push(action.payload);
    newTagPanelVisuals[action.payload] = [
      'Error Indicator'
    ];
    state = Object.assign({}, state, {
      selectedTags: newTags,
      tagPanelVisuals: newTagPanelVisuals
    });
  }

  return state;
}