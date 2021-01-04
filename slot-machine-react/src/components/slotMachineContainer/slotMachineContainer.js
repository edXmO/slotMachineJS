import React, { Component } from 'react';
import classes from './slotMachineContainer.module.css';
import Logo from '../Logo/Logo';
import Slots from '../../components/Slots/Slots';
import PlayZone from '../PlayZone/PlayZone';
import Exit from '../Exit/Exit';
import InputCoins from '../InputCoins/InputCoins';

// const PRIZES = [
//     {}
// ]


class slotMachineContainer extends Component {
    state = {
        coins: 0,
        onPlay: false,
        fruits: ['Manzana', 'Naranja', 'Piña', 'Sandía', 'Zanahoria'],
        slotOne: '',
        slotTwo: '',
        slotThree: '',
        intID: ''
    }
    // Initializing the state
    componentDidMount = () => {
        this.setState({ coins: 0, onPlay: false })
    }
    // State of the game handler
    // Initialize the state of the game if there is coins.
    gameStateHandler = availableCoins => {
        if (availableCoins > 0) {
            this.setState(prevState => {
                return { onPlay: !prevState.onPlay };
            })
        }
    }

    //Input handlers 
    // Setting the nº of coins to inputCoins
    insertCoinsHandler = () => {
        this.gameStateHandler(this.state.coins)
        if (this.state.onPlay && this.state.coins > 0) {
            this.setState(prevState => {
                return { coins: prevState.coins + this.coins };
            });
        } else {
            console.log('Posible Modal: You need to introduce coins to play!')
        }
    }

    // Getting value from InputCoins's input tag
    changeCoinsHandler = e => {
        e.preventDefault()
        this.setState(() => {
            return { coins: e.target.value }
        });
    }

    // Button handlers
    // Start button handler
    playSlotsHandler = () => {
        if (this.state.coins > 0) {
            this.setState(prevState => {
                return { coins: prevState.coins - 1 };
            });
        }
        let intId = setInterval(this.handleSpinners, 100);
        return intId
    }

    stopButtonHandler = (interval) => {
        clearInterval(interval);
        console.log('stop-button-clicked');
    }

    exitButtonHandler = () => {
        // Mostrar quizá un modal con el resumen de la partida?¿
        // showModalHandler();
        this.setState(() => {
            return { onPlay: false };
        })
        this.setState(() => {
            return { coins: 0 };
        })
    }

    // Slot reel handlers & functions 
    randomFruit = () => {
        let random = Math.floor(Math.random() * this.state.fruits.length);
        return random
    }

    // Spin effect
    handleSpinners = () => {
        let randOne = this.randomFruit();
        let randTwo = this.randomFruit();
        let randThree = this.randomFruit();
        this.setState({ slotOne: this.state.fruits[randOne] })
        this.setState({ slotTwo: this.state.fruits[randTwo] })
        this.setState({ slotThree: this.state.fruits[randThree] })
    }



    render() {
        return (
            <div className={classes.SlotContainer}>
                <Logo />
                <InputCoins
                    changeCoinsHandler={this.changeCoinsHandler}
                    insertCoins={this.insertCoinsHandler}
                    coins={this.state.coins}
                    onPlay={this.state.onPlay}
                />
                <Slots
                    slotOne={this.state.slotOne}
                    slotTwo={this.state.slotTwo}
                    slotThree={this.state.slotThree}
                />
                <PlayZone
                    disabled={this.state.onPlay}
                    playSlotsHandler={this.playSlotsHandler}
                    stopButtonHandler={this.stopButtonHandler(this.intId)}
                />
                <Exit
                    disabled={this.state.onPlay}
                    exitButtonHandler={this.exitButtonHandler}
                />
            </div>
        )
    }
}

export default slotMachineContainer;