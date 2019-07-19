import React, { Component } from 'react';

import store from 'store';

import getDashboard from 'api/getDashboard';
import postDashboard from 'api/postDashboard';

import './SaveData.css';

class SaveData extends Component {
  handleClick() {
    const { selectedTags, tagPanelVisuals, tagPanelProps } = store.getState();
    const finalSendData = {
      selectedTags: selectedTags,
      tagPanelVisuals: tagPanelVisuals,
      tagPanelProps: tagPanelProps
    };
    const sendData = postDashboard(finalSendData).then((data) => {
      console.log(data);
    });
  }
  render() {
    return (
      <div className='save-button'
          onClick={this.handleClick}>
        Save
      </div>
    );
  }
}

export default SaveData;