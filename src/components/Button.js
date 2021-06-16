import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ btnName, handleClick, className }) => (
  <button onClick={() => handleClick} className={className}>
    {btnName}
  </button>
);

Button.propTypes = {
  btnName: PropTypes.string,
  handleClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
