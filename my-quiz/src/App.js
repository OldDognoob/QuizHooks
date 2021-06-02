import React,{useState} from "react";
import QuestionsList from "./components/QuestionsList";
import {v4 as uuidv4} from "uuid";
import './App.css';

function App() {
  const[currentQuestion, setCurrentQuestion] = useState(0);
  const[score,setScore] = useState(0);
  return (
    <div className="app-wrapper">
      <div>
        <div className="questions-section-wrapper">
          <div className="question-count">
            Question{currentQuestion +1} of {QuestionsList.length}
          </div>
          <div className="question">
            {QuestionsList[currentQuestion].question}
          </div>
        </div>
      </div>
    </div>);
}

export default App;
