import React, { Component } from 'react';

import store from 'store';
import { initializeData } from 'tags/actions';
import getDashboard from 'api/getDashboard';

import TopBar from 'components/TopBar';
import MainContent from 'components/MainContent';

import './App.css';

class App extends Component {
  componentDidMount() {
    const returnData = getDashboard().then((data) => {
      store.dispatch(initializeData(data));
    });
  }

  render() {
    return (
      <div className="App">
        <TopBar />
        <MainContent />
      </div>
    );
  }
}

export default App;
