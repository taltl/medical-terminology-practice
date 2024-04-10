import React from "react";
import "./cardContainer.css";
import Card from "../card/card";

const CardContainer: React.FC<{
  cards: { english: string; hebrew?: string; value: string }[];
}> = ({ cards }) => {
  return (
    <div className="cardContainer">
      {cards.map((card, index) => {
        return (
          <Card
            key={index}
            english={card.english}
            hebrew={card.hebrew ?? ''}
            value={card.value}
          />
        );
      })}
    </div>
  );
};

export default CardContainer;
