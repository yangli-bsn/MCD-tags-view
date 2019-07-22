import React, { Component } from 'react';
// import { Rnd } from 'react-rnd';

import strToComponent from 'utils/strToComponent';

import './CardView.css';

class CardView extends Component {

  render() {
    let { tag, size, tagPanelVisuals, data } = this.props;
    //let { position } = this.props;
    const fontSize = Math.max(size.height * 0.07, 25) + 'px';

    return (
      
          <div className='grid-item'>
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
          </div>
      /*<div className='card-view'>
  		  <Rnd
          className='single-card'
          position={position}
          size={size}
          enableResizing={{ top:false, right:false, bottom:false, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false }}
          disableDragging={true}
          onResize={(e, direction, ref, delta, pos) => {this.props.onResize(e, ref, pos, tag)}}
          onDragStop={(e, data) => {this.props.onDragStop(e, data, tag)}}
          bounds='.main-content'
          minWidth={210 * tagPanelVisuals.length}
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
		  </div>*/
    );
  }
}

export default CardView;