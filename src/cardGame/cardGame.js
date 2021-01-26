import React, { Component, useState, useEffect, useRef  } from 'react'
import './cardGame.css'

export const CardGame = () => {
    const [cardData, setCardData] = useState([])
    const [flipCard, setFlipCard] = useState(false)
    const [selectedCards, setSelectedCards] = useState([])

    const cards = [
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
                        }
                    ]

    useEffect(() => {
        if(!cardData.length) {
            let shuffled = cards.sort(() => .5 - Math.random())
            return setCardData(shuffled)
        }
    }, [])

    const handleFlip = (e, id) => {
        if(!selectedCards.length) {
            e.target.classList.remove('cards')
            selectedCards.push(id)
            console.log(selectedCards)
        } else if(selectedCards.length === 1){
            e.target.classList.remove('cards')
            selectedCards.push(id)
            console.log(selectedCards)
            setTimeout(() => {
                handleReset()
            }, 1000)
        }     
    }

    const handleReset = () => {
            document.querySelector(`#card-${selectedCards[0]}`).classList.add('cards')
            document.querySelector(`#card-${selectedCards[1]}`).classList.add('cards')
            setSelectedCards([])       
    }

    console.log(selectedCards)

    return (
        <section className='game-section' id='Game-section'>
                <h2>Guessing Game</h2>
                <br></br>
                <h2>Score: 0</h2>
                <div className='game_board'>
                        {
                            cardData.map(card => {
                            return (
                                <div key={card.id} id={`card-${card.id}`} className={'cards'} onClick={(e) => handleFlip(e, card.id)}>
                                    <h3 className='front' alt='image-of-trond'>front</h3>
                                    <h3 className='back' alt='back-card-image'>back</h3>
                                </div>
                            )
                            })
                        }
                </div>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"></link>
        </section>
    )
}

