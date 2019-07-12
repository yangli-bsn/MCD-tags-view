import React, { Component } from 'react';

import { RadialChart } from 'react-vis';
import 'react-vis/dist/style.css';

import './ControllerTypePiechart.css';

class ControllerTypePiechart extends Component {
  render() {
    const { size, data } = this.props;

    let bcfCount = 0;
    let bmfCount = 0;
    data.forEach((controller, index) => {
      if (controller.product === 'BCF') {
        bcfCount += 1;
      }
      else if (controller.product === 'BMF') {
        bmfCount += 1;
      }
    });
    let bcfPercent = bcfCount / (bcfCount + bmfCount) * 100;
    let bmfPercent = bmfCount / (bcfCount + bmfCount) * 100;
    let myData = [
      {
        angle: bcfCount, 
        radius: 10, 
        label: 'BCF ' + bcfPercent.toFixed(2) + '%', 
        color: '#00A0DE'
      }, 
      {
        angle: bmfCount, 
        radius: 10, 
        label: 'BMF ' + bmfPercent.toFixed(2) + '%', 
        color: '#FF595E'
      }
    ];

    let piechartSize = Math.min(size.width, size.height) * 0.4;
    piechartSize = Math.max(piechartSize, 200);

    return (
      <div className='controller-type-piechart'>
        <div className='controller-type-piechart-title'>
          Total Number of Controllers: {this.props.data.length}
        </div>
        <RadialChart
          data={myData}
          width={piechartSize}
          height={piechartSize}
          colorType='literal'
          showLabels={true}
          className='controller-type-piechart-itself' />
      </div>
    );
  }
}

export default ControllerTypePiechart;