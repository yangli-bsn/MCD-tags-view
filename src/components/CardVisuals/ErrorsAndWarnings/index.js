import React, { Component } from 'react';

import './ErrorsAndWarnings.css';

class ErrorsAndWarnings extends Component {
  render() {
    let errors = 0;
    let warnings = 0;
    let { size, data } = this.props;

    data.forEach((controller, index) =>{
      errors += controller.errors;
      warnings += controller.warnings;
    });

    let boxSize = Math.min(size.height, size.width) * 0.1;
    boxSize = Math.max(boxSize, 40);

    let boxStyle = {
      height: boxSize + 'px',
      width: boxSize + 'px',
      lineHeight: boxSize + 'px',
      fontSize: 0.6 * boxSize + 'px'
    };

    let errorBoxStyle = {
      ...boxStyle,
      opacity: errors === 0 ? 0.2 : 1
    };

    let warningBoxStyle = {
      ...boxStyle,
      opacity: warnings === 0 ? 0.2 : 1
    };
    return (
      <div className='errors-and-warnings'>
        <div className='errors-count'>
          {'Errors: ' + errors}
        </div>
        <div className='warnings-count'>
          {'Warnings: ' + warnings}
        </div>
        <div className='errors-warnings-box-row' style={{marginTop: size.height * 0.15 + 'px'}}>
          <div className='errors-count-box' style={errorBoxStyle}>
            {errors}
          </div>
          <div className='warnings-count-box' style={warningBoxStyle}>
            {warnings}
          </div>
        </div>
      </div>
    );
  }
}

export default ErrorsAndWarnings;