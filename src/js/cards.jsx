import React from 'react'
import '../styles/card.scss'

/**
 * React Component that will recieve the imgs wanted for the game and create the cards 
 * @param {The props of the Cards} props 
 */
const Cards = (props)=>{
    let currentNumber = 0;
    let cards = props.imgs.map((img)=>{
        currentNumber++;
        return(
            <div className="card" id ={img.id} onClick={props.onClick} key={img.id + currentNumber.toString()}>
                <div className="theback">
                    <h1>{currentNumber}</h1>
                </div>
                <div className="thefront">
                    <img src={img.src} alt="img"></img>
                </div>
        </div>
        );
    });
    return(
        <div className="cards">
            {cards}
        </div>
    );
}

export default Cards;