import React from 'react';
import FindGame from '../find-game';

class Landing extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div id ="instructions">
        <h1>Instructions</h1>
        <li>Up arrow - Jump</li>

        <li>Left arrow - Move left</li>

        <li>Right arrow - Move right</li>
        <li>Down arrow - Parachute/Glide</li>
      </div>
    );
  }
}

export default Landing;
