import React, { useState } from "react";
import "./card.css";

const Card: React.FC<{
  id: string;
  english: string;
  hebrew: string;
  value: string;
}> = ({ id, english, hebrew, value }) => {
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  return (
    <div className="card">
      <div
        className="english"
        onClick={() => setShowAnswer(!showAnswer)}
        onMouseEnter={() => setShowAnswer(true)}
        onMouseOut={() => setShowAnswer(false)}
      >
        {`${english} ${hebrew}`}
      </div>
      <div className={`${showAnswer ? "" : "hidden"}`}>
        {<span>{value}</span>}
      </div>
    </div>
  );
};

export default Card;
