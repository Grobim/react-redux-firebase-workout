import React from 'react';

export default class NameChanger extends React.Component {
  render () {
    const {
      changeName
    } = this.props;
    let input;
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          if (input.value) {
            changeName(input.value);
            input.value = '';
          }
        }}>
          <input ref={node => {
            input = node;
          }} />
          <button type='submit'>New name</button>
        </form>
      </div>
    );
  }
}
