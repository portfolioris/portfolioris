import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Retain.scss';

const Retain = ({ size, children }) => (
  <div className={classNames('o-retain', {
    'o-retain--full': size === 'full',
  })}
  >
    {children}
  </div>
);

Retain.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string,
};

Retain.defaultProps = {
  children: [],
  size: null,
};

export default Retain;
