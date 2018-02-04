import React, { Component } from 'react';

class ChatInterface extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState({
      message: '',
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='message'
            value={this.state.message}
            onChange={this.handleChange}
          />
          <button type='submit'>SEND</button>
        </form>
      </div>
    );
  }
}

export default ChatInterface;
