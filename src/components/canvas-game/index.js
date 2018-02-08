import React from 'react';
import levels from './game-entities/levels';
import { renderLevel } from './game-entities/render';
import { update } from './game-entities/render';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';

let canvas = document.getElementById('geo-jumper');
let forceReactUpdate = null;
let endGame = false;

class Game extends React.Component {
  constructor(props) {
    super(props);

    let incomingState = null;
    try {
      incomingState = this.props.location.state;
    } catch (error) {
      console.log('couldn\'t retrieve state');
    }
    
    this.state = {
      ...incomingState, // mattL - incoming state determines game level
    };

    forceReactUpdate = () => { this.forceUpdate(); } ;
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
    endGame = false;
    canvas.style.display = 'none';
  }
  
  render() {
    return(
      <div>
        {endGame ? location.replace('/') : console.log(false)} {/* TODO: change url to highscores */}
      </div>
    );
  }
}

export default Game;

export let loadResults = () => {
  endGame = true;
  forceReactUpdate();
};