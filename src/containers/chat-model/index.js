import React, { Component } from 'react';
import ChatInterface from '../../components/chat-interface';
import { getSocket, sendMessage } from '../../utils/socketIO';

class ChatModel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      socket: null,
    };

    this.handleComplete = this.handleComplete.bind(this);
  }

  handleComplete(data) {
    const message = data.message;
    sendMessage(message);
  }

  componentWillMount() {
    this.setState({ socket: getSocket() });
  }

  render() {

    // update state on receive message
    this.state.socket.on('receive-message', data => {
      console.log('___***___***___***____');
      this.setState(previousState => {
        return { messages: [...previousState.messages, data.message] };
      });
    });

    return (
      <div>
        <ChatInterface
          onComplete={this.handleComplete}
        />
        <ul>
          {
            this.state.messages.map(message => {
              return <li key={new Date()}>{ message }</li>;
            })
          }
        </ul>
      </div>
    );
  }
}

export default ChatModel;
