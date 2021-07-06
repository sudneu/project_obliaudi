import React from 'react';

import './Input.css';

const Input = props => {
  if(props.element === "button"){
    return (
        <div className="input-field">
          <input type={props.type} value={props.value}/>
        </div>
      );
  }else{
    return (
      <div className="input-field">
        <input type={props.type} placeholder={props.writtenText} />
      </div>
    )
  }
};

export default Input;
