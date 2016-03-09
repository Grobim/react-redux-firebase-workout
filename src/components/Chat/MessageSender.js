import React from 'react';

class MessageSender extends React.Component {
  render () {
    const {
      sendMessage,
      name
    } = this.props;
    let input;
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          if (input.value) {
            sendMessage(name, input.value);
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

export default MessageSender;
