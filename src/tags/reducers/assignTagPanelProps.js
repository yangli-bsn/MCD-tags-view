import _ from 'lodash';

export default function addTagPanelProps(state, action) {
  let newTagPanelProps = _.cloneDeep(state.tagPanelProps);
  if (action.tag !== '' && newTagPanelProps[action.tag]) {
    newTagPanelProps[action.tag] = action.props;
    state = Object.assign({}, state, {
      tagPanelProps: newTagPanelProps
    });
  }

  return state;
}