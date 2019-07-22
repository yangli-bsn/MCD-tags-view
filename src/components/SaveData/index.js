import React, { Component } from 'react';
import { css } from '@emotion/core';
// First way to import
import { ClipLoader } from 'react-spinners';

import store from 'store';
import postDashboard from 'api/postDashboard';

//import { ReactComponent as CheckMarkSVG } from 'assets/tick.svg';

import './SaveData.css';

class SaveData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({loading: true});

    const { selectedTags, tagPanelVisuals, tagPanelProps } = store.getState();
    const finalSendData = {
      selectedTags: selectedTags,
      tagPanelVisuals: tagPanelVisuals,
      tagPanelProps: tagPanelProps
    };
    postDashboard(finalSendData).then((data) => {
      this.setState({loading: false});
      //console.log(data);
    });
  }

  render() {
    return (
      <div className='save-dashboard'>
        <div className='save-button'
            onClick={this.handleClick}>
          Save
        </div>
        <div className='sweet-loading'>
          <ClipLoader
            css={css}
            sizeUnit={"px"}
            size={20}
            color={'#123abc'}
            loading={this.state.loading}
          />
          {/*this.state.loading || <CheckMarkSVG style={{width: 20, height: 20, fill: 'green'}} />*/}
        </div> 
      </div>
    );
  }
}

export default SaveData;