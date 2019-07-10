import React, { Component } from 'react';

import { ReactComponent as HealthSign } from 'assets/healthsign.svg';
import './ErrorIndicator.css';

class ErrorIndicator extends Component {
  render() {
    let data = this.props.data;

    let color = '#34E817';
    let errors = 0;
    let warnings = 0
    let svgFill = 'black';
    data.forEach((controller, index) =>{
        errors += controller.errors;
        warnings += controller.warnings;
    });
    if (errors > 0) {
      color = '#F41919';
      svgFill = 'white';
    }
    else if (warnings > 0) {
      color = '#EEDF18';
    }
    return (
      <div className='error-indicator'
            style={{backgroundColor: color}}>
        <HealthSign className='health-sign-svg' style={{fill: svgFill}}/>
      </div>
    );
  }

}

export default ErrorIndicator;