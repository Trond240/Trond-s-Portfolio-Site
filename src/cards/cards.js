import React, { useState, useEffect, useRef } from 'react'
import './cards.css'

export const Cards = (props) => {

    const [flipActive, setFlipActive] = useState(false);

    useEffect(() => {
        document.addEventListener('click', handleFlip)
    })

    const handleFlip = () => {
        // if (!flipActive) {
        //     setFlipActive(true)
        // } 
    }

    const gameCards = props.cardData.map(card => {
        return (
            <div key={card.id} id={card.id}className='cards flip_card '>
                <h3 className='front' onClick={handleFlip()}>front</h3>
                <h3 className='back'>back</h3>
            </div>
        )
    })

    return (
            gameCards
    )
}