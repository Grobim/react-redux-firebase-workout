import React from 'react';
import { connect } from 'react-redux';

import Messages from 'components/Chat/Messages';
import MessageSender from 'components/Chat/MessageSender';

import { actions as messagesActions } from 'redux/modules/messages';

const mapStateToProps = ({ messages, name }, props) => ({
  messages : messages.list,
  name
});
export class ChatContainer extends React.Component {

  componentDidMount () {
    const {
      syncMessages
    } = this.props;
    syncMessages();
  }

  render () {
    const {
      messages,
      name,
      addMessage
    } = this.props;
    return (
      <div>
        <Messages messages={messages} />
        <MessageSender sendMessage={(text) => {
          addMessage(name, text);
        }} />
      </div>
    );
  }
}

export default connect(mapStateToProps, messagesActions)(ChatContainer);
