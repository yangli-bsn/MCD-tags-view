import React, { Component } from 'react';

import { RadialChart } from 'react-vis';
import 'react-vis/dist/style.css';

import './ControllerHealthPiechart.css';

class ControllerHealthPiechart extends Component {
  render() {
    const { size, data } = this.props;

    let healthyCount = 0;
    let unhealthyCount = 0;
    data.forEach((controller, index) => {
      if (controller.errors > 0) {
        unhealthyCount += 1;
      }
      else {
        healthyCount += 1;
      }
    });
    let healthyPercent = healthyCount / (healthyCount + unhealthyCount) * 100;
    let unhealthyPercent = unhealthyCount / (healthyCount + unhealthyCount) * 100;
    let myData = [
      {
        angle: healthyCount, 
        radius: 10, 
        label: 'Healthy ' + healthyPercent.toFixed(2) + '%', 
        color: '#1BC600'
      }, 
      {
        angle: unhealthyCount, 
        radius: 10, 
        label: 'Unhealthy ' + unhealthyPercent.toFixed(2) + '%', 
        color: '#FF8787'
      }
    ];

    let piechartSize = Math.min(size.width, size.height) * 0.4;
    piechartSize = Math.max(piechartSize, 200);

    return (
      <div className='controller-health-piechart'>
        <div className='controller-health-piechart-title'>
          Healthy vs Unhealthy Controllers
        </div>
        <RadialChart
          data={myData}
          labelsStyle={{fontSize: 13, fill: '#222'}}
          width={piechartSize}
          height={piechartSize}
          colorType='literal'
          showLabels={true}
          className='controller-health-piechart-itself' />
      </div>
    );
  }
}

export default ControllerHealthPiechart;