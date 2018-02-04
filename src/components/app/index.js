import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import JoinChat from '../join-chat';
import ChatModel from '../../containers/chat-model';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route exact path='/' component={JoinChat} />
          <Route path='/chat' component={ChatModel} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
