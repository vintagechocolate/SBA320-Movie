import React from 'react';
import './Tooltip.css';

function Tooltip({ message }) {
  return (
    <div className="tooltip">
      {message}
    </div>
  );
}

export default Tooltip;
