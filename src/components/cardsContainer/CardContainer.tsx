import React from "react";
import Card from "../card/card";
import classes from "./cardContainer.module.scss";

const CardContainer: React.FC<{
  cards: { english: string; hebrew?: string; value: string }[];
}> = ({ cards }) => {
  return (
    <div className={classes.cardContainer}>
      {cards.map((card, index) => {
        return (
          <Card
            key={index}
            english={card.english}
            hebrew={card.hebrew ?? ""}
            value={card.value}
          />
        );
      })}
    </div>
  );
};

export default CardContainer;
