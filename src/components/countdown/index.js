import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Countdown extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      timer: 5,
    };
  }

  componentDidMount() {
    this.countdown = setInterval(() => {
      let timer = this.state.timer;
      console.log(timer);

      timer--;
      this.setState({ timer });
    },1000);
  }

  render(){
    const { history } = this.props;

    if (this.state.timer === 0) {
      clearInterval(this.countdown);
      history.push('/game');
    }
    return (
      <div id = "countdown">
        <h1>{this.state.timer}</h1>
      </div>
    );
  }
}

const CountdownWithRouter = withRouter(Countdown);

export default CountdownWithRouter;
