import React from 'react';
import { getSocket } from '../../utils/socketIO';

class MatchResults extends React.Component {
  constructor(props){
    super(props); 
    this.state = {gamefinished:true};
  }

  render(){
      
   
    return (
      <div id = "match-results">
        <h1> Results </h1>
        <p>Player One Score: Scores</p>
        <br/>
        <p>Player Two Score: Scores</p>
        <br/>
        
      </div>
    );
  }
}
export default MatchResults;