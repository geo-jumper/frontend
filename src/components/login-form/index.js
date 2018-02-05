import React from 'react';

class LogInForm extends React.Component {
    
  constructor(props){
    super(props);

    this.state = {};


  }
  handleChange(event) {
    let {name, value} = event.target;
    this.setState({ [name]: value }); 
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState();
  }
  

  render() {
    return(
      <form> 
        <input
          name='username'
          placeholder='username'
          type='text'
          value={this.state.username}
          onChange={this.handleChange}
        />
        <br />
        <input
          name='password'
          placeholder='password'
          type='text'
          value={this.state.password}
          onChange={this.handleChange}
        />
        <br />
        <button type='submit'>Log in</button>
      </form>
      
    );
  }
}

export default LogInForm;