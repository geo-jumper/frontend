import './_instructions.scss';
import React from 'react';
import FindGame from '../find-game';

class Instructions extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div id ="instructions">
        <h1>How To Play:</h1>
        <p> Move using the arrow keys and space-bar on your keyboard!</p>
      </div>
    );
  }
}

export default Instructions;

