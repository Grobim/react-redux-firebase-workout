import React from 'react';

export default class DisplayName extends React.Component {

  get displayedText () {
    const {
      name
    } = this.props;
    if (name) {
      return <span>{'Welcome ' + name}</span>;
    }
    return <span>Choose a name</span>;
  }

  render () {
    return (
      <div>{this.displayedText}</div>
    );
  }
}
