import "./App.css";
import TabsContainer from "./components/tabsContainer/TabsContainer";
import Quiz from "./components/quiz/quiz";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/homePage/HomePage";
import data from "./data.json";
import StartQuiz from "./components/quiz/startQuiz";

function App() {
  return (
    // <TabsContainer/>
    // <Quiz />
    <BrowserRouter>
      <Routes>
        <Route path="/react-select-test" element={<HomePage />}></Route>
        <Route path="/cards" element={<TabsContainer />}></Route>
        <Route path="/trivia" element={<StartQuiz />}></Route>
        <Route
          path="/trivia/1"
          element={<Quiz quizData={data.sourceWordsCards} />}
        ></Route>
        <Route
          path="/trivia/2"
          element={<Quiz quizData={data.sufixWords} />}
        ></Route>
        <Route
          path="/trivia/3"
          element={<Quiz quizData={data.prefixWords} />}
        ></Route>
        <Route
          path="/trivia/3"
          element={<Quiz quizData={data.locationWords} />}
        ></Route>
        <Route
          path="/trivia/3"
          element={<Quiz quizData={data.pills} />}
        ></Route>

        {/* <Route path="/trivia/2" element={< />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
