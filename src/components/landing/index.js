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
      // LOGGED IN USERS
      if (token) {
        // GET USER DATA
        return superagent.get(`${__API_URL__}${routes.PROFILE_ROUTE}/me`) // eslint-disable-line
          .set('Authorization', `Bearer ${token}`)
          .then(response => {
            const parsedResponse = JSON.parse(response.text);
            this.setState({ ...parsedResponse });
            // GET LEADERBOARD DATA
            return superagent.get(`${__API_URL__}${routes.PROFILE_ROUTE}`) // eslint-disable-line
              .then(response => {
                const parsedResponse = JSON.parse(response.text);
                const parsedData = parsedResponse.data;
                this.setState({ leaderboard: parsedData });
                // GET HIGHSCORES
                return superagent.get(`${__API_URL__}${routes.HIGHSCORES}`) // eslint-disable-line
                  .then(response => {
                    const parsedResponse = JSON.parse(response.text);
                    const parsedData = parsedResponse;
                    this.setState({ levelData: parsedData });
                  });
              });
          })
          .catch(error => {
            sessionStorage.removeItem('X-GEO-JUMPER-TOKEN');
            this.props.history.push('/');
          });

      // ANONOMYOUS USERS
      } else {
        // GET LEADERBOARD DATA
        return superagent.get(`${__API_URL__}${routes.PROFILE_ROUTE}`) // eslint-disable-line
          .then(response => {
            const parsedResponse = JSON.parse(response.text);
            const parsedData = parsedResponse.data;
            this.setState({ leaderboard: parsedData });
            // GET HIGHSCORES
            return superagent.get(`${__API_URL__}${routes.HIGHSCORES}`) // eslint-disable-line
              .then(response => {
                const parsedResponse = JSON.parse(response.text);
                const parsedData = parsedResponse;
                this.setState({ levelData: parsedData });
              });
          });
      }
    }
  }

  render(){
    return (
      <div id ="landing">
        <h1 className='title'> Geo-Jumper </h1>
        <FindGame
          name={this.state.name}
          history={this.props.history}
          toggleMatchmakingOK={this.props.toggleMatchmakingOK}
        />
        <Welcome name={this.state.name} />
        <Leaderboard
          leaderboard={this.state.leaderboard}
          levelData={this.state.levelData}/>
        <Instructions/>
      </div>
    );
  }
}

export default Landing;
