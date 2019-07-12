import React, { Component } from 'react';
import _ from 'lodash';

import store from 'store';
import { connect } from 'react-redux';

import controllerData from 'data/ControllerData';
import allTags from 'data/Tags';

import CardView from 'components/CardView';

import overlapCheck from 'util/overlapCheck';

import './MainContent.css';

class MainContent extends Component {
  constructor(props){
    super(props);

    this.state = {
      selectedTagsProps: {}
    }

    this.controllerByTag = {};
    allTags.forEach((tag, index) => {
      // Initiate ControllerByTag
      this.controllerByTag[tag] = [];
      controllerData.forEach((controller, index) => {
        if (controller.tags.includes(tag)) {
          this.controllerByTag[tag].push(controller);
        }
      });
    });

    this.onResize = this.onResize.bind(this);
    this.onDragStop = this.onDragStop.bind(this);
  }

  componentDidMount() {

  }

  componentWillUpdate(prevProps, prevStates) {
    let { selectedTags } = store.getState();

    let { selectedTagsProps } = this.state;

    // Initiate new tag props
    selectedTags.forEach((tag, index) => {
      // Initiate props
      if (!selectedTagsProps[tag]) {
        selectedTagsProps[tag] = {
          tagName: tag,
          position: {
            x: 10, 
            y: 10
          },
          size: {
            width: 600, 
            height: 350
          }
        };
      }
    });

    // Delete tags when it gets deleted
    Object.keys(selectedTagsProps).forEach((tag, index) => {
      if (!selectedTags.includes(tag)) {
        delete selectedTagsProps[tag];
      }
    });
  }

  onResize(e, ref, position, tag) {
    console.log(ref);
    let newSelecetdTagsProps = _.cloneDeep(this.state.selectedTagsProps);
    let newProp = _.cloneDeep(newSelecetdTagsProps[tag]);
    newProp.size.width = ref.offsetWidth;
    newProp.size.height = ref.offsetHeight;
    newProp.position = position;
    newSelecetdTagsProps[tag] = newProp;
    //console.log(overlapCheck(newSelecetdTagsProps, newProp));
    if (!overlapCheck(newSelecetdTagsProps, newProp)) {
      this.setState({selectedTagsProps: newSelecetdTagsProps});
    }
  }

  onDragStop(e, data, tag) {
    let newSelecetdTagsProps = _.cloneDeep(this.state.selectedTagsProps);
    let newProp = _.cloneDeep(newSelecetdTagsProps[tag]);
    newProp.position.x = data.x;
    newProp.position.y = data.y;
    newSelecetdTagsProps[tag] = newProp;
    //console.log(overlapCheck(newSelecetdTagsProps, newProp));
    if (!overlapCheck(newSelecetdTagsProps, newProp)) {
      this.setState({selectedTagsProps: newSelecetdTagsProps});
    }
  }

  render() {
    let { selectedTags } = store.getState();
    let { selectedTagsProps } = this.state;
    return (
      <div className="main-content">
        {
          selectedTags.map((tag, index) => {
            let defaultOptions = {
              x: 0,
              y: 0,
              width: 320,
              height: 200,
            };
            return (
              <CardView key={index}
                defaultOptions={defaultOptions}
                tag={tag}
                position={selectedTagsProps[tag].position}
                size={selectedTagsProps[tag].size}
                onResize={this.onResize}
                onDragStop={this.onDragStop}
                data={this.controllerByTag[tag]} />
            );
          })
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedTags: state.selectedTags
  }
};

export default connect(mapStateToProps)(MainContent);
