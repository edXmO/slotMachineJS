import React from 'react';
import classes from './Slots.module.css'
import Slot from './Slot/Slot';

const slots = (props) => {
    return (
        <div className={classes.Slots}>
            <Slot
                slotImg={props.slotOne}
                className={classes.Slot}
            />
            <Slot
                slotImg={props.slotTwo}
                className={classes.Slot}
            />
            <Slot
                slotImg={props.slotThree}
                className={classes.Slot}
            />
        </div>
    )
}

export default slots;