import React from 'react';

export default class MessageSender extends React.Component {
  render () {
    const {
      sendMessage
    } = this.props;
    let input;
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          if (input.value) {
            sendMessage(input.value);
            input.value = '';
          }
        }}>
          <input ref={node => {
            input = node;
          }} />
          <button type='submit'>Send</button>
        </form>
      </div>
    );
  }
}
