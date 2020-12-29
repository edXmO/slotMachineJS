import React from 'react';
import classes from './slotMachineContainer.module.css';
import Logo from '../Logo/Logo';
import InputCoins from '../InputCoins/InputCoins';
import Slots from '../../components/Slots/Slots';
import PlayZone from '../PlayZone/PlayZone';
import Exit from '../Exit/Exit';


const slotMachineContainer = (props) => {
    return (
        <div className={classes.SlotContainer}>
            <Logo />
            <InputCoins />
            <Slots />
            <PlayZone />
            <Exit />
        </div>
    )
}

export default slotMachineContainer;