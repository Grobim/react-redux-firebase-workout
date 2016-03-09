import React from 'react';
import { connect } from 'react-redux';

import { actions as messagesActions } from 'redux/modules/messages';

import Messages from 'components/Chat/Messages';
import MessageSender from 'components/Chat/MessageSender';

const mapStateToProps = ({ messages, name }) => ({ messages, name });
class ChatContainer extends React.Component {
  componentDidMount () {
    const {
      syncMessages
    } = this.props;
    syncMessages();
  }

  get sender () {
    const {
      name,
      sendMessage
    } = this.props;
    if (name) {
      return <MessageSender sendMessage={sendMessage} name={name} />;
    }
  }

  render () {
    const {
      messages
    } = this.props;
    return (
      <div>
        <Messages messages={messages} />
        {this.sender}
      </div>
    );
  }
}

export default connect(mapStateToProps, messagesActions)(ChatContainer);
