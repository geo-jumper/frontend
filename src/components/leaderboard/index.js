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


    if (this.props.levelData) {
      let theLevelData = this.props.levelData.slice(0, 20);
      console.log('===>', this.props.levelData);
      theLevelData.forEach(data => {
        if (data.level === 0) {
          const compare = (a, b) => {
            if (a.score > b.score) {
              return -1;
            }
            if (a.score < b.score) {
              return 1;
            }
            return 0;
          };

          data.scores.sort(compare);
          overall = (
            <ul>
              {
                data.scores.map((score, index) => {
                  return <li key={score._id}>{index + 1} {score.username} {score.score}</li>;
                })
              }
            </ul>
          );
        }
        if (data.level === 1) {
          const compare = (a, b) => {
            if (a.score > b.score) {
              return -1;
            }
            if (a.score < b.score) {
              return 1;
            }
            return 0;
          };

          data.scores.sort(compare);
          one = (
            <ul>
              {
                data.scores.map((score, index) => {
                  return <li key={score._id}>{index + 1} {score.username} {score.score}</li>;
                })
              }
            </ul>
          );
        }
        if (data.level === 2) {
          const compare = (a, b) => {
            if (a.score > b.score) {
              return -1;
            }
            if (a.score < b.score) {
              return 1;
            }
            return 0;
          };

          data.scores.sort(compare);
          two = (
            <ul>
              {
                data.scores.map((score, index) => {
                  return <li key={score._id}>{index + 1} {score.username} {score.score}</li>;
                })
              }
            </ul>
          );
        }
        if (data.level === 3) {
          const compare = (a, b) => {
            if (a.score > b.score) {
              return -1;
            }
            if (a.score < b.score) {
              return 1;
            }
            return 0;
          };

          data.scores.sort(compare);
          three = (
            <ul>
              {
                data.scores.map((score, index) => {
                  return <li key={score._id}>{index + 1} {score.username} {score.score}</li>;
                })
              }
            </ul>
          );
        }
        if (data.level === 4) {
          const compare = (a, b) => {
            if (a.score > b.score) {
              return -1;
            }
            if (a.score < b.score) {
              return 1;
            }
            return 0;
          };

          data.scores.sort(compare);
          four = (
            <ul>
              {
                data.scores.map((score, index) => {
                  return <li key={score._id}>{index + 1} {score.username} {score.score}</li>;
                })
              }
            </ul>
          );
        }
        if (data.level === 5) {
          const compare = (a, b) => {
            if (a.score > b.score) {
              return -1;
            }
            if (a.score < b.score) {
              return 1;
            }
            return 0;
          };

          data.scores.sort(compare);
          five = (
            <ul>
              {
                data.scores.map((score, index) => {
                  return <li key={score._id}>{index + 1} {score.username} {score.score}</li>;
                })
              }
            </ul>
          );
        }
      });
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
      <div>
        <h3>HIGH SCORES</h3>
        <select onChange={this.menuClicked}>
          <option value='overall'>Overall</option>
          <option value='one'>1 - Ice</option>
          <option value='two'>2 - Lava</option>
          <option value='three'>3 - Clouds</option>
          <option value='four'>4 - Rainbow</option>
          <option value='five'>5 - Underwater</option>
        </select>
        { renderedScores }
      </div>
    );
  }
}

export default Leaderboard;
