import React from 'react';

export default class Messages extends React.Component {

  render () {
    const {
      messages
    } = this.props;
    return (
      <ul>
      {
        messages.map(message => {
          return <li key={message.id}>{message.name + ' : ' + message.text}</li>;
        })
      }
      </ul>
    );
  }
}
