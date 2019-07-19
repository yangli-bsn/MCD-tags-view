export default function addTag(state, action) {
  let newTags = [...state.selectedTags];
  let newTagPanelVisuals = {...state.tagPanelVisuals};
  let newTagPanelProps = {...state.tagPanelProps};
  if (!newTags.includes(action.payload)) {
    newTags.push(action.payload);
    newTagPanelVisuals[action.payload] = [
      'Error Indicator'
    ];
    newTagPanelProps[action.payload] = {
      tagName: action.payload,
      position: {
        x: 10, 
        y: 10
      },
      size: {
        width: 600, 
        height: 350
      }
    };

    state = Object.assign({}, state, {
      selectedTags: newTags,
      tagPanelVisuals: newTagPanelVisuals,
      tagPanelProps: newTagPanelProps
    });
  }

  return state;
}