import React from 'react';
import classes from './InputCoins.module.css';
import Button from '../UI/Button/Button';

const inputCoins = (props) => {

    return (
        <div className={classes.InputCoins}>
            <div className={classes.InsertCoins}>
                {!props.onPlay ?
                    <Button
                        click={props.gameStateHandler, props.insertCoins}
                        text="Insert Coin" />
                    : <p>Playing!</p>}
            </div>
            {props.onPlay ?
                <p>Total coins: {props.coins}</p>
                : null}
            < div className={classes.Input}>
                {/* If user inputs coins, input no longer shows */}
                {!props.onPlay ?
                    <input
                        type="number"
                        value={props.coins}
                        onChange={props.changeCoinsHandler}
                    />
                    : null}
            </div>
        </div >
    )

}

export default inputCoins; 