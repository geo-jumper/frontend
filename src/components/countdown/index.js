import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';

class Countdown extends Component {
  constructor(props){
    super(props);
    this.state = {
      timer: 5,
    };
  }

  componentDidUpdate() {
    const { history } = this.props;
  }

  componentWillMount() {
    const OK = this.props.getCountdownOK();
    if (!OK) {
      this.props.history.push('/');
    } else {
      this.countdown = setInterval(() => {
        let timer = this.state.timer;

        timer--;
        this.setState({ timer });
      }, 1000);
    }
  }

  render() {
    return (
      <div id = "countdown">

        {this.state.timer === 0 ?
          <Redirect to={{
            pathname: '/game',
            state: { level: 1 },
          }}/>
          : undefined}

        <h1>{this.state.timer}</h1>
      </div>
    );
  }
}

export default Countdown;
