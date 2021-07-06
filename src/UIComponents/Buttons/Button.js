import React from 'react';

import './Button.css';

const Button = props => {
    let classes = ["btn"];
    if(props.type){
        classes.push(`btn-${props.type}`);
    }

    return (
        <button  onClick={props.clickHandle} value={props.name} className={classes.join(' ')}>
            {props.name}
        </button>
    );
}

export default Button;