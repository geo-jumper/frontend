import React from 'react';
import { getSocket } from '../../utils/socketIO';
import { withRouter } from 'react-router';

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

  render() {
    const { history } = this.props;

    this.state.socket.on('match-found', () => {
      this.setState({ searching: false });
      history.push('/countdown');
    });

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

const MatchmakingWithRouter = withRouter(Matchmaking);

export default MatchmakingWithRouter;
