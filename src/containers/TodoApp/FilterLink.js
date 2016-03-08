import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { actions as filterActions } from 'redux/modules/filter';

import Link from 'components/TodoApp/Link';

const mapStateToProps = ({ currentFilter }, { filter }) => ({
  active : currentFilter === filter
});
export class FilterLink extends React.Component {
  static propTypes = {
    children            : PropTypes.element,
    filter              : PropTypes.string.isRequired,
    setVisibilityFilter : PropTypes.func.isRequired,
    active              : PropTypes.bool.isRequired
  };

  render () {
    const {
      children,
      filter,
      setVisibilityFilter,
      active
    } = this.props;

    return (
      <Link
        active={active}
        setVisibilityFilter={() => setVisibilityFilter(filter)}
      >
        {children}
      </Link>
    );
  }
}

export default connect(mapStateToProps, filterActions)(FilterLink);
