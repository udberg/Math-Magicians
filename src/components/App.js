import React from 'react';
import '../App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

const App = () => {
  return (
    <React.Fragment>
      <Display total={'0'} />
      <ButtonPanel handleClick={(f) => f} />
    </React.Fragment>
  );
};

export default App;
