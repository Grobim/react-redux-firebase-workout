import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import classes from './NameContainer.scss';

import ChangeName from 'components/Chat/ChangeName';

import { actions as nameActions } from 'redux/modules/name';

const mapStateToProps = ({ name }) => ({
  name
});
export class NameContainer extends React.Component {
  static propTypes = {
    name : PropTypes.string,
    changeName : PropTypes.func.isRequired
  };

  get displayName () {
    const {
      name
    } = this.props;
    if (name) {
      return <span className={classes['name']}>{'Name : ' + name}</span>;
    }
    return <span>Please choose a name</span>;
  }

  render () {
    const {
      changeName
    } = this.props;
    return (
      <div>
        {this.displayName}
        <ChangeName changeName={changeName} />
      </div>
    );
  }
}

export default connect(mapStateToProps, nameActions)(NameContainer);
