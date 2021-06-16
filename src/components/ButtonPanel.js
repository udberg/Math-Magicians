import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const nums = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];
const ops = ['/', 'x', '-', '+', '='];
const topOps = ['AC', '+/-', '%'];

const ButtonPanel = ({ handleClick }) => (
  <div className="calculator">
    <div className="nums-container">
      <div className="top-btn">
        {topOps.map((op) => (
          <Button
            btnName={op}
            handleClick={handleClick}
            className={'light-grey'}
            key={op}
          />
        ))}
      </div>
      {nums.map((num) => (
        <Button
          btnName={num}
          handleClick={handleClick}
          className={`dark-grey ${num === '0' && 'big-h'}`}
          key={num}
        />
      ))}

      <Button
        btnName={'.'}
        handleClick={handleClick}
        className={'light-grey'}
        key={'.'}
      />
    </div>
    <div className="ops-container">
      {ops.map((op) => (
        <Button
          btnName={op}
          handleClick={handleClick}
          className={'orange'}
          key={op}
        />
      ))}
    </div>
  </div>
);

ButtonPanel.propTypes = {
  handleClick: PropTypes.func,
};

export default ButtonPanel;
