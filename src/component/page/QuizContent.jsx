import React, { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

function QuizContent({
  quizData,
  numQuestions,
  nickname,
  userColor,
  handleRestart,
}) {
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [score, setScore] = useState({});
  const [timeLeft, setTimeLeft] = useState(30);
  const [showAnswer, setShowAnswer] = useState(false);
  const [chats, setChats] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);

  const chatBoxRef = useRef(null);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId);
    } else if (timeLeft === 0) {
      setShowAnswer(true);
      setTimeout(() => {
        if (currentQuizIndex === numQuestions - 1) {
          setIsGameOver(true);
        } else {
          setShowAnswer(false);
          setCurrentQuizIndex((prevIndex) => prevIndex + 1);
          setTimeLeft(30);
        }
      }, 5000);
    }
  }, [timeLeft, currentQuizIndex, numQuestions]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentAnswer.trim() === '') {
      return;
    }
    const isCorrect = currentAnswer.toLowerCase() === quizData[currentQuizIndex].answer.toLowerCase();
    const newChats = [...chats, { nickname, message: currentAnswer, color: userColor }];

    setChats(newChats.slice(-10)); // 최근 10개의 채팅만 유지
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;

    if (isCorrect) {
      setScore((prevScore) => ({
        ...prevScore,
        [nickname]: (prevScore[nickname] || 0) + 1,
      }));
      if (currentQuizIndex === numQuestions - 1) {
        setIsGameOver(true);
      } else {
        setCurrentQuizIndex(currentQuizIndex + 1);
        setTimeLeft(30);
      }
    }
    setCurrentAnswer("");
  };

  return (
    <>
      <div className="score-board">
        {Object.entries(score).map(([user, points]) => (
          <div key={user} style={{ color: userColor }}>{user}: {points}</div>
        ))}
      </div>
      <div className="quiz-content">
        {isGameOver ? (
          <div className="game-over">
            <h3>게임 종료!</h3>
            <p>최종 점수: {Object.values(score).reduce((a, b) => a + b, 0)}</p>
            <button onClick={handleRestart} className="restart-button">처음으로 돌아가기</button>
          </div>
        ) : (
          <>
            <h3>초등학생 상식 퀴즈 - 혼자하기</h3>
            <h4>문제 {currentQuizIndex + 1}/{numQuestions}</h4>
            <h3>{quizData[currentQuizIndex].question}</h3>
            {showAnswer && <p>답: {quizData[currentQuizIndex].answer}</p>}
            <p>남은 시간: {timeLeft}</p>
          </>
        )}
      </div>
      <div className="chat-box" ref={chatBoxRef}>
        {chats.map((chat, index) => (
          <div key={index} style={{ color: chat.color }}>
            <strong>{chat.nickname}:</strong> {chat.message}
          </div>
        ))}
      </div>
      {!showAnswer && !isGameOver && (
        <form onSubmit={handleSubmit} className="answer-form">
          <input
            type="text"
            value={currentAnswer}
            onChange={(e) => setCurrentAnswer(e.target.value)}
          />
          <button className="submitButton" type="submit">제출</button>
        </form>
      )}
    </>
  );
}

export default QuizContent;