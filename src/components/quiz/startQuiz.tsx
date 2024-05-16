import { Link } from "react-router-dom";
import classes from "./../quiz/startQuiz/startQuiz.module.scss";
import globalClasses from "./../../global.module.scss";
import { useNavigate } from "react-router-dom";

const StartQuiz: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={globalClasses.back}>
        <Link to="/medical-terminology-practice/">חזרה</Link>
      </div>
      <div className={classes.startTrivia}>
        <h1>נושאים לטריוויה</h1>
        <button
          onClick={() => navigate("/medical-terminology-practice/trivia/1")}
          className={classes.link}
        >
          מילות שורש
        </button>
        <button
          onClick={() => navigate("/medical-terminology-practice/trivia/2")}
          className={classes.link}
        >
          סופיות
        </button>
        <button
          onClick={() => navigate("/medical-terminology-practice/trivia/3")}
          className={classes.link}
        >
          תחיליות
        </button>
        <button
          onClick={() => navigate("/medical-terminology-practice/trivia/4")}
          className={classes.link}
        >
          מילות מיקום
        </button>
        {/* <button
            onClick={() => navigate("/medical-terminology-practice/trivia/5")}
            className={classes.link}
          >
            תרופות
          </button> */}
      </div>
    </>
  );
};

export default StartQuiz;
