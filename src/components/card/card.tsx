import React, { useState } from "react";
import classes from "./card.module.scss";

const Card: React.FC<{
  english: string;
  hebrew?: string;
  value: string;
}> = ({ english, hebrew = "", value }) => {
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [sataticAnswer, setStaticAnswer] = useState<boolean>(false);
  return (
    <div className={classes.card}>
      <button
        className={classes.english}
        onClick={() => {
          setShowAnswer(!showAnswer);
          setStaticAnswer(true);
        }}
      >
        {`${english} ${hebrew}`}
      </button>
      <div
        className={`${
          showAnswer && sataticAnswer ? classes.show : classes.hidden
        }`}
      >
        {<span>{value}</span>}
      </div>
    </div>
  );
};

export default Card;
