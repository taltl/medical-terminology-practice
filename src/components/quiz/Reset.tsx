import Reset_module from "./Reset.module.scss";
type Props = {
  totalQuestions: number;
  correctQuestions: number;
  onPress: () => void;
};

function Reset(props: Props) {
  return (
    <div className={Reset_module.resetContainer}>
      <h1 className={Reset_module.resetText}>
        הניקוד שלך:{" "}
        {Math.round((props.correctQuestions / props.totalQuestions) * 100)}%
      </h1>
      <button onClick={props.onPress} className={Reset_module.resetBtn}>
        לחץ לניסיון נוסף!
      </button>
    </div>
  );
}

export default Reset;
