import React, { Component } from 'react';
import { Rnd } from 'react-rnd';

import './CardView.css';

class CardView extends Component {

  render() {
    let { defaultOptions, tag } = this.props;
    return (
      <div className='card-view'>
  		  <Rnd
          className='single-card'
  			  default={defaultOptions}
  			>
          {tag}
        </Rnd>
		  </div>
    );
  }
}

export default CardView;