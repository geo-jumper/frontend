import React from 'react';
import update from './game-entities/render';
import { BrowserRouter, Route, Link } from 'react-router-dom';

let canvas = document.getElementById('geo-jumper');


class Game extends React.Component {
  componentDidMount() {
    update();
    canvas.style.display = 'block';
  }

  componentWillUnmount() {
    canvas.style.display = 'none';
  }
  
  render() {
    return(
      <BrowserRouter>
        <Link to='/'> Home </Link>
      
      </BrowserRouter>
    );
  }
}

export default Game;