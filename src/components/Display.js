import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ total, next, operation }) => (
  <div className="display">
    {total || '0'}
    {operation ? operation : ''}
    {next}
  </div>
);

Display.propTypes = {
  total: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,
};

export default Display;
