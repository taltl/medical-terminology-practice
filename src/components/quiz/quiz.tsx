import React, { useEffect, useState } from "react";
import QuestionComp from "./Question";
import StatBar from "./StatBar";
import Reset from "./Reset";
import Quiz_module from "./quiz.module.scss";

import data from "../../data.json";
import { Link } from "react-router-dom";
import globalClasses from "./../../global.module.scss";
import classes from "./quiz.module.scss";

type QuizProps = {
  quizData: any[];
};

const Quiz: React.FC<QuizProps> = ({ quizData }) => {
  const getRandom = (arr: string[], n: number): string[] => {
    const result = new Array(n);
    let len = arr.length;
    const taken = new Array(len);
    if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  };

  const shuffle = (a: any[]) => {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  };

  const [questionObj, setQuestionObj] = useState<{
    question: string;
    choices: string[];
    currectAnswerIdx: number;
  }>();

  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [waitingToAdvance, setWaitingToAdvance] = useState(false);

  const allChoices = [
    ...quizData?.map((a) => a.value),
    ...data.sourceWordsCards.map((a) => a.value),
    ...data.prefixWords?.map((a) => a.value),
  ];

  const allQuestionsLenght = quizData.length;

  useEffect(() => {
    shuffle(quizData);
  }, []);

  useEffect(() => {
    if (currentQuestionIdx < allQuestionsLenght) {
      const answerIndex = allChoices.findIndex((c: string) => {
        return quizData[currentQuestionIdx].value === c;
      });
      allChoices.splice(answerIndex, 1);
      const choices = shuffle([
        ...getRandom(allChoices, 3),
        quizData[currentQuestionIdx].value,
      ]);

      const currectAnswerIdx = choices.findIndex((c) => {
        return c === quizData[currentQuestionIdx].value;
      });

      setQuestionObj({
        question: quizData[currentQuestionIdx].hebrew
          ? `${quizData[currentQuestionIdx].english} ${quizData[currentQuestionIdx].hebrew}`
          : quizData[currentQuestionIdx].english,
        choices: choices,
        currectAnswerIdx: currectAnswerIdx,
      });
    }
  }, [currentQuestionIdx]);

  const onSubmit = (correct: boolean) => {
    if (correct) setCorrectAnswers(correctAnswers + 1);
    else setIncorrectAnswers(incorrectAnswers + 1);
    setWaitingToAdvance(true);
  };

  const advance = () => {
    setWaitingToAdvance(false);
    setCurrentQuestionIdx(currentQuestionIdx + 1);
  };

  const reset = () => {
    setCurrentQuestionIdx(0);
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
    setWaitingToAdvance(false);
  };

  if (currentQuestionIdx >= allQuestionsLenght)
    return (
      <div className={Quiz_module.resetContainer}>
        <div className={globalClasses.back}>
          <Link to="/medical-terminology-practice">חזרה</Link>
        </div>
        <Reset
          totalQuestions={allQuestionsLenght}
          correctQuestions={correctAnswers}
          onPress={reset}
        />
      </div>
    );

  return (
    <div className={classes.quizContainer}>
      <div className={globalClasses.back}>
        <Link to="/medical-terminology-practice/trivia">חזרה</Link>
      </div>
      <StatBar
        currentQuestion={currentQuestionIdx + 1}
        totalQuestions={allQuestionsLenght}
        correct={correctAnswers}
        incorrect={incorrectAnswers}
      />
      <QuestionComp question={questionObj ?? ({} as any)} onSubmit={onSubmit} />
      {waitingToAdvance && (
        <button onClick={advance} className={Quiz_module.nextQuestion}>
          לשאלה הבאה
        </button>
      )}
    </div>
  );
};

export default Quiz;
