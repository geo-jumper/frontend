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

    return superagent.get(`${routes.API_ROUTE}${routes.LOGIN_ROUTE}`)
      .auth(this.state.username, this.state.password)
      .then(response => {
        toggleLandingOK();
        sessionStorage.setItem('X-GEO-JUMPER-TOKEN', response.text);
        history.push('/landing');
      });
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
