import React, { useState,useEffect } from 'react';
import StartScreen from './QuizStart';
import QuizContent from './QuizContent';
import '../../css/QuizApp.css';
import axios from "axios";

function QuizAppSingle() {
  const [quizData, setQuizData] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [numQuestions, setNumQuestions] = useState(3);
  const [nickname, setNickname] = useState("나");
  const [userColor, setUserColor] = useState("white");

  useEffect(() => {
    axios.get('http://localhost:8080/quizGame')
      .then(response => {
        setQuizData(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the quizzes!", error);
      });
  }, []);

  const handleNumQuestionsChange = (e) => {
    setNumQuestions(parseInt(e.target.value));
  };

  const startQuiz = () => {
    setQuizStarted(true);
  };

  const handleRestart = () => {
    setQuizStarted(false);
  };

  return (
    <div className="quiz-container">
      {!quizStarted ? (
        <StartScreen
          numQuestions={numQuestions}
          handleNumQuestionsChange={handleNumQuestionsChange}
          startQuiz={startQuiz}
        />
      ) : (
        <QuizContent
        quizData={quizData.slice(0, numQuestions)}
          numQuestions={numQuestions}
          nickname={nickname}
          userColor={userColor}
          handleRestart={handleRestart}
        />
      )}
    </div>
  );
}

export default QuizAppSingle;