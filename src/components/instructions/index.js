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
        <p> Move using the arrow keys and space-bar on your keyboard!</p>
        <div id ='keys'>
          <div id ='up'>Jump</div>
          <div id ='left'>Move left  </div>
          <div id ='down'>Glide</div>
          <div id ='right'>Move right</div>
          <div id ='space'>Jump</div>
        </div>

        {/* <li>Up arrow - Jump</li>
        <li>Left arrow - Move left</li>
        <li>Right arrow - Move right</li>
        <li>Down arrow - Glide</li> */}
      </div>
    );
  }
}

export default Landing;
