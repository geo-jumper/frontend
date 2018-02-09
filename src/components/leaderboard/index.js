import React, { Component } from 'react';

class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leaderboard: [],
      leaderboardToShow: 'overall',
    };

    this.menuClicked = this.menuClicked.bind(this);
  }

  menuClicked(event) {
    if (event.target.value === 'overall') {
      this.setState({ leaderboardToShow: 'overall' });
    }
    if (event.target.value === 'one') {
      this.setState({ leaderboardToShow: 'one' });
    }
    if (event.target.value === 'two') {
      this.setState({ leaderboardToShow: 'two' });
    }
    if (event.target.value === 'three') {
      this.setState({ leaderboardToShow: 'three' });
    }
    if (event.target.value === 'four') {
      this.setState({ leaderboardToShow: 'four' });
    }
    if (event.target.value === 'five') {
      this.setState({ leaderboardToShow: 'five' });
    }
  }

  render() {
    let overall;
    let one;
    let two;
    let three;
    let four;
    let five;

    if (this.props.leaderboard) {
      let top10 = this.props.leaderboard.slice(0, 10);
      overall = (
        <ul>
          {
            top10.map((player, index) => {
              return <li key={player._id}>{index + 1}{ player.name }</li>;
            })
          }
        </ul>
      );
    }

    let renderedScores = null;

    {
      if (this.state.leaderboardToShow === 'overall') {
        renderedScores = overall;
      }
      if (this.state.leaderboardToShow === 'one') {
        renderedScores = one;
      }
      if (this.state.leaderboardToShow === 'two') {
        renderedScores = two;
      }
      if (this.state.leaderboardToShow === 'three') {
        renderedScores = three;
      }
      if (this.state.leaderboardToShow === 'four') {
        renderedScores = four;
      }
      if (this.state.leaderboardToShow === 'five') {
        renderedScores = five;
      }
    }

    return (
      <div id = "leaderboard">
        <h3>HIGH SCORES</h3>
        <div id = 'leaderboard-data'>
          <select onChange={this.menuClicked}>
            <option value='overall'>Overall</option>
            <option value='one'>1 - Ice</option>
            <option value='two'>2 - Lava</option>
            <option value='three'>3 - Clouds</option>
            <option value='four'>4 - Rainbow</option>
            <option value='five'>5 - Underwater</option>
          </select>
        </div>
        { renderedScores }
      </div>
    );
  }
}

export default Leaderboard;
