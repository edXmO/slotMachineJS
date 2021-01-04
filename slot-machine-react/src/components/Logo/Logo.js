import React from 'react';
import classes from './Logo.module.css';

const logo = () => {
    return (
        <div className={classes.Logo}>
            <div className={classes.SlotBrand}>
                <img src="images/slot-machine.png" />
                <img src="images/slot-machine.png" />
            </div>
        </div>
    );
}

export default logo;