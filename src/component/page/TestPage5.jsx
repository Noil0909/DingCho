import React from 'react';
import {useNavigate} from 'react-router-dom';
import '../../css/TestPage5.css';
import QuizNav from '../common/QuizNav';

function TestPage5() {
  const navigate = useNavigate();
  
  return (
    <div>
       <QuizNav/>
    <div className="start-screen"> 
        <h1 className="title">초등학생 상식 퀴즈</h1>
      <div className="buttons">
        <button onClick={() => {navigate('/TestPage6')}} className="button">혼자하기</button>
        <button onClick={() => {navigate('/TestPage7')}} className="button">같이하기</button>
      </div>
    </div>
    </div>
  );
}
export default TestPage5;