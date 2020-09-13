import React, { useState } from "react";
import Cards from "./cards";

/**
 * React Component that will contain the cards and control their interactions with the user
 * @param {*Object} props the props given to the React Component
 */
const Game = (props) => {
  const [firstCard, setFirstCard] = useState(null);
  const [turnIsOver, setTurnIsOver] = useState(true);

  /**
   * Function that will check if the cards picked in a turn are the same or not , if they are they will disapear, if they´re not
   *  they will flip over
   * @param {*Object} card1 the first card picked at the begining of the turn
   * @param {*Object} card2 the second card picked in the turn
   */
  function checkCards(card1, card2) {
    if (card1.id === card2.id) {
      setTimeout(() => {
        card1.classList.add("hide");
        card2.classList.add("hide");
      }, 1000);
    } else {
      setTimeout(() => {
        card1.style.transform = "rotateY(360deg)";
        card2.style.transform = "rotateY(360deg)";
      }, 2000);
    }
  }
  /**
   *
   * @param {*Event} event the event that triggered the action, it is expected to be a flipped card
   */
  function onClickHandler(event) {
    const card = event.target.parentElement;
    if (
      !card.classList.contains("card") ||
      card.classList.contains("hide") ||
      !turnIsOver
    ) {
      return;
    }
    if (!firstCard) {
      card.style.transform = "rotateY(180deg)";
      setFirstCard(card);
    } else {
      setTurnIsOver(false);
      card.style.transform = "rotateY(180deg)";
      checkCards(card, firstCard);
      setFirstCard(null);
      setTimeout(() => {
        setTurnIsOver(true);
      }, 2000);
    }
  }

  return (
    <div>
      <Cards imgs={props.imgs} onClick={onClickHandler}></Cards>
    </div>
  );
};

export default Game;
