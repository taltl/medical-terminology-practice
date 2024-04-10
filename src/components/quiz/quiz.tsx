import React, { useState } from "react";
import QuestionComp from "./Question";
import StatBar from "./StatBar";
import Reset from "./Reset";
import './quiz.module.scss'

const Quiz: React.FC<{ allQuestions: any }> = () => {
  const allQuestions = {
    "questions": [
      {
        "question": "What is my Name?",
        "choices": ["Tim", "John", "Susan", "Burt"],
        "correctAnswerIdx": 0
      },
      {
        "question": "What is my last Name?",
        "choices": ["Ruscica", "Smith", "Ann", "Jose"],
        "correctAnswerIdx": 0
      }
    ]
  }

  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [waitingToAdvance, setWaitingToAdvance] = useState(false);

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

  if (currentQuestionIdx >= allQuestions.questions?.length)
    return (
      <Reset
        totalQuestions={allQuestions.questions.length}
        correctQuestions={correctAnswers}
        onPress={reset}
      />
    );

  return (
    <div >
      <StatBar
        currentQuestion={currentQuestionIdx + 1}
        totalQuestions={allQuestions.questions.length}
        correct={correctAnswers}
        incorrect={incorrectAnswers}
      />
      <QuestionComp
        question={allQuestions.questions[currentQuestionIdx]}
        onSubmit={onSubmit}
      />
      {waitingToAdvance && (
        <button
          onClick={advance}
          className='answer'
        >
          שאלה הבאה
        </button>
      )}
    </div>
  );
};

export default Quiz;
