import React from 'react';
import {CSSTransition} from 'react-transition-group';

import Backdrop from '../Backdrop/backdrop';

import './Modal.css';


const Modal = props => {
  
  return (
    <>
    {/** Cannot process the onClose upward to the parent  */}
      {props.in && <Backdrop onClose={!props.in} /> } 
      <CSSTransition
        in={props.in}
        mountOnEnter
        unmountOnExit
        timeout={props.Timeout}
        classNames={props.classes}
      >
        {props.children}
      </CSSTransition>
    </>
  );
};

export default Modal;
