import React, { Component } from 'react';
import '../App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '.../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: '',
      next: '',
      operation: null,
    };

    this.handlClick = this.handleClick.bind(this);
  }

handlClick(btnName) {
  const data = this.state;
  const calc = calculate(data, btnName);
  this.setState(()=>{
    return {
      ...calc
    }
  })
}  
render() {
  const { total, next, operation } = this.setState;
  return (
    <div>
      <display total={total} next={next} operation={operation} />
      <ButtonPanel handlClick={this.handlClick} />
    </div>
  );
}
}

export default App;
