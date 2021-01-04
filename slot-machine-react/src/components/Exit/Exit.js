import React from 'react';
import classes from './Exit.module.css';
import Button from '../UI/Button/Button';

const exit = (props) => {
    return (<div className={classes.Exit}>
        <div className={classes.BtnContainer}>
            <Button
                disabled={!props.disabled}
                click={props.exitButtonHandler}
                text="Exit" />
        </div>
    </div>)
}

export default exit;