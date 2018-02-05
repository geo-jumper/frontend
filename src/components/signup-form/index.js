import React from 'react';

class SignUpForm extends React.Component {
    
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
        <input
          name='email'
          placeholder='email'
          type='text'
          value={this.state.email}
          onChange={this.handleChange}
        />
        <input
          name='password'
          placeholder='password'
          type='text'
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button type='submit'>Sign up</button>
      </form>
      
    );
  }
}

export default SignUpForm;