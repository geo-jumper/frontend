import React from 'react';
// import { updateSocket } from '../canvas-game/game-entities/setup';
import { getSocket } from '../../utils/socketIO';

class Matchmaking extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searching: true,
      socket: null,
    };

  }

  componentWillMount() {
    this.setState({ socket: getSocket() });
  }

  componentDidMount() {
    const { history } = this.props;

    if (this.state.socket) {
      this.state.socket.on('match-found', () => {
        this.setState({ searching: false });
        // updateSocket(this.state.socket);
        history.push('/countdown');
      });
    }
  }

  render() {

    let isSearching = this.state.searching ?
      <p>1/2 Players found ...</p> :
      <p>2/2 Players found ...</p>;


    return (
      <div id = "matchmaking">
        <h1> Matchmaking </h1>
        {isSearching}
      </div>
    );
  }
}

export default Matchmaking;
