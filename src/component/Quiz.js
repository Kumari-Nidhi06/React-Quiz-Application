import React, { useState } from "react";
import { quizData } from "../data/QuizData";
import Confetti from "react-confetti";
import ShowResult from "./ShowResult";
import "../App.css";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const changeQuestion = () => {
    updateScore();
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClickedOption(0);
    } else {
      setShowResult(true);
    }
  };

  const updateScore = () => {
    if (clickedOption === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const resetAll = () => {
    setShowResult(false);
    setCurrentQuestion(0);
    setClickedOption(0);
    setScore(0);
  };

  return (
    <div>
      {score === quizData.length && <Confetti />}
      <p className="heading-txt">Quiz APP</p>
      <div className="container">
        {showResult ? (
            <ShowResult
              score={score}
              totalScore={quizData.length}
              tryAgain={resetAll}
            />
        ) : (
          <>
            <div className="question">
              <span id="question-number">{currentQuestion + 1}. </span>
              <span id="question-txt">
                {quizData[currentQuestion].question}
              </span>
            </div>
            <div className="option-container">
              {quizData[currentQuestion].options.map((option, i) => {
                return (
                  <button
                    className={`option-btn ${
                      clickedOption === i + 1 ? "checked" : ""
                    }`}
                    key={i}
                    onClick={() => setClickedOption(i + 1)}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            <input
              type="button"
              value="Next"
              id="next-button"
              onClick={changeQuestion}
              disabled={clickedOption === 0}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;
