import React from "react";
import { Link } from "react-router-dom";
import classes from "./HomePage.module.scss";

const HomePage: React.FC<{}> = () => {
  return (
    <div className={classes.homePage}>
      <h1>תרגול טרמינולוגיה רפואית</h1>
      <Link to={"/trivia"}>
        <button className={classes.link}>טריוויה</button>
      </Link>
      <Link to={"/cards"}>
        <button className={classes.link}>כרטיסיות </button>
      </Link>
    </div>
  );
};

export default HomePage;
