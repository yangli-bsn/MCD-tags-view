import React, { Component } from 'react';
import _ from 'lodash';

import store from 'store';
import { connect } from 'react-redux';
import { assignTagPanelProps } from 'tags/actions';

import CardView from 'components/CardView';

import overlapCheck from 'utils/overlapCheck';
import controllerByTag from 'utils/convertControllerData';

import './MainContent.css';

class MainContent extends Component {
  constructor(props){
    super(props);

    this.onResize = this.onResize.bind(this);
    this.onDragStop = this.onDragStop.bind(this);
  }

  onResize(e, ref, position, tag) {
    //console.log(ref);
    let newSelecetdTagsProps = _.cloneDeep(store.getState().tagPanelProps);
    let newProp = _.cloneDeep(newSelecetdTagsProps[tag]);
    newProp.size.width = ref.offsetWidth;
    newProp.size.height = ref.offsetHeight;
    newProp.position = position;
    //newSelecetdTagsProps[tag] = newProp;
    //console.log(overlapCheck(newSelecetdTagsProps, newProp));
    //if (!overlapCheck(newSelecetdTagsProps, newProp)) {
    store.dispatch(assignTagPanelProps(tag, newProp));
    //this.setState({selectedTagsProps: newSelecetdTagsProps});
    //}
  }

  onDragStop(e, data, tag) {
    let newSelecetdTagsProps = _.cloneDeep(store.getState().tagPanelProps);
    let newProp = _.cloneDeep(newSelecetdTagsProps[tag]);
    newProp.position.x = data.x;
    newProp.position.y = data.y;
    //newSelecetdTagsProps[tag] = newProp;
    //console.log(overlapCheck(newSelecetdTagsProps, newProp));
    if (!overlapCheck(newSelecetdTagsProps, newProp)) {
      store.dispatch(assignTagPanelProps(tag, newProp));
      //this.setState({selectedTagsProps: newSelecetdTagsProps});
    }
  }

  render() {
    let { selectedTags, tagPanelVisuals, tagPanelProps } = store.getState();
    return (
      <div className="main-content">
        <div className="container">
          <div className="grid-row">
          {
            selectedTags.map((tag, index) => {
              return (
                <CardView key={index}
                  tag={tag}
                  position={tagPanelProps[tag].position}
                  size={tagPanelProps[tag].size}
                  onResize={this.onResize}
                  onDragStop={this.onDragStop}
                  data={controllerByTag[tag]}
                  tagPanelVisuals={tagPanelVisuals[tag]} />
              );
            })
          }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedTags: state.selectedTags,
    tagPanelVisuals: state.tagPanelVisuals,
    tagPanelProps: state.tagPanelProps
  }
};

export default connect(mapStateToProps)(MainContent);
