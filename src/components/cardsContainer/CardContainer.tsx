import React from "react";
import Card from "../card/card";
import "./cardContainer.css";

const CardContainer: React.FC<{
  cards: { id: string; english: string; hebrew: string; value: string }[];
}> = ({ cards }) => {
  return (
    <div className="cardContainer">
      {cards.map((card) => {
        return (
          <Card
            key={card.id}
            english={card.english}
            hebrew={card.hebrew}
            id={card.id}
            value={card.value}
          />
        );
      })}
    </div>
  );
};

export default CardContainer;
