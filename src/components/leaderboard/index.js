import React, { Component } from 'react';

class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leaderboard: [],
    };
  }

  render() {
    let leaderboard;
    if (this.props.leaderboard) {
      leaderboard = (
        <ul>
          {
            this.props.leaderboard.map(player => {
              return <li key={player._id}>{ player.name }</li>;
            })
          }
        </ul>
      );
    }
    return (
      <div>
        { leaderboard }
      </div>
    );
  }
}

export default Leaderboard;
