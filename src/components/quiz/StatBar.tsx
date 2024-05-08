import classes from "./StatBar.module.scss";

type Props = {
  currentQuestion: number;
  totalQuestions: number;
  correct: number;
  incorrect: number;
};

function StatBar(props: Props) {
  return (
    <div className={classes.statrBarContainer}>
      <p>תשובות שגויות: {props.incorrect}</p>
      <p>תשובות נכונות: {props.correct}</p>
      <p>
        סה"כ שאלות: {props.currentQuestion}/{props.totalQuestions}
      </p>
    </div>
  );
}

export default StatBar;
