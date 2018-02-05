import React from 'react';
import FindGame from '../find-game';

class Landing extends React.Component {
  constructor(props){
    super(props);

    
  }
  
  render(){
    return (
      <div id ="landing">
        <h1> Welcome to Geo-Jumper </h1>
        <FindGame/>
      </div>
    );
  }
}

export default Landing;