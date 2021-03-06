import './_matchmaking.scss';
import React from 'react';
import { getSocket } from '../../utils/socketIO';
import { updateSocket } from '../canvas-game/game-entities/setup';

class Matchmaking extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searching: true,
      socket: null,
    };

  }

  componentWillMount() {
    const OK = this.props.getMatchmakingOK();
    if (!OK) {
      this.props.history.push('/');
    }

    this.setState({ socket: getSocket() });
  }

  componentDidMount() {
    const { history, toggleCountdownOK } = this.props;

    if (this.state.socket) {
      const username = location.search.split('username=')[1];
      this.state.socket.emit('set-username', username);
      this.state.socket.on('match-found', () => {
        toggleCountdownOK();
        this.setState({ searching: false });
        updateSocket(getSocket);
        history.push('/countdown');
      });
    }
  }

  render() {

    let isSearching = this.state.searching ?
      <p className='searching'>1/2 Players Found ...</p> :
      <p className='searching'>2/2 Players Found ...</p>;


    return (
      <div id = "matchmaking">
        <h1> Matchmaking </h1>
        <div id='loader-wrapper'>
          <div className = "loader"></div>
          {isSearching}
        </div>
      </div>
    );
  }
}

export default Matchmaking;
