import React, { Component } from 'react'
import { Cards } from '../cards/cards.js'
import './cardGame.css'


class CardGame extends Component {
    constructor() {
        super();
        this.state = {
            cards: [
                {
                    id: 1,
                    img: 'blank',
                    flipped: false
                },
                {
                    id: 2,
                    img: 'blank',
                    flipped: false
                },
                {
                    id: 3,
                    img: 'blank',
                    flipped: false
                },
                {
                    id: 4,
                    img: 'blank',
                    flipped: false
                },
                {
                    id: 5,
                    img: 'blank',
                    flipped: false
                },
                {
                    id: 6,
                    img: 'blank',
                    flipped: false
                },
                {
                    id: 7,
                    img: 'blank',
                    flipped: false
                },
                {
                    id: 8,
                    img: 'blank',
                    flipped: false
                },
                {
                    id: 9,
                    img: 'blank',
                    flipped: false
                },
                {
                    id: 10,
                    img: 'blank',
                    flipped: false
                },
            ],
            matched: 0
        }
        
    }

    render() {
        const randomArray = this.state.cards.sort(() => 0.5 - Math.random());
        console.log(randomArray)
        return (
            <section className='game-section' id='Game-section'>
                <h2>Guessing Game</h2>
                <br></br>
                <h2>Score: {this.state.matched}</h2>
                <div className='game_board'>
                    <Cards cardData={randomArray}/>
                </div>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"></link>
            </section>
        )
    }
}

export default CardGame;

