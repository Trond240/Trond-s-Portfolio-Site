import React, { Component, useState, useEffect, useRef  } from 'react'
import './cardGame.css'

export const CardGame = () => {
    const [cardData, setCardData] = useState([])
    const [flipCard, setFlipCard] = useState(false)
    const [playerScore, setPlayerScore] = useState(0)
    const [selectedCards, setSelectedCards] = useState([])
    const [matchedCards, setMtachedCards] = useState([])

    const cards = [
                        {
                            id: 1,
                            img: 'blank',
                            numberMatch: 1,
                            flipped: false
                        },
                        {
                            id: 2,
                            img: 'blank',
                            numberMatch: 1,
                            flipped: false
                        },
                        {
                            id: 3,
                            img: 'blank',
                            numberMatch: 2,
                            flipped: false
                        },
                        {
                            id: 4,
                            img: 'blank',
                            numberMatch: 2,
                            flipped: false
                        },
                        {
                            id: 5,
                            img: 'blank',
                            numberMatch: 3,
                            flipped: false
                        },
                        {
                            id: 6,
                            img: 'blank',
                            numberMatch: 3,
                            flipped: false
                        },
                        {
                            id: 7,
                            img: 'blank',
                            numberMatch: 4,
                            flipped: false
                        },
                        {
                            id: 8,
                            img: 'blank',
                            numberMatch: 4,
                            flipped: false
                        },
                        {
                            id: 9,
                            img: 'blank',
                            numberMatch: 5,
                            flipped: false
                        },
                        {
                            id: 10,
                            img: 'blank',
                            numberMatch: 5,
                            flipped: false
                        },
                        {
                            id:11,
                            img: 'blank',
                            numberMatch: 6,
                            flipped: false
                        },
                        {
                            id: 12,
                            img: 'blank',
                            numberMatch: 6,
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
            e.target.classList.remove('cards-back')
            selectedCards.push(id)
            console.log(selectedCards)
        } else if(selectedCards.length){
            e.target.classList.remove('cards-back')
            selectedCards.push(id)
            handleMatched(selectedCards)
            setTimeout(() => {
                handleReset()
            }, 1000)
        }     
    } 

    const handleReset = () => {
            document.querySelector(`#card-${selectedCards[0]}`).classList.add('cards-back')
            document.querySelector(`#card-${selectedCards[1]}`).classList.add('cards-back')
            setSelectedCards([])       
    }

    const handleMatched = (matched) => {
        let foundCards = []
        console.log(matched)
        const foundMatch = cards.forEach(card => {
            matched.forEach(match => {
                console.log(card)
                if(match === card.id && !foundCards.includes(card)) {
                    return foundCards.push(card);
                }
            })
            checkMatched(foundCards); 
        }) 
        // checkMatched(foundMatch)
    }

    const checkMatched = (matched) => {
        console.log(matched)
    }


    
    return (
        <section className='game-section' id='Game-section'>
                <h2>Guessing Game</h2>
                <br></br>
                <h2>Score:{playerScore}</h2>
                <div className='game_board'>
                        {
                            cardData.map(card => {
                            return (
                                <button key={card.id} id={`card-${card.id}`} className={'cards-back'} onClick={(e) => handleFlip(e, card.id)}>
                                    <h3 className='front' alt='image-of-trond'>back</h3>
                                    <h3 className='back' alt='back-card-image'>front</h3>
                                </button>
                            )
                            })
                        }
                </div>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"></link>
        </section>
    )
}

