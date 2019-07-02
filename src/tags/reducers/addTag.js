export default function addTag(state, action) {
  let newTags = [...state.selectedTags];
  if (!newTags.includes(action.payload)) {
    newTags.push(action.payload);
    state = Object.assign({}, state, {
      selectedTags: newTags
    });
  }

  return state;
}