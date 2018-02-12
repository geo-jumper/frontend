import './_home.scss';
import React from 'react';
import {Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
import SignUpForm from '../signup-form';
import LogInForm from '../login-form';
import ContinueAnonymously from '../continue-anonymously';

class Home extends React.Component {
  componentWillMount() {
    const token = sessionStorage.getItem('X-GEO-JUMPER-TOKEN');
    const { history, toggleLandingOK } = this.props;
    if (token) {
      toggleLandingOK();
      history.push('/landing');
    }
  }
  render() {
    return (
      <div id="home">
        <h1 className='title'>Geo-Jumper</h1>
        <ContinueAnonymously
          history={this.props.history}
          toggleLandingOK={this.props.toggleLandingOK}
        />
        <div id='login-signup'>
          <SignUpForm history={this.props.history}
            toggleLandingOK={this.props.toggleLandingOK}
          />  
          <LogInForm
            history={this.props.history}
            toggleLandingOK={this.props.toggleLandingOK}
          />  
        </div> 
      </div>
    );
  }
}

export default Home;
