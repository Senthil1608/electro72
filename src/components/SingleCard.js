import React from "react";
import cover from "../images/cover.png"
const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
    // handle click
    const handleClick = () => {
       if (!disabled) {
          handleChoice(card);
       }
    };
 
    return (
       <div className="card1">
          <div className={flipped ? 'flipped1' : ''}>
             <img src={card.src} alt="front" className="front-img" />
             <img
                src= {cover}
                alt="cover"
                className="cover-img"
                onClick={handleClick}
             />
          </div>
       </div>
    );
 };
 
 export default SingleCard;