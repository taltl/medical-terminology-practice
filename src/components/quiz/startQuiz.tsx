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
        <div className={classes.link}>
          <Link to={"/trivia/1"}>
            <span>מילות שורש</span>
          </Link>
        </div>
        <div className={classes.link}>
          <Link to={"/trivia/2"}>
            <span>סופיות</span>
          </Link>
        </div>
        <div className={classes.link}>
          <Link to={"/trivia/3"}>
            <span>תחיליות</span>
          </Link>
        </div>
        <div className={classes.link}>
          <Link to={"/trivia/4"}>
            <span>מילות מיקום</span>
          </Link>
        </div>
        <div className={classes.link}>
          <Link to={"/trivia/5"}>
            <span>תרופות</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default StartQuiz;
