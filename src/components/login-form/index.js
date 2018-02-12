import React from 'react';
import validator from 'validator';
import superagent from 'superagent';
import * as routes from '../../routes';

class LogInForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password:  '',
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

    if (this.state.username === '' || this.state.password === '') {
      alert('enter username and password');
      return;
    } else {
      return superagent.get(`${__API_URL__}${routes.LOGIN_ROUTE}`) // eslint-disable-line
        .auth(this.state.username, this.state.password)
        .then(response => {
          toggleLandingOK();
          sessionStorage.setItem('X-GEO-JUMPER-TOKEN', response.text);
          history.push('/landing');
        })
        .catch(error => {
          if (error.toString().includes('Not Found')) {
            alert('Invalid username or password');
          }
        });
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
          name='password'
          placeholder='password'
          type='password'
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
