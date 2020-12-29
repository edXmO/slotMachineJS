import React from 'react';
import classes from './InputCoins.module.css';
import Aux from '../../hoc/Auxiliary/Auxiliary.js';

const inputCoins = (props) => {
    return (
        <div className={classes.InputCoins}>
            <button>Insert Coin!</button>
            <p></p>
            <input />
        </div>
    )

}

export default inputCoins; 