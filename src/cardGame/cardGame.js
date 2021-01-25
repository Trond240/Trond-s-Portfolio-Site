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
        console.log(this.state.cards)
        return (
            <section className='game-section'>
                <div className='game_board'>
                    <Cards cardData={this.state.cards}/>
                </div>
            </section>
        )
    }
}

export default CardGame;

