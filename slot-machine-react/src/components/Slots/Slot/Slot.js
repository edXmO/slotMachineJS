import React from 'react';
import classes from './Slot.module.css';

const slot = (props) => (
    <div className={classes.Slot}>
        <img src={`/images/${props.slotImg}.png`} alt="fruta" />
    </div>
)

export default slot;