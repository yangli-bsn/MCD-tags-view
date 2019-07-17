import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'

import store from 'store';
import { connect } from 'react-redux';
import { addTagVisual, removeTagVisual } from 'tags/actions';

import DraggableConfig from './DraggableConfig';

import './SettingsContent.css';

const panelVisuals = [
  'Error Indicator',
  'Number of Controllers',
  'Errors and Warnings',
  'Health Controller Count',
  'Controllers with Most Errors'
];

class SettingsContent extends Component {
  constructor(props) {
    super(props);
    let { selectedTags } = store.getState();
    this.state = {
      currentTag: selectedTags[0] || ''
    };

    this.dropDownOnSelect = this.dropDownOnSelect.bind(this);
    this.itemOnClick = this.itemOnClick.bind(this);
  }

  dropDownOnSelect(e) {
    this.setState({ currentTag: e.value });
  }

  itemOnClick(visual, e) {
    let { tagPanelVisuals } = store.getState();
    let { currentTag } = this.state;
    if (currentTag !== '') {
      if (!tagPanelVisuals[currentTag].includes(visual)) {
        store.dispatch(addTagVisual(currentTag, visual));
      }
      else {
        store.dispatch(removeTagVisual(currentTag, visual));
      }
    }
  }

  render() {
    let { selectedTags, tagPanelVisuals } = store.getState();
    let { currentTag } = this.state;
    let dropDownMenuOptions = selectedTags.map((tag, index) => {
      return {value: tag, label: tag, className: 'modal-tag-selector-menu-item'};
    });
    return (
      <div className='modal-content'>
        <div className='modal-tag-selector'>
          <div className='modal-tag-selector-title'>
            Tags:
          </div>
          <Dropdown 
            className='modal-tag-selector-dropdown'
            placeholderClassName='modal-tag-selector-dropdown-placeholder'
            menuClassName='modal-tag-selector-dropdown-menu'
            arrowClassName='modal-tag-selector-dropdown-arrow'
            options={dropDownMenuOptions} 
            onChange={this.dropDownOnSelect} 
            value={currentTag}
            placeholder="Select an option" />
        </div>
        <div className='modal-panel-configurator'>
          <div className='modal-panel-configuration-info-list'>
            {
              panelVisuals.map((visual, index) => {
                let selectedClass = '';
                if (currentTag !== '' && 
                    tagPanelVisuals[currentTag].includes(visual)) {
                  selectedClass = ' selected';
                }
                return (
                  <div key={index} 
                      className='modal-panel-visual-item'
                      onClick={(e) => this.itemOnClick(visual, e)}>
                    <div className={'modal-panel-visual-select' + selectedClass} />
                    <div className={'modal-panel-visual-name' + selectedClass}>
                      {visual}
                    </div>
                  </div>
                );
              })
            }
          </div>
          <div className='modal-panel-configuration-separator' />
          <div className='modal-panel-configurator-info-visual'>
            <DraggableConfig
              currentTag={currentTag}/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tagPanelVisuals: state.tagPanelVisuals
  }
};

export default connect(mapStateToProps)(SettingsContent);