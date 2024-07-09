import React from 'react';

function QuizStart({ numQuestions, handleNumQuestionsChange, startQuiz }) {
  return (
    <div className="start-screen">
      <h1 className="title">초등학생 상식 퀴즈</h1>
      <div className="num-questions">
        <label htmlFor="num-questions">문제 수</label>
        <select
          id="num-questions"
          className="number-select"
          value={numQuestions}
          onChange={handleNumQuestionsChange}
        >
          <option value={3}>3</option>
          <option value={5}>5</option>
          <option value={10}>10</option>
        </select>
      </div>
      <button onClick={startQuiz} className="start-button">
        시작하기
      </button>
    </div>
  );
}

export default QuizStart;