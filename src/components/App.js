import React, { useState } from 'react';
import '../styles/App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

const App = () => {
  const [total,setTotal] = useState('')
  const [next,setNext] = useState('')
  const [operation,setOperation] = useState(null)
  

  const handleClick = (btnName) => {
    const data = {total,next,operation};
    const calc = calculate(data, btnName);
    setTotal(calc.total)
    setNext(calc.next)
    setOperation(calc.operation)
  }

    return (
      <div>
        <Display total={total} next={next} operation={operation} />
        <ButtonPanel handleClick={handleClick} />
      </div>
    );
}

export default App;
