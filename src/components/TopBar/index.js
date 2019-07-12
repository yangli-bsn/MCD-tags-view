import React from 'react';

import TagSelector from 'components/TagSelector';
import Settings from 'components/Settings';

import './TopBar.css';

function TopBar() {
  return (
    <div className="top-bar">
      <TagSelector />
      <Settings />
    </div>
  );
}

export default TopBar;
