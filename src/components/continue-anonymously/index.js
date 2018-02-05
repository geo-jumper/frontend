import React from 'react';
import {withRouter} from 'react-router-dom';

const ContinueAnonymously = withRouter(({history}) => {
  return(
    <button onClick = {() =>{
      history.push('/landing');
    }}>
      ContinueAnonymously
    </button>

  );
});

export default ContinueAnonymously; 
