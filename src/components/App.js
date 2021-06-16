import React from 'react';
import '../App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

const App = () => (
  <>
    <Display total="0" />
    <ButtonPanel handleClick={(f) => f} />
  </>
);

export default App;
