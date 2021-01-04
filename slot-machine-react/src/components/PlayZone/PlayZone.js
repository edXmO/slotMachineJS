import React from 'react';
import classes from './PlayZone.module.css';
import Button from '../UI/Button/Button';
import PlayHistory from './PlayHistory/PlayHistory';

const playZone = (props) => {
    return (
        <div className={classes.PlayZone}>
            <div className={classes.BtnContainer}>
                <Button
                    disabled={!props.disabled}
                    click={props.playSlotsHandler}
                    text="Start"
                />
                <Button
                    disabled={!props.disabled}
                    click={props.stopButtonHandler}
                    text="Stop"
                />
            </div>
            <PlayHistory />
        </div>
    )
}

export default playZone;