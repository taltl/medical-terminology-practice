import React from "react";
import Card from "../card/card";
import classes from "./cardContainer.module.scss";

const CardContainer: React.FC<{
  cards: { nameEng: string; nameHeb?: string; meaning: string }[];
}> = ({ cards }) => {
  return (
    <div className={classes.cardContainer}>
      {cards.map((card, index) => {
        return (
          <Card
            key={index}
            english={card.nameEng}
            hebrew={card.nameHeb ?? ""}
            value={card.meaning}
          />
        );
      })}
    </div>
  );
};

export default CardContainer;
