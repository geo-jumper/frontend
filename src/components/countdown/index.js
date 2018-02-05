import React, { Component } from 'react';

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
    if (this.state.timer === 0) {
      clearInterval(this.countdown);
    }
    return (
      <div id = "countdown">
        {this.state.timer}
      </div>
    );
  }
}
export default Countdown;