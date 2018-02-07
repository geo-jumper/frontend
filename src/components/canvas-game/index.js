import React from 'react';
import levels from './game-entities/levels';
import { renderLevel } from './game-entities/render';
import { update } from './game-entities/render';
import { BrowserRouter, Route, Link } from 'react-router-dom';

let canvas = document.getElementById('geo-jumper');

class Game extends React.Component {
  constructor(props) {
    super(props);
    
    let incomingState = null;
    try {
      let incomingState = this.props.location.state;
    } catch (error) {
      console.log('couldn\'t retrieve state');
    }
    this.state = {
      ...incomingState,
    };
  }

  componentDidMount() {
    canvas.style.display = 'block';
    try {
      renderLevel(levels[this.state.level]);
    } catch (error) {
      renderLevel(levels['default']);
    }
    update();
  }

  componentWillUnmount() {
    canvas.style.display = 'none';
  }
  
  render() {
    return(
      <BrowserRouter>

      </BrowserRouter>
    );
  }
}

export default Game;