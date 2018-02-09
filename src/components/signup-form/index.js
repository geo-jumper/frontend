import React from 'react';
import validator from 'validator';
import superagent from 'superagent';
import * as routes from '../../routes';

class SignUpForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let {name, value} = event.target;

    this.setState({ [name]: value });
  }

  handleSubmit(event){
    event.preventDefault();

    const { history, toggleLandingOK } = this.props;

    return superagent.post(`${routes.API_ROUTE}${routes.SIGNUP_ROUTE}`)
      .send(this.state)
      .then(response => {
        toggleLandingOK();
        sessionStorage.setItem('X-GEO-JUMPER-TOKEN', response.text);
        history.push('/landing');
      });
  }



  handleValidation(name, value) {
    if(this.props.type === 'login')
      return null;

    switch(name) {
      case 'username':
        if(value.length < 6)
          return 'Your name must be at least 6 characters long';
        return null;
      case 'email':
        if(!validator.isEmail(value))
          return 'You must provide a valid email';
        return null;
      case 'password':
        if(value.length < 8)
          return 'Your password must be at least 8 characters long';
        return null;
      default:
        return null;
    }
  }


  render() {

    return(
      <form onSubmit={this.handleSubmit}>
        <input
          name='username'
          placeholder='username'
          type='text'
          value={this.state.username}
          onChange={this.handleChange}
        />
        <br />
        <input
          name='email'
          placeholder='email'
          type='text'
          value={this.state.email}
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
        <button type='submit'>Sign up</button>
      </form>

    );
  }
}

export default SignUpForm;
