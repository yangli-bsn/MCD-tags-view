import React, { Component } from 'react';
import { Rnd } from 'react-rnd';

import strToComponent from 'utils/strToComponent';

import './CardView.css';

class CardView extends Component {

  render() {
    let { defaultOptions, tag, position, size, tagPanelVisuals, data } = this.props;


    const fontSize = Math.max(size.height * 0.07, 25) + 'px';
    return (
      <div className='card-view'>
  		  <Rnd
          className='single-card'
  			  default={defaultOptions}
          position={position}
          size={size}
          onResize={(e, direction, ref, delta, pos) => {this.props.onResize(e, ref, pos, tag)}}
          onDragStop={(e, data) => {this.props.onDragStop(e, data, tag)}}
          bounds='.main-content'
          minWidth={500}
          minHeight={300}
          maxHeight={window.innerHeight * 0.85}
          maxWidth={window.innerWidth * 0.95}
  			>
          <div className='card-title' style={{fontSize: fontSize}}>
            {tag}
            <div className='title-separator' />
          </div>
          <div className='card-content'>
            {
              tagPanelVisuals.map((visual, index) => {
                return strToComponent(visual, data, size);
              })
            }
          </div>
        </Rnd>
		  </div>
    );
  }
}

export default CardView;