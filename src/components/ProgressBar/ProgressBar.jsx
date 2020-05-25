/**
 *
 * Progress Bar component
 *
 *
 */
import React from 'react';
import './ProgressBar.scss';

function ProgressBar(props) {
  const { color, complete } = props;
  return (
    <div className="progress-bar">
      <div className={`complete-bar ${color || ''} `} style={{ width: `${complete}%` }} />
    </div>
  );
}


export default ProgressBar;
