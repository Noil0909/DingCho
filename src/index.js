import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './index.css';
import Main from './component/page/Main';
import Example from './component/page/TestPage';
import CrudList from './component/page/crud/CrudList';
import TestPage2 from './component/page/TestPage2';
import TestPage3 from './component/page/TestPage3';
import TestPage4 from './component/page/TestPage4';
import TestPage5 from './component/page/TestPage5';
import TestPage6 from './component/page/TestPage6';
import TestPage7 from './component/page/TestPage7';
import Diary from './component/page/diary/Diary';
import Register from './component/user/Register';
import Quiz from './component/page/quiz/Quiz';
import QuizForm from './component/page/quiz/QuizForm';
import QuizList from './component/page/quiz/QuizList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="main" element={<Main/>}/>
    <Route path="crud" element={<CrudList/>}/>
    <Route path="diary" element={<Diary/>}/>
    <Route path="quiz" element={<Quiz/>}/>
    <Route path="quizForm" element={<QuizForm/>}/>
    <Route path="quizList" element={<QuizList/>}/>
    <Route path="quizUpdate/id" element={<quizUpdate/>}/>

    <Route path="Example" element={<Example/>}/>
    <Route path="testpage2" element={<TestPage2/>}/>
    <Route path="testpage3" element={<TestPage3/>}/>
    <Route path="testpage4" element={<TestPage4/>}/>
    <Route path="testpage5" element={<TestPage5/>}/>
    <Route path="testpage6" element={<TestPage6/>}/>
    <Route path="testpage7" element={<TestPage7/>}/>
    <Route path="register" element={<Register/>}/>
    
  </Routes>
</BrowserRouter>
);