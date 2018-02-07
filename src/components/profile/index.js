import React from 'react';
import * as routes from '../../routes';
import superagent from 'superagent';


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      wins: '',
    };
  }

  
  componentWillMount() {
    const token = sessionStorage.getItem('X-GEO_JUMPER_TOKEN');
    return superagent.get(`${__API_URL__}${routes.PROFILE_ROUTE}/me`)
      .set('Authorization',`Bearer ${token}`)
      .then(response => {
        console.log(response);
      });
  }   

  render(){
    return (
      <div id ="profiles">
        <h1> Profile Data: </h1>
        
      </div>
    );
  }
}



export default Profile;
