import React from 'react';
import superagent from 'superagent';
import FindGame from '../find-game';
import Welcome from '../welcome';
import Leaderboard from '../leaderboard';
import Instructions from '../instructions';
import * as routes from '../../routes';

class Landing extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentWillMount() {
    const OK = this.props.getLandingOK();
    if (!OK) {
      this.props.history.push('/');
    } else {
      const token = sessionStorage.getItem('X-GEO-JUMPER-TOKEN');
      console.log(token);
      if (token) {
        return superagent.get(`${routes.API_ROUTE}${routes.PROFILE_ROUTE}/me`)
          .set('Authorization', `Bearer ${token}`)
          .then(response => {
            const parsedResponse = JSON.parse(response.text);
            console.log(parsedResponse);
            this.setState({ ...parsedResponse });
            return superagent.get(`${routes.API_ROUTE}${routes.PROFILE_ROUTE}`)
              .then(response => {
                const parsedResponse = JSON.parse(response.text);
                const parsedData = parsedResponse.data;
                this.setState({ leaderboard: parsedData });
              });
          });
      } else {
        return superagent.get(`${routes.API_ROUTE}${routes.PROFILE_ROUTE}`)
          .then(response => {
            const parsedResponse = JSON.parse(response.text);
            const parsedData = parsedResponse.data;
            this.setState({ leaderboard: parsedData });
          });
      }
    }
  }

  render(){
    return (
      <div id ="landing">
        <h1> Welcome to Geo-Jumper </h1>
        <FindGame
          history={this.props.history}
          toggleMatchmakingOK={this.props.toggleMatchmakingOK}
        />
        <Welcome name={this.state.name} wins={this.state.wins}/>
        <Leaderboard leaderboard={this.state.leaderboard}/>
        <Instructions/>
      </div>
    );
  }
}

export default Landing;
