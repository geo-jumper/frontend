import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import './style/main.scss';
const container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render(<App />, container);


import {Howl, Howler} from 'howler';

// Setup the new Howl.
const sound = new Howl({
  src: ['../src/sound/Komiku_-_70_-_Ending (2).mp3'],
});

// Play the sound.
sound.play();

// Change global volume.
Howler.volume(0.5);