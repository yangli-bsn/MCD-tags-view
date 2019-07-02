export default function removeTag(state, action) {
  let newTags = [...state.selectedTags];
  let index = newTags.findIndex((t) => {return t === action.payload});
  newTags.splice(index, 1);
  state = Object.assign({}, state, {
    selectedTags: newTags
  });

  return state;
}