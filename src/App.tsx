import "./App.css";
import Select from "react-select";
import CardContainer from "./components/cardsContainer/CardContainer";
import TabsContainer from "./components/tabsContainer/TabsContainer";
import Quiz from "./components/quiz/quiz";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/homePage/HomePage";

function App() {
  return (
    // <TabsContainer/>
    // <Quiz />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cards" element={<TabsContainer />}></Route>
        <Route path="/trivia" element={<Quiz />}></Route>
        {/* <Route path="/trivia/1" element={< />}></Route> */}
        {/* <Route path="/trivia/2" element={< />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
