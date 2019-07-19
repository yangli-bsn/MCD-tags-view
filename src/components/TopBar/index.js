import React from 'react';

import TagSelector from 'components/TagSelector';
import Settings from 'components/Settings';
import SaveData from 'components/SaveData';

import './TopBar.css';

function TopBar() {
  return (
    <div className="top-bar">
      <TagSelector />
      <SaveData />
      <Settings />
    </div>
  );
}

export default TopBar;
