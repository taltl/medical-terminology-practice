import React, { useState } from "react";
import "./card.css";

const Card: React.FC<{
  english: string;
  hebrew?: string;
  value: string;
}> = ({ english, hebrew = '', value }) => {
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [sataticAnswer, setStaticAnswer] = useState<boolean>(false);
  return (
    <div className="card">
      <button
        className="english"
        onClick={() => {
          setShowAnswer(!showAnswer);
          setStaticAnswer(true);
        }}
        // onMouseEnter={() => setShowAnswer(true)}
        // onMouseOut={() => setShowAnswer(false)}
      >
        {`${english} ${hebrew}`}
      </button>
      <div className={`${showAnswer && sataticAnswer ? "show" : "hidden"}`}>
        {<span>{value}</span>}
      </div>
    </div>
  );
};

export default Card;
