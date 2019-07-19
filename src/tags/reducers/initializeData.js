export default function initializeData(state, action) {
  state = Object.assign({}, state, {
    selectedTags: action.payload.selectedTags,
    tagPanelVisuals: action.payload.tagPanelVisuals,
    tagPanelProps: action.payload.tagPanelProps
  });

  return state;
}