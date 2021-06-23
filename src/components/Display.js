import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ total, next, operation }) => (
  <div className="display"> 
  {total || '0'}
  {operattion ? operation : ''}
  {next}
  </div>
);

Display.propTypes = {
  total: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
};

export default Display;
