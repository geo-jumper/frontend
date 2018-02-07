import React, { Component } from 'react';

class Countdown extends Component {
  constructor(props){
    super(props);
    this.state = {
      timer: 5,
    };
  }

  componentDidUpdate() {
    const { history } = this.props;

    if (this.state.timer === 0) {
      clearInterval(this.countdown);
      history.push('/game');
    }
  }

  componentWillMount() {
    const OK = this.props.getCountdownOK();
    if (!OK) {
      this.props.history.push('/');
    } else {
      this.countdown = setInterval(() => {
        let timer = this.state.timer;
        console.log(timer);

        timer--;
        this.setState({ timer });
      }, 1000);
    }
  }

  render(){
    return (
      <div id = "countdown">
        <h1>{this.state.timer}</h1>
      </div>
    );
  }
}


export default Countdown;
