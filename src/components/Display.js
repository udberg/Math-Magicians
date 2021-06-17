import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ total }) => <div className="display">{total || '0'}</div>;

Display.propTypes = {
  total: PropTypes.string,
};

Display.defaultProps = {
  Display: '.',
};

export default Display;
