import { Link } from "react-router-dom";
import classes from "./../quiz/startQuiz/startQuiz.module.scss";
import globalClasses from "./../../global.module.scss";

const StartQuiz: React.FC = () => {
  return (
    <>
      <div className={globalClasses.back}>
        <Link to="/">חזרה</Link>
      </div>
      <div className={classes.startTrivia}>
        <h1>נושאים לטריוויה</h1>
        <Link to={"/trivia/1"}>
          <button className={classes.link}>מילות שורש</button>
        </Link>
        <Link to={"/trivia/2"}>
          <button className={classes.link}>סופיות</button>
        </Link>
        <Link to={"/trivia/3"}>
          <button className={classes.link}>תחיליות</button>
        </Link>
        <Link to={"/trivia/4"}>
          <button className={classes.link}>מילות מיקום</button>
        </Link>
        <Link to={"/trivia/5"}>
          <button className={classes.link}>תרופות</button>
        </Link>
      </div>
    </>
  );
};

export default StartQuiz;
