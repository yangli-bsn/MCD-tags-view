import React from 'react';

import TagSelector from 'components/TagSelector';

import './TopBar.css';

function TopBar() {
  return (
    <div className="top-bar">
      <TagSelector />
    </div>
  );
}

export default TopBar;
