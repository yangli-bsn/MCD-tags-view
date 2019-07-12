import React, { Component } from 'react';
import Modal from 'react-modal';

import { ReactComponent as SettingSVG } from 'assets/settings.svg';

import './Settings.css';

const modalClassName = {
  afterOpen: 'settings-after-open',
  beforeClose: 'settings-before-close',
  base: 'settings-modal'
}

const modalOverlayClassName= {
  afterOpen: 'settings-modal-overlay-after-open',
  beforeClose: 'settings-modal-overlay-before-close',
  base: 'settings-modal-overlay'
}

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
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
        </Modal>
      </div>
    );
  }
}

export default Settings;