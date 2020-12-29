import React, { Component } from 'react';
import classes from './Layout.module.css';

import SlotMachineContainer from '../../components/slotMachineContainer/slotMachineContainer';

class Layout extends Component {
    state = {

    }
    render() {
        return (
            <div>
                <SlotMachineContainer />
            </div>
        )
    }
}

export default Layout;