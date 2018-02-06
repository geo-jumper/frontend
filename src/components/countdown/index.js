import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';

class Countdown extends Component {
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

  componentDidUpdate() {
    const { history } = this.props;

  render(){
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