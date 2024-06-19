import React, { useState } from "react";
import CardContainer from "../cardsContainer/CardContainer";
import data from "../../data.json";
import { Link } from "react-router-dom";
import globalClasses from "./../../global.module.scss";
import classes from "./../tabsContainer/TabsContainer.module.scss";

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
const medications = data.medications;

const cards = [sufixWords, prefixWords, sourceWordsCards, locationWords];

const TabsContainer: React.FC = () => {
  const [selectTab, setSelectTab] = useState<number>(2);

  return (
    <div>
      <div className={globalClasses.back}>
        <Link to="/medical-terminology-practice">חזרה</Link>
      </div>
      <div className={classes.btnContainer}>
        {tabs.map((tab, index) => (
          <button
            className={`${classes.tabBtn} ${
              selectTab === index ? classes.selectedTab : ""
            }`}
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
