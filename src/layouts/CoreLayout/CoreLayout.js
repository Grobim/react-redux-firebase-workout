import React, { PropTypes } from 'react';
import 'styles/global/global.scss';
import 'styles/core.scss';

const CoreLayout = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

CoreLayout.propTypes = {
  children : PropTypes.element
};

export default CoreLayout;
