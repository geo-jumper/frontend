import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import './style/main.scss';
const container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render(<App />, container);