import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './Layout.scss';

const Layout = ({ children }) => (
  <Fragment>
    {children}
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
