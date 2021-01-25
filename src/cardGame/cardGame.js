import React, { Component } from 'react';


class CardGame extends Component {
    constructor() {
        super();
        this.state = {
            cards: [],
            matched: 0
        }
        
    }

    render() {
        return (
            <section className='game-section'>
                <div>
                    <h1>Made it!</h1>
                </div>
            </section>
        )
    }
}

export default CardGame;

