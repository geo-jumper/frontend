import React from 'react';
import { withRouter } from 'react-router-dom';
import { initializeChat } from '../../utils/socketIO';

// On click user goes to /chat
const JoinChat = withRouter(({ history }) => {
  return (
    <button onClick={() => {
      history.push('/chat');
      initializeChat();
    }}>
      Join Chat
    </button>
  );
});

export default JoinChat;
