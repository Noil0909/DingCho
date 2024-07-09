import React from 'react';
import logo from '../../images/logo.png';
import '../../css/QuizNav.css';
import { Link } from 'react-router-dom';

function QuizNav() {
  return (
    <div className="header">
      <div className="navbar">
        <div className="logo-container">
          <Link to="/testpage5">
            <img src={logo} className="logo" />
          </Link>
          <span className="logo-text">DingCho</span>
        </div>
        <div className="participant-name">
          <span>참가자1</span>
        </div>
      </div>
    </div>
  );
}

export default QuizNav;