import React from 'react';

export default class ChangeName extends React.Component {
  render () {
    const {
      changeName
    } = this.props;
    let input;

    return (
      <div>
        <input ref={node => {
          input = node;
        }} />
        <button onClick={() => {
          changeName(input.value);
          input.value = '';
        }}>Change Name</button>
      </div>
    );
  };
}
