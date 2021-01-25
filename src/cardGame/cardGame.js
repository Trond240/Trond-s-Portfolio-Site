import React, { Component } from 'react';


class CardGame extends Component {
    constructor() {
        super();
        this.state = {
            cards: [],
            matchedinto: 0
        }
        
    }

    render() {
        return (
            <section className='game-section'>
                <h1>Made it!</h1>
            </section>
        )
    }
}

export default CardGame;

