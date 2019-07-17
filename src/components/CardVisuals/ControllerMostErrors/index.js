import React, {Component} from 'react';
import _ from 'lodash';

import './ControllerMostErrors.css';

class ControllerMostErrors extends Component {
  render() {
    let { data } = this.props;
    let controllersList = [undefined, undefined, undefined];

    data.forEach((controller, index) => {
      let currentControllerData = _.cloneDeep(controller);
      if (controllersList[2] === undefined ||
          controllersList[2].errors < currentControllerData) {
        controllersList[2] = currentControllerData;
      }
      for (let i = 1; i >= 0; i--) {
        if (controllersList[i] === undefined ||
          controllersList[i + 1].errors > controllersList[i].errors) {
          let temp = _.cloneDeep(controllersList[i]);
          controllersList[i] = controllersList[i + 1];
          controllersList[i + 1] = temp;
        }
      }
    });
    return (
      <div className='controller-most-errors'>
        <div className='controller-most-errors-title'>
          Controllers with most errors:
        </div>
        <div className='controller-most-errors-list'>
          {
            controllersList.map((controller, index) => {
              return (
                <div key={index} 
                  className='controller-most-errors-link'>
                  {controller.name}
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default ControllerMostErrors;