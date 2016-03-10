import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { actions as nameActions } from 'redux/modules/name';

import DisplayName from 'components/Chat/DisplayName';
import NameChanger from 'components/Chat/NameChanger';

const mapStateToProps = ({ name }) => ({
  name
});
export class NameContainer extends React.Component {
  static propTypes = {
    name       : PropTypes.string.isRequired,
    changeName : PropTypes.func.isRequired
  };

  render () {
    const {
      name,
      changeName
    } = this.props;
    return (
      <div>
        <DisplayName name={name} />
        <NameChanger changeName={changeName} />
      </div>
    );
  }
}

export default connect(mapStateToProps, nameActions)(NameContainer);
