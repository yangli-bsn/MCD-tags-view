import React, { Component } from 'react';

import store from 'store';
import { connect } from 'react-redux';

import CardView from 'components/CardView';

import './MainContent.css';

class MainContent extends Component {
  render() {
    let { selectedTags } = store.getState();
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
                tag={tag}/>
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
