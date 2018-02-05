import React from 'react';
import {Link} from 'react-router-dom';
import ReactDOM from 'react-dom';


class Dashboard extends React.Component {
  render() {
    return (
      <div id="dashboard">
        <h1>Geo-Jumper</h1>
        <div id ="games">
          <button onClick={() => {
            return <Link to="/jumper" component={GameLoader}/>;
          }}>
      Demo
          </button>
          <button onClick={() => {
            return <Link to="/jumper" component={GameLoader}/>;
          }}>
      Join Game
          </button>

        </div>

        <div id = "leaderboard"></div>

        <div id = "logout">
          <button>
            Logout
          </button>

        </div>

      </div>
    );
  }
}

export default Dashboard;