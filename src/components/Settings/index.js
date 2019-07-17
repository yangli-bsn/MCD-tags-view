import React, { Component } from 'react';
import Modal from 'react-modal';

import SettingsContent from 'components/Settings/SettingsContent';

import { ReactComponent as SettingSVG } from 'assets/settings.svg';
import { ReactComponent as CrossSVG } from 'assets/cross.svg';

import './Settings.css';

const modalClassName = {
  afterOpen: 'settings-after-open',
  beforeClose: 'settings-before-close',
  base: 'settings-modal'
}

const modalOverlayClassName = {
  afterOpen: 'settings-modal-overlay-after-open',
  beforeClose: 'settings-modal-overlay-before-close',
  base: 'settings-modal-overlay'
}

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      currentTag: ''
    };

    Modal.setAppElement('#root');

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalOpen: true});
  }

  closeModal() {
    this.setState({modalOpen: false});
  }

  render() {
    return (
      <div className='dashboard-settings'>
        <SettingSVG className='settings-svg'
          onClick={this.openModal} />
        <Modal
          className={modalClassName}
          overlayClassName={modalOverlayClassName}
          closeTimeoutMS={200}
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal} >
          <div className='modal-top-bar'>
            Dashboard Configurations
            <CrossSVG 
              onClick={this.closeModal}
              className='modal-top-bar-cross-svg' />
          </div>
          <SettingsContent />
        </Modal>
      </div>
    );
  }
}

export default Settings;