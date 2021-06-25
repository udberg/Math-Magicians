import React, { Component } from 'react';
import '../App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: '',
      next: '',
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(btnName) {
    const data = this.state;
    const calc = calculate(data, btnName);
    this.setState(()=>{
      return {
        ...calc
      }
    })
  }
  render() {
    const { total, next, operation } = this.state;
    return (
      <div>
        <Display total={total} next={next} operation={operation} />
        <ButtonPanel handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
