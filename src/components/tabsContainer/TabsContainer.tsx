import React, { useState } from "react";
import CardContainer from "../cardsContainer/CardContainer";
import "./TabsContainer.css";
import data from "../../data.json";

const tabs = [
  {
    title: "מילות סיומת",
    url: "sufix",
  },
  {
    title: "מילות קידומת",
    url: "prefix",
  },
  {
    title: "מילות שורש",
    url: "source",
  },
  {
    title: "מונחי מיקום",
    url: "locations",
  },
];

const sourceWordsCards = data.sourceWordsCards;
const prefixWords = data.prefixWords;
const sufixWords = data.sufixWords;
const locationWords = data.locationWords;
const pills = data.pills;

const cards = [sufixWords, prefixWords, sourceWordsCards, locationWords];

const TabsContainer: React.FC = () => {
  const [selectTab, setSelectTab] = useState<number>(2);

  return (
    <div>
      <div className="btnContainer">
        {tabs.map((tab, index) => (
          <button
            className={`tabBtn ${selectTab === index ? "selectedTab" : ""}`}
            onClick={() => setSelectTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <CardContainer cards={cards[selectTab]} />
    </div>
  );
};

export default TabsContainer;
