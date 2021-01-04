import React from 'react';
import classes from './Button.module.css'

const button = (props) => {
    return (
        <button
            //onClickProperties from all buttons
            disabled={props.disabled}
            onClick={props.click}
            className={classes.Button}
        >
            {props.text}
        </button>)
}

export default button;