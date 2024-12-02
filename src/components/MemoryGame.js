import { useEffect, useState } from 'react';

import SingleCard from './SingleCard'
import BackToDashBoard from './BackToDashBoard';
import hammer from '../images/hammer.jpeg'
import spanner from '../images/spanner.jpeg'


const cardImages = [
   { src: hammer, matched: false },
   { src: spanner, matched: false },
 
   
];

function MemoryGame() {
   // states
   const [cards, setCards] = useState([]);
   const [turns, setTurns] = useState(0);

   const [choiceOne, setChoiceOne] = useState(null);
   const [choiceTwo, setChoiceTwo] = useState(null);

   const [disabled, setDisabled] = useState(false);

   // shuffle cards
   const shuffleCards = () => {
      const shuffledCards = [...cardImages, ...cardImages]
         .sort(() => Math.random() - 0.5)
         .map((card) => ({ ...card, id: Math.random() }));

      setChoiceOne(null);
      setChoiceTwo(null);

      // set shuffled card values
      setCards(shuffledCards);

      // reset the turns value
      setTurns(0);
   };

   // handle choices
   const handleChoice = (card) => {
      choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
   };

   // compare selected cards
   useEffect(() => {
      if (choiceOne && choiceTwo) {
         setDisabled(true);

         if (choiceOne.src === choiceTwo.src) {
            setCards((prevCards) => {
               return prevCards.map((card) => {
                  if (card.src === choiceOne.src) {
                     return { ...card, matched: true };
                  } else {
                     return card;
                  }
               });
            });

            resetTurn();
         } else {
            setTimeout(() => resetTurn(), 1000);
         }
      }
   }, [choiceOne, choiceTwo]);

   // start game automatically
   useEffect(() => {
      shuffleCards();
   }, []);

   // reset turns and increase turn
   const resetTurn = () => {
      setChoiceOne(null);
      setChoiceTwo(null);

      setTurns((prevTurn) => prevTurn + 1);
      setDisabled(false);
   };

   return (
      <div className="App1">
         <BackToDashBoard />   
         <h1>Memory Match</h1>
         <button onClick={shuffleCards}>New Game</button>
         <p className="turns"> Turns: {turns} </p>
         <div className="card-grid1">
            {cards.map((card) => (
               <SingleCard
                  key={card.id}
                  card={card}
                  handleChoice={handleChoice}
                  flipped={
                     card === choiceOne || card === choiceTwo || card.matched
                  }
                  disabled={disabled}
               />
            ))}
         </div>


      </div>
   );
}

export default MemoryGame;
