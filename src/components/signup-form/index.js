import React from 'react';
import validator from 'validator';
import superagent from 'superagent';
import * as routes from '../../routes';
import * as cookie from '../../lib/cookie';
import { log } from 'util';
import {Redirect} from 'react-router-dom';
import { HOME_ROUTE } from '../../routes';



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
    const {history} = this.props;
    let account = {};
    account.username = this.state.username;
    account.password = this.state.password;
    account.email = this. state.email;
    // this.setState();

    return superagent.post(`${__API_URL__}${routes.SIGNUP_ROUTE}`)
      .send(account)
      .then(response => {
        console.log(response);
        sessionStorage.setItem('X-GEO_JUMPER_TOKEN', response.text);
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