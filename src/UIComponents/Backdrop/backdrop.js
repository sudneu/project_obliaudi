import React from 'react';
import ReactDOM from 'react-dom';

import './backdrop.css';

const Backdrop = props => {
  const backdrop =  (
    <div className="backdrop" onClick={props.onClose}>
    </div>
  );

  return ReactDOM.createPortal(backdrop, document.getElementById('backdrop-layer'));
}

export default Backdrop;
