import React, { Component } from 'react';

import './ErrorsAndWarnings.css';

class ErrorsAndWarnings extends Component {
  render() {
    return (
      <div className='errors-and-warnings'>
        <div className='errors-count'>
        </div>
        <div className='warnings-count'>
        </div>
        <div className='errors-warnings-box-row'>
          <div className='errors-count-box'>
          </div>
          <div className='warnings-count-box'>
          </div>
        </div>
      </div>
    );
  }
}

export default ErrorsAndWarnings;