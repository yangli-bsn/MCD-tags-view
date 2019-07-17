import React from 'react';

import ErrorIndicator from 'components/CardVisuals/ErrorIndicator';
import ErrorsAndWarnings from 'components/CardVisuals/ErrorsAndWarnings';
import ControllerTypePiechart from 'components/CardVisuals/ControllerTypePiechart';
import ControllerHealthPiechart from 'components/CardVisuals/ControllerHealthPiechart';
import ControllerMostErrors from 'components/CardVisuals/ControllerMostErrors';

export default function strToComponent(visual, data, size) {
  switch (visual) {
    case 'Number of Controllers': {
      return (
        <div className='card-item'>
          <ControllerTypePiechart size={size} data={data} />
        </div>
      );
    }
    case 'Errors and Warnings': {
      return (
        <div className='card-item'>
          <ErrorsAndWarnings size={size} data={data} />
        </div>
      );
    }
    case 'Controllers with Most Errors': {
      return (
        <div className='card-item'>
          <ControllerMostErrors size={size} data={data} />
        </div>
      );
    }
    case 'Error Indicator': {
      return (
        <div className='card-item'>
          <ErrorIndicator size={size} data={data} />
        </div>
      );
    }
    case 'Health Controller Count': {
      return (
        <div className='card-item'>
          <ControllerHealthPiechart size={size} data={data} />
        </div>
      );
    }
  }
}