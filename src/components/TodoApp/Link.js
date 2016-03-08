import React, { PropTypes } from 'react';

export default class Link extends React.Component {
  static propTypes = {
    active              : PropTypes.bool.isRequired,
    children            : PropTypes.element,
    setVisibilityFilter : PropTypes.func.isRequired
  };

  render () {
    const {
      active,
      children,
      setVisibilityFilter
    } = this.props;

    if (active) {
      return <span>{children}</span>;
    }
    return (
      <a href='#' onClick={e => {
        e.preventDefault();
        setVisibilityFilter();
      }}>
        {children}
      </a>
    );
  }
}
