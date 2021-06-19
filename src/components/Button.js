import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ btnName, handleClick, className }) => (
  <button type="button" onClick={() => handleClick} className={className}>
    {btnName}
  </button>
);

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
