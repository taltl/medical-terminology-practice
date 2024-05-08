import React, { useEffect, useState } from "react";
import QuestionComp from "./Question";
import StatBar from "./StatBar";
import Reset from "./Reset";
import Quiz_module from "./quiz.module.scss";

import data from "../../data.json";

const Quiz: React.FC = () => {
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

  const shuffle = (a: string[]) => {
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
    ...data.sufixWords?.map((a) => a.value),
    ...data.sourceWordsCards.map((a) => a.value),
    ...data.prefixWords?.map((a) => a.value),
  ];

  const allQuestionsLenght = data.sufixWords.length;

  useEffect(() => {
    if (currentQuestionIdx < allQuestionsLenght) {
      const choices = shuffle([
        ...getRandom(allChoices, 3),
        data.sufixWords[currentQuestionIdx].value,
      ]);
      const currectAnswerIdx = choices.findIndex((c) => {
        return c === data.sufixWords[currentQuestionIdx].value;
      });
      setQuestionObj({
        question: data.sufixWords[currentQuestionIdx].hebrew
          ? `${data.sufixWords[currentQuestionIdx].english} ${data.sufixWords[currentQuestionIdx].hebrew}`
          : data.sufixWords[currentQuestionIdx].english,
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
        <Reset
          totalQuestions={allQuestionsLenght}
          correctQuestions={correctAnswers}
          onPress={reset}
        />
      </div>
    );

  return (
    <div>
      <StatBar
        currentQuestion={currentQuestionIdx + 1}
        totalQuestions={allQuestionsLenght}
        correct={correctAnswers}
        incorrect={incorrectAnswers}
      />
      <QuestionComp question={questionObj ?? ({} as any)} onSubmit={onSubmit} />
      {waitingToAdvance && (
        <button onClick={advance} className={Quiz_module.nextQuestion}>
          שאלה הבאה
        </button>
      )}
    </div>
  );
};

export default Quiz;
