import React from 'react'

export const Cards = (props) => {
    console.log(props.cardData)

    const gameCards = props.cardData.map(card => {
        return (
            <div key={card.id} className='cards'>
                <h1>{card.img}</h1>
            </div>
        )
    })

    return (
        gameCards
    )
}