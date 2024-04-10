import "./App.css";
import Select from "react-select";
import CardContainer from "./components/cardsContainer/CardContainer";
import TabsContainer from "./components/tabsContainer/TabsContainer";
import Quiz from "./components/quiz/quiz";

function App() {
  const questions= [
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

  return (
    // <TabsContainer/>
    <Quiz allQuestions={questions}/>
  );
}

export default App;
