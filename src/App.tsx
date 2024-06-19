import "./App.css";
import TabsContainer from "./components/tabsContainer/TabsContainer";
import Quiz from "./components/quiz/quiz";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/homePage/HomePage";
import data from "./data.json";
import StartQuiz from "./components/quiz/startQuiz";
import Medications from "./components/medications/medications";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/medical-terminology-practice"
          element={<HomePage />}
        ></Route>
        <Route path="/react-select-test" element={<HomePage />}></Route>
        <Route
          path="/medical-terminology-practice/cards"
          element={<TabsContainer />}
        ></Route>
        <Route
          path="/medical-terminology-practice/trivia"
          element={<StartQuiz />}
        ></Route>
        <Route
          path="/medical-terminology-practice/medications"
          element={<Medications />}
        ></Route>
        <Route
          path="/medical-terminology-practice/trivia/1"
          element={<Quiz quizData={data.sourceWordsCards} />}
        ></Route>
        <Route
          path="/medical-terminology-practice/trivia/2"
          element={<Quiz quizData={data.sufixWords} />}
        ></Route>
        <Route
          path="/medical-terminology-practice/trivia/3"
          element={<Quiz quizData={data.prefixWords} />}
        ></Route>
        <Route
          path="/medical-terminology-practice/trivia/4"
          element={<Quiz quizData={data.locationWords} />}
        ></Route>
        <Route
          path="/medical-terminology-practice/trivia/5"
          element={<Quiz quizData={data.medications} madications={true} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
