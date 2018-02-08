import React from 'react';
import FindGame from '../find-game';
import Profile from '../profile';
import Instructions from '../instructions';

class Landing extends React.Component {
  constructor(props){
    super(props);
  }

  // componentWillMount() {
  //   const OK = this.props.getLandingOK();
  //   if (!OK) {
  //     this.props.history.push('/');
  //   }
  // }

  render(){
    return (
      <div id ="landing">
        <h1> Welcome to Geo-Jumper </h1>
        <FindGame
          history={this.props.history}
          toggleMatchmakingOK={this.props.toggleMatchmakingOK}
        />
        <Profile/>
        <Instructions/>
      </div>
    );
  }
}

export default Landing;
