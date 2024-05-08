import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./HomePage.module.scss";

const HomePage: React.FC<{}> = () => {
  return (
    <div className={classes.homePage}>
      <h1>תרגול טרמינולוגיה רפואית</h1>
      <div className={classes.link}>
        <Link to={"/trivia"}>
          <span>טריוויה</span>
        </Link>
      </div>
      <div className={classes.link}>
        <Link to={"/cards"}>
          <span>כרטיסיות</span>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
