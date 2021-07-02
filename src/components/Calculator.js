import React from 'react';
import '../styles/style.css';
import App from './App';

const Calculator = () => (
  <div className="calculate__wrapper">
    <h2 className="centre">Lets do some Math</h2>
    <div className="calculator__box">
      <App />
    </div>
  </div>
);

export default Calculator;
